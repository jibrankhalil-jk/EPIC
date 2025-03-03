import React from 'react'
import { IoPlay } from 'react-icons/io5'
import { motion } from "motion/react"

const Hero = () => {
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
  const buttonVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      }
    },
  }
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
    <div className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>
      <div className='md:w-1/2 space-y-6'>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}>
          __ Inovation Requires Coverage
        </motion.p>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
          className='text-5xl md:text-7xl font-bold'>
          Being Inovative Requires Coverage
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
          className='md:text-lg'>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Sit voluptates
          odit eveniet magnam nihil rem perferendis
          .</motion.p>

        <div className='flex space-x-5'>
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={buttonVarient}
            className='py-2 px-6 rounded-3xl font-semibold bg-black text-white'>
            Book
          </motion.button>

          <motion.button initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={buttonVarient}
            className='flex space-x-4 items-center '>
            <span className='w-8 h-8 flex justify-center items-center bg-black text-white rounded-full'>
              <IoPlay />
            </span>
            <span >
              Watch Video
            </span>
          </motion.button>

        </div>
      </div>
      <div className='w-full px-9 lg:w-1/4 md:w-1/3 md:px-0'>
        <motion.img initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={imageVarient}
          src="hero1.svg" className='w-full' />
      </div>
    </div>
  )
}

export default Hero
