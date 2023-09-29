//d.
//https://restcountries.com/v3.1/all

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    var result = res.reduce((accumulator,element)=>accumulator+element.population,0);
    console.log(result);
    
}