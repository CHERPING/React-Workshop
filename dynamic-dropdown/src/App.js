import { useState } from 'react';
import './App.css';
import DropdownComponent from './component/DropdownComponent';
import FoodComponent from './component/FoodComponent';
import Menudata from './data/MenuData'

function App() {
  const [foods, setFoods] = useState(Menudata)

  const changeFoodData = (e)=>{
    const category = e.target.value
    if(category === "เมนูทั้งหมด"){
      setFoods(Menudata) // คื่อการเรียกเอา MenuData ออกมาเพราะใน MenuData ไม่มีคำว่า "เมนูทั้งหมด"
    }else{
      const result = Menudata.filter((element)=>{
        return element.menu === category  // คือการเช็คว่า element.menu ตรงกับ category หรือไม่
      })
      setFoods(result)
    }
  }

  return (
    <div className='container'>
      <DropdownComponent changeFoodData={changeFoodData} />
      <div className='content'>
        {foods.map((data,index)=>{
          return <FoodComponent key={index} {...data}/>
        })}
      </div>
    </div>
  );
}

export default App;
