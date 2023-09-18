import reactLogo from '../../assets/icon/react_icon.svg'
import jsLogo from '../../assets/icon/js_icon.svg'
import styledLogo from '../../assets/icon/styled_icon.svg'
import cssLogo from '../../assets/icon/css_icon.svg'
import htmlLogo from '../../assets/icon/html_icon.svg'


export const canvasArr = [
    {
        x: 250,
        y: 50,
        vx: 0,
        vy: 60,
        logo: reactLogo,
        color: '#61DAFB'
    },
    {
        x: 250,
        y: 300,
        vx: 0,
        vy: -60,
        logo: jsLogo,
        color: '#FFD83A'
    },
    {
        x: 0,
        y: 0,
        vx: 60,
        vy: 60,
        logo: styledLogo,
        color: '#D66DAD'
    },
    {
        x: 500,
        y: 0,
        vx: -60,
        vy: 60,
        logo: cssLogo,
        color: '#33A9DC'
    },
    {
        x: 0,
        y: 400,
        vx: 60,
        vy: -60,
        logo: htmlLogo,
        color: '#F1662A'
    },
]

export class CanvasObject
{
    constructor (context, x, y, vx, vy){
        this.context = context;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;

        this.isColliding = false;
        this.isHover = false;
    }
}

export class Circle extends CanvasObject
{
    constructor (context, x, y, vx, vy, iconUrl, hoverColor){
        super(context, x, y, vx, vy);

        // Set default width
        this.radius = 45;
        this.hoverColor = hoverColor;
        this.iconUrl = iconUrl;

        if (typeof this.iconUrl === 'string') {
            this.loadicon(this.iconUrl);
        }
    }

    loadicon(url) {
        this.icon = new Image();
        this.icon.src = this.iconUrl;
        this.icon.onload = () => {
            this.draw();
        };
    }

    draw(){
        // Draw a simple Circle
        this.context.beginPath();
        this.context.fillStyle = this.isHover ? this.hoverColor : '#568ab8';
        this.context.arc(this.x, this.y, this.radius , 0, 2 * Math.PI)
        this.context.fill();

        if (this.icon instanceof Image && this.icon.complete) {
            // You can adjust the position and size of the SVG icon as needed
            const iconWidth = this.isHover ? 45 : 42;
            const iconHeight = this.isHover ? 45 : 42;
            this.context.drawImage(this.icon, this.x - iconWidth / 2, this.y - iconHeight / 2, iconWidth, iconHeight);
        }
    }

    update(secondsPassed){
        // Move with set velocity
        this.x += this.vx * secondsPassed;
        this.y += this.vy * secondsPassed;
    }
}