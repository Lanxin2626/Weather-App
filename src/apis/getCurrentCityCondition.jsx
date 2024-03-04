const getCurrentCityCondition = ({CITY}) =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
        .then((res) => res.json() )

export default getCurrentCityCondition;