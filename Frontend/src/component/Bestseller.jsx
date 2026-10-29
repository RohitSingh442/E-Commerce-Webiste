import React, { useContext, useEffect, useState } from 'react'
import { ShopContext} from '../contaxt/ShopContex'
import Title from './Title'
import Productitem from './Productitem';


const Bestseller = () => {

    const { Products } = useContext(ShopContext);
    const [ bestseller, setBestseller ] = useState([]);

    
    useEffect(() => {
        const bestProduct = Products.filter((item) => (item.bestseller));
        setBestseller(bestProduct.slice(0, 5))
    }, [])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLER'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore non deleniti reiciendis fuga, saepe sapiente ut perferendis quis atque dolores quo, optio quaerat? Nemo voluptatem, neque sequi laborum reprehenderit ipsam?
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {
                bestseller.map((item,index)=>(
                    <Productitem key={index} _id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
              }
            </div>

        </div>
    )
}

export default Bestseller