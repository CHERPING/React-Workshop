import ImageData from "./ImageData"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";


const ImageSlider = () => {
    const [current, setCurrent] = useState(0)
    const length = ImageData.length



    const prevSlide = () => {
        current === 0 ? setCurrent(length - 1) : setCurrent(current - 1)  // ลดค่า state current ไปทีละ 1 || รูปแบบโค้ดนี้คือการลดรูปของ if else
    }
    const nextSlide = () => {
        current === length - 1 ? setCurrent(0) : setCurrent(current + 1) // เพิ่มค่า state current ไปทีละ 1 || รูปแบบโค้ดนี้คือการลดรูปของ if else
    }

    return (
        <section className="slider">
            <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide} />
            <AiOutlineArrowRight className="rightArrow" onClick={nextSlide} />
            {ImageData.map((data, index) => { // วน Loop รูปภาพ
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current &&
                            (
                                <div>
                                    <img src={data.image} alt={data.title} className="image" />
                                    <p>{data.title}</p>
                                </div>
                            )}
                    </div>
                )
            })}

        </section>
    )
}
export default ImageSlider