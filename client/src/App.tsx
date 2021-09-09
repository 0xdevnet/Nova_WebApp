import DemoPage from './Components/Demo/DemoPage'
import './App.scss'
import WindowDimensions from './Hooks/WindowDimension'
import SmallViewPortWarning from './Components/Demo/SmallViewportWarning'

export default function App() {
    const {width, } = WindowDimensions()

    return (
        <section className="App">
            {width < 1000? <SmallViewPortWarning/>: <DemoPage/>}
        </section>
    )
}