import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './page/Home'
import Ministers from './page/Ministers'
import ScrollToTop from './components/ScrollTop'
import Giving from './page/Giving'
import Events from './page/Events'
import About from './page/About'
import Visit from './page/Visit'
import MinistersList from './page/MinisterList'


function App() {

  return (
    <>
    <ScrollToTop/>
    <Routes>
       <Route path="/*" element={
       <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-12">

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/events" element={<Events/>} />
              <Route path="/about" element={<About/>}/>
              <Route path="/ministers" element={<Ministers/>} />
                 <Route path="/ministers/all" element={<MinistersList/>} />
              <Route path="/giving" element={<Giving/>} />
              <Route path="/visit" element={<Visit/>} />
            </Routes>
          </main>
          <Footer/>
        </div>  
         } />   
    </Routes>
    </>
  )
}

export default App
