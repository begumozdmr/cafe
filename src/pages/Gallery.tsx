import { IconEye } from '@tabler/icons-react'
import Header from 'components/Header'
import React from 'react'

interface GalleryType {
    id: number,
    path: string
};

const GalleryData: GalleryType[] = [
    {
        id: 1,
        path: "slider-1.jpg"
    },
    {
        id: 2,
        path: "gallery-1.jpg"
    },
    {
        id: 3,
        path: "gallery-3.jpg"
    },
    {
        id: 4,
        path: "gallery-4.jpg"
    },
    {
        id: 5,
        path: "gallery-5.jpg"
    },
    {
        id: 6,
        path: "gallery-6.jpg"
    },
    {
        id: 7,
        path: "gallery-7.jpg"
    },
    {
        id: 8,
        path: "gallery-8.jpg"
    },
    {
        id: 9,
        path: "gallery-9.jpg"
    },
    {
        id: 10,
        path: "gallery-10.jpg"
    },
    {
        id: 11,
        path: "gallery-11.jpg"
    },
    {
        id: 12,
        path: "gallery-2.jpg"
    }
];

export default function Gallery() {
    return (
        <>
            <Header path='menu' title='Gallery' comment='quia consequuntur magni' />

            <section className='container'>
                <div className='row'>
                    <div className='gap'>
                        <div className='grid--4'>
                            {
                                GalleryData.map((index: GalleryType) => {
                                    return (
                                        <div className='overflow-hidden h-[400px] relative flex top-0 left-0 justify-center items-center cursor-pointer card--bg' key={index.id}>
                                            <img src={require(`../img/${index.path}`)} alt='gallery' className='transition-all duration-500 ease-in h-full object-cover hover:scale-[1.2]' />

                                            <div className='absolute text-white-100 opacity-0 invisible	transitin-all duration-300 ease-in card--icon'>
                                                <IconEye width={"40px"} height={"40px"} />
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
