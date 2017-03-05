var sandwichHolder = [];

for(i=0; i<8; i++){
		var xco=getRandomInt(-4,4);
	while(xco==0){
		xco=getRandomInt(-4,4);
	}
	var yco=getRandomInt(1,3);
	while(yco==0){
		yco=getRandomInt(1,3);
	}
	var zco=getRandomInt(-4,4);
	while(zco==0){
		zco=getRandomInt(-4,4);
	}
	generateImage(xco, yco, zco, i);

}

function generateImage(x, y, z, num){
	AFRAME.registerComponent('evil-sandwich-'+num,{
		init: function() {
			var test = getNewImage();
			var newId= 'evil-sandwich-'+num;
			test.setAttribute('id',newId);
			test.setAttribute('src','img/sandwich.png');
			test.setAttribute('width','0.7');
			test.setAttribute('height','0.7');
			test.setAttribute('rotation', "0 0 0");
			test.setAttribute('position', x+" "+y+" "+z);
			test.setAttribute('visible','false');
			test.setAttribute('spin-me','target', '#'+newId);
			test.setAttribute('move-me', '#'+newId);
			sandwichHolder.push(test);

		}

	});
}


// Set multiple attributes at once (since no jQuery)
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


function getNewImage() {
  var el = document.createElement('a-image');
  document.querySelector('a-scene').appendChild(el);
  return el
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function appear(){
	var sandy = sandwichHolder.pop();
	sandy.setAttribute('visible','true');
	}

setTimeout(appear, 10000)
setTimeout(appear, 15000)
setTimeout(appear, 20000)
setTimeout(appear, 25000)
setTimeout(appear, 30000)
setTimeout(appear, 35000)
setTimeout(appear, 40000)
setTimeout(appear, 45000)




//ANIMATION
AFRAME.registerComponent('spin-me', {
  schema: {
    target : { type : "selector"}
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


