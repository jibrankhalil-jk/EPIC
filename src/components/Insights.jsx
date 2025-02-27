import { delay } from 'motion'
import React from 'react'
import { SiCachet, SiDatabricks, SiGoogleassistant } from 'react-icons/si'

const Insights = () => {

  const insightsData = [
    {
      title: 'Product Designer',
      date: 'july 2025',
      icon: SiGoogleassistant,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: 'Remote Assistant',
      date: 'August 2025',
      icon: SiDatabricks,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]


  const cardVarients = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => (
      {
        opacity: 1,
        scale: 1,
        transition: {
          delay: i * 0.2,
          duration: 0.5,
          ease: 'easeInOut'
        }
      }
    )
  }

  return (
    <div
      className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 '>
      <div className='md:w-1/2 space-y-4  '>
        <h2 className='text-2xl font-bold'>
          Industry Insights
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi
          , ipsa reiciendis maiores officia exercitationem, velit praesentium
          consectetur blanditiis laboriosam, voluptates ducimus id dolorem ipsam.
          Quia quaerat reprehenderit reiciendis sed eius assumenda. Odio vel quod
          modi provident nulla, nostrum quas laboriosam sed dolores dolorem esse
          veniam, reiciendis quo repudiandae rem natus eos inventore totam dolor.</p>
      </div>
      <div className='flex items-center space-x-2'>
        <img className='w-22 h-22 rounded-full border-2'
          src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
        <div>
          <h1 className='font-bold text-lg'>Jibran Khalil</h1>
          <p className='text-sm text-gray-400'>CEO Founder</p>
        </div>
      </div>

      <div
        className='md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
        {insightsData.map((insight, index) => (
          <div key={index} className='w-full p-4 border-4 border-gray-100 rounded-xl space-y-4'>
            <div className='flex justify-between'>
              <div className='space-y-2'>
                <button className='p-3 rounded-full bg-violet-300 text-violet-800' >{insight.icon()}</button>
                <h1 className='text-xl font-bold'>{insight.title}</h1>
              </div>
              <p>{insight.date}</p>
            </div>
            <p className='text-lg leading-loose'>{insight.description}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Insights
