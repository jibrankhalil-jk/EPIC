import React from 'react'

const Insights = () => {

  const insightsData = [
    {
      title: 'Qaim Raza',
      date: 'july 2023',
      icon: 'CO-Founder',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: 'Hamza',
      date: 'August 2023',
      icon: 'Product Manager',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]

  return (
    <div className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 '>
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
        <img className='w-12 '
          src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
        <div>
          <h1>Jibran Khalil</h1>
          <p>CEO Founder</p>
        </div>
        <div>
          {insightsData.map((insight, index) => (
            <div key={index} >
              <div>
                <div>
                  <button>{insight.icon}</button>
                  <h1>{insight.title}</h1>
                </div>
                <div>
                  <p>{insight.date}</p>
                </div>
                <p>{insight.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Insights
