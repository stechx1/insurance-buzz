import { CoverageDetail } from '@/components/CoverageDetail'
import React from 'react'

const VisitorCanadaPage = () => {
  return (
    <div className='flex flex-col gap-5'>

      <img src="/images/image5-canada.png" alt='lifeinsurance' className='w-full' />

      <div className='flex flex-col gap-3 '>
        <span className='text-[48px] text-black text-center font-bold'>Visitor to Canada Insurance</span>
        <span className='lg:w-[50%] sm:w-[70%] w-[100%] text-center m-auto'>Ensure your family's future even when you're not there - life insurance offers the peace of mind that your loved ones will be financially secure. It's a lasting gift that guarantees protection and support, no matter what life brings.</span>
        <CoverageDetail />
      </div>

    </div>
  )
}

export default VisitorCanadaPage
