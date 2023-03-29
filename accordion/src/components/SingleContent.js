import { useState } from "react"
import { AiOutlinePlus , AiOutlineMinus } from "react-icons/ai";

const SingleContent = ({ title, description }) => { // prop ข้อมูลเพื่อนำออกมาแสดงขึ่น output
    const [showContent, setShowcontent] = useState(false)
    return (
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowcontent(!showContent)}>
                {showContent ? <AiOutlineMinus /> : <AiOutlinePlus/>} {/* ถ้าเป็นจริง ? จะแสดงเครื่องหมายลบ แต่ถ้าเป็นเท็จ : จะแสดงเครื่องหมายบวก*/}
                </button> {/* !showContent คือการ not เพื่อให้เป็นตรงข้ามกับ false เพื่อทำให้ showContent ได้แสดงข้อมมูล */}
            </header>
            {showContent && <p>{description}</p>}
        </article> // การซ่อน data แล้วนำ showContent มาใช้เพื่อให้ เช็คว่า && เป็นจริง จะทำการแสดง description ออกมา เพราะฉะนั้น description จะถูกซ่อนในตอนเริ่มต้น
    )
}

export default SingleContent