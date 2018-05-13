
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

AFRAME.registerComponent('leap-hands', {
    schema: { },
    init: function() {
        const that = this;
        const scene = this.el.object3D;
        (window.controller = new Leap.Controller)
        .use('transform', {
            vr: true
        })
        .use('riggedHand', {
            parent: scene,
            renderFn: () => {},
        })
        .connect();

        window.controller.on('gesture', debounce(gesture => {
          if (gesture.type === "swipe") {
            const direction = gesture.direction[0] < 0 ? "right" : "left";
            console.log(direction);
            that.el.emit('swipe', { direction });
          }
        }, 500));
    },
    update: function () {
    }
});
