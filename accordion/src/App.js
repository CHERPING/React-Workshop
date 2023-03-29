import { useState } from 'react';
import './App.css';
import SingleContent from './components/SingleContent';
import data from './data/data';

function App() {
  const [content,setContent] = useState(data)
  return (
    
   <main>
    <div className='container'>
         <h3>Tool Webdeveloper 2023</h3>
         <section>
            {content.map((data)=>{
              return <SingleContent key={data.id} {...data}/> // prop ข้อมูลที่มาจาก data.js แต่นำไป prop ใน singlecontent.js
            })}
         </section>
    </div>
   </main>
  );
}

export default App;
