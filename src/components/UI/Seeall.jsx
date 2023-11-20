import React from 'react'
import { Link, useParams } from 'react-router-dom'
import giftcard from "../../assets/data/Giftcarddt.json"


function Seeall() {

    const t = useParams();
    
    const obj = giftcard.gftcard.find(item => item.category === t.cat)

    console.log(obj);
  return (
   <>
    <Link to='/giftcard'>Backto Gift</Link>
    <div className='flex flex-wrap  '>
       
        {
          obj.cards.map(item => <img className='w-[300px] h-[200px] rounded-md m-5 hover:shadow-lg hover:-translate-y-2 ' src={item} />)
        }
    </div>
   </>
  )
}

export default Seeall