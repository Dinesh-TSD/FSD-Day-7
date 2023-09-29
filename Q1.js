//a.Get all the countries from Asia continent /region using Filter function
//https://restcountries.com/v3.1/all

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    var result = res.filter((data)=>data.region === "Asia");
    
    result.forEach(element => {
        console.log(element.name.common);
        console.log(element.continents);
    });  

}