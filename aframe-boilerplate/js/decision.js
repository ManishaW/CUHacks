

AFRAME.registerComponent('page-change', {
  init: function() {
    this.el.addEventListener('click', function(e) {
     var theClass= this.el.getAttribute("class");
     if(theClass == "spell")
     {
     	location.href = "http://172.17.120.166:3000/spelling";
     	 console.log("Going to spelling game");
     }
     else if(theClass == "attack")
     {
     	location.href = "http://172.17.120.166:3000/sandwiches";
     	console.log("Going to spelling game");
     }
     else{
     	//do nothing
     	 console.log("Do nothing");
     }
    })
  }
})