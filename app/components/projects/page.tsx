import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div>
      <div className='flex justify-center text-3xl p-5 font-bold text-white bg-[#B8001F]'>
        <h1>Projects</h1>
      </div>
      <div className='flex flex-col md:flex-row md:flex-wrap justify-center p-4 bg-[#B8001F]'>
        <div className="flex flex-col md:w-1/3">
          <div className="card bg-[#E2E2B6] w-[20rem] m-4 h-[30rem] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure>
              <img src="/Project-Pic/Resume-Builder.png" alt="Resume-Builder-Pic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Resume Builder</h2>
              <p> Builder: An interactive resume creator using TypeScript, HTML, and CSS, hosted on Vercel for quick access.</p>
              <div className="card-actions justify-end">
                <Link href="https://resume-builder-one-gilt.vercel.app/" target='_blank'>
                 <button className="btn btn-primary">Try Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-[#E2E2B6] w-[20rem] m-4 h-[30rem] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure>
              <img src="/Project-Pic/Resume.png" alt="Resume-Builder-Pic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Static Resume</h2>
              <p> A clean, polished resume designed with TypeScript, HTML, and CSS for a professional presentation.</p>
              <div className="card-actions justify-end">
                <Link href="https://static-resume-5u56cbuhl-muhammad-zakis-projects-bb04dd25.vercel.app/" target='_blank'>
                  <button className="btn btn-primary">Try Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-1/3">
          <div className="card bg-[#E2E2B6] w-[20rem] m-4 h-[30rem] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure>
              <img src="/Project-Pic/calculator.png" alt="Calculator-Pic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Calculator</h2>
              <p> A basic calculator created using HTML, CSS, and TypeScript, ideal for quick and easy calculations.</p>
              <div className="card-actions justify-end">
               <Link href="https://calculator-web-based.vercel.app/" target='_blank'>
                 <button className="btn btn-primary">
                   Try Now
                 </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-[#E2E2B6] w-[20rem] m-4 h-[30rem] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure>
              <img src="/Project-Pic/Currancy Convertor.png" alt="Currancy-Convertor-pic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Currency Converter</h2>
              <p> A simple converter made with HTML, CSS, and TypeScript to quickly exchange rates between currencies.</p>
              <div className="card-actions justify-end">
                <Link href='https://currency-convert-nu.vercel.app/' target='_blank'>
                  <button className="btn btn-primary">
                   Try Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-1/3">
          <div className="card bg-[#E2E2B6] w-[20rem] m-4 h-[30rem] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure>
              <img src="/Project-Pic/Game.png" alt="game-pic" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Adventure Game</h2>
              <p>An engaging adventure game developed entirely in TypeScript, featuring interactive challenges and quests.</p>
              <div className="card-actions justify-end">
              <Link href="https://github.com/muhammadzaki791/Adventure-game" target='_blank'>
                <button className="btn btn-primary">
                  Try Now
                </button>
              </Link>
              </div>
            </div>
          </div>

          <div className="card bg-[#E2E2B6] w-[20rem] m-4 h-[30rem] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure>
              <img src="/Project-Pic/ATM.png" alt="ATM Machine" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">ATM Machine</h2>
              <p>A virtual ATM built with TypeScript, simulating key banking functions for hands-on experience.</p>
              <div className="card-actions justify-end">
              <Link href='https://github.com/muhammadzaki791/MY-ATM' target='_blank'>
                <button className="btn btn-primary">
                  Try Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
