import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Project from './Project'
import Gallery from './Gallery'
import Contact from './Contact'
import ProgressBar from "react-scroll-progress-bar";
import Experience from './Experience'
import Cursor from './Cursor'

function Home() {
  return (
    <>
    <Cursor></Cursor>
    <ProgressBar bgcolor="#ef1657"/>
    <Navbar></Navbar>
    <About></About>
    <Experience></Experience>
    <Project></Project>
    <Gallery></Gallery>
    <Contact></Contact>
    </>
  )
}

export default Home
