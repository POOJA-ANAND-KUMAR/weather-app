const request = require('request');


const url = "http://api.weatherstack.com/current?access_key=31cb5b61f50d92f28218ad6737f8a52e&query=37.8267,-122.4233&units=f"
//const url = "http://api.weatherstack.com/current?access_key=31cb5b61f50d92f28218ad6737f8a52e&query="
// request({url: url},(error,response)=>{
//    const data= JSON.parse(response.body);
//    console.log(data.current);

// })
request({url: url,json:true},(error,response)=>{
    if(error)
    {
        console.log("Unable to connect to weather services");
    }
    else if(response.body.error){
        console.log("unable to find location");
    }
    else
   {
    console.log(response.body.current.weather_descriptions[0]+" .It is Currently  "+ response.body.current.temperature+"  degrees but it feels like "+ response.body.current.feelslike +" degrees" )
}
});

//Geocoding : taking an address and converting into latitude and longitudenal pair
//Address -> Lat/Long -> Weather

const geocodeurl="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicG9vamFhMTg5MiIsImEiOiJja2dhNHNtcTAwM3FyMnFwZmZqeHNoODJpIn0.d3iOLHDkeEyqcnJMvDBbJw&limit=1"

request({url: geocodeurl,json:true},(error,response)=>{
const latitude=response.body.features[0].center[1];
const longitude=response.body.features[0].center[0];
     console.log(latitude,longitude);
     });
 