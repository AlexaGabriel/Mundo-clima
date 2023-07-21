//variaveis
const apiKey = "c8007d055d079dec9e75a67da0000591"

const apiCountryURL = "https://flagsapi.com/:country_code/flat/64.png"

const CityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const wheatericonelement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")
const wheathercontainer = document.querySelector("#weather-data")



//Functions
const getWheatherdata = async(city)=>{
    const apiwheatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c8007d055d079dec9e75a67da0000591&lang=pt_br`

    const res = await fetch(apiwheatherURL);
    const data = await res.json();
   
    return data;
};
const showweatherData = async (city) =>{
    const data = await getWheatherdata(city);
    cityElement.innerHTML = data.name
    tempElement.innerHTML = parseInt(data.main.temp)
    descElement.innerHTML = (data.weather[0].description)
    wheatericonelement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)
    umidityElement.innerHTML = (`${data.main.humidity}%`)
    windElement.innerHTML = (`${data.wind.speed}km/hrs`)

    wheathercontainer.classList.remove("hide")
};
//Events
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var city = CityInput.value;
    showweatherData(city)
});
CityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
    const city = e.target.value;
    showweatherData(city)
    }
})