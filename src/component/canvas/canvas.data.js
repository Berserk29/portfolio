import reactLogo from '../../assets/icon/react-icon.png'
import jsLogo from '../../assets/icon/js-icon.png'
import styledLogo from '../../assets/icon/styled-icon.png'
import cssLogo from '../../assets/icon/css-icon.png'
import htmlLogo from '../../assets/icon/html-icon.png'


export const canvasArr = [
    {
        x: 250,
        y: 50,
        vx: 0,
        vy: 60,
        logo: reactLogo,
        color: '#87E8D7',
        hoverColor: '#46D2C1',
    },
    {
        x: 250,
        y: 300,
        vx: 0,
        vy: -60,
        logo: jsLogo,
        color: '#EDD583',
        hoverColor: '#E7CD4A',
    },
    {
        x: 0,
        y: 0,
        vx: 60,
        vy: 60,
        logo: styledLogo,
        color: '#F0A6A6',
        hoverColor: '#F07E7E',
    },
    {
        x: 500,
        y: 0,
        vx: -60,
        vy: 60,
        logo: cssLogo,
        color: '#7FCCE4',
        hoverColor: '#49BBD2',
    },
    {
        x: 0,
        y: 400,
        vx: 60,
        vy: -60,
        logo: htmlLogo,
        color: '#EDA978',
        hoverColor: '#E58F50',
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
    constructor (context, x, y, vx, vy, iconUrl, color, hoverColor){
        super(context, x, y, vx, vy);

        // Set default width
        this.radius = 60;
        this.color = color;
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
        this.context.fillStyle = this.isHover ? this.hoverColor : this.color;
        this.context.arc(this.x, this.y, this.radius , 0, 2 * Math.PI)
        this.context.fill();

        if (this.icon instanceof Image && this.icon.complete) {
            // You can adjust the position and size of the SVG icon as needed
            const iconWidth = this.isHover ? 90 : 82;
            const iconHeight = this.isHover ? 90 : 82;
            this.context.drawImage(this.icon, this.x - iconWidth / 2, this.y - iconHeight / 2, iconWidth, iconHeight);
        }
    }

    update(secondsPassed){
        // Move with set velocity
        this.x += this.vx * secondsPassed;
        this.y += this.vy * secondsPassed;
    }
}