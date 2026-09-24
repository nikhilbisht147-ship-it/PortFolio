import './App.css'  
import Navbar from './Components/Navbar'

import Home from './Components/Home'


function App() {
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <Home/>
  
    </div>
  )
}

export default App

