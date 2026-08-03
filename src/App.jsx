import React from "react"

import './App.css'
import './sections/Sections.css'

import Header from './components/Header.jsx'
import SectionIntro from "./sections/SectionIntro.jsx"
import Footer from "./components/Footer.jsx"
import SectionPortfolio from "./sections/SectionPortfolio.jsx"
import './i18n.js';

function App() {
  return (
    <>
      <Header />
      <div className="fade-in">
        <SectionIntro />
        <SectionPortfolio />
        <Footer />
      </div>
    </>
  )
}

export default App
