import { IconBellRinging } from '@tabler/icons-react'
import { IconMap, IconPhone } from '@tabler/icons-react'
import Button from 'components/Button'
import Header from 'components/Header'
import React from 'react'

export default function Contact() {
    return (
        <>
            <Header path='contact' title='Contact' comment="we're easy get in touch with" />

            <section className='container'>
                <div className='row'>
                    <div className='gap'>
                        <div className='grid--3'>
                            <div className='flex flex-col gap-5 justify-center items-center mb-8'>
                                <div className='w-90 h-90 rounded-full border-2 border-primary--color flex justify-center items-center text-primary--color'>
                                    <IconMap width={"30px"} height={"30px"} />
                                </div>
                                <p className='text-16 font-600 text-submenu-normal--color'>LOCATION</p>
                                <p className='text-center'>58 Ralph Ave <br />New York, New York 1111</p>
                            </div>

                            <div className='flex flex-col gap-5 justify-center items-center mb-8'>
                                <div className='w-90 h-90 rounded-full border-2 border-primary--color flex justify-center items-center text-primary--color'>
                                    <IconPhone width={"30px"} height={"30px"} />
                                </div>
                                <p className='text-16 font-600 text-submenu-normal--color'>CONTACT</p>
                                <p className='text-center'>+1 800 000 111 <br />contact@example.com</p>
                            </div>

                            <div className='flex flex-col gap-5 justify-center items-center mb-8'>
                                <div className='w-90 h-90 rounded-full border-2 border-primary--color flex justify-center items-center text-primary--color'>
                                    <IconBellRinging width={"30px"} height={"30px"} />
                                </div>
                                <p className='text-16 font-600 text-submenu-normal--color'>OPEN HOURS</p>
                                <p className='text-center'>Lunch: 12PM – 2PM <br />Dinner: 6PM – 10PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='row'>
                    <div className='gap'>
                        <div className='grid--2'>
                            <form action='' className='flex flex-col gap-5'>
                                <input type='text' placeholder='Name' className='form--input' />
                                <input type='text' placeholder='Email' className='form--input' />
                                <input type='text' placeholder='Phone' className='form--input' />
                                <textarea placeholder='Your Message' className='form--input' />
                                <div className='mt-5'>
                                    <Button value='book now' />
                                </div>
                            </form>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.2007760589013!2d32.742466076406984!3d39.86974038874878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347acc4350fa9%3A0x22720cefb175c933!2sBilkent%20CYBERPARK!5e0!3m2!1str!2str!4v1703158753083!5m2!1str!2str" width="100%" height="100%" loading="lazy"></iframe>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
