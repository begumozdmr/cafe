import gsap, { Power2 } from "gsap"
import { useEffect } from "react"

interface PropsType {
    path: string,
    title: string,
    comment: string
};

export default function Header({ path, title, comment }: PropsType) {

    useEffect(() => {
        gsap.fromTo(".header--title",
            {
                y: -100,
                opacity: 0
            },
            {
                delay: 0.3,
                y: 0,
                opacity: 1,
                ease: Power2.easeInOut
            }
        )
    });

    return (
        <header className={`header`} style={{ backgroundImage: `url(${require(`../img/${path}.jpg`)})` }}>
            <div className='flex items-center w-full h-full'>
                <div className='container'>
                    <div className='row'>
                        <div className='flex flex-col justify-center items-center header--title'>
                            <h1 className='flex text-white-100 tracking-wider text-center responsive--header'>{title}</h1>
                            <p className='text-white-100 text-16 font-600 tracking-wider uppercase text-center'>{comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
