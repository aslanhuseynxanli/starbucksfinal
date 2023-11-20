import React from 'react'
import products from '../../assets/data/BestDevelopersProduct2.json'
import { Link, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
function Menuproducts() {

  const {subcat} = useParams()

  const productType = products.products.find(item => item.subcategory === subcat).subcategory;
 


   const findType = [
    ...new Set(
      products.products.filter(item => item.subcategory === productType).map(i=> i.type)
    ),
   ]
    
     

  return (
    <div className='w-[70%]  mx-auto'>
      <span className=''>
        <Link  to='/menu'>Menu /</Link> {subcat} 
      </span>
      <div className='font-[500] text-[30px]'>{subcat}</div>
       <div className=' items-center py-5 justify-center flex-wrap '>

       {
           <div className='flex flex-wrap flex-col  w-[80%]' >
              {
                findType.map(i=> {   
                  return (
                  <div key={nanoid()} >
                       <h3 className='font-bold  text-[30px] '>{i}</h3><hr />
                      <div className='flex flex-wrap  items-center gap-7'>
                        {
                           products.products.filter(itm=> itm.type === i).map(itemm=>
                            {
                              return(
                                <Link key={nanoid()} className='w-[150px]  h-[300px] my-5 flex flex-col' to={`/drinks/${itemm.id}`}>
                                   <img className='rounded-full w-[200px] md:w-[150px]' src={itemm.img} alt="" />
                                   <p className='pt-2 font-[300] text-[16px] text-center'>{itemm.name}</p>
                                </Link>
                               
                              )
                            }
                            
                            )
                        }
                      </div>
                      
                    </div>
                 
                  )
                } )
              }
            </div>
        }
       </div>

      
    </div>
  )
}

export default Menuproducts

