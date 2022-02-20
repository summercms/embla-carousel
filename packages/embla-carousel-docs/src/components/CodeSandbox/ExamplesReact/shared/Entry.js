import React from 'react'
import ReactDOM from 'react-dom'
import EmblaCarousel from './EmblaCarousel'
import Header from './Header'
import Footer from './Footer'
import settings from './settings'
import '../css/base.css'
import '../css/reset.css'
import '../css/header.css'
import '../css/footer.css'
import '../css/embla.css'

const slides = Array.from(Array(settings.nrOfSlides).keys())

const App = () => (
  <main>
    <Header />
    <EmblaCarousel slides={slides} />
    <Footer />
  </main>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
