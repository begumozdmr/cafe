import React from 'react'
import { Link } from 'react-router-dom';

interface PropsType {
    value: string
};

export default function Button({ value }: PropsType) {
    return (
        <Link to="/contact" className='button'>{value}</Link>
    )
}

