import React from 'react'
import { Carousel, IconButton, Button } from "@material-tailwind/react";
import CoverageBox from './CoverageBox';
import { useRouter } from 'next/router';

const CoverageSlider = () => {
  const router = useRouter()
  return (
    <Carousel nextArrow={({ handleNext }) => (
      <IconButton
        variant="text"
        color="black"
        size="lg"
        onClick={handleNext}
        className="!absolute top-2/4 sm:!right-4 !right-1 -translate-y-2/4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </IconButton>
    )} prevArrow={({ handlePrev }) => (
      <IconButton
        variant="text"
        color="black"
        size="lg"
        onClick={handlePrev}
        className="!absolute top-2/4 sm:left-4 left-1 -translate-y-2/4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </IconButton>
    )} draggable navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-[#2C5F2D]" : "w-4 bg-[#2C5F2D]/50"
              }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )} style={{ height: '100%' }} className="">


      <div className="relative h-full w-full">
        <div className='grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 sm:px-20 px-10 py-10'>

          <CoverageBox onClick={() => (router.push("/life-insurance/term-life-insurance"))} image={'/images/coverage1.png'} text={"Life Insurance"} />
          <CoverageBox onClick={() => (router.push("/super-visa-insurance"))} image={'/images/coverage2.png'} text={"Super Visa Insurance"} />
          <CoverageBox onClick={() => router.push("/visitor-canada")} image={'/images/coverage3.png'} text={"Visitor to Canada"} />
          <CoverageBox onClick={() => router.push("/travel-insurance")} image={'/images/coverage4.png'} text={"Travel Insurance"} />
          <CoverageBox onClick={() => router.push("/international-student-insurance")} image={'/images/coverage5.png'} text={"International student insurance"} />
        </div>

      </div>

      <div className="relative  h-full w-full">
        <div className='grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 sm:px-20 px-10 py-10'>

          <CoverageBox onClick={() => router.push("/rrsp")} image={'/images/coverage1.png'} text={"RRSP"} />
          <CoverageBox onClick={() => router.push("/tfsa")} image={'/images/coverage2.png'} text={"TFSA"} />
          <CoverageBox onClick={() => router.push("/resp")} image={'/images/coverage3.png'} text={"RESP"} />
          {/* <CoverageBox image={'/images/coverage4.png'} text={""} /> */}
          {/* <CoverageBox image={'/images/coverage5.png'} text={"International student insurance"} /> */}

        </div>

      </div>



    </Carousel>
  )
}

export default CoverageSlider
