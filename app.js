


let apiKey = "453bec0f92cfe1098067b6933f8162c2";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let seacrh = document.getElementById("input-city");
let addImg = document.getElementById("weather-img");

async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json();
    console.log(data)
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("cities").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
    document.getElementById("feel").innerHTML = "Feeling: " + Math.round(data.main.feels_like) + "°C";
    document.getElementById("max").innerHTML = Math.round(data.main.temp_max) + "°C";
    document.getElementById("min").innerHTML = Math.round(data.main.temp_min) + "°C";
    document.getElementById("type").innerHTML = data.weather[0].main;
    if(data.weather[0].main == "Clear"){
        addImg.src = "images/weather.png"
    }
    else if(data.weather[0].main == "Clouds"){
        addImg.src = "images/rainy.png"
    }
    else if(data.weather[0].main == "Haze"){
        addImg.src = "images/haz.png"
    }
    else{
        addImg.src = "images/weather.png"
    }
}
function searchcity() {
    checkWeather(seacrh.value);
}


let defaultSet = "karachi";

checkWeather(defaultSet);

