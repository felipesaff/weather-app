import { ForecastType } from "@/types";

export const initialState: ForecastType = {
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