import React from 'react'
import { motion } from "motion/react"


const Testmonials = () => {
  const testmonialdata = [
    {
      image: 'https://randomuser.me/api/portraits/men/21.jpg',
      name: 'Michael',
      position: 'Founder',
      feedback:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, a.'
    }, {
      image: 'https://randomuser.me/api/portraits/men/24.jpg',
      name: 'Watson',
      position: 'Co Founder',
      feedback:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, a.'
    }, {
      image: 'https://randomuser.me/api/portraits/men/12.jpg',
      name: 'John',
      position: 'Hr Manager',
      feedback:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, a.'
    }
  ]

  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className='py-10 bg-white/50'>
      <div className='w-4/5 m-auto space-y-8'>
        <motion.div
          className='space-y-5'
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}>
          <h1 className='text-center text-lg'>____Client Reviews</h1>
          <h2 className='text-sm md:text-xl md:font-semibold text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores cumque, quia, nulla reiciendis quasi adipisci,
            corrupti laborum aliquid necessitatibus nesciunt eius
            sunt numquam?
          </h2>
        </motion.div>
        <div className='grid md:grid-cols-3 gap-4 py-10'>
          {testmonialdata.map((testmonial, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              variants={textVariant} className='py-5 space-y-5 border border-black rounded-lg flex flex-col items-center'>
              <div className='flex items-center space-x-2'>
                <img
                  src={testmonial.image} alt=""
                  className='w-16 h-16 rounded-full border-2'
                />
                <div>
                  <h1 className='text-lg font-bold'>{testmonial.name}</h1>
                  <p className='text-sm text-gray-400'>{testmonial.position}</p>
                </div>
              </div>
              <p className='text-center text-lg'>{testmonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div >
    </div >
  )
}

export default Testmonials
