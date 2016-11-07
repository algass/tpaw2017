
window.onload=function(){
  document.getElementByld("searchCity").addEventListener("submit", function(){
    var city=document.getElementByld("city").value;
    searchCity(city);
  });
}
function searchCity(_city){
  console.log('searchCity',Hello from'+_city);
function searchCity(_city){
    var request =new XMLHttpRequest();
request.open('GET',
             'http://api.openweathermap.org/data/2.5/weather?q=’+_city+’&appid=0ada432b59deb9716c357092c5f79be6',true);
request.onload =function(){
if(request.status >=200&& request.status <400){
// Success!
  var responseJSON = JSON.parse(request.responseText);
  var resp = request.responseText;
  var icon =responseJSON weather.icon;
  var temp =responseJSON weather.main;
  var humidity = responseJSON.main.humidity;
  var cloud = responseJSON. Cloudiness;
  var wind = responseJSON.wind.speed;
  
//VOTRE CODE JS pour afficher les données météo sur votre page
// en mettant à jour la DIV “result”
  document.getElementById('result1').innerHTML =icon;
  document.getElementById('result2').innerHTML =temp;
  document.getElementById('result3').innerHTML =humidity;
  document.getElementById('result4').innerHTML =cloud;
  document.getElementById('result5').innerHTML =wind
  
}
else{
// We reached our target server, but it returned an error
} 
};
request.onerror =function(){
// There was a connection error of some sort
};
    request.send();
}         
                      
              
              }
function searchLatLng(_lat,_lng){
    console.log(searchLatLng,'Hello from'+_lat+','+lng);
    
     
    
  }
