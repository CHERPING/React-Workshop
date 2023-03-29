import money from './img/money.png'
import './App.css';
import CurrencyComponent from './component/CurrencyComponent';
import { useEffect, useState } from 'react';

function App() {


  const [currencyChoice, setCurrencyChoice] = useState([])

  const [fromCurrency, setFromCurrency] = useState("CAD")
  const [toCurrency, setTocurrency] = useState("THB")

  const [amount, setAmount] = useState(1)
  const [exChangRate, setExchangeRate] = useState(0)

  const [checkFromCurrency, setCheckFromCurrency] = useState(true)
  let fromAmount, toAmount

  if (checkFromCurrency) {
    fromAmount = amount
    toAmount = (amount * exChangRate).toFixed(2)
  } else {
    toAmount = amount
    fromAmount = (amount / exChangRate).toFixed(2)
  }

  useEffect(() => { //คือการดึง API มาเพื่อใช้งาน
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}` // เรียก API
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCurrencyChoice([...Object.keys(data.rates)]) // ดึงมาแต่ object ที่ ชื่อ rates แต่เอามาแค่ ตัวสกุลเงิน อย่างเดียวไม่ได้เอาค่าเงินมาด้วย
        setExchangeRate(data.rates[toCurrency]) // ดึงเอาค่าเงินมาใช้
      })

  }, [fromCurrency, toCurrency])

  const amountFromCurrency = (e) => {
    setAmount(e.target.value)
    setCheckFromCurrency(true)
  }

  const amountToCurrency = (e) => {
    setAmount(e.target.value)
    setCheckFromCurrency(false)
  }

  return (
    <div>
      <img src={money} alt="Logo" className='money-img' />
      <h1>Currency Exchange</h1>
      <div className='container'>
        <CurrencyComponent  // selectCurrency={fromCurrency} คือ CAD 
          currencyChoice={currencyChoice}
          selectCurrency={fromCurrency}
          changeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={amountFromCurrency} />
        <div className='equal'>=</div>
        <CurrencyComponent  // selectCurrency={toCurrency} คือ THB
          currencyChoice={currencyChoice}
          selectCurrency={toCurrency}
          changeCurrency={(e) => setTocurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={amountToCurrency} />
      </div>

    </div>
  );
}

export default App;
