

AFRAME.registerComponent('page-change-spell', {
  init: function() {

    this.el.addEventListener('click', function(e) {
        console.log("Hellooooo!");

     	window.location.href = "http://172.17.120.166:3000/spelling";
     
   
    })
  }
})

AFRAME.registerComponent('page-change-attack', {
  init: function() {

    this.el.addEventListener('click', function(e) {
        console.log("Hellooooo there!");

        window.location.href = "http://172.17.120.166:3000/sandwiches";
     
   
    })
  }
})