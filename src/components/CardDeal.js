import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className=' sm:block hidden'/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Allahumma rabbana atina fitduniya hasanata, wa fil akhirati hasanata, wa'qina azabannar. Astagafirullahi wa'atubu ilaih.</p>
        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img className='w-[100%] h-[100%]' src={card} alt="card"/>
      </div>
    </section>
  )


export default CardDeal