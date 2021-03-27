var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=lahore,islamabad,karachi,quetta,peshawar&appid=f7734e4de3d03681932a95bfabdf8edf')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
    
      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - "+descValue;
      temp.innerHTML = "Temp - "+tempValue;
      input.value ="";
    
    })
    .catch(err => alert("Invalid Result!"));
  })

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f7734e4de3d03681932a95bfabdf8edf')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Invalid Result!"));
})
