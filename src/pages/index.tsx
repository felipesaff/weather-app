import Image from 'next/image'
import { Inter } from 'next/font/google'
import { WeatherCard } from '@/components/card'
import { ChartComponent } from '@/components/chart'
import { LineChart } from '@/components/chart/LineChart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex h-screen w-screen ${inter.className}`}
    >
        <div className='flex w-80 h-screen items-start p-4'>
            <WeatherCard />
        </div>
        <div className='w-full grid grid-cols-2'>
            <LineChart />
        </div>
    </main>
  )
}
