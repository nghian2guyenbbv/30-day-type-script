interface WeatherCondition {
    value: string;
}

interface CurrentCondition {
    temp_C: string;
    FeelsLikeC: string;
    humidity: string;
    weatherDesc: WeatherCondition[];
}

interface WeatherResponse {
    current_condition: CurrentCondition[];
    nearest_area: Array<{
        areaName: Array<{value: string}>;
        country: Array<{value: string}>;
        
    }>;
}

async function getWeather(city: string): Promise<void> {
 const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;
    try {
        console.log(`Download data for city :${city}`);
        const response = await fetch(url);
        if(!response.ok) {
            console.log("Cant connect this api");
        }
        const data = (await response.json()) as WeatherResponse;
        const current = data.current_condition[0];
        const area = data.nearest_area[0];
        const cityName = area.areaName[0].value;
        const country = area.country[0].value;
        const temp = current.temp_C;
        const feelsLike = current.FeelsLikeC;
        const humidity = current.humidity;
        const description = current.weatherDesc;
        
        console.log("\n=================================");
        console.log(`📍 Thành phố:  ${cityName}, ${country}`);
        console.log(`🌡️ Nhiệt độ:   ${temp}°C (Cảm giác như: ${feelsLike}°C)`);
        console.log(`💧 Độ ẩm:      ${humidity}%`);
        console.log(`🌤️ Trạng thái:  ${description}`);
        console.log("=================================\n");
         
        
    }catch (error){
        if(error instanceof Error){
            console.log("error");
        } else {
            console.log("Unknown error")
        }

    }

   
}

 async function main() {
        await getWeather("Hanoi");
        await getWeather("sai gon");
    }

main();