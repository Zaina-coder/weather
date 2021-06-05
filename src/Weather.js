import React from "react" ;
import axios from 'axios';
import Loader from "react-loader-spinner";



export default function Weather (props){
    function showTemperature(response){
        alert (`the weather is ${response.data.name} is ${response.data.main.temp} °C`)
    
    }
    
     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
    return <h2>
        hello 
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
         
         
    </h2>;
}