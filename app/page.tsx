import Image from 'next/image';

import landingPic from '@/public/BeneRohlmann/logo.png'

export default function Landing() {
  return (
    <div className='relative h-5/6 flex items-center justify-center'>
      <Image src={landingPic} alt='An illustration of Bene Rohlmann' 
      className='-rotate-45 w-2/5 max-w-5xl'/>
    </div>
  );
}
