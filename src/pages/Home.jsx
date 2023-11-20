// import React, { useState } from 'react'
import { nanoid } from "nanoid"
import homeDt from "../assets/data/homedt.json"
import Homecard from "../components/UI/Homecard"
import { Link} from "react-router-dom"
function Home() {
   
    return (
        <div>
            {
                  homeDt.homeDt.map(item => <Homecard key={nanoid()} {...item} />  )
            }
            <div className=" w-1/2 mx-auto  flex flex-col justify-center items-center ">
            <p className="my-20 text-justify">*At participating stores. Some restrictions apply. See <Link to='/rewards'>starbucks.com/rewards</Link></p>
             <p >**For every Starbucks eGift in our Military Appreciation category sold May 1–31, we’ll donate $5 to Blue Star Families and Operation Gratitude to foster connection and improve the well-being of our military community. Donations will be evenly divided between the two organizations. Learn more at http://bluestarfam.org and http://operationgratitude.com.</p>
        
            </div>
            </div>
    )
}

export default Home