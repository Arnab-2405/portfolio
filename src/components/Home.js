import React from 'react'
import style from "../stylesheets/Home.module.css"
import Navbar from './Navbar'
import About from './About'
import Project from './Project'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <About></About>
    <Project></Project>
    </>
  )
}

export default Home
