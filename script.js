const API_KEY = "7a90e15230759a68c41a4213fb9138f1";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

        var data = await response.json();

        console.log(data);
    
        document.querySelector(".weather-city").innerHTML = data.name;
        document.querySelector(".weather-temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";
        
        
    
        if(data.weather[0].main =="Clouds"){
            weatherIcon.src = "Images/clouds.png";
        }
        else if(data.weather[0].main =="Clear"){
            weatherIcon.src = "Images/clear.png";
        }
        else if(data.weather[0].main =="Rain"){
            weatherIcon.src = "Images/rain.png";
        }
        else if(data.weather[0].main =="Drizzle"){
            weatherIcon.src = "Images/drizzle.png";
        }
        else if(data.weather[0].main =="Mist"){
            weatherIcon.src = "Images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }



}

searchBtn.addEventListener('click',()=>{
    checkweather(searchBox.value)
})


checkweather(city);