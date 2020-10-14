const request = require('request');


const url = "http://api.weatherstack.com/current?access_key=31cb5b61f50d92f28218ad6737f8a52e&query=37.8267,-122.4233"

request({url: url},(error,response)=>{
   const data= JSON.parse(response.body);
   console.log(data.current);

})