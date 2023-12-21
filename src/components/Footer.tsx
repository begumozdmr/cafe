import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className='bg-footer--background--color text-footer--color w-full h-full py-[81px] px-[32px]'>
        <div className='container'>
          <div className='row'>
            <div className='grid--4'>
              <div className='flex flex-col gap-1'>
                <h1 className='text-45 text-white-100'>Sanum</h1>
                <p>For a truly memorable dining experience reserve in advance a table as soon as you can. Come and taste our remarkable food and wine.</p>
              </div>

              <div className='flex flex-col gap-3 justify-center'>
                <span className='text-16 text-white-100 font-600'>ADDRESS</span>
                <p>58 Ralph Ave<br />
                  New York, New York 1111</p>

                <div className='flex flex-col mt-2'>
                  <p>P: +1 800 000 111</p>
                  <p>E: contact@example.com</p>
                </div>
              </div>

              <div className='flex flex-col gap-1 justify-center'>
                <span className='text-16 text-white-100 font-600'>HOURS</span>

                <p>Monday – Sunday</p>
                <p>Lunch: 12PM – 2PM</p>
                <p>Dinner: 6PM – 10PM</p>

                <div className='flex flex-col mt-2'>
                  <p>Happy Hours: 4PM – 6PM</p>
                </div>
              </div>

              <div className='flex flex-col gap-4 justify-center'>
                <span className='text-16 text-white-100 font-600'>MORE INFO</span>
                <Link to="#" className='footer--button'>Careers</Link>
                <Link to="#" className='footer--button'>Get in Touch</Link>
                <Link to="#" className='footer--button'>Privacy Policy</Link>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
