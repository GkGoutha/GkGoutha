let search=document.getElementById('search'); //input tag

let temp=document.getElementById('temp')
let inputvalue=search.value

let getInfo=async(e) =>{
    let inputvalue=search.value
    if (search.value== "") {
        //error message
        alert("Please enter a city name before search..!!!")
    } else {
        //fetch the data from api
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response = await fetch(url)
        let data = await response.json() // fetching only json value
        console.log(data);
        
        temp.textContent=data.main.temp
    }
}