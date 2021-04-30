import React from 'react';
import './styles/typewriter.css';
import {AnimateKeywords } from "./components/UI/AnimateKeywords";
function App() {
  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden mx-2 ">
      <nav className="h-14 flex items-center ">
        <div className="page-component-wrapper w-full flex justify-between items-center">
          <div className="font-semibold font-mono text-2xl primary-text-color">pawann</div>
          <div className=" w-1/2 lg:w-4/12 flex justify-around primary-text-color">
            <div className="link">About</div>
            <div className="link">Works</div>
            <div className="link">Contact</div>
          </div>
        </div>
      </nav>
      <header className="page-component-wrapper">
        <div className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">Hi, my name is <span className="primary-text-color"> Pawan Bhatta</span> </div>
        <div className="text-gray-500 max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium ">I'm a full stack software engineer. I love building <span className="font-mono text-gray-900 font-bold "> web applications</span>  that can impact lives.</div>
        <div className="text-gray-500 max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">My favorite technologies rn are:<AnimateKeywords names={["typescript","react","tailwind", "postgres","node.js", "c++", "kubernetes", "docker"] }/>
     </div>
        <button className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-10 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 shadow-2xl"> Contact Me</button>
      </header>
      <section className="page-component-wrapper">
     
     </section>
    </div>
  );
}

export default App;
