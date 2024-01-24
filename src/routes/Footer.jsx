import React from 'react'
import FacebookIcon from '../assets/social-icon/facebook-icon.svg';
import instagramIcon from '../assets/social-icon/instagram-icon.svg';
import linkdenIcon from '../assets/social-icon/linkedin-icon.svg';
import twitterIcon  from '../assets/social-icon/twitter-icon.svg';
import githubIcon  from '../assets/social-icon/github-icon.svg';



const Footer = () => {
  return (

    <div className='bg-[#f4f4f4] p-5' >

        {/* first section  */}

        <div className=' flex justify-around  '>
                 {/*first column  */}
          <div className=' mt-5  '>

              <h2 className='font-bold '>Top Colleges </h2>

              <ul className='mt-2'>
                  <li> <a href='#'>M.B.A </a></li>
                  <li> <a href='#'>B.Tech/B.E </a></li>
                  <li> <a href='#'>MCA </a></li>
                  <li> <a href='#'> BCA </a></li>
                  <li> <a href='#'> M.Tech </a></li>
                  <li> <a href='#'> MA </a></li>
                  <li> <a href='#'>BA </a></li>
                  
              </ul>
          </div>
          {/*second column  */}
          <div className=' mt-5  '>

            <h2 className='font-bold '>Top Universities </h2>

            <ul className='mt-2'>
                <li> <a href='#'>Engineering </a></li>
                <li> <a href='#'>Management </a></li>
                <li> <a href='#'>Medical </a></li>
                <li> <a href='#'> Law </a></li>
                <li> <a href='#'> Commerce </a></li>
                <li> <a href='#'> science </a></li>
                <li> <a href='#'>Arts </a></li>
                
            </ul>
          </div>

          {/*third column  */}
          <div className=' mt-5  '>
           <h2 className='font-bold '>Top Exams </h2>

           <ul className='mt-2'>
              <li> <a href='#'>CAT </a></li>
              <li> <a href='#'>GATE </a></li>
              <li> <a href='#'>Jee Main </a></li>
              <li> <a href='#'> NEET </a></li>
              <li> <a href='#'> XAt </a></li>
              <li> <a href='#'> CLAT</a></li>
              <li> <a href='#'>MAT </a></li>
            </ul>
          </div>
          {/*fourth column  */}
          <div className=' mt-5  '>
            <h2 className='font-bold '> Board Exams  </h2>

              <ul className='mt-2'>
                  <li> <a href='#'>CBSE Class 12  </a></li>
                  <li> <a href='#'>CBSE Class 12th result </a></li>
                  <li> <a href='#'>CBSE Class 12 th syllabus </a></li>
                  <li> <a href='#'> CBSE Class 12th exam date  </a></li>
                  <li> <a href='#'> CBSE Class 10   </a></li>
                  <li> <a href='#'> CBSE Class 10th result </a></li>
                  <li> <a href='#'>CBSE Class 10th syllabus</a></li>
                  
              </ul>
           </div>
          {/*fifth column  */}
          <div className=' mt-5  '>
            <h2 className='font-bold '> Top States </h2>

            <ul className='mt-2'>
              <li> <a href='#'> Maharastra  </a></li>
              <li> <a href='#'> UttarPradesh </a></li>
              <li> <a href='#'> Tamil Nadu </a></li>
              <li> <a href='#'>Karnataka </a></li>
              <li> <a href='#'> West Bengal </a></li>
              <li> <a href='#'> Kerala  </a></li>
           </ul>
          </div>
        </div>

      {/* seecond section  */}
        <div className='w-full flex flex-col justify-center items-center mt-10 mb-10'>
          <div className="w-full mt-5 h-0.5 bg-black opacity-25 "> </div>   

          <div className='flex flex-col items-center mt-10 '>

            <div className=' text-black opacity-60 font-bold'>
              Contact With Us 
            </div>

            <div className='flex flex-row space-x-4 mt-2 pb-10'>
             <a href='https://www.facebook.com/'><img src={FacebookIcon} className='hover:cursor-pointer' alt="Facebook"/></a>
             <a href='https://www.instagram.com/accounts/login/'><img src={instagramIcon} className='hover:cursor-pointer' alt="Instagram"/></a>
             <a href='https://in.linkedin.com/'><img src={linkdenIcon} width="25px" height="25px" className='hover:cursor-pointer' alt="LinkedIn"/></a>
             <a href='https://twitter.com/i/flow/login'> <img src={twitterIcon} className='hover:cursor-pointer' alt="Twitter"/></a>
             <a href='https://github.com/login'><img src={githubIcon} className='hover:cursor-pointer' alt="GitHub"/></a>

            </div>

          </div>

          <div className="w-full h-0.5 bg-black opacity-25 "> </div>   

          <div>
           © 2024 MY COLLEGE  Web Pvt. Ltd. All Rights Reserved
          </div>

        </div>

        


     


    </div>
  )
}

export default Footer