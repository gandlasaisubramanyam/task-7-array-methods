var request=new XMLHttpRequest();

  request.open("GET","https://restcountries.com/v2/all");

  request.send();

request.onload=function(){
    var res = JSON.parse(request.response);
    console.log(res);

    //1.Get all the countries from the Asia continent /region using the Filter function
    var ans=res.filter((ele)=>ele.region=="Asia");
        console.log(ans);

//2.Get all the countries with a population of less than 2 lakhs using Filter function
    var popu = res.filter((x)=>x.population>200000)
    console.log(popu);

//3.Print the following details name, capital, flag using forEach function
        res.forEach(x => {
            console.log(`${x.name} ${x.capital} ${x.flag}`)
            
        });
//4.Print the total population of countries using reduce function
var total=res.reduce((x,y)=>x+y.population,0);
       console.log(total);

//5.Print the country which uses US Dollars as currency.
var answer = res.filter((ele) => (ele.currencies!=undefined));  
var res = answer.filter((ele)=>(ele.currencies[0].code=="USD")).map((country)=>country.name);    
console.log(res);
    
}