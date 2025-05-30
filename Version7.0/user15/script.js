function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }    
var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();

function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
  }

function message() {
    alert("This alert box was triggered by the onreset event handler");
  }

function myFunction() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

function myFunction() {
    alert("You pressed a key inside the input field");
  }

function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
  }

function myFunction(x) {
    x.style.background = "yellow";
  }

function myFunction() {
    document.getElementById("demo").innerHTML = "You selected some text";
  }
function myFunction() {
  document.getElementById("demo").innerHTML = "You selected some text";
}

function color(color) {
    document.forms[0].myInput.style.background = color;
  }

  function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
  }