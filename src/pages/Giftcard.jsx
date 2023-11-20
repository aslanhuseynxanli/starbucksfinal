import React from 'react';
import giftcard from "../assets/data/Giftcarddt.json"
import Giftcardss from '../components/UI/Giftcardss';



function Giftcard() {



  return (
    <div  >
      {
        giftcard.gftcard.map(item => <Giftcardss  {...item} />)
      }
    </div>

  );
};

export default Giftcard;
