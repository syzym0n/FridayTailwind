import Image from "next/image";

interface IllustrationCardProps {
    color: string;
    picture: string;
}

export default function IllustrationCard({color, picture}: IllustrationCardProps) {
    return (
        <div>
            <Image src={picture} alt='An illustration of Bene Rohlmann'
            width={337}
            height={450}
            style={{borderColor: color}}
            className='border-solid border-8 rounded-3xl'/>
        </div>
    );
}