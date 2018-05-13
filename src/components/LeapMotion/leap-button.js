AFRAME.registerComponent('leap-button', {
    schema: { },
    init: function() {

      const buttonMesh = this.el.object3D.children[0];
      var geometry2 = new THREE.PlaneGeometry(this.el.components.geometry.data.width, this.el.components.geometry.data.height, 3, 3);
      var material2 = new THREE.MeshPhongMaterial();
      var plane2 = new THREE.Mesh(geometry2, material2);
      material2.color = new THREE.Color('green');
      material2.transparent = true;
      material2.opacity = 0.5;
      //material.color = "red";
      //material.wireframe = true;
      //const position = Object.values(this.el.components.position.data);
      //position[2] = position[2] + 1;
      plane2.position.setZ(plane2.position.z + 60);
      //plane.scale.set(1,1,1)
      //plane.rotation.set(...Object.values(this.el.components.rotation.data));
      this.el.object3D.add(plane2);
      const intPlane = new InteractablePlane(plane2, window.controller, {
        hoverBounds: [0, 65],
        moveX: false, moveY: false, moveZ: false
      });

      //const position2 = Object.values(this.el.components.position.data);
      //position[2] = position2[2] + 1;
      //plane2.position.set(...position2);
      //plane2.scale.set(1,1,1)
      //plane2.rotation.set(...Object.values(this.el.components.rotation.data));



      intPlane.on('hover', function() {
        console.log(arguments);
      });

      intPlane.interactable = false;

      var button = new PushButton(

        intPlane

      ).on('press', function(mesh){
        if (mesh === plane2) {
          console.log('gesture PRESS');
          // mesh.material.color = "blue";
          buttonMesh.material.color = new THREE.Color("red");
        }


      }).on('release', function(mesh){
        if (mesh === plane2) {
          console.log('gesture RELEASE');
            buttonMesh.material.color = new THREE.Color("transparent");
        }


      });
    },
    update: function () {

    }
});
