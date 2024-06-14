'use client';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './slices/StoreReducer';
import Home from './loginpage/page';
import LK from './logined/page';

export default function Main() {
  const [key, setKey] = useState<string | null>('')
  const check = (key: string | null): number => typeof key === 'string' ? key.length : 0;

  useEffect(() => {
    setKey(localStorage.getItem('key'));
  }, []);

  return (
    <Provider store={store}>
      {check(key) === 0 ? <Home /> : <LK />}
    </Provider>
  )
};