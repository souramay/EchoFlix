import React from 'react'
import { footerImg } from '../utils/constants/ImgConst'

const Footer = () => {
  return (
    <div>
      <footer className="relative footer sm:footer-horizontal bg-neutral text-neutral-content p-8">
        <aside className="flex flex-col r">
         <img
  src={footerImg}
  alt="Souramay Bhowmik"
  className="w-20 h-20 rounded-full object-cover  bg-gradient-to-br from-black via-gray-800 to-purple-900  border-2 border-white"
/>
          <p className=" font-semibold  sm:text-lg text-base ">
            Souramay Bhowmik
            <br />
            <span className="text-sm sm:text-lg">
              B.Tech Computer Science and Engineering - 2026
            </span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            {/* Twitter */}
            <a href="https://x.com/Souramay_10?t=FzUW_70rhjNEDqURg6N3cg&s=09" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/souramay" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/__souramay__?igsh=MXN3ZzJxdm5jbGpieg==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" className="fill-current">
                <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190c-41.6 0-75-33.4-75-75s33.4-75 75-75 75 33.4 75 75-33.4 75-75 75zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9S388.6 24.6 353.3 22.9C317.7 21.2 284.3 13.4 256 13.4s-61.7 7.8-97.3 9.5c-35.3 1.7-66.7 9.9-92.9 36.2S24.6 123.4 22.9 158.7C21.2 194.3 13.4 227.7 13.4 256s7.8 61.7 9.5 97.3c1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.6 1.7 69 9.5 97.3 9.5s61.7-7.8 97.3-9.5c35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.6 9.5-69 9.5-97.3s-7.8-61.7-9.5-97.3zm-48.7 288c-7.8 19.6-23.1 35-42.7 42.7-29.5 11.7-59.2 9.1-88.7 9.1s-59.2 2.6-88.7-9.1c-19.6-7.8-35-23.1-42.7-42.7-11.7-29.5-9.1-59.2-9.1-88.7s-2.6-59.2 9.1-88.7c7.8-19.6 23.1-35 42.7-42.7 29.5-11.7 59.2-9.1 88.7-9.1s59.2-2.6 88.7 9.1c19.6 7.8 35 23.1 42.7 42.7 11.7 29.5 9.1 59.2 9.1 88.7s2.6 59.2-9.1 88.7z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/souramay/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z"/>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default Footer
