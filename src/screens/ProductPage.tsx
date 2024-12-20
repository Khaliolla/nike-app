import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { MainParamList } from "../navigator/AppNavigator";
import { Carousel } from "react-native-flatlist-carousel";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setItems } from "../slices/bagSlice";
import GoBackIcon from "../../assets/icons/GoBackIcon";
import FavoritIcon from "../../assets/tabIcons/FavoritIcon";

type ProductScreenRouteProp = RouteProp<MainParamList, "Product">;

type Props = {
  route: ProductScreenRouteProp;
  navigation: any
};

type Iitem = {
  image: string;
};

const renderItem = ({ item }: { item: Iitem }) => (
  <View style={{ flex: 1 }}>
    <Image source={{ uri: item.image }} style={{ width: "100%", height: 300 }} />
  </View>
);

const ProductPage: React.FC<Props> = ({ route, navigation }) => {
  const dispatch = useAppDispatch();
  

  const sliderData = [
    { image: route.params.item.image || "/" },
    { image: route.params.item.image2 || "/" },
    { image: route.params.item.image3 || "/" },
  ];

  // Shared values for animation
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
  

    // Configuring animation values
    translateX.value = 0;
    translateY.value = -250;
    scale.value = 1;
    opacity.value = 1;

    setIsAnimating(true);

    // Анимация
    translateX.value = withTiming(150, {
      duration: 1000,
      easing: Easing.out(Easing.quad),
    });

    translateY.value = withTiming(600, {
      duration: 500,
      easing: Easing.in(Easing.quad),
    });

    scale.value = withTiming(0.2, { duration: 800 });
    opacity.value = withTiming(0, { duration: 800 });

   
    setTimeout(() => {
      dispatch(setItems(route.params.item));
      navigation.goBack()
    }, 280);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <TouchableOpacity style={{ marginLeft: 16, marginTop: 30 }} onPress={() => navigation.goBack()}>
        <GoBackIcon />
      </TouchableOpacity>
      <View style={styles.container}>
        <Carousel
          height={300}
          data={sliderData}
          renderCarouselItem={renderItem}
          keyExtractor={(item) => item.image}
          autoScrollInterval={5000}
          dotOptions={{ selectedFillColor: "#2196f3" }}
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{route.params.item.title}</Text>
        <Text style={styles.price}>{route.params.item.price} tg</Text>
        <Text style={styles.about}>
          The Nike Everyday Plus Cushioned Socks bring comfort to your workout with extra cushioning
          under the heel and forefoot and a snug, supportive arch band. Sweat-wicking power and
          breathability up top help keep your feet dry and cool to help push you through that extra
          set.
        </Text>
        <View style={styles.add}>
          <TouchableOpacity style={styles.favourite}>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontWeight: "bold",
                fontSize: 20,
                color: "#000",
              }}
            >
              Favourite{" "}
              <View style={{ justifyContent: "center", alignItems: "center", marginTop: 23 }}>
                <FavoritIcon color={"#000"} />
              </View>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={startAnimation}>
            <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20, color: "#fff" }}>
              Add to bag
            </Text>
          </TouchableOpacity>
        </View>
        {isAnimating && (
          <Animated.View style={[styles.flyItem, animatedStyle]}>
            <Image
              source={{ uri: route.params.item.image }}
              style={{ width: "100%", height: "100%", borderRadius: 15 }}
            />
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 30 },
  wrapper: { marginLeft: 24, marginTop: 30, width: 400 },
  title: { marginLeft: 4, fontSize: 24, fontFamily: "Roboto-Medium", fontWeight: "bold" },
  price: { marginTop: 16, fontSize: 19, fontFamily: "Roboto-Medium", fontWeight: "bold" },
  about: { marginLeft: 4, marginTop: 16, fontFamily: "Roboto-Light", fontSize: 20 },
  button: {
    width: 327,
    height: 50,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    borderRadius: 25,
    marginBottom: 75,
  },
  add: { marginTop: 85, justifyContent: "center", alignItems: "center" },
  favourite: {
    width: 327,
    height: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#f6f6f6",
  },
  flyItem: {
    position: "absolute",
    width: 300,
    height: 300,
    top: 0,
    left: 50,
    zIndex: 10,
  },
});

export default ProductPage;
