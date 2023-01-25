import React from 'react'
import { apple, bill, google, } from '../assets'
import styles from '../style'
import { layout } from '../style'

const Billing = () => (
  
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden'/> billing & invoicing.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The key meaning of doings is when peace is absent where it is needed, therefore we call it aka Captain Vawulence. It is easily controlled when your temper is low.

        </p>

        <div className=' flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img className=' w-[128px] h-[42px] object-contain  cursor-pointer' src={apple} alt ="google_play"/>

          <img className=' w-[128px] h-[42px] object-contain mr-5 cursor-pointer' src={google} alt ="google_play"/>

        </div>

        {/* <div className=' flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img className=' w-[128px] h-[42px] object-contain mr-5 cursor-pointer' src={google} alt ="google_play"/>

        </div> */}

      </div>

    </section>
  
)

export default Billing