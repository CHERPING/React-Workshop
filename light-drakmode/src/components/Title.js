import { useContext } from "react" 
import Switch from "react-switch"
import { ThemeContext } from "../App"

const Title = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleSwitch = (checked) => {
        setTheme(
            theme === "Light" ? "Dark" : "Light" // ถ้าเงื่อนไขเป็นจริงจะเปลี่ยนจาก Lihgt เป็น Dark แต่ถ้าไม่เป็นจริงจะไม่เปลี่ยน
        )
    }
    return (
        <header className={theme === "Dark" ? "Dark" : "Light"}>
            <span>Mode {theme} </span>
            <Switch
                onChange={toggleSwitch}
                checked={theme === "Dark"}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#ffa500'}
            />

        </header>
    )
}

export default Title