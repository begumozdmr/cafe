import Button from 'components/Button'
import Header from 'components/Header'
import React from 'react'

export default function Reservation() {
    return (
        <>
            <Header path="reservation" title='Reservation' comment='call us +1 800 000 11 or complete the form below' />

            <section className='container'>
                <div className='row'>
                    <div className='gap'>
                        <div className='flex flex-col gap-3'>
                            <div className='grid--4'>
                                <div className='flex flex-col gap-2 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-2'>
                                    <span className='text-30'>Reservations are available online 3 weeks before the date of the reservation.</span>
                                    <p className='text-16'>We welcome parties of 1 – 20 guests in our main dining room.</p>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <span className='text-primary--color text-16 font-500'>- PRIVATE EVENTS -</span>
                                    <p>Looking for an ideal venue? Look no further. Corporate dinners, special occasions, Chef’s Table, let us handle your needs.</p>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <span className='text-primary--color text-16 font-500'>- OPEN HOURS -</span>
                                    <p>Monday - Sunday: 1PM - 10PM <br /> Happy Hours: 4PM - 6PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='row'>
                    <div className='gap'>
                        <div className='flex flex-col gap-9'>
                            <form action=''>
                                <div className='grid--3'>
                                    <input type='text' placeholder='Name *' className='form--input' />
                                    <input type='text' placeholder='Email *' className='form--input' />
                                    <input type='text' placeholder='Phone *' className='form--input' />
                                </div>
                            </form>

                            <form action=''>
                                <div className='grid--3'>
                                    <input type='date' placeholder='Date *' className='form--input' />
                                    <input type='time' placeholder='Time *' className='form--input' />
                                    <input type='text' placeholder='Seats *' className='form--input' />
                                </div>
                            </form>

                            <textarea placeholder='Special Requests *' className='form--input' />
                            <div className='flex justify-center items-center'>
                                <Button value='book now' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
