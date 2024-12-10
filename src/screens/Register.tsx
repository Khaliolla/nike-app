import React from 'react'
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Logo from '../../assets/icons/Logo'
import { StyleSheet } from 'react-native'
import LineIcon from '../../assets/icons/Line'
import { useForm, Controller } from 'react-hook-form'
import auth from '@react-native-firebase/auth';
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setUser } from './slices/userSlice'

type FormData = {
  Email: string;
  Password: string;
};


export const Register = ({navigation}: {navigation: any}) => {

  const dispatch = useAppDispatch()

  const {
    handleSubmit,
    formState: { errors, isValid },
    control
  } = useForm<FormData>({
    mode:"onBlur"
  });

  const regist = async (data: FormData) => {

    const {Email, Password} = data

    auth().createUserWithEmailAndPassword(Email, Password).then((res) => {
      const user = res.user
      dispatch(setUser({
        email: user.email || '',
        id: user.uid,
        token: ''
      }))
      navigation.navigate("Home")
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <View>
      <StatusBar barStyle={'dark-content'} backgroundColor={"#F6F6F6"}/>
      <View style={styles.logoWrapper} >
        <Logo style={styles.logo} />
      </View>
     
      <View style={styles.inputWrapper} >
        <Text style={styles.text} >Create Account</Text>
        
        <Controller
        control={control}
        rules={ { required: "Email обязателен", pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Некорректный формат email" 
        }  }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.email}
            placeholderTextColor={"#000"}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Email"
      />
       <Controller
        control={control}
        rules={ {  required: "Пароль обязателен", minLength: {
          value: 6,
          message: "Пароль должен содержать не менее 6 символов"
        } }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.password}
            secureTextEntry={true}
            placeholderTextColor={"#000"}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Password"
      />
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit(regist)} > <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20, color: '#fff' }} >Create Account</Text> </TouchableOpacity>

        <LineIcon style={styles.line} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 100}} >
          <Text style={styles.create} >Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()} >
              <Text style={{color:'#0000EE',fontFamily: "Roboto-Regular",  fontSize: 18 }} >
                Log In
              </Text>
          </TouchableOpacity>
        </View>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
      marginTop: 40,
      color: "#000000",
      backgroundColor: "#00000"
    },

    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff'
    },

    logoWrapper: {
      backgroundColor: "#f6f6f6",
      width: "100%",
      height: 300,
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    inputWrapper: {
      width: '100%',
      backgroundColor: "#fff",
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },

    text: {
      fontFamily: "Roboto-Black",
      fontSize: 40,
      color: '#000000',
      marginTop: 36,
      marginBottom: 36
    },

    name: {
      width: 360,
      height: 50,
      backgroundColor: "#f6f6f6",
      borderRadius: 25,
      paddingLeft: 15,
      marginBottom: 15
    },

    email: {
      width: 360,
      height: 50,
      fontSize: 19,
      backgroundColor: "#f6f6f6",
      borderRadius: 25,
      paddingLeft: 15
    },

    password: {
      width: 360,
      height: 50,
      fontSize: 19,
      backgroundColor: "#f6f6f6",
      borderRadius: 25,
      marginTop: 15,
      paddingLeft: 15
    },

    button: {
      width: 215,
      height: 50,
      backgroundColor: "#000",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderRadius: 25,
      marginBottom: 75
    },

    or: {
      marginBottom: 30
    },

    create: {
      fontFamily: "Roboto-Regular",
      fontSize: 18,
      marginBottom: 150
    },

    line: {
        marginBottom: 75
    }
})