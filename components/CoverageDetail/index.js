export const CoverageDetail = () => {
  return (
    <div className='container mx-auto  flex md:flex-row flex-col gap-3 mt-20 justify-between'>
      <div className='flex flex-1 '>
        <img
          src='/images/coveragedetail.png'
          alt='coveragedetail'
          className='rounded-md'
        />
      </div>

      <div className='flex  flex-1 '>
        <div className='flex flex-col gap-4 lg:w-[80%] w-full px-4'>
          <span className='text-[34px] font-semibold text-black text-center'>
            Coverge Details
          </span>

          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Coverage Amount *</span>
            <input
              type='text'
              name='amounr'
              id='amount'
              placeholder='$250,000'
              className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Product *</span>
            <select
              name=''
              id=''
              className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
            >
              <option value='20 years term'>20 years term</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Do you smoke *</span>
            <input
              type='text'
              name='amounr'
              placeholder='Yes'
              id='amount'
              className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Gender *</span>
            <input
              type='text'
              name='amounr'
              id='amount'
              placeholder='Female'
              className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Age *</span>
            <input
              type='text'
              name='amounr'
              id='amount'
              placeholder='21'
              className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
            />
          </div>

          <button className='bg-[#2C5F2D] mt-6 p-4 rounded text-white w-fit'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
