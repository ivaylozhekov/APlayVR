AFRAME.registerComponent('leap-hands', {
    schema: { },
    init: function() {
        const scene = this.el.sceneEl.object3D;
        (window.controller = new Leap.Controller)
        .use('riggedHand', {
            parent: scene,
            renderFn: () => {},
        })
        .use('transform', {
            vr: true
        })
        .connect();

        window.controller.on('gesture', gesture => {
            console.log(gesture);
        });
    },
    update: function () {
    }
});
