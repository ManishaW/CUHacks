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
			test.setAttribute('src','img/sandwich.png');
			test.setAttribute('width','0.7');
			test.setAttribute('height','0.7');
			test.setAttribute('rotation', "20 90 20");
			test.setAttribute('position', x+" "+y+" "+z);
			test.setAttribute('visible','false');
			sandwichHolder.push(test);

  



 		}

	

	});
}

function getNewImage() {
  var el = document.createElement('a-image');
  document.querySelector('a-scene').appendChild(el);
  return el
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}

setTimeout(appear, 10000)
setTimeout(appear, 15000)
setTimeout(appear, 20000)
setTimeout(appear, 25000)
setTimeout(appear, 30000)
setTimeout(appear, 35000)
setTimeout(appear, 40000)

function appear(){
	console.log("heyy")
	var sandy=sandwichHolder.pop();
	sandy.setAttribute('visible','true');
	}
	
function getNewAnimation(parantEl) {
  var el = document.createElement('a-animation');
  parentEl.appendChild(el);
  return el
}


