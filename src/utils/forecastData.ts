import { ForecastDayType } from "@/types/api";

export function getForecastTemperature(arr: ForecastDayType[]) {
    const tmp: any = [];
    arr.forEach((day) => {
        tmp.push({
            date: day.date,
            day: {
                maxtemp_c: day.day.maxtemp_c,
                mintemp_c: day.day.mintemp_c
            }
        })
    })

    return tmp;
}

export function getForecastHumidity(arr: ForecastDayType[]) {
    const tmp = [];
    arr.forEach((day) => {
        tmp.push({
            date: day.date,
            day: {
                avghumidity: day.day.avghumidity
            }
        })
    });
}

export function getForecastWind(arr: ForecastDayType[]) {
    const tmp = [];
    arr.forEach((day) => {
        tmp.push({
            date: day.date,
            day: {
                maxwind_kph: day.day.maxwind_kph
            }
        })
    });
}

export function getForecastUV(arr: ForecastDayType[]) {
    const tmp = [];
    arr.forEach((day) => {
        tmp.push({
            date: day.date,
            day: {
                uv: day.day.uv
            }
        })
    });
}