export class GameObject
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

export class Circle extends GameObject
{
    constructor (context, x, y, vx, vy, svgIconUrl){
        super(context, x, y, vx, vy);

        // Set default width
        this.radius = 45;

        this.svgIconUrl = svgIconUrl;

        if (typeof this.svgIconUrl === 'string') {
            this.loadSvgIcon(this.svgIconUrl);
        }
    }

    loadSvgIcon(url) {
        this.svgIcon = new Image();
        this.svgIcon.src = this.svgIconUrl;
        this.svgIcon.onload = () => {
            this.draw();
        };
    }

    draw(){
        // Draw a simple Circle
        this.context.beginPath();
        this.context.fillStyle = this.isHover ? 'purple' : '#568ab8';
        this.context.arc(this.x, this.y, this.radius , 0, 2 * Math.PI)
        this.context.fill();

        if (this.svgIcon instanceof Image && this.svgIcon.complete) {
            // You can adjust the position and size of the SVG icon as needed
            const iconWidth = 45;
            const iconHeight = 45;
            this.context.drawImage(this.svgIcon, this.x - iconWidth / 2, this.y - iconHeight / 2, iconWidth, iconHeight);
        }
    }

    update(secondsPassed){
        // Move with set velocity
        this.x += this.vx * secondsPassed;
        this.y += this.vy * secondsPassed;
    }
}