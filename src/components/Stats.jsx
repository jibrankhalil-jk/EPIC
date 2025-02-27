import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import { motion } from 'motion/react'

const Stats = () => {

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
        <div className='py-20 bg-white/50'>
            <div className="w-4/5 m-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                <div className=' w-full md:w-1/3'>
                    <motion.img initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                        variants={imageVarient}
                        src="/stats.svg" alt="" className='w-full' />
                </div>
                <div className='md:w-1/2 space-y-8'>
                    <h1 className='text-4xl md:text-6xl font-bold'>Over 30,000</h1>
                    <p className='md:text-4xl font-bold'>
                        {" "}
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Ipsa fugiat pariatur
                        tenetur? Dolore quas voluptas iure nobis
                        veritatis ipsum nesciunt.
                    </p>
                    <div className='flex'>
                        <div className='space-y-5'>
                            <div className='flex items-center space-x-2'>
                                <span className='p-3 rounded-full bg-violet-300 text-violet-800'> <FaChartLine /> </span>
                                <h1>Data Visualization</h1>
                            </div>
                            <p>
                                {" "}
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Provident, expedita odit,
                                tenetur totam nobis voluptates in aliquam
                                et harum odio illo? Velit, assumenda! Facilis, id!
                            </p>
                        </div>
                        <div className='space-y-5'>
                            <div className='flex items-center space-x-2'>
                                <span className='p-3 rounded-full bg-violet-300 text-violet-800'> <FaChartLine /> </span>
                                <h1>Data Visualization</h1>
                            </div>
                            <p>
                                {" "}
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Provident, expedita odit,
                                tenetur totam nobis voluptates in aliquam
                                et harum odio illo? Velit, assumenda! Facilis, id!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
