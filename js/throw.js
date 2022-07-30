AFRAME.registerComponent('balls',{
    init:function(){
        this.throwBalls()
    },
    throwBalls: function () {
    
        window.addEventListener("keydown", (e) => {
         
    
          if (e.key === "z" || e.key === "Z") {
            var ball = document.createElement("a-entity");
            ball.setAttribute("geometry", {
              primitive: "sphere",
              radius: 0.5,
            });
            console.log('ball')
            ball.setAttribute("material", "color", "orange");
            ball.setAttribute("dynamic-body",{
              shape:'sphere',
              mass:0
            });
            var cam = document.querySelector("#camera-rig");
    
            pos = cam.getAttribute("position");
    
            ball.setAttribute("position", {
              x: pos.x,
              y: 1.5,
              z: pos.z,
            });
    
            //var camera = document.querySelector("#camera").object3D;
    
            //get the camera direction as Three.js Vector
            //var direction = new THREE.Vector3();
            //camera.getWorldDirection(direction);
    
            //set the velocity and it's direction
            //ball.setAttribute("velocity", direction.multiplyScalar(-10));
    
            //var scene = document.querySelector("#scene");
    
            // Add Event listener to bullet
            
            //shooting sound
           
          }
        });
      },
    }
)