import { ForecastDayType } from "@/types/api";
import { ChartData } from "@/types/chart";

export function getForecastTemperature(arr: ForecastDayType[]): ChartData[] {
    const tmp: ChartData[] = [
        { labels: [], data: [], label: 'Max C°', color: "#F06543" },
        { labels: [], data: [], label: 'Min C°', color: "#06D6A0" }
    ];
    arr.forEach((day) => {
        tmp[0].labels.push(day.date);
        tmp[0].data.push(day.day.maxtemp_c);
        tmp[1].labels.push(day.date);
        tmp[1].data.push(day.day.mintemp_c);
    })

    return tmp;
}

export function getForecastHumidity(arr: ForecastDayType[]): ChartData {
    const tmp: ChartData = {
        labels: [],
        data: [],
        label: 'Humidade',
        color: '#FFD400'
    };
    arr.forEach((day) => {
        tmp.labels.push(day.date);
        tmp.data.push(day.day.avghumidity);
    });
    return tmp;
}

export function getForecastWind(arr: ForecastDayType[]): ChartData {
    const tmp: ChartData = {
        labels: [],
        data: [],
        label: 'Vento - km/h',
        color: '#454372'
    };
    arr.forEach((day) => {
        tmp.labels.push(day.date);
        tmp.data.push(day.day.maxwind_kph);
    });
    return tmp;
}

export function getForecastUV(arr: ForecastDayType[]): ChartData {
    const tmp: ChartData = {
        labels: [],
        data: [],
        label: 'UV',
        color: '#AB2346'
    };
    arr.forEach((day) => {
        tmp.labels.push(day.date);
        tmp.data.push(day.day.uv)
    });
    return tmp;
}