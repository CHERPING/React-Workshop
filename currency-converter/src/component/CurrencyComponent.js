import './CurrencyComponent.css'
const CurrencyComponent = (props) => { // เรียก props มาใช้งานเพื่อทำการวน loop
    const { currencyChoice, selectCurrency, changeCurrency, amount, onChangeAmount } = props // การ props เพื่อนำ currencyChoice , selectCurrency,changeCurrency,amount ,onChangeAmount จาก App.js มาใช้งานใน CurrencyComponent


    return (
        <div className="currency">
            <select value={selectCurrency} onChange={changeCurrency}>
                {currencyChoice.map((choice => // การ map เพื่อนำ สกุลเงินให้มาแสดงใน option
                    <option key={choice} value={choice}>{choice}</option>
                ))}
            </select>
            <input type="number"
                value={amount}
                onChange={onChangeAmount} />
        </div>
    )

}

export default CurrencyComponent