import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../contaxt/ShopContex'

const Product = () => {
  const { productId } = useParams();
  const { Products } = useContext(ShopContext);
  const [productData, setproductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
  
    Products.map((item) => {
      if (item._id === productId) {
        setproductData(item)
        setImage(item.image[0])
        console.log(item)
        return null;
      }    

    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

          </div>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'>Product not found</div>
}

export default Product