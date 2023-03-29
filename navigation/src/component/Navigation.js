import { Link } from "react-router-dom"
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import './Navigation.css'
import MenuData from "../MenuData";

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu) // การเปลี่ยนให้ false เป็น true จาก  "nav-menu" เป็น "nav-menu active"
    return (
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to="#" className="menu-bar">
                        <FaBars onClick={toggleMenu} />
                    </Link>
                </div>
            </div>
            <nav className={showMenu ? "nav-menu active" : "nav-menu"}> {/* ถ้า showMenu เป็นจริงจะให้แสดง "nav-menu active" แต่ถ้าไม่เป็นจริงจะแสดง "nav-menu" */}
                <ul className="nav-menu-item " onClick={toggleMenu}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bar">
                            <FaWindowClose onClick={toggleMenu} />
                        </Link>
                    </li>
                    {MenuData.map((menu, index) => {
                        return (
                            <li className="menu-text" key={index}>
                                <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link> {/* ดึงข้อมูลที่มาจาก MenuData.js */}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Navigation