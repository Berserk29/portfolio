import { useRef, useEffect } from "react";
import { Circle } from "./cavas.data";

import svgIcon from '../../assets/icon/Devicon-html5-plain.svg'
import logoTest1 from '../../assets/icon/circle.png'

const Canvas = ({hoverNum}) => {
    const canvasRef = useRef()
    const hoverNumRef = useRef(hoverNum)
    let secondsPassed = 0;
    let oldTimeStamp = 0;
    let canvasCur;
    let context;
    let circleArr;

    const circleIntersect = (x1, y1, r1, x2, y2, r2) => {
        // Calculate the distance between the two circles
        let squareDistance = (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
        // When the distance is smaller or equal to the sum of the two radius, the circles touch or overlap
        return squareDistance <= ((r1 + r2) * (r1 + r2))
    }

    const detectEdgeCollisions = () => {
        let obj;
        for (let i = 0; i < circleArr.length; i++)
        {
            obj = circleArr[i];
   
            // Check for left and right
            if (obj.x < obj.radius){
                obj.vx = Math.abs(obj.vx);
                obj.x = obj.radius;
            }else if (obj.x > canvasCur.width - obj.radius){
                obj.vx = -Math.abs(obj.vx);
                obj.x = canvasCur.width - obj.radius;
            }
   
            // Check for bottom and top
            if (obj.y < obj.radius){
                obj.vy = Math.abs(obj.vy);
                obj.y = obj.radius;
            } else if (obj.y > canvasCur.height - obj.radius){
                obj.vy = -Math.abs(obj.vy);
                obj.y = canvasCur.height - obj.radius;
            }
        }
   }

    const detectCollisions = () => {
        let obj1;
        let obj2;

        // Reset collision state of all objects
        for (let i = 0; i < circleArr.length; i++) {
            circleArr[i].isColliding = false;
        }

        // Start checking for collisions
        for (let i = 0; i < circleArr.length; i++) {

            obj1 = circleArr[i];
            for (let j = i + 1; j < circleArr.length; j++) {
                obj2 = circleArr[j];

                // Compare object1 with object2
                if (circleIntersect(obj1.x, obj1.y, obj1.radius, obj2.x, obj2.y, obj2.radius)){
                    obj1.isColliding = true;
                    obj2.isColliding = true;
                    let vCollision = {x: obj2.x - obj1.x, y: obj2.y - obj1.y}
                    let distance = Math.sqrt((obj2.x-obj1.x)*(obj2.x-obj1.x) + (obj2.y-obj1.y)*(obj2.y-obj1.y));
                    let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
                    let vRelativeVelocity = {x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy};
                    let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

                    if(speed < 0) {
                        break;
                    }

                    obj1.vx -= (speed * vCollisionNorm.x);
                    obj1.vy -= (speed * vCollisionNorm.y);
                    obj2.vx += (speed * vCollisionNorm.x);
                    obj2.vy += (speed * vCollisionNorm.y);
                }
            }
        }
    }

    const clearCanvas = () => {
        // Clear all the canvas
        context.clearRect(0,0, canvasCur.width, canvasCur.height)
    }
 
    const gameLoop = (timeStamp) => {
        // Calculate how much time has passed
        secondsPassed = (timeStamp - oldTimeStamp) / 1000
        oldTimeStamp = timeStamp;

        for(let i = 0; i < circleArr.length; i++) {
            circleArr[i].update(secondsPassed)
        }

        detectCollisions();
        detectEdgeCollisions();
        clearCanvas();


        for (let i = 0; i < circleArr.length; i++) {
            hoverNumRef.current === i ? circleArr[i].isHover = true : circleArr[i].isHover = false;
            circleArr[i].draw()
        }

        // Keep requesting new frames
        window.requestAnimationFrame(gameLoop);
    }

    useEffect(() => {
        hoverNumRef.current = hoverNum;
    }, [hoverNum])

    
    useEffect(() => {
        canvasCur = canvasRef?.current;
        context = canvasCur.getContext('2d')
        
        circleArr = [
            new Circle(context, 250, 50, 0, 60, svgIcon),
            new Circle(context, 250, 300, 0, -60, logoTest1),
            new Circle(context, 0, 0, 60, 60),
            new Circle(context, 500, 0 , -60, 60),
            new Circle(context, 0, 500, 60, -60),
        ]

        window.requestAnimationFrame(gameLoop)        
    },[])

    return (
        <canvas ref={canvasRef} width={650} height={400} style={{border: '1px solid var(--color-primary)'}}/>
    )
}

export default Canvas;