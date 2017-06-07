
AFRAME.registerComponent('page-change-spell', {
  init: function() {

    this.el.addEventListener('click', function(e) {
       
     	window.location.href = window.location.toString()+"spelling";
     
    })
  }
})

AFRAME.registerComponent('page-change-attack', {
  init: function() {

   this.el.addEventListener('click', function(e) {
      
      window.location.href = window.location.toString()+"sandwiches";
    
  
    })
 }
})

   AFRAME.registerComponent('page-change-memory', {
  init: function() {

   this.el.addEventListener('click', function(e) {
        
      window.location.href = window.location.toString()+"memory";
    
  
    }) 
 }
})