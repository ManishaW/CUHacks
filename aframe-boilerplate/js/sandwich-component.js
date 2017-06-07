var sandwichHolder = [];
var timeKeeper = 15;
var i = 0;


function testTime() {
 setTimeout(function( ) {
  randomizeSandwich(i)
   generateEntity(i)
   timeKeeper--
   i++
   if (!(timeKeeper==0)){
    testTime()
   } else {
    gameOver();
   }

 }, 4000)
}

testTime()

function gameOver() {
    var par = document.getElementById('new');
    var win_1 = document.createElement("a-curvedimage");
    win_1.setAttribute("class", "loser");
    win_1.setAttribute("color", "#ff4c4c");
    win_1.setAttribute("height", "15.0");
    win_1.setAttribute("radius", "6.0");
    win_1.setAttribute("theta-length", "361");
    win_1.setAttribute("rotation", "0 200 0");
    win_1.setAttribute("scale", "0.8 0.8 0.8");
    win_1.setAttribute("position", "0.13 1.29 -0.09");
    var win_2 = document.createElement("a-text");
    win_2.setAttribute("color", "black");
    win_2.setAttribute("position", "-0.9 2.0 -1.5");
    win_2.setAttribute("rotation", "0 0 0");
    win_2.setAttribute("value", "Congrats! You win a cup of tea!");
    fireTea()
    
    var par = document.getElementById('new');
    var entityRefresh = document.createElement("a-entity")
    entityRefresh.setAttribute("position",".5 1.2 -7");
    var buttonRefresh = document.createElement("a-box");
    buttonRefresh.setAttribute("class", "refresh");
    buttonRefresh.setAttribute("color","#456d41");
    var refreshText = document.createElement("a-text");
    refreshText.setAttribute("value", "Play again?");
    refreshText.setAttribute("scale","10 3 0.1");
    ref.setAttribute("color","#000000");
    console.log("refreshiingg");

    par.appendChild(win_1);
    par.appendChild(win_2);
    return;

}

function fireTea() {
  var request = new XMLHttpRequest();
  // NEED TO UPDATE EVERYTIME
request.open('GET', 'https://789d9126.ngrok.io', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
    } else {
      // We reached our target server, but it returned an error
    }
  };
  request.send();
}

AFRAME.registerComponent('page-refresh', {
  init: function() {

   this.el.addEventListener('click', function(e) {
        console.log("refresh!");

        window.location.href = "http://10.129.224.143:3000/sandwiches";
    
  
    })
  }
})


function randomizeSandwich(i){
 var xco = getRandomInt(-4, 4);
 while (xco == 0) {
   xco = getRandomInt(-4, 4);
 }
 var yco = getRandomInt(1, 3);
 while (yco == 0) {
   yco = getRandomInt(1, 3);
 }
 var zco = getRandomInt(-4, 4);
 while (zco == 0) {
   zco = getRandomInt(-4, 4);
 }
 generateImage(xco, yco, zco, i);

}

function generateImage(x, y, z, num) {

  AFRAME.registerComponent('evil-sandwich-' + num, {
    init: function() {
      var test = getNewImage();
      var newId = 'evil-sandwich-' + num;
      test.setAttribute('id', newId);
      test.setAttribute('src', 'img/sandwich.png');
      test.setAttribute('width', '0.7');
      test.setAttribute('height', '0.7');
      test.setAttribute('rotation', "0 0 0");
      test.setAttribute('position', x + " " + y + " " + z);
      test.setAttribute('visible', 'true');
      test.setAttribute('spin-me', 'target', '#' + newId);
      test.setAttribute('target', null);
      sandwichHolder.push(test);

    }

  });
}


function generateEntity(num) {
var test=getNewEntity();
var newId = 'evil-sandwich-' + num;
 test.setAttribute(newId, '');

}


// Set multiple attributes at once (since no jQuery)
function setAttributes(el, attrs) {
 for (var key in attrs) {
   el.setAttribute(key, attrs[key]);
 }
}


function getNewImage() {
 var el = document.createElement('a-image');
 document.querySelector('a-scene').appendChild(el);
 return el
}


function getNewEntity() {
  var el = document.createElement('a-entity');
  document.querySelector('a-scene').appendChild(el);
  return el
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



//ANIMATION
AFRAME.registerComponent('spin-me', {
 schema: {
   target: {
     type: "selector"
   }
 },

 init: function() {
   var spinningAnimation = document.createElement('a-animation');

   setAttributes(spinningAnimation, {
     attribute: "rotation",
     repeat:    "indefinite",
     to:        "0 360 0"

   })

   this.data.target.appendChild(spinningAnimation)
 }
})