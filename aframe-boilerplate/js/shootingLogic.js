// ---------

console.log("whatever")

// Global var (prob bad idea)
var targetKillCount = 0;
var bulletCount     = 0;
var bulletTimeout   = "300"
var totalPoints     = 0;



// ---------
// Helpers

function getClickCordinates(e) {
  var cordinates = e.detail.intersection.point;
  return cordinates.x + " " + cordinates.y + " " + cordinates.z
}

function getNewEntity() {
  var el = document.createElement('a-entity');
  document.querySelector('a-scene').appendChild(el);
  return el
}

function getNewAnimation(targetElement) {
  var newAnimation = document.createElement('a-animation');
  targetElement.appendChild(newAnimation)
  return newAnimation
}

function removeEntity(entity, timeOut) {


  if (timeOut)
    window.setTimeout(function() {
      entity.setAttribute("sound","src: #die; autoplay: true")
      entity.parentNode.removeChild(entity)

    }, timeOut)
  else
    entity.parentNode.removeChild(entity);
}

// Set multiple attributes at once (since no jQuery)
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// Add component aka attribute without value
function addComponent(el, componet) {
  el.setAttribute(component, '');
}

function defineNewBulletComponent(newBulletId) {
  AFRAME.registerComponent(newBulletId, {
    init: function() {
      var bullet = this.el
      var bulletStartPosition = "0 1 0" // 1.6 is the default camera height

      bullet.setAttribute("id", newBulletId)
      bullet.setAttribute("position", bulletStartPosition)
      bullet.setAttribute("rotation", "0 45 0")
      bullet.setAttribute("geometry", "primitive", "box")
      bullet.setAttribute("material", "color" , "white")
      bullet.setAttribute("scale", "0.2 0.2 0.2")
      bullet.setAttribute("sound","src: #shoot; autoplay: true")
    }
  })
}

function getNewBullet(targetCordinates, targetId) {
  // Define a new component speciifc for the bullet
  var newBulletId = "bullet-" + bulletCount;
  defineNewBulletComponent(newBulletId)

  // Make entity with the new bulllet component
  var bullet = getNewEntity();
  bullet.setAttribute(newBulletId, null)
  bullet.setAttribute('flybullet',
                      'target:#'   + newBulletId + ';position:' + targetCordinates +
                      ';bulletTarget:'   + targetId)
}

// Fire obj on the fly
AFRAME.registerComponent('target', {
  init: function() {
    var targetId = this.el.getAttribute('id')
    this.el.addEventListener('click', function(e) {
      console.log("DELETING TARGET");
      targetKillCount++;
      bulletCount++;

      var targetCordinates = getClickCordinates(e);
      getNewBullet(targetCordinates, "#" + targetId)
    })
  }
})

AFRAME.registerComponent('flybullet', {
  schema: {
    target :      { type : "selector"},
    position :    { type: "string"},
    bulletTarget: { type: "selector"}
  },

  init: function() {
    var flyingAnimation = document.createElement('a-animation');

    setAttributes(flyingAnimation, {
      attribute: "position",
      repeat:    "0",
      dur:       bulletTimeout,
      to:        this.data.position,
    })
    this.data.target.appendChild(flyingAnimation)

  
    // Remove the bullet when it reaches the target obj
    removeEntity(this.el, bulletTimeout);
    removeEntity(this.data.bulletTarget, bulletTimeout)
  }
})
