import Image from 'next/image';

import landingPic from '@/public/BeneRohlmann/logo.png'

import MainHeader from "@/components/beneRohlmann/mainHeader";

export default function Landing() {
  return (
    <div className='px-12 py-16 relative'>
      <MainHeader />
      <Image src={landingPic} alt='An illustration of Bene Rohlmann' 
      className='-rotate-45 w-2/4 max-w-lg
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
      <div className=''>
        <div className='h-screen flex flex-col justify-center items-center gap-20'>
          <h2 className='text-[150px]'>ILLUSTRATOR</h2>
          <h1 className='text-[300px]'>ARTIST</h1>
        </div>
      
      </div>
    </div>
  );
}
