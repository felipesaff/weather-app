import { TiWeatherStormy } from 'react-icons/ti'
import { WiHumidity, WiBarometer } from 'react-icons/wi'
import { BsFillCloudRainFill, BsFillSunFill } from 'react-icons/bs'

export const WeatherCard = () => {
    return (
        <div className="flex flex-col relative justify-between bg-blue-200 rounded-md bg-opacity-5 before:absolute before:h-[300px] before:w-[180px] before:-translate-x-1/2 before:rounded-full
            before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[200px]
            after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br after:top-10
            before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[160px] before:bottom-0 before:right-0 p-4"
        >
            <div className='flex flex-col border-b border-gray-600/40 pb-4 mb-4'>
                <TiWeatherStormy
                    size={50}
                />
                <span className='text-4xl my-4'>
                    23<sup className='text-xl'>°C</sup>
                </span>
                <span className='text-sm font-thin text-gray-300'>Rainy Storm</span>
            </div>

            <div className='text-gray-400 grid grid-cols-2 gap-2'>
                <span className='flex items-center'>
                    <WiHumidity size={25} className='mr-2' />
                    Humidade: 35%
                </span>
                <span className='flex items-center'>
                    <BsFillCloudRainFill size={25} className='mr-2' />
                    Chance de chuva: 8%
                </span>
                <span className='flex items-center'>
                    <BsFillSunFill size={25} className='mr-2' />
                    UV: 8
                </span>
                <span className='flex items-center'>
                    <WiBarometer size={25} className='mr-2' />
                    Pressao: 1015mbar
                </span>
            </div>

        </div>
    )
}