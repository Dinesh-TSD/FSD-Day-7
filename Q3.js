//c.
//https://restcountries.com/v3.1/all

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    res.forEach(function (country) {
        console.log('Name: ' + country.name.common);
        console.log('Capital: ' + country.capital);
        console.log('Flag: ' + country.flags.svg);
        console.log('------------------------');
      });
}