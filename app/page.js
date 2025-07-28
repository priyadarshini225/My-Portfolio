'use client'
import Navbar from "./components/Navbar";
import HeaderPart from "./components/HeaderPart";
import About from "./components/About";
import '@/app/globals.css';
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderPart />
      <About />
      <Skills/>
      <Education/>
      <Projects/>
      <Interests/>
      <Contact/>
    </>
  )
}
