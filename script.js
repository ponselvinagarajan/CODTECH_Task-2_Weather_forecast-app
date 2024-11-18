let apikey="3b43c4e75893c7d922e316f558e70cb2";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const cloud_snow=document.querySelector(".cloud-snow i");

async function cheackweather(city) {
    const response=await fetch( apiUrl + city + `&appid=${apikey}`);
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind_data").innerHTML=data.wind.speed +"KM/h";

    if(data.weather[0].main=="Clouds"){
        cloud_snow.className="bi bi-clouds-fill";
    }
    else if(data.weather[0].main=="Clear"){
        cloud_snow.className="bi bi-cloud-sun-fill";
    }
    else if(data.weather[0].main=="Rain"){
        cloud_snow.className="bi bi-cloud-rain-heavy-fill";
    }
    else if(data.weather[0].main=="Drizzle"){
        cloud_snow.className="bi bi-cloud-drizzle-fill";
    }
    else if(data.weather[0].main=="Mist"){
        cloud_snow.className="bi bi-cloud-snow-fill";
    }
    document.querySelector(".weather_data").style.display="block";
}
searchBtn.addEventListener("click" ,()=>{
    cheackweather(searchInput.value);
})
