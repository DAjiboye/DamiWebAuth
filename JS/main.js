var setColour;
// changing backgrund colour and saving it in local
window.onload = function() {
	
 document.getElementById("top1").style.backgroundColor = localStorage.getItem("backgroundcolor1");	
 document.getElementById("top2").style.backgroundColor = localStorage.getItem("backgroundcolor1");
 document.getElementById("top3").style.backgroundColor = localStorage.getItem("backgroundcolor1");
 document.getElementById("top4").style.backgroundColor = localStorage.getItem("backgroundcolor1");
 document.getElementById("top5").style.backgroundColor = localStorage.getItem("backgroundcolor1");
 document.getElementById("top7").style.backgroundColor = localStorage.getItem("backgroundcolor1");
 document.getElementById("top8").style.backgroundColor = localStorage.getItem("backgroundcolor1");
 document.getElementById("top6").style.backgroundColor = localStorage.getItem("backgroundcolor1");
 document.body.style.backgroundColor = localStorage.getItem("backgroundcolor1");
	
 init();

}

// form validation, making user input is required
function required()
{
var empt = document.form1.text1.value;
var empt2 = document.form1.text2.value;
if (empt == "" || empt2 == "")
{
alert("Details not accepted \n Reason: All fields are not filled");
return false;
}
else 
{
alert('Thank you for subscribing.');
return true; 
}
}

// bright colour settings
function myFunctionbright() {
    document.body.style.backgroundColor = "#9d9da2";
	document.getElementById("top1").style.backgroundColor = "#B3B3B3";
	document.getElementById("top2").style.backgroundColor = "#B3B3B3";
	document.getElementById("top3").style.backgroundColor = "#B3B3B3";
	document.getElementById("top4").style.backgroundColor = "#B3B3B3";
	document.getElementById("top5").style.backgroundColor = "#B3B3B3";
	document.getElementById("top6").style.backgroundColor = "#B3B3B3";
	document.getElementById("top7").style.backgroundColor = "#B3B3B3";
	document.getElementById("top8").style.backgroundColor = "#B3B3B3";
	setcolour2 = "#9d9da2"
	setColour = "#B3B3B3"
    localStorage.setItem("backgroundcolor1", setColour);

}
// dark colour settings
function myFunctiondark() {
    document.body.style.backgroundColor = "#171616";
	document.getElementById("top1").style.backgroundColor = "#3C3C3C";
	document.getElementById("top2").style.backgroundColor = "#3C3C3C";
	document.getElementById("top3").style.backgroundColor = "#3C3C3C";
	document.getElementById("top4").style.backgroundColor = "#3C3C3C";
    document.getElementById("top5").style.backgroundColor = "#3C3C3C";
	document.getElementById("top6").style.backgroundColor = "#3C3C3C";
    document.getElementById("top7").style.backgroundColor = "#3C3C3C";
	document.getElementById("top8").style.backgroundColor = "#3C3C3C";
	setcolour2 = "#171616"
    setColour = "#3C3C3C"
    localStorage.setItem("backgroundcolor1", setColour);

}



// video search bar

function myFunction() {
	
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
/* 
var formsubmitvar = document.getElementById("formsubmit");
if(formsubmitvar){
formsubmitvar.addEventListener("click", function() {
    alert("Thank you for subscribing");
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
}, false)};
 */




function init(){
	
// Feedback Slider
// function ratingchanges () {
// if  (rating < 20) {
// document.getElementById('feedbackslider').style.background = "#a00303";
// }
// }

	
// Feedback Slider
// var slider = document.getElementById("myRange");
// var output = document.getElementById("rating");
// output.innerHTML = slider.value;

// slider.onchange = function() {
  // output.innerHTML = this.value;
  // console.log( this.value);
  // sliderVal = this.value;
  // createbox(this.value);
// }	
	
	
	
    // get elments for each music video name

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
    alert("Jan 23rd : San Diego,United States\nJan 30rd : New York,United States");
}, false);

document.getElementById("calmonth2").addEventListener("click", function() {
    alert("Feb 3rd : Kawasaki,Japan\nFeb 10th: Yokohama,Japan");
}, false);

document.getElementById("calmonth3").addEventListener("click", function() {
    alert("Mar 16th : Madrid,Spain\nMar 29th : Barcelona,Spain");
}, false);

document.getElementById("calmonth4").addEventListener("click", function() {
    alert("Apr 10th : Istanbul,Turkey");
}, false);

document.getElementById("calmonth5").addEventListener("click", function() {
    alert("No events scheduled for May");
}, false);

document.getElementById("calmonth6").addEventListener("click", function() {
    alert("Jun 1st : London,United Kingdom\nJun 13th : Lincoln,United Kingdom\nJun 23rd : Manchester,United Kingdom\nJun 28th : Birmingham,United Kingdom");
}, false);

document.getElementById("calmonth7").addEventListener("click", function() {
    alert("Jul 24th : Moscow,Russia\nJul 29th : Sofia,Bulgaria");
}, false);

document.getElementById("calmonth8").addEventListener("click", function() {
    alert("Aug 10th : Brasília,Brazil\nAug 16th : Fortaleza,Brazil");
}, false);

document.getElementById("calmonth9").addEventListener("click", function() {
    alert("No events scheduled for September");
}, false);

document.getElementById("calmonth10").addEventListener("click", function() {
    alert("No events scheduled for October");	
}, false);

document.getElementById("calmonth11").addEventListener("click", function() {
    alert("Nov 21st : Munich,Germany (Subject to change)");
}, false);

document.getElementById("calmonth12").addEventListener("click", function() {
    alert("Dec 8th : Chicago,United States\nDec 22nd : Houston,United States");
}, false);	
	
}
	


/* window.changeColour = function(value)
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
 */
var menuhover;



function mousehoverin() {
    document.getElementById("shopdisk")
	img.setVisible(false);
}


function mousehoverout() {
    document.getElementById("shopdisk")
	img.setVisible(true);
}


//video when clicked adds to console log and then changes video
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

// footbar response
function myFunction2() {
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




var itemCount = 0;
function allowDrop(event)
{
  event.preventDefault();
}

function drag(event)
{   event.dataTransfer.setData("Item",event.target.id);
}

function drop(event)
{
  itemCount = itemCount + 1;
  event.preventDefault();
  var data=event.dataTransfer.getData("Item");
  $targetElement = document.getElementById('target-grid');
  $selectedElement = document.getElementById(data);
 $targetElement.appendChild($selectedElement);
 document.getElementById('itemcount').innerHTML = (itemCount+" Items");
  $selectedElement.innerHTML += "<i class='icon-remove' data-item="+data+"></i>"; 
}