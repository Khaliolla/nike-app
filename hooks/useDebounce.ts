import { useState, useEffect } from 'react';

export const useDebounce = (value:any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Очищаем таймер при изменении значения или задержки
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};