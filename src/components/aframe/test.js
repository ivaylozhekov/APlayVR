AFRAME.registerComponent('test', {
    schema: { type: 'vec3' },
    init: function() {
    },
    update: function () {
        var object3D = this.el.object3D;
        var data = this.data;
        object3D.position.set(data.x, data.y, data.z);
    }
});