var userLat = "1";
var userLon = "1";

$(document).ready(function(){
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
	userLat = position.coords.latitude;
	userLon = position.coords.longitude;
$("#data").html("latitude: " + userLat + "<br>longitude: " + userLon);


    $("input:radio[id=radio2]").click(function() {
	farenheit();
	});

    $("input:radio[id=radio1]").click(function() {
	celsius();
	});


getWeather();
});
}

var userUnits = "metric";
var weatherUrl = "";
var skycons = new Skycons({"color": "white"});
var description = "";
var hour ="";
//skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);

function farenheit() {
	userUnits = "imperial";
	$("#speedunits").html("m/h");
	getWeather();
}

function celsius() {
	userUnits = "metric";
	$("#speedunits").html("m/s");
	getWeather();
}

function getWeather(){
weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + userLat + "&lon=" + userLon + "&units=" + userUnits + "&APPID=5cc30da7a1f79cab20dd7467109fac7d";

$.getJSON(weatherUrl).then(function(data) {

	weathericon = data.list[0].weather[0].icon;
	hour = moment().format('H');
	switch(weathericon) {
		case "01d":
		skycons.set("icon1", Skycons.CLEAR_DAY);
		$("body").css({background: "linear-gradient(#009FFF, #D0E9F2)" });
		$("body").css({color: "#FFFF66" });
		break;

		case "01n":
        skycons.set("icon1", Skycons.CLEAR_NIGHT);
        $("body").css({background: "linear-gradient(#009FFF, #D0E9F2)" });
		$("body").css({color: "#FEFCD7" });
		break;

		case "02d":
		skycons.set("icon1", Skycons.PARTLY_CLOUDY_DAY);
		$("body").css({background: "linear-gradient(#72BBD8, #D0E9F2)" });
		$("body").css({color: "#fff" });
		break;

		case "02n":
        skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
        $("body").css({background: "linear-gradient(#2F3D8E, #59688C)" });
		$("body").css({color: "#FEFCD7" });
		break;

		case "03d":
		skycons.set("icon1", Skycons.PARTLY_CLOUDY_DAY);
		$("body").css({background: "linear-gradient(#72BBD8, #D0E9F2)" });
		$("body").css({color: "#fff" });
		break;

		case "03n":
        skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
        $("body").css({background: "linear-gradient(#2F3D8E, #59688C)" });
		$("body").css({color: "#FEFCD7" });
		break;

		case "04d":
		case "04n":
		skycons.set("icon1", Skycons.CLOUDY);
		$("body").css({background: "linear-gradient(#7B8EA0, #D0E9F2)" });
		$("body").css({color: "#eee" });
		break;

		case "09d":
		case "09n":
		skycons.set("icon1", Skycons.SLEET);
		$("body").css({background: "linear-gradient(#8399AE, #D0E9F2)" });
		$("body").css({color: "#eee" });
		break;

		case "10d":
		case "11d":
		case "10n":
		case "10n":
		skycons.set("icon1", Skycons.RAIN);
		$("body").css({background: "linear-gradient(#8399AE, #D0E9F2)" });
		$("body").css({color: "#eee" });
		break;


		case "13d":
		case "13n":
		skycons.set("icon1", Skycons.SNOW);
		$("body").css({background: "linear-gradient(#8399AE, #fff)" });
		$("body").css({color: "#eee" });
		break;

		case "50d":
		case "50n":
		skycons.set("icon1", Skycons.FOG);
		$("body").css({background: "linear-gradient(#8399AE, #fff)" });
		$("body").css({color: "#eee" });
		break;

		default:
		skycons.set("icon1", Skycons.CLEAR_DAY);
		$("body").css({background: "linear-gradient(#009FFF, #D0E9F2)" });
		$("body").css({color: "#FFFF66" });


	}

	$("#citydata").html(data.city.name + " , " + data.city.country);
	$("#timedata").html(moment().format('MMMM Do YYYY, H:mm'));
    $("#tempdata").html(data.list[0].main.temp);
    $("#mintempdata").html(data.list[0].main.temp_min);
    $("#maxtempdata").html(data.list[0].main.temp_max);
    $("#humiditydata").html(data.list[0].main.humidity);
    $("#pressuredata").html(data.list[0].main.pressure);
    $("#winddata").html(data.list[0].wind.speed);
    $("#descriptiondata").html(data.list[0].weather[0].description);
    $("#degrees").css("visibility", "visible");
    $("label").css("visibility", "visible");
    $(".location").css("visibility", "visible");
    $(".others").css("visibility", "visible");



    //console.log(data);
    skycons.play();
});

}

});






