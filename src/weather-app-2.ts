interface WeatherDesc {
    value: string;
}

interface CurrentCondition {
    FeelsLikeC: string;
    FeelsLikeF: string;
    humidity: string;
    weatherDesc: WeatherDesc[];
}

interface WeatherResponse {
    current_condition: CurrentCondition[];
    nearest_area: Array<{
        areaName: Array<{
            value: string;
        }>;
        country: Array<{value: string}>
    }>;
};

async function getCityWeather(city: string): Promise<void>{
    const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;
    try{
        console.log(`Fetch data from city: ${city}`);
        const response = await fetch(url);
        if(!response.ok){
            console.log('cant get data');
        }
        const weather = (await response.json()) as WeatherResponse;
        const humid = weather.current_condition[0].humidity;
        console.log(`do am o thanh pho ${city} la: ${humid}`);
    } catch (error){
        if(error instanceof Error){
            console.log('error');
        } else {
            console.log('unknow error');
        }

    }
}



    async function main() {
        
    await getCityWeather("Hanoi");
    await getCityWeather("saigon");
    } 

    main();

