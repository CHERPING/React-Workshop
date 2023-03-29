import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const Content = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <main className={theme === "Dark" ? "Dark" : "Light"}>
            <div>
                <h1>PONGPON OFFICIAL</h1>
                <p>Dark Light Mode</p>
            </div>
            <img src={theme==="Dark"?dark:light} alt="Logo" />
        </main>
    )
}
export default Content