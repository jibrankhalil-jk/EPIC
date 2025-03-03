import React from 'react'
import { motion } from 'motion/react'

const Pricing = () => {
  const imageVarient = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='py-20 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>
      <div className='md:w-1/2 space-y-8'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          Maximaze Your efficient with Epic Inc.
        </h1>
        <h3 className='text-3xl md:text-5xl font-bold'>
          $299,999
        </h3>
        <p className='md:text-2xl leading-8'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aut deleniti blanditiis esse doloribus ea iusto ex.
          Soluta quia quibusdam facere quaerat non distinctio.
        </p>
      </div>
      <div className='w-full md:w-1/3'>
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={imageVarient}
          src="pricing.svg" alt="" className='w-full' />
      </div>
    </div>
  )
}

export default Pricing
