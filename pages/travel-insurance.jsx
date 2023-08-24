import { CoverageDetail } from '@/components/CoverageDetail'
import React from 'react'

const TravelInsurance = () => {
  return (
    <div className='flex flex-col gap-5'>

      <img src="/images/image2.png" alt='travelinsurance' className='w-full' />

      <div className='flex flex-col gap-3 '>
        <span className='text-[48px] text-black text-center font-bold'>Travel Insurance</span>
        <span className='lg:w-[50%] sm:w-[70%] w-[100%] text-center m-auto'>Safeguard your family's future with travel insurance, granting assurance that they'll be financially covered during unforeseen situations. It's a thoughtful provision that ensures security and assistance, regardless of travel challenges.</span>
        <CoverageDetail />
      </div>

    </div>
  )
}

export default TravelInsurance
