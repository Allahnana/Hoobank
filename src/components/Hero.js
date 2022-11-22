import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'




const Hero = () => 
   (
    <section id='home' className= {` flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className= {` flex-1  flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}>
        <div className= {`flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 to-cyan-900 rounded-[10px] mb-2`}>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className= {` ${styles.paragraph} ml-2`}> 
           <span className='text-white  ml-2'>20%</span> Discount for{" "}
           <span className='text-white  ml-2'> 1 month</span> Account
          </p>  
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className=' flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Then Next <br className='sm:block hidden' /> {" "}
            <span className='  flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-gray-300'> Generation</span> 
             <br/> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0 '>
            <GetStarted/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to be approved for your business. We examine your business and your personal credit to determine the best credit card for your business.
        </p>

        <div className=''> 
          <img  src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
          <div className='absolute z-0 w-[40%] h-[35%] top-0 pink__gradient'/>

          <div className='absolute z-[1] rounded-full bottom-40 w-[80%] h-[80%] white__gradient'/>

          <div className='absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
        </div>


      </div>
    </section>
  )


export default Hero