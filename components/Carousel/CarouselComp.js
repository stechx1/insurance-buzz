import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

export function CarouselWithContent() {
  const router = useRouter()
  return (
    <Carousel navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] `}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )} style={{ height: '70vh' }} className="">
      <div className="relative h-full w-full">
        <img
          src="/images/image1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        {/* <video src="/4 second video.mp4" controls className="h-full w-full rounded-lg" autoPlay>
          
          Your browser does not support the video tag.
        </video> */}
        <div className="absolute p-7 inset-0 grid h-full w-full bg-black/75">
          <div className="w-4/4 md:w-2/4 flex flex-col gap-2 px-14 justify-center">
            <span className="sm:text-[50px] text-[40px] font-semibold text-white">Life Insurance</span>

            <span className="text-white opacity-95 text-base">We have access to majority of the first-rate insurance companies in Texas to offer you the best coverage at the lowest available price</span>
            <div className="flex gap-2 mt-6">
              <button onClick={() => router.push("/life-insurance")} style={{ fontSize: '15px' }} className='p-3 font-semibold bg-[#CAD28F] rounded'>Request Quote</button>


            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute p-7 inset-0 grid h-full w-full bg-black/75">
          <div className="w-3/4 md:w-2/4 flex flex-col gap-2 px-14 justify-center">
            <span className="sm:text-[50px] text-[40px] font-semibold text-white">Travel Insurance</span>

            <span className="text-white opacity-95 text-base">We have access to majority of the first-rate insurance companies in Texas to offer you the best coverage at the lowest available price</span>
            <div className="flex gap-2 mt-6">
              <button style={{ fontSize: '15px' }} className='p-3 font-semibold bg-[#CAD28F] rounded'>Request Quote</button>


            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute p-7 inset-0 grid h-full w-full bg-black/75">
          <div className="w-3/4 md:w-2/4 flex flex-col gap-2 px-14 justify-center">
            <span className="sm:text-[50px] text-[40px] font-semibold text-white">Visitor to Canada Insurance</span>

            <span className="text-white opacity-95 text-base">We have access to majority of the first-rate insurance companies in Texas to offer you the best coverage at the lowest available price</span>
            <div className="flex gap-2 mt-6">
              <button style={{ fontSize: '15px' }} className='p-3 font-semibold bg-[#CAD28F] rounded'>Request Quote</button>


            </div>
          </div>
        </div>
      </div>

    </Carousel >
  );
}