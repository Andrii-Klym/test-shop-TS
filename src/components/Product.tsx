import React, { useState } from 'react';

import { IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';
import { Modal } from './Modal';

interface ProductProps {
    product: IProduct;
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)
    const [none, setNone] = useState('')
    const [modal, setModal] = useState(false)

    const [error, setError] = useState('')
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState<number>(product.price);

    const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border', btnClassName]


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('')

        if (title.trim().length === 0) {
            setError("Please enter a valid title")
            return
        }
    }

    const changeTitle = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const changePrice = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const price = parseFloat(event.target.value);
        setPrice(price);
    }

    return (
        <div className={`border py-2 px-4 rounded flex flex-col items-center mb-2 ${none}`}>
            <img src={product.image} className="w-1/6" alt={title} />
            <p>{title}</p>
            <p className='font-bold'>Price: {price}$</p>
            <div className='flex justify-around w-full'>
                <button className={btnClasses.join(' ')}
                    onClick={() => setDetails(prev => !prev)}>
                    {details ? 'Hide Details' : 'Show Details'}
                </button>


                <button className='py-2 px-4 border bg-yellow-400 hover:text-white'
                    onClick={() => setModal(true)}
                >Edit</button>

                <button className='py-2 px-4 border bg-red-400 hover:text-white'
                    onClick={() => setNone('hidden')}
                >Delete</button>
            </div>

            {details && <div>
                <p contentEditable>{product.description}</p>
                <p>Rate: <span contentEditable style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span></p>
            </div>}

            {modal && <Modal title="Edit Product" onClose={() => setModal(false)}>

                <form onSubmit={submitHandler}>
                    <p>Title: <input type="text"
                        className='border py-2 px-4 mb-2 w-full outline-0'
                        placeholder='Enter product title...'
                        value={title}
                        onChange={changeTitle}
                    /></p>

                    <p>Price: <input type="number"
                        className='border py-2 px-4 mb-2 w-full outline-0'
                        placeholder='Enter product price...'
                        value={price}
                        onChange={changePrice}
                    /></p>

                    {error && <ErrorMessage error={error} />}

                    <button type="submit"
                        onClick={() => setModal(false)}
                        className='py-2 px-4 border bg-yellow-400 hover:text-white'>Save</button>

                    <button className='py-2 px-4 border bg-red-400 hover:text-white'
                        onClick={() => setModal(false)}
                    >Cancel</button>
                </form>
            </Modal>}

        </div>
    )
}
