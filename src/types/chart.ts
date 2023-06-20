export type ChartTemperature = {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
    }
}

export type ChartHumidity = {
    date: string;
    day: {
        avghumidity: number;
    }
}

export type ChartUV = {
    date: string;
    day: {
        uv: number;
    }
}

export type ChartWind = {
    date: string;
    day: {
        maxwind_kph: number
    }
}