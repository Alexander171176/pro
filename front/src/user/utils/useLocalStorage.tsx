import { useState, useEffect } from 'react';

type StorageValue = string | number | boolean | null; // Тип значения, хранимого в localStorage

const getStorageValue = (key: string, defaultValue: StorageValue): StorageValue => {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : defaultValue;
  return initial;
};

export const useLocalStorage = (key: string, defaultValue: StorageValue): [StorageValue, (value: StorageValue) => void] => {
  const [value, setValue] = useState<StorageValue>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
