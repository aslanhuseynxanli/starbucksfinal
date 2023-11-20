import React, { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import products from '../../assets/data/BestDevelopersProduct2.json'
function Menudetail() {
  const [drinks, setDrinks] = useState({});
  const { id } = useParams()
  useEffect(() => {
    setDrinks(products.products.find(item => item.id === +id))
  }, [id])
  


  const images =[
    {id:1 , url:"https://cdn.iconscout.com/icon/premium/png-512-thumb/cup-cup-1824069-1549182.png?f=avif&w=512"},
    {id:2 , url:"https://cdn.iconscout.com/icon/premium/png-512-thumb/cup-cup-1824069-1549182.png?f=avif&w=512"},
    {id:3 , url:"https://cdn.iconscout.com/icon/premium/png-512-thumb/cup-cup-1824069-1549182.png?f=avif&w=512"},
    {id:4 , url:"https://cdn.iconscout.com/icon/premium/png-512-thumb/cup-cup-1824069-1549182.png?f=avif&w=512"}
  ]
 

    const [selectedImageId, setSelectedImageId] = useState(null)
  
    const handleImageClick = (imageId) => {
      setSelectedImageId(imageId)
    }

  return (
    <>


      <div className=' color-[#F9F9F9] py-3 '><Link to='/menu' > Menu </Link>/<Link>{drinks.subcategory}</Link>/<Link>{drinks.name}</Link></div>

      <div className='bg-[#1F3833] h-[350px] flex items-center justify-evenly '>
        <img className='  rounded-full w-[300px] indent-1' src={drinks.img} alt="" />
        <div className='w-[30%]'>
          <p className='text-white text-[30px] '>{drinks.name}</p>
          
        </div>
      </div>

      <div className=' flex justify-evenly m-5 w-[80%] mx-auto'>
        <div className='w-[40%]'>
          <p className='font-[400] text-[30px]'>Size option</p>
          <hr className='border-[1px] border-[#D4E8E2]' />
          <div className='flex gap-5 my-9 slm'> 
            
          {
           images.map(image => (
            <img  key={image.id} src={image.url}  className={`w-[50px] h-[45px]object-cover mx-2 my-4 cursor-pointer ${selectedImageId === image.id ? 'border-2 py-2 bg-[#b4e6d6] border-[#4c9d84] rounded-full ' : '' }`} onClick={() => handleImageClick(image.id)} />
          ))
          }
            </div>
            </div>
        
        <div className='w-[40%]'>
          <p className='font-[400] text-[30px]'> Customizations</p>
          <hr className='border-[1px] border-[#D4E8E2]' />
          <input className='w-[100%] border-[1px] border-[#999999] rounded-md p-3 my-5' type="text" value='Flavors' readOnly />
          <input className='w-[100%] border-[1px] border-[#999999] rounded-md p-3 ' type="text" readOnly value='Toppings' />
          <input className='w-[100%] border-[1px] border-[#999999] rounded-md p-3 my-5' type="text" readOnly value='Preparation pethod' />
          <input className='w-[100%] border-[1px] border-[#999999] rounded-md p-3 ' type="text" readOnly value='Tea' />
          <input className='w-[100%] border-[1px] border-[#999999] rounded-md p-3 my-5' type="text" readOnly value='Ice' />

        </div>
      </div>

    </>
  )
}

export default Menudetail