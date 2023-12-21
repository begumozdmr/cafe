import React from 'react'

interface PropsType {
    path: string,
    title: string,
    comment: string
};

export default function Header({ path, title, comment }: PropsType) {
    return (
        <header className={`header bg-${path}`}>
            <div className='flex items-center w-full h-full'>
                <div className='container'>
                    <div className='row'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-white-100 text-100 tracking-wider text-center'>{title}</h1>
                            <p className='text-white-100 text-16 font-600 tracking-wider uppercase text-center'>{comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
