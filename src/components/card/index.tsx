import { WiHumidity, WiBarometer } from 'react-icons/wi'
import { BsCloudFog, BsFillCloudRainFill, BsFillSunFill } from 'react-icons/bs';
import { Current } from '@/types';
import Image from 'next/image';

type Props = {
    data: Current
}

export const WeatherCard = ({data: {condition, humidity, pressure_mb, temp_c, uv, wind_kph}}: Props) => {
    return (
        <div className="flex flex-col relative justify-between w-full bg-blue-200 rounded-md bg-opacity-5 before:absolute before:h-[300px] before:w-[180px] before:-translate-x-1/2 before:rounded-full
            before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[100px]
            after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br after:top-10
            before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:bottom-0 before:right-0 p-4"
        >
            <div className='flex flex-col border-b border-gray-600/40 pb-4 mb-4'>
                {
                    condition.icon ?
                        <Image
                            loader={() => `https:${condition.icon}`}
                            src={`https:${condition.icon}`}
                            alt={condition.text}
                            width={50}
                            height={50}
                            unoptimized
                        />
                        : <BsCloudFog width={50}/>
                }
                <span className='text-4xl my-4'>
                    {temp_c}<sup className='text-xl'>°C</sup>
                </span>
                <p className='text-sm font-thin text-gray-300'>{condition.text}</p>
            </div>

            <div className='text-gray-400 grid gap-4'>
                <span className='flex items-center'>
                    <WiHumidity size={25} className='mr-2' />
                    Humidade: {humidity}%
                </span>
                <span className='flex items-center'>
                    <BsFillCloudRainFill size={25} className='mr-2' />
                    Vento: {wind_kph} km/h
                </span>
                <span className='flex items-center'>
                    <BsFillSunFill size={25} className='mr-2' />
                    UV: {uv}
                </span>
                <span className='flex items-center'>
                    <WiBarometer size={25} className='mr-2' />
                    Pressao: {pressure_mb}mbar
                </span>
            </div>

        </div>
    )
}