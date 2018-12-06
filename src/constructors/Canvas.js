export default class Canvas {
    constructor() {
        this.el = document.createElement('canvas');
        this.context = this.el.getContext('2d');

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();

        document.body.appendChild(this.el);
    }

    resize() {
        let {innerHeight, innerWidth} = window;
        let canvasSize = (innerWidth > innerHeight) ? innerHeight : innerWidth;

        this.el.setAttribute('width', canvasSize);
        this.el.setAttribute('height', canvasSize);
    }
}
