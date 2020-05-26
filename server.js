 const path= require('path');
 const express=require('express');
 const app=express();
 const port=process.env.PORT || 3000;
 const request = require('request');
 const hbs=require('hbs');
 app.set('view engine','hbs');
 
const viewpath=path.join(__dirname,'/public/views');
app.set('views',viewpath);
 app.use(express.static(viewpath));
 hbs.registerPartials(__dirname+'/public/partials');

 app.get('/',(req, res)=>
 {
 	
 	res.render('index',{
 		title:'Weather',
 		name:'Ankur jarial'

 	});
 });
 app.get('/about',(req,res)=>
 {
 	res.render('about',{
 		title:'About',
 		name:'Ankur Jarial'
 	});
 });
 app.get('/help',(req,res)=>
 {
 	res.render('help.hbs',{
 		title:'Help',
 		name:'Ankur Jarial'
 	});
 });
 app.get('/weather',(req,res)=>
 {
 	if(!req.query.address)
 	{	res.send({
 			error:'Please provide an address'
 	});
 		
 	}
 	request({
	url:'https://geocoder.ls.hereapi.com/search/6.2/geocode.json?apiKey=Zv_SP_FD6abKTdAk77pk_UoYFq1TeJON9BhA01y4ro0&searchtext='+req.query.address,
	json:true	
},(error,{response,body}={})=>
{
	if(error)
	{
		return res.send({error:'cant find the location'});
	}
	else if(body.Response.View.length===0)
	{
	return res.send({error:'Entered address is invalid'});
	}
	else{
	const Address=body.Response.View[0].Result[0].Location.Address.Label;
	const latitude=body.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
	const longitude=body.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
	request({
		url:'https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=Zv_SP_FD6abKTdAk77pk_UoYFq1TeJON9BhA01y4ro0&product=observation&latitude='+latitude+'&longitude='+longitude,
		json:true
	},(error,{response,body}={})=>
	{
		if(error)
		{
			return res.send({error:'Cant show forecast '});
		}

		else
		{
			res.send({
				Address : Address,
				Description: body.observations.location[0].observation[0].description,
				Sky :body.observations.location[0].observation[0].skyDescription,
				Current_temperature:body.observations.location[0].observation[0].temperature,
				High_temperature:body.observations.location[0].observation[0].highTemperature,
				Low_temperature:body.observations.location[0].observation[0].lowTemperature,
				 Humidity :body.observations.location[0].observation[0].humidity,
				Rain_Chances :body.observations.location[0].observation[0].precipitationDesc
			})
			
					}
	});
}
});
 	
 });

 app.get('*',(req,res)=>
 {
 	res.render('404',{
 		title:'404 Not Found',
 		name:'Ankur Jarial'
 	});
 });
 app.listen(port,()=>{
 	console.log("Server is running smoothly on port"+ port);
 });