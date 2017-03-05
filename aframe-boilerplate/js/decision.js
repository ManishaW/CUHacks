AFRAME.registerComponent('page-change-spell', {
  init: function() {

   this.el.addEventListener('click', function(e) {
        console.log("Hellooooo!");

        window.location.href = "http://172.17.116.14:3000/spelling";
    
  
    })
  }
})

AFRAME.registerComponent('page-change-attack', {
  init: function() {

   this.el.addEventListener('click', function(e) {
        console.log("Hellooooo there!");

       window.location.href = "http://172.17.116.14:3000/sandwiches";
    
  
    })

   AFRAME.registerComponent('page-change-memory', {
  init: function() {

   this.el.addEventListener('click', function(e) {
        console.log("Hellooooo there!");

       window.location.href = "http://172.17.116.14:3000/memory";
    
  
    })