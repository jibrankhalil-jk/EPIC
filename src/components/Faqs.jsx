import React, { useState } from 'react'

const Faqs = () => {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions sent to your email.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, PayPal, and bank transfers. All transactions are secure and encrypted.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-5 business days, while express shipping takes 1-2 business days depending on your location.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time through your account settings. Your access will remain until the end of your current billing period.'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes, our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store.'
    },
    {
      question: 'Do you offer discounts for students?',
      answer: 'Yes, we offer a 15% discount for students with a valid student ID. Please contact our support team to verify your status and apply the discount.'
    }
  ]
  const [openFaq, setopenFaq] = useState();
  const toogleFaq = (index) => {
    setopenFaq(openFaq === index ? null : index);
  }
  return (
    <div className='w-4/5 m-auto my-4 p-4'>
      <h1 className='text-2xl font-semibold text-gray-600 mb-6 '>Frequently Asked Questions</h1>
      {
        faqs.map((faq, index) => (
          <div className='mb-4'>
            <div className='flex justify-between items-center bg-white/50 px-5 py-3 rounded-lg cursor-pointer'
              onClick={() => toogleFaq(index)}
            >
              <h2 className='text-lg font-medium text-gray-700'>
                {faq.question}
              </h2>
              <span className={`text-xl text-gray-500 `}>
                {openFaq === index ? "_" : "+"}
              </span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>

              <p className='p-4 text-gray-400'>{faq.answer}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Faqs
