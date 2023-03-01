import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps { 
    product: IProduct;
}

export function Product( { product }: ProductProps) {
    const [details, setDetails] = useState(false)
    const [none, setNone] = useState('')
    const [title, setTitle] = useState(product.title)
    const [price, setPrice] = useState(product.price)
    const [description, setDescription] = useState(product.description)
    
    const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border', btnClassName]
    
    return (
        <div className={`border py-2 px-4 rounded flex flex-col items-center mb-2 ${none}`}>
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p contentEditable onBlur={(event) => setTitle(event.target.innerText)}>{title}</p>
            <p className='font-bold'>Price: <span contentEditable onBlur={(event) => setPrice(Number(event.target.innerText))}>{price}</span>$</p>
            <div className='flex space-x-80'>
                <button className={btnClasses.join(' ')}
                        onClick={() => setDetails(prev => !prev)}>
                    {details ? 'Hide Details' : 'Show Details'} 
                </button>

                <button className='py-2 px-4 border bg-red-400 hover:text-white'
                        onClick={() => setNone('hidden')}
                        >Delete</button>
            </div>

            {details && <div>
                <p contentEditable onBlur={(event) => setDescription(event.target.innerText)}>{description}</p>
                <p>Rate: <span contentEditable style={{ fontWeight: "bold"}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}
