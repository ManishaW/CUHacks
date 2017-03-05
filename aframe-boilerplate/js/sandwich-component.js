AFRAME.registerComponent('evil-sandwich',{
	init: function() {
		var test = getNewImage();
		test.setAttribute('src','img/sandwich.png');
		test.setAttribute('width','0.7');
		test.setAttribute('height','0.7');
		test.setAttribute('rotation', "20 90 20");
		test.setAttribute('position',"2 2 1");
	}


}
);

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