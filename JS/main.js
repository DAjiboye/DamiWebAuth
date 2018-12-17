window.onload = function() {
 init();
}

function myFunctionbright/dark()
{   
    $("body").css("background-color", #9d9da2);
}


function myFunction() {

    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Feedback Slider
function ratingchanges () {
if  (rating < 20) {
document.getElementById('feedbackslider').style.background = "#a00303";
}
}

	
// Feedback Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("rating");
output.innerHTML = slider.value;

slider.onchange = function() {
  output.innerHTML = this.value;
  console.log( this.value);
  //sliderVal = this.value;
  createbox(this.value);
}		
	
// Video songs
document.getElementById('KillShotclk').addEventListener('click', video01);
document.getElementById('Lovethewayclk').addEventListener('click', video02);
document.getElementById('Notafraidclk').addEventListener('click', video03);
document.getElementById('RapGodclk').addEventListener('click', video04);
document.getElementById('WhenI’mgoneclk').addEventListener('click', video05);
document.getElementById('Withoutmeclk').addEventListener('click', video06);
document.getElementById('RealSlimShadyclk').addEventListener('click', video07);
document.getElementById('Venomclk').addEventListener('click', video08);
document.getElementById('Fallclk').addEventListener('click', video09);
document.getElementById('GutsOverGloryclk').addEventListener('click', video10);	
	
// Calender
document.getElementById("calmonth1").addEventListener("click", function() {
    alert("No events for January");
}, false);

document.getElementById("calmonth2").addEventListener("click", function() {
    alert("No events for February!");
}, false);

document.getElementById("calmonth3").addEventListener("click", function() {
    alert("No events for March!");
}, false);

document.getElementById("calmonth4").addEventListener("click", function() {
    alert("No events for April!");
}, false);

document.getElementById("calmonth5").addEventListener("click", function() {
    alert("No events for May!");
}, false);

document.getElementById("calmonth6").addEventListener("click", function() {
    alert("No events for June!");
}, false);

document.getElementById("calmonth7").addEventListener("click", function() {
    alert("No events for July!");
}, false);

document.getElementById("calmonth8").addEventListener("click", function() {
    alert("No events for August!");
}, false);

document.getElementById("calmonth9").addEventListener("click", function() {
    alert("No events for September!");
}, false);

document.getElementById("calmonth10").addEventListener("click", function() {
    alert("No events for October!");	
}, false);

document.getElementById("calmonth11").addEventListener("click", function() {
    alert("No events for November!");
}, false);

document.getElementById("calmonth12").addEventListener("click", function() {
    alert("No events for December!");
}, false);	
	
  // var person = prompt("Whats your name?");
  // var x = document.getElementById("top");
 // var name = document.getElementById("name");
 
  // menuhover = document.getElementById("shopdisk");
 
 // var textcolour = prompt("Whats colour text do you want?");
// x.style.color = textcolour;
 // if (textcolour != blue || red || orange || yellow || green)
	  // x.style.color = textcolour;
 // name.innerHTML = person;

// menuhover.addEventListener("mouseover", mousehoverin, false);
// menuhover.addEventListener("mouseout", mousehoverout, false);
 
 // alert("Welcome");
// }

window.changeColour = function(value)
{

    document.getElementById("rectangle").style.backgroundColor;
    switch(value)
    {
        case 'Red':
        shirtcolor = "#FF0000";
        break;
        case 'Blue':
            shirtcolor = "#0000FF";
        break;
        case 'Green':
            shirtcolor = "#00FF00";
        break;
		 case 'Yellow':
            shirtcolor = "#FFFF00";
        break;
    }
    document.getElementById("rectangle").style.backgroundColor = shirtcolor;
}

var menuhover;



function mousehoverin() {
    document.getElementById("shopdisk")
	img.setVisible(false);
}


function mousehoverout() {
    document.getElementById("shopdisk")
	img.setVisible(true);
}


///video
function video01()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/FxQTY-W6GIo';
	console.log("pressed");
}

function video02()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/uelHwf8o7_U';
	console.log("pressed");
}

function video03()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/j5-yKhDd64s';
	console.log("pressed");
}

function video04()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/XbGs_qK2PQA';
}

function video05()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/1wYNFfgrXTI';
	console.log("pressed");
}

function video06()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/YVkUvmDQ3HY';
	console.log("pressed");
}

function video07()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/eJO5HU_7_1w';
	console.log("pressed");
}

function video08()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/8CdcCD5V-d8';
	console.log("pressed");
}

function video09()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/MfTbHITdhEI';
	console.log("pressed");
}

function video10()
{
   document.getElementById('video').src = 'https://www.youtube.com/embed/0AqnCSdkjQ0';
	console.log("pressed");
}


function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "footernavbar") {
    x.className += " responsive";
  } else {
    x.className = "footernavbar";
  }
}

// Toggle background
window.changeColour = function(value)
{

    document.body.style.backgroundColor;
    switch(value)
    {
        case 'Dark':
        backColor = "#171616";
        break;
        case 'Bright':
        backColor = "#E5E4E2";
        break;

    }
    document.body.style.backgroundColor = backcolor;
}
