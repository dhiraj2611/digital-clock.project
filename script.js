function displayTime(){

    var time = new Date();
    var hours =time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var boss = document.getElementById('boss');

    if(hours > 12){
      hours = hours-12;
    }
    if(hours <15){
      "0" + time.getHours();
    }

    if(minutes < 10){
      "0" + time.getMinutes();
    }
    
    if(seconds < 10){
      "0" + time.getSeconds();
    }
    
    if(hours >= 12){
      boss.innerHTML ="AM";
    }
    else{
      boss.innerHTML ="PM";
    }
   
   

    document.getElementById('hour').innerHTML = hours + "<br>hours";
    document.getElementById('min').innerHTML = minutes + "<br>mins";
    document.getElementById('sec').innerHTML = seconds + "<br>secs";
    
}
setInterval(displayTime, 1000);

displayTime();
function displayTime(){

  var time = new Date();
  var hours =time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var boss = document.getElementById('boss');

  if(hours < 12){
    hours = hours-12;
  }
  else if(hours >15){
    "0" + time.getHours();
  }

  else if(minutes > 20){
    "0" + time.getMinutes();
  }
  
  if(seconds < 10){
    "0" + time.getSeconds();
  }
  
  if(hours >= 12){
    boss.innerHTML ="AM";
  }
  else{
    boss.innerHTML ="PM";
  }
 
 

  document.getElementById('hour').innerHTML = hours + "<br>hours";
  document.getElementById('min').innerHTML = minutes + "<br>mins";
  document.getElementById('sec').innerHTML = seconds + "<br>secs";
  
}
setInterval(displayTime, 1000);

displayTime();
function displayShow(){
  
    var time = new Date();
    var hours = time.getHours();
    

    let waketime = document.getElementById("day-wake").value
    let lunchtime = document.getElementById("day-lunch").value
    let naptime = document.getElementById("day-evening").value
    let nighttime = document.getElementById("day-night").value
    if(waketime == hours){
        document.getElementById("bts").innerHTML = "GOOD MORNING!! WAKE UP !!";
        document.getElementById("ntr").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("dev").style.backgroundImage = "url('Component 30 – 1.png')"
    
        

    }
  
    if (lunchtime == hours) {

        document.getElementById("bts").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById("ntr").innerHTML = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("dev").style.backgroundImage = "url('Group 5183.png')";
      }
      if (naptime == hours) {
        document.getElementById("bts").innerHTML = "GOOD EVENING !!";
        document.getElementById("ntr").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("dev").style.backgroundImage =  "url('lunch_image.png')";

      }
      if (nighttime == hours) {
        document.getElementById("bts").innerHTML = "GOOD NIGHT !!";
        document.getElementById("ntr").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("dev").style.backgroundImage = "url('Component 32 – 1.png')";
      
      }
    
      displayValue()
    }


    function displayValue(){
        let waketime = document.getElementById("day-wake").value
        let lunchtime = document.getElementById("day-lunch").value
        let naptime = document.getElementById("day-evening").value
        let nighttime = document.getElementById("day-night").value
    
        var wakeValue = document.getElementById("day-wake");
        var value1 = wakeValue.options[wakeValue.selectedIndex].text;
    
        var lunchValue = document.getElementById("day-lunch");
        var value2 = lunchValue.options[lunchValue.selectedIndex].text;
    
        var napValue = document.getElementById("day-evening");
        var value3 = napValue.options[napValue.selectedIndex].text;
    
        var nightValue = document.getElementById("day-night");
        var value4 = nightValue.options[nightValue.selectedIndex].text;
        
        if (waketime == "none") {
          document.getElementById("wake").innerHTML = "";
        } else {
          document.getElementById("wake").innerHTML =
            "Wake up time : " + value1;
        }
    
        if (lunchtime == "none") {
          document.getElementById("lunch").innerHTML = "";
        } else {
          document.getElementById("lunch").innerHTML =
            "Lunch time : " + value2;
        }
    
        if (naptime == "none") {
          document.getElementById("nap").innerHTML = "";
        } else {
          document.getElementById("nap").innerHTML = "Nap time : " + value3;
        }
        
        if (nighttime == "none") {
            document.getElementById("night").innerHTML = "";
          } else {
            document.getElementById("night").innerHTML = "night time : " + value4;
          }
      }

      let digitalClock5 = () => {
        let date = new Date();
        let hours1 = date.getHours();
        let minite1 = date.getMinutes();
      
        let time = hours1;
       
        let barry1 = document.getElementById("barry");
      
        if (time < 12) {
         
          barry1.style.backgroundImage = "url('Component 30 – 1.png')";
        } else if (time >= 12 && time < 16) {
         
            barry1.style.backgroundImage = "url('Component 31 – 1.png')";
        } else if (time >= 16 && time < 20) {
          
            barry1.style.backgroundImage = "url('lunch_image.png')";
        } else if (time >= 20 && time < 24) {
          
            barry1.style.backgroundImage = "url('Component 32 – 1.png')";
        } else {
         
            barry1.style.backgroundImage = "url('Component 30 – 1.png')";
        }
      };
      digitalClock5();