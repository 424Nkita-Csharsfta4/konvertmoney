import React from 'react';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
    <div className="block">
        <ul className="currencies">
            {defaultCurrencies.map((cur) => (
                <li
                    onClick={() => onChangeCurrency(cur)}
                    className={currency === cur ? 'active' : ''}
                    key={cur}>
                    {cur}
                </li>
            ))}
        </ul>
        <input
            onChange={(e) => {
                if (typeof onChangeValue === 'function') {
                    onChangeValue(e.target.value)
                }
            }}
            value={value}
            type="number"
            placeholder='
      0'
        />

    </div>
);
// Компонент для конвертации валют
export const CurrencyConverter = () => {
    const [currency, setCurrency] = React.useState('RUB');
    const [value, setValue] = React.useState('0');

    const onChangeCurrency = (cur) => {
        setCurrency(cur);
    };

    const onChangeValue = (val) => {
        setValue(val);
    };

    return (
        <div>
            <Block
                value={value}
                currency={currency}
                onChangeValue={onChangeValue}
                onChangeCurrency={onChangeCurrency}
            />
            <div className="result">
                {`Курс ${currency} к RUB: ${Math.floor(Math.random() * 100)} рублей`}
            </div>
        </div>
    );
};