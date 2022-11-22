import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => 
   (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-cyan-300 to-gray-300 p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col w-[138px] h-[138px] rounded-full bg-primary`}>
        <div className={`${styles.flexStart} flex-row`}>
           <p className='font-poppins font-medium text-[18px] leading-[23px]'>
             <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-gray-300'>Get</span>
           </p>
            <img className='w-[23px] h-[23px] object-contain' src={arrowUp} alt='arrow'/> 
        </div>
           <p className='font-poppins font-medium text-[18px] leading-[23px]'>
             <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-gray-300'>Started</span>
           </p>
      </div>
    </div>
  )


export default GetStarted