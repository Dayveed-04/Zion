import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './page/Home'
import Programmes from './page/Programmes'
import Offerings  from './page/Offerings'
import Memories from './page/Memories'
import Ministers from './page/Ministers'
import ScrollToTop from './components/ScrollTop'
import Background from './assets/images/background.jpg'


function App() {

  return (
    <>
    <ScrollToTop/>
     <div
        className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
    <Routes>
       <Route path="/ministers" element={<Ministers/>} />

       <Route path="/*" element={
       <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-12">

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/programmes" element={<Programmes/>} />
              <Route path="/memories" element={<Memories/>}/>
              <Route path="/offerings" element={<Offerings/>} />
            </Routes>
          </main>
          <Footer/>
        </div>  
         } />   
    </Routes>
    </div>
    </>
  )
}

export default App
