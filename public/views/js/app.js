console.log("Javascript file kicked off");
/*fetch('http://localhost:3000/weather?address=!').then((response)=>{
	response.json().then((data)=>{
		if(data.error)
		{
			console.log("Cannot find Address !! Please try another search");
		}
		else
		{console.log(data.Address);}
	});
	
});
*/

document.getElementById("mybtn").addEventListener("click",(e)=>{
	
	
var country= document.getElementById("country").value;
var state= document.getElementById("state").value;
var city= document.getElementById("city").value;
var zipcode= document.getElementById("zipcode").value;
var x= document.getElementById("error");
 var y= document.getElementById("result");
 

if(zipcode.length!=0)
	{
		fetch('http://localhost:3000/weather?address=' + city+','+state+','+country+','+zipcode).then((response)=>{
			response.json().then((data)=>{
				if(data.error)
				{

					x.style.display="block";
					document.getElementById("error").innerHTML="cannot find address!! Please try another search";
				}
				else
				{
					x.style.display="none";
					y.style.display="block";
					document.getElementById("address").innerHTML=data.Address;
					document.getElementById("cur").innerHTML=data.Current_temperature;
					document.getElementById("desc").innerHTML=data.Description;
					document.getElementById("high").innerHTML=data.High_temperature;
					document.getElementById("hum").innerHTML=data.Humidity;
					document.getElementById("low").innerHTML=data.Low_temperature;
					document.getElementById("sky").innerHTML=data.Sky;
					if(data.Rain_Chances==="")
					{
					document.getElementById("rain").innerHTML="Not Available for your location!!";
				}
				else
				{
					document.getElementById("rain").innerHTML=data.Rain_Chances;

					

				}
				}
			});
		});
}
else
{
	fetch('http://localhost:3000/weather?address='+city+','+state+','+country).then((response)=>{
			response.json().then((data)=>{
				if(data.error){
					y.style.display="none";
					x.style.display="block";

					document.getElementById("error").innerHTML="cannot find address!! Please try another search";
				}
				else{
					x.style.display="none";
					y.style.display="block";
					document.getElementById("address").innerHTML=data.Address;
					document.getElementById("cur").innerHTML=data.Current_temperature;
					document.getElementById("desc").innerHTML=data.Description;
					document.getElementById("high").innerHTML=data.High_temperature;
					document.getElementById("hum").innerHTML=data.Humidity;
					document.getElementById("low").innerHTML=data.Low_temperature;
					
					document.getElementById("sky").innerHTML=data.Sky;
					if(data.Rain_Chances==="")
					{
					document.getElementById("rain").innerHTML="Not Available for your location!!";
				}
				else
				{
					document.getElementById("rain").innerHTML=data.Rain_Chances;

					

				}
				
				}
			});
		});
}

});

document.getElementById("city").addEventListener("keyup",(e)=>{
	
	if(event.keyCode===13){
var country= document.getElementById("country").value;
var state= document.getElementById("state").value;
var city= document.getElementById("city").value;
var zipcode= document.getElementById("zipcode").value;
var x= document.getElementById("error");
 var y= document.getElementById("result");
 document.getElementById("mybtn").click();
}
if(zipcode.length!=0)
	{
		fetch('http://localhost:3000/weather?address=' + city+','+state+','+country+','+zipcode).then((response)=>{
			response.json().then((data)=>{
				if(data.error)
				{

					x.style.display="block";
					document.getElementById("error").innerHTML="cannot find address!! Please try another search";
				}
				else
				{
					x.style.display="none";
					y.style.display="block";
					document.getElementById("address").innerHTML=data.Address;
					document.getElementById("cur").innerHTML=data.Current_temperature;
					document.getElementById("desc").innerHTML=data.Description;
					document.getElementById("high").innerHTML=data.High_temperature;
					document.getElementById("hum").innerHTML=data.Humidity;
					document.getElementById("low").innerHTML=data.Low_temperature;
					document.getElementById("sky").innerHTML=data.Sky;
					if(data.Rain_Chances==="")
					{
					document.getElementById("rain").innerHTML="Not Available for your location!!";
				}
				else
				{
					document.getElementById("rain").innerHTML=data.Rain_Chances;

					

				}
				}
			});
		});
}
else
{
	fetch('http://localhost:3000/weather?address='+city+','+state+','+country).then((response)=>{
			response.json().then((data)=>{
				if(data.error){
					y.style.display="none";
					x.style.display="block";

					document.getElementById("error").innerHTML="cannot find address!! Please try another search";
				}
				else{
					x.style.display="none";
					y.style.display="block";
					document.getElementById("address").innerHTML=data.Address;
					document.getElementById("cur").innerHTML=data.Current_temperature;
					document.getElementById("desc").innerHTML=data.Description;
					document.getElementById("high").innerHTML=data.High_temperature;
					document.getElementById("hum").innerHTML=data.Humidity;
					document.getElementById("low").innerHTML=data.Low_temperature;
					
					document.getElementById("sky").innerHTML=data.Sky;
					if(data.Rain_Chances==="")
					{
					document.getElementById("rain").innerHTML="Not Available for your location!!";
				}
				else
				{
					document.getElementById("rain").innerHTML=data.Rain_Chances;

					

				}
				
				}
			});
		});
}

});


/*weatherform.addEventListener('submit', (e)=>{
	e.preventDefault(); 
	
})*/