import React from 'react'
import howbegan from '../images/howbegan.jpg';
function History() {
  return (
    <div>
      <h1 className='meet text-center text-3xl py-7 font-bold'>Our History</h1>
      <h1 className=' font-semibold text-center text-slate-400 text-4xl mb-3' style={{fontFamily:"forte regular"}}>The best way to describe this company is  <span>" Generation in making "</span></h1>

      <div className=' flex justify-between'>
        <div className=' w-3/4'>
      <h1 className=' text-2xl mb-2 text-center w-full'> 
        Our company has started since 2005 by the Indian Engineer called Singahm Pandeh embark on career in masonry industry
        furthermore his sons now become the Inherited for that company and then improve more technology in the ways of production
        and other daily proffesions
         
         The company would carry on about the next 3decades as continue to leave their mark on the capital . It wasn't long
         but we try our best to win the market for all our best


         
      </h1>
      <h1 style={{fontFamily:"forte regular"}} className=' text-3xl text-slate-300 text-center'> " In Our company the customer is king "</h1>
            
        </div>
        <div className=' w-1/4'>
          <img src={howbegan} alt="no internet connection"  className=' w-full'/>
        </div>
      </div>
    </div>
  )
}

export default History
