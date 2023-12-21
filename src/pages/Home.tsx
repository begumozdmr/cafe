import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

interface SliderType {
    id: number,
    imgPath: string,
    alt: string,
    content: string,
};

const SliderData: SliderType[] = [
    {
        id: 1,
        imgPath: "slider-1.jpg",
        alt: "slider-1",
        content: "DINING AT"
    },
    {
        id: 2,
        imgPath: "slider-2.jpg",
        alt: "slider-2",
        content: "EVENTS AT"
    },
    {
        id: 3,
        imgPath: "slider-3.jpg",
        alt: "slider-3",
        content: "HAPPY HOURS AT"
    }
];

interface Section1Type {
    id: number,
    name: string,
    path: string,
    content: string
};

const Section1Data: Section1Type[] = [
    {
        id: 1,
        name: "FINE DINING",
        path: "icon-2.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
    },
    {
        id: 2,
        name: "FRESH INGREDIENTS",
        path: "icon-3.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
    },
    {
        id: 3,
        name: "ENJOY WINE",
        path: "icon-4.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
    },
    {
        id: 4,
        name: "SWEET DESSERT",
        path: "icon-1.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
    }
];

interface CustomersType {
    id: number,
    content: string,
    name: string,
    comment: string
};

const CustomersData: CustomersType[] = [
    {
        id: 1,
        content: "'Caverta is a special place tiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc vitae. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.'",
        name: "JERRY GRIFFIN",
        comment: "Griff Inc"
    },
    {
        id: 2,
        content: "'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat. Duis leo. Sed fringilla mauris sit amet nibh.'",
        name: "LAURA FOSTER",
        comment: "Agro"
    },
    {
        id: 3,
        content: "'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero. officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.'",
        name: "ANGELA RAY",
        comment: "Rays"
    },
    {
        id: 4,
        content: "'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero. officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.'",
        name: "MARIE SMITH",
        comment: "The Smiths"
    }
];

export default function Home() {
    return (
        <>
            <section>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        SliderData.map((index: SliderType) => {
                            return (
                                <SwiperSlide key={index.id}>
                                    <img src={require(`../img/${index.imgPath}`)} alt={index.alt} />

                                    <div className='flex absolute justify-center items-center left-0 top-0 w-full h-full'>
                                        <div className='container'>
                                            <div className='row'>   
                                                <div className='flex flex-col justify-center items-center'>
                                                    <p className='text-white-100 text-16 font-600 tracking-wider'>{index.content}</p>
                                                    <h1 className='text-white-100 text-120 tracking-wider'>Sanum</h1>
                                                    <p className='text-white-100 text-16 tracking-wider text-center'>We offer a highly seasonal and continuously evolving tasting menu experience.</p>
                                                    <Link to="/contact" className='tracking-widest text-white-100 text-14 font-700 mt-10 border-b-2 transitin-all ease-in duration-500 hover:border-b-primary--color hover:text-primary--color'>CONTACT US</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>

            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='gap'>
                            <div className='grid--4'>
                                {
                                    Section1Data.map((index: Section1Type) => {
                                        return (
                                            <div className='flex flex-col gap-3 text-center justify-center items-center' key={index.id}>
                                                <img src={require(`../img/${index.path}`)} alt='' className='w-80 h-80'></img>
                                                <span className='text-submenu-normal--color font-500 text-16 mb-2'>{index.name}</span>
                                                <p className='text-16 text-submenu-normal'>{index.content}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='gap'>
                <div className='home--container home--content-2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='home--content-title'>
                                <span className='text-20 font-600'>- COME AND SEE -</span>
                                <h1 className='parallax--title'>We create delicious experiences</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='gap'>
                            <div className='grid--2'>
                                <img src={require("../img/home-4.jpg")} alt='home-4' />
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <span className='text-primary--color text-18 font-500'>- ATMOSPHERE -</span>
                                    <h1 className='text-65 text-submenu-normal--color'>Our Space</h1>
                                    <p className='text-center text-16'>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga.</p>

                                    <Link to="/menu" className='button'>explore our menu</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='gap'>
                <div className='home--container home--content-1'>
                    <div className='container'>
                        <div className='row'>
                            <div className='flex flex-col gap-3 items-center text-center'>
                                <span className='text-20'>- TESTIMONIALS - </span>
                                <h1 className='text-65'>What Clients Say</h1>
                            </div>

                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {
                                    CustomersData.map((index: CustomersType) => {
                                        return (
                                            <SwiperSlide key={index.id}>
                                                <div className='flex flex-col gap-4 items-center text-center'>
                                                    <p className='text-18 mb-10'>{index.content}</p>
                                                    <div className='flex flex-col items-center'>
                                                        <hr className='mb-4 w-1/3' />
                                                        <p className='font-700 tracking-widest'>{index.name}</p>
                                                        <span className='text-13'>{index.comment}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='gap'>
                            <div className='grid--2'>
                                <img src={require("../img/home-6.jpg")} alt='home-6' />
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <span className='text-primary--color text-18 font-500'>- MAGICAL -</span>
                                    <h1 className='text-60 text-submenu-normal--color'>Private Events</h1>
                                    <p className='text-center text-16'>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga.</p>

                                    <Link to="/contact" className='button'>contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
