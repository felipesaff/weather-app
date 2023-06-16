export type ForecastType = {
    location: Location
    current: Current
    forecast: ForecastDayType[]
}

export type Location = {
    name: string;
    region: string
}

export type Current = {
    temp_c: number;
    condition: {
        text: string;
        code: number;
        icon: string;
    }
    wind_kph: number;
    pressure_mb: number;
    humidity: number;
    uv: number
}

export type ForecastDayType = {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        maxwind_kph: number;
        avghumidity: number;
    }
    uv: number
}