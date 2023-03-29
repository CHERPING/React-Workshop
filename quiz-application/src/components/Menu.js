import { useContext } from "react"
import { DataContext } from "../App"

const Menu = () => {
    const { setAppState } = useContext(DataContext)
    return (
        <div className="menu">
            <h1>Example Test</h1>
            <button onClick={() => setAppState("quiz")}>Start Example</button>
        </div>

    )
}
export default Menu