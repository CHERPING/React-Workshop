import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import List from './component/List';
import Alert from './component/Alert';

function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState([])

  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const [checkEditItem, setCheckEditItem] = useState(false)
  const [editId, setEditId] = useState(null)

  const submitData = (e) => {
    e.preventDefault()
    if (!name) {
      // Alert
      setAlert({ show: true, msg: 'Please enter data!!!!', type: "error" })
    }else if(checkEditItem && name){
      // Update Data  ที่ต้องการแก้ไข 
      const result  = list.map((item)=>{
        if(item.id === editId){
          return {...item,title:name} // ให้เปลี่ยน title ใหม่ตาม name ที่ส่งมาจากแบบฟอร์ม
        }
        return item // return item ออกไปใช้งาน
      })
      setList(result)
      setName('')
      setCheckEditItem(false)
      setEditId(null)
      setAlert({show:true,msg:"Success!!",type:"success"})
    }else {
      const newItem = {
        id: uuidv4(),
        title: name
      }
      setList([...list, newItem])
      setName('')
      setAlert({ show: true, msg: 'Completed ', type: "success" })
    }
    
  }

  const removeItem = (id) => {
    const result = list.filter((item) => item.id !== id)
    setList(result)
    setAlert({ show: true, msg: "Deleted!!", type: "error" })
  }

  const editItem = (id) => {
    setCheckEditItem(true)
    setEditId(id)
    const searchItem = list.find((item) => item.id === id)
    setName(searchItem.title)
  }

  return (
    <section className="container">
      <h1>TodoList App</h1>
      {alert.show && <Alert  {...alert} setAlert={setAlert} list={list} />} {/* show alert */}
      <form className='form-group' onSubmit={submitData}>
        <div className='form-control'>
          <input type="text" className='text-input' onChange={(e) => setName(e.target.value)} value={name} />
          <button type='submit' className='submit-btn'>
            {checkEditItem ? "Save" : "Add"} {/* เปลี่ยน button จาก ADD เป็น Save */}
          </button>
        </div>
      </form>
      <section className='list-container'>
        {list.map((data, index) => {
          return <List key={index} {...data} removeItem={removeItem} editItem={editItem} /> // {...data} คือการ prop data
        })}
      </section>
    </section>
  );
}

export default App;
