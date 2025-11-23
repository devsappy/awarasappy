import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import './App.css'

function App() {
  return (
    <div className="app">
      <CustomCursor />

      <Hero />
      <Showcase />
      <Gallery />
      <CTA />

      <footer className="footer">
        <div className="footer-content">
          <p>Developed by अवारा सैपी</p>
        </div>
      </footer>
    </div>
  )
}

export default App
