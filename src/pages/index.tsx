import { Inter } from 'next/font/google'
import { useState } from 'react'

import { WeatherCard } from '@/components/card'
import { LineChart } from '@/components/chart/LineChart'
import { ErrorBadge } from '@/components/error'
import { MultiLineChart } from '@/components/chart/MultiLine'

import { ForecastType } from '@/types/api'
import { initialState } from '@/state'
import { getCity } from '@/utils/city'
import { getForecastHumidity, getForecastTemperature, getForecastUV, getForecastWind } from '@/utils/forecastData'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [city, setCity] = useState<string>('');
    const [error, setError] = useState<{error: boolean; message?: string}>({error: false});
    const [forecast, setForecast] = useState<ForecastType>(initialState)
    
    const temperature = getForecastTemperature(forecast.forecast.forecastday);
    const humidity = getForecastHumidity(forecast.forecast.forecastday);
    const uv = getForecastUV(forecast.forecast.forecastday);
    const wind = getForecastWind(forecast.forecast.forecastday)

    async function handleGetCity() {
        const resGetCity = await getCity(city)
        if(resGetCity.error) return setError(resGetCity);
        if(resGetCity.data) {
            setForecast(resGetCity.data)
            setError({error: false})
        }
    }
    
  return (
    <main
      className={`flex flex-col items-center lg:items-stretch lg:flex-row h-screen w-screen ${inter.className}`}
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
            { error.error && <ErrorBadge errorMessage={error.message!} /> }
            <button
                onClick={handleGetCity}
                className='inline-block w-full mt-4 mb-8 rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500'
            >
                Confirmar
            </button>
            <WeatherCard
                location={forecast.location}
                data={forecast.current}
            />
        </div>
        <div className='w-full grid lg:grid-cols-2 lg:grid-rows-2 p-4'>
            <MultiLineChart data={temperature}/>
            <LineChart data={humidity} />
            <LineChart data={uv} />
            <LineChart data={wind} />
        </div>
    </main>
  )
}
