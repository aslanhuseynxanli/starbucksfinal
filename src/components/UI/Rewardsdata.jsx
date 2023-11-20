import React, { useState } from 'react';
import data from '../../assets/data/rewardsdata.json';

function Rewardsdata() {
  const filtr = ['25', '100', '200', '300', '400'];
  const [selectedData, setSelectedData] = useState(data.data.find(item => item.id === 25));

  function fltr(e) {
    const filteredData = data.data.find(item => item.id === +e.target.value);
    setSelectedData(filteredData);
  }

  return (
    <>
      <div className='bg-[#F1F7F5] text-center '>
        <h3 className=' md:text-[30px] font-[500]  p-7'>Get your favorites for free</h3>
        {filtr.map((item, i) => (
           <button className='m-5 text-[24px] ' onClick={fltr} value={item} key={i}>
            {item}★
          </button>
        ))}

      </div>
      <div className='bg-[#D4E8E2]  md:h-[300px] '>
        <div className='block md:flex md:w-[60%] mx-auto'>
          <img className=' md:h-[250px] ' src={selectedData.img} />
          <div className=' w-[100%] md:w-[32%] mt-5 mb-5 p-5  '>
            <p className='font-bold pb-5 text-[16px]'>{selectedData.name}  </p>
            <p className='text-[14px]'>{selectedData.title}  </p>
          </div>
        </div>

      </div>
      <div>
        <h3 className='font-bold text-[25px] text-center'>Endless Extras</h3>
        <p className='text-[15px] text-center pt-5 pb-5 w-[80%] md:w-[50%] m-auto'>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
         <div className='mt-5 md:flex w-[90%] m-auto'>
          <div className='flex md:block  '>
            <img className='h-[150px] object-contain  md:text-center md:w-[75%] ' src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="" />
            <div className=' justify-center flex flex-col p-4 ' >
              <p className='font-bold text-20px md:text-center md:w-[75%]'>Fun freebies</p>
              <p className='text-[13px] pt-3 pb-3 md:w-[80%] md:text-center'>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
              <p className='text-[13px] md:text-center md:w-[80%]'>Learn more</p>
            </div>
          </div>
          <div className='flex md:block mt-10 mb-10 md:m-0'>
            <img className='h-[150px]  object-contain  md:text-center md:w-[75%]' src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="" />
            <div className=' justify-center flex flex-col p-4 ' >
              <p className='font-bold text-20px md:text-center md:w-[80%] '>Order & pay ahead</p>
              <p className='text-[13px] pt-3 pb-3 md:w-[80%]  md:text-center'>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
              <p className='text-[13px] md:text-center md:w-[80%]'>Learn more</p>
            </div>
          </div>
          <div className='flex md:block '>
            <img className='h-[150px]  object-contain  md:text-center md:w-[75%]' src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="" />
            <div className=' justify-center flex flex-col p-4 ' >
              <p className='font-bold text-20px md:text-center md:w-[80%] '>Get to free faster</p>
              <p className='text-[13px] pt-3 pb-3 md:w-[80%]  md:text-center'>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
              <p className='text-[13px] md:text-center md:w-[80%]'>Learn more</p>
            </div>
          </div>
         </div>
      </div>
      <div className='bg-[#F2F0EA]'>
      <h3 className='font-[500] text-[25px] text-center'>Cash or card, you earn Stars</h3>
        <p className='text-[15px] text-center pt-5 pb-5 w-[80%] md:w-[50%] m-auto'>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
        
        <div>
          <div className='md:flex m-10  '>
            <div>
            <h3 className='font-[500] text-[25px] w-[200px] ' >1<span className='text-[13px]'>★</span> per dollar</h3>
            <p className='text-[15px] pt-2 pb-2 '>Pay as you go</p>
            </div>
            <div className='sm:flex  pt-3 sm:p-0 '>
             <div className='flex basis-1/2  '>
             <img className='h-[170px] '  src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="" />
              <div className='px-5 '>
              <p className=' text-[15px]  sm:text-[20px] font-[500]'>Scan and pay separately</p>
              <p className='text-[13px]   sm:text-[16px] pt-2'>Use cash or credit/debit card at the register.</p>
              </div>
              
             </div >
             <div className='flex basis-1/2  sm:w-[100%]  '>
             <img className='h-[170px] ' src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="" />
              <div className='px-5'>
              <p className='font-[500] text-[18px]'>Save payment in the app</p>
              <p className='text-[14px] lg:w-[60%] sm:text-[16px] pt-2'>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
              </div>
              
             </div>
            </div>
          </div>

          <div className='md:flex mx-10  '>
            <div>
            <h3 className='font-[500] text-[25px] w-[200px] ' >2<span className='text-[13px]'>★</span> per dollar</h3>
            <p className='text-[15px] pt-2 pb-2 '>Add funds in the app</p>
            </div>
            <div className='sm:flex pt-3 sm:p-0 '>
             <div className='flex basis-1/2  '>
             <img className='h-[170px] '  src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="" />
              <div className='px-5 '>
              <p className=' text-[15px]  sm:text-[20px] font-[500]'>Preload</p>
              <p className='text-[13px] w-[60%]  sm:text-[16px] pt-2'>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
              </div>
              
             </div>
             <div className='flex basis-1/2  '>
             <img className='h-[170px] ' src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="" />
              <div className='px-5'>
              <p className='font-[500] text-[18px]'>Register your gift card</p>
              <p className='text-[14px]  sm:text-[16px] pt-2'>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
              </div>
              
             </div>
            </div>
          </div>
      
        </div>
      </div>
      <div className="bg-[url('https://www.starbucks.com/app-assets/844262945b2a8b8cfb293156e2583872.png')] h-[70vh] flex justify-center">
          <div className='bg-[#D4E8E2] h-[90%] w-[95%] m-auto'>
             <div className='p-14 lg:w-[45%] m-auto'>
             <p className='text-center text-[22px] font-[700] p-5'>Keep the Rewards Coming</p>
              <p className='text-center'>The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
              <img className='p-5 w-[250px] m-auto' src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png" alt="" />
              <p className='text-center p-5'>Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn 1 mile per $1* spent at Starbucks and double Stars on Delta travel days.</p>
               <button></button>
             </div>
          </div>

      </div>
      <div className='w-[70%] mx-auto m-16 '>
        <h4 className=' text-[22px]'>Questions?</h4>
        <p className='w-[65%] pt-5'>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions right over hereopens in new window.</p>
      </div>
      <div className='bg-[#F9F9F9]'>
         <div className=' w-[90%] m-auto'>
         <p>At participating stores. Restrictions apply.</p>
        <p className='p-5'>* Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars.</p>
          <p>Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit deltastarbucks.com/termsopens in new window</p>
          <div className='sm:flex pt-12  '>
            <div className='basis-1/2'>
              <h3 className='SoDoSans-Bold-700 text-[#686868] text-[16px]'>EARNING STARS</h3>
              <p className='text-[14px] pt-3'>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
              <p className=' text-[14px] py-5'>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
              <p className='text-[14px]'>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>            
            </div>
            <div className='basis-1/2 mt-7 sm:mt-0 sm:mx-7'>
              <h3 className='SoDoSans-Bold-700 text-[#686868] text-[16px]'>TERMS OF USE</h3>
             <p className='text-[14px] pt-3'>For full program details visit starbucks.com/rewards/terms opens in new window</p>
             <p className='text-[14px] py-5'>Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</p>
             <p className='text-[14px]'>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the Starbucks Store Locator opens in new window and search for locations honoring “Redeem Rewards”.</p>
             <p className='text-[14px] py-5'>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
             </div>  
          </div>
          <div className='sm:flex pt-10'>
          <div className='basis-1/2'>
            <h3 className=' SoDoSans-Bold-700 text-[#686868] text-[16px]'>BENEFITS</h3>
            <p className='text-[14px] pt-3'>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>  
          </div>  
          <div className='basis-1/2 mt-5 sm:mt-0 sm:mx-7'>
            <h3 className=' SoDoSans-Bold-700 text-[#686868] text-[16px]'>REDEEMING REWARDS</h3>
            <p className='text-[14px] pt-3'>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</p>
          </div>
           </div>
         </div>
      </div>

    </>
  );
}

export default Rewardsdata;
