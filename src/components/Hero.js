import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'



const Hero = () => 
   (
    <section id='home' className= {` flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className= {` flex-1  flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}>
        <div className= {`flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 rounded-[10px] mb-2`}>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className= {` ${styles.paragraph} ml-2`}> 
          <span className='text-white  ml-2'>20%</span> Discount for{""}
          <span className='text-white  ml-2'> 1 month</span> Account
          
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1>
            Then Next <br className='sm:block hidden' /> {" "}
            <span className=' text-gradient-to-r from-gray-700'> Generation</span> {" "} Payment Method
          </h1>

        </div>



      </div>

    </section>
  )


export default Hero