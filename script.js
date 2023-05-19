//setando as variáveis com as api's
const apiKey= "9e2e2ed7d13798d04d806880d2ff67c3";
//const apiCountryURL= "https://flagsapi.com//flat/64.png";

const cityInput = document.querySelector("#city-input");//setando o valor da variável do input de pesquisa
const searchBtn = document.querySelector("#search");//setando a variável com o botão de pesquisa

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement= document.querySelector("#desc");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
const minElement = document.querySelector("#temperature-min");
const maxElement = document.querySelector("#temperature-max");

//funções
const getWeatherData = async(city) =>{

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    return data;
};

const showWeatherData = async (city) =>{ //sempre que declarar uma variável como async ela tem uma função await
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = `${parseInt(data.main.temp)}`;//isso entre parenteses quer dizer que o tempelement que antes foi declarado que é igual ao documento em html, agora irá ser substuido pelo caminho que se encontra as informações na api como aí descritos
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png` );
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
    minElement.innerText = `min ${parseInt(data.main.temp_min)} ºC`;
    maxElement.innerText = `max ${parseInt(data.main.temp_max)} ºC`;
};

//eventos
searchBtn.addEventListener("click", (e) =>{ //escutador no botão para fazer a função e
    e.preventDefault();

    const city = cityInput.value;//city === a variável do input da cidade
    
    showWeatherData(city);
    //console.log(city);fazendo teste da variável no console.
})