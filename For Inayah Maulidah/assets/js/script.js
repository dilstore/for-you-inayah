var fontSize = 40;
if (window.screen.width > 700) 
  fontSize = 55 ;
else if (window.screen.width > 1200)
  fontSize = 80; 
var vara = new Vara(
  "#container",
  "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
  [
    {
      text : "So, when I die",
      y: 125,
      fromCurrentPosition: {y:false},
      delay :100,
      duration:1000
  },
  {
    text : "which I must do",
    y: 175,
    fromCurrentPosition: {y:false},
    delay:500,
    duration:1700
  },
{
    text : "Could it shine",
    y: 125,
    fromCurrentPosition: {y:false},
    delay:200,
    duration:1500
  },
{
    text : "down here with you?",
    y: 175,
    fromCurrentPosition: {y:false},
    delay:800,
    duration:1700
  },
  {
    text : "Cause my love is mine",
    y: 125,
    fromCurrentPosition: {y:false},
    delay :100,
    duration:1500
},
{
  text : "all mine",
  y: 175,
  fromCurrentPosition: {y:false},
  delay:500,
  duration:1700
},
{
  text : "I love, my, my, mine",
  y: 125,
  fromCurrentPosition: {y:false},
  delay:900,
  duration:2500
},
{
  text : "Nothing in the world",
  y: 175,
  fromCurrentPosition: {y:false},
  delay:2000,
  duration:1700
},
{
  text : "belongs to me",
  y: 125,
  fromCurrentPosition: {y:false},
  delay :100,
  duration:1500
},
{
text : "But my love, mine",
y: 175,
fromCurrentPosition: {y:false},
delay:500,
duration:1700
},
{
text : "all mine, all mine",
y: 125,
fromCurrentPosition: {y:false},
delay:900,
duration:2500
},
  ],

    {
      strokeWidth: 2,
      color:"#fff",
      fontSize:fontSize,
      textAlign:"center"
    }
  );
vara.ready(function(){
  var erase = true;
  vara.animationEnd(function(i, o){
    if (i == "no_erase") erase = false; 
    if (erase) {
      o.container.style.transition = 
      "opacity 1s 1s";
      o.container.style.opacity = 0;
    }
  });
});
