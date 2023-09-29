//b.
//https://restcountries.com/v3.1/all

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    var result = res.filter((data)=>data.population<=200000);

    result.forEach(element => {
        console.log(element.name.common);
    }); 
}