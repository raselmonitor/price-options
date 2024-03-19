import './App.css'
import LiveCharts from './Component/Livecharts/LiveCharts'
import NavBar from './Component/Navbar/NavBar'
import Recharts from './Component/Recharts/Recharts'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-6xl text-center'>Vite + React</h1>
      <div className='flex flex-col justify-center items-center'>
        <Recharts></Recharts>
        <LiveCharts></LiveCharts>
      </div>
    </>
  )
}

export default App
