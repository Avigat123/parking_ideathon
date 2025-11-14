import { useState } from 'react'
import MapView from './page/MapView'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <div>
      <h2>Smart Parking Map</h2>
      <MapView />
    </div>
    <Footer/>
    </>
  )
}

export default App
