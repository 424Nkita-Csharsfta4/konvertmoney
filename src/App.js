import React, { useState } from 'react';
import { Block } from './Block';
import './App.css';

const App = () => {
  const [currency, setCurrency] = useState('RUB');
  const [value, setValue] = useState('');

  const onChangeCurrency = (cur) => {
    setCurrency(cur);
  };

  const onChangeValue = (val) => {
    setValue(val);
  };

  const convertCurrency = (value, currency) => {
    // здесь можно использовать API для получения актуальных курсов валют
    // для простоты примера будем использовать фиксированные значения
    const rates = {
      RUB: 1,
      USD: 74.39,
      EUR: 88.94,
      GBP: 102.32,
    };
    return (value / rates[currency]).toFixed(2);
  };

  return (
    <div className="app">
      <h1>Конвертер валют</h1>
      <Block
        value={value}
        currency={currency}
        onChangeValue={onChangeValue}
        onChangeCurrency={onChangeCurrency}
      />
      <div className="result">
        {value && <p>{value} {currency} = {convertCurrency(value, currency)} RUB</p>}
      </div>
    </div>
  );
};

export default App;
