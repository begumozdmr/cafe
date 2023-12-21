import { IconChevronUp } from '@tabler/icons-react'
import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function UpButton() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".up--button",
            {
                opacity: "0",
                visibility: "hidden"
            },
            {
                opacity: "1",
                visibility: "visible",
                scrollTrigger: {
                    trigger: ".up--button",
                    start: "top",
                    scrub: true,
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    const handleClickScroll = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        })
    };

    return (
        <section>
            <div className='w-30 h-30 rounded-full bg-submenu-normal--color text-white-100 z-[1000] flex justify-center items-center fixed right-10 bottom-10 cursor-pointer up--button' onClick={handleClickScroll}>
                <IconChevronUp width={"20px"} height={"20px"} />
            </div>
        </section>
    )
}
