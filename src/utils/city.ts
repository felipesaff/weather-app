export async function getCity(city: string) {
    if(city.length < 3) return {error: true, message: 'Digite pelo menos 3 caracteres'};

    const res = await fetch(`/api/forecast?city=${city}`);
    if(!res.ok) return {error: true, message: res.statusText};
    const data = await res.json()
    .then(json => json.data)

    return { data }
}