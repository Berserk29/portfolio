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
    constructor (context, x, y, vx, vy){
        super(context, x, y, vx, vy);

        // Set default width
        this.radius = 30;
    }


    draw(){
        // Draw a simple Circle
        this.context.beginPath();
        this.context.fillStyle = this.isColliding || this.isHover ? 'red' : '#568ab8';
        this.context.arc(this.x, this.y, this.radius , 0, 2 * Math.PI)
        this.context.fill();
    }

    update(secondsPassed){
        // Move with set velocity
        this.x += this.vx * secondsPassed;
        this.y += this.vy * secondsPassed;
    }
}