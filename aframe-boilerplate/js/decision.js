

AFRAME.registerComponent('page-change', {
  init: function() {
    this.el.addEventListener('click', function(e) {
     var theClass= this.el.getAttribute("class");
     var local=location.href

         console.log(local);
     if(theClass == "spell")
     {
     	location.href = local+"/spelling";
     	 console.log("Going to spelling game");
     }
     else if(theClass == "attack")
     {
     	location.href = local+"/sandwiches";
     	console.log("Going to spelling game");
     }
     else{
     	//do nothing
     	 console.log("Do nothing");
     }
    })
  }
})