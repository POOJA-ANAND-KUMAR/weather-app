const request = require('request');

const forecast = (longitude,latitude,callback)=>{

    const url ='http://api.weatherstack.com/current?access_key=31cb5b61f50d92f28218ad6737f8a52e&query='+latitude+','+longitude+'&units=f';

    request({url: url,json:true},(error,response)=>
    {
        if(error)
         {
            callback("Unable to connect to weather services",undefined);
        }
         else if(response.body.error){
            callback("unable to find location",undefined);
        }
        else
        {
           // console.log(response.body.current.weather_descriptions[0]+" .It is Currently  "+ response.body.current.temperature+"  degrees but it feels like "+ response.body.current.feelslike +" degrees" )
           callback(undefined,response.body.current.weather_descriptions[0]+" .It is Currently  "+ response.body.current.temperature+"  degrees but it feels like "+ response.body.current.feelslike +" degrees")

        }

    });

}
module.exports = forecast;