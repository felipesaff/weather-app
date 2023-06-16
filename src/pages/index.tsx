import { Inter } from 'next/font/google'
import { WeatherCard } from '@/components/card'
import { LineChart } from '@/components/chart/LineChart'
import { useState } from 'react'
import { Current, ForecastDayType, Location } from '@/types'

type ForecastType = {
    location: Location
    current: Current
    forecast: ForecastDayType[]
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const initialState: ForecastType = {
        current: {
            condition: {
                code: 0,
                text: '',
                icon: ''
            },
            humidity: 0,
            pressure_mb: 0,
            temp_c: 0,
            uv: 0,
            wind_kph: 0
        },
        location: {
            name: '',
            region: ''
        },
        forecast: [
            {
                date: new Date().toLocaleDateString(),
                day: {
                    avghumidity: 0,
                    maxtemp_c: 0,
                    maxwind_kph: 0,
                    mintemp_c: 0
                },
                uv: 0

            }
        ]
    }
    const [city, setCity] = useState<string>('');
    const [error, setError] = useState<{error: boolean; message: string}>({error: false, message: ''});
    const [forecast, setForecast] = useState<ForecastType>(initialState)

    async function getCity() {
        if(city.length < 3) return setError({error: true, message: 'Digite pelo menos 3 caracteres'});

        const res = await fetch(`/api/forecast?city=${city}`);
        if(!res.ok) return setError({error: true, message: res.statusText});
        const data = await res.json()
        .then(json => json.data)

        return setForecast(data)
    }
    
  return (
    <main
      className={`flex h-screen w-screen ${inter.className}`}
    >
        <div className='flex flex-col w-80 h-screen justify-center p-4'>
        <label
            htmlFor="city"
            className="w-full relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
        >
            <input
                onChange={e => setCity(e.target.value)}
                value={city}
                type="text"
                id="city"
                placeholder="Cidade"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"
            />
            <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-200"
            >
                Cidade
            </span>
        </label>
        <button
            onClick={getCity}
            className='inline-block w-full mb-8 rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500'
        >
            Confirmar
        </button>
            <WeatherCard
                data={forecast.current}
            />
        </div>
        <div className='w-full grid grid-cols-2 p-4'>
            <LineChart color='#06D6A0' label='Temperatura'/>
            <LineChart color='#1B9AAA' label='Humidade' />
            <LineChart color='#EF476F' label='UV' />
            <LineChart color='#38248a' label='Pressão' />
        </div>
    </main>
  )
}
