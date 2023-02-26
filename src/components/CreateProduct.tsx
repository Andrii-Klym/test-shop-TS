import axios from 'axios'
import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import { IProduct } from '../models'
import { ErrorMessage } from './ErrorMessage'

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non tempore laboriosam sunt.',
    category: 'electronic',
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const { close } = useContext(ModalContext)

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('')

        if(value.trim().length === 0) {
            setError("Please enter a valid title")
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text"
                    className='border py-2 px-4 mb-2 w-full outline-0'
                    placeholder='Enter product title...'
                    value={value}
                    onChange={changeHandler}
                />

            {error && <ErrorMessage error={error} />}

            <button type="submit" className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
            <button type="submit" 
                    className='py-2 px-4 border bg-red-400 hover:text-white'
                    onClick={() => close()}
                    >Cancel</button>
        </form>
    )
}

export default CreateProduct