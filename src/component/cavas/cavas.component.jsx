import { useRef, useEffect } from "react";
import { Circle } from "./cavas.data";

const Canvas = ({hoverNum}) => {
    const canvasRef = useRef()
    let canvasCur;
    let context;
    let secondsPassed = 0;
    let oldTimeStamp = 0;
    let circleArr;


    const circleIntersect = (x1, y1, r1, x2, y2, r2) => {
        // Calculate the distance between the two circles
        let squareDistance = (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
        // When the distance is smaller or equal to the sum of the two radius, the circles touch or overlap
        return squareDistance <= ((r1 + r2) * (r1 + r2))
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
        clearCanvas();

        for (let i = 0; i < circleArr.length; i++) {
            circleArr[i].draw()
            hoverNum === i ? circleArr[i].isHover = true : circleArr[i].isHover = false;
        }

        // Keep requesting new frames
        window.requestAnimationFrame(gameLoop);
    }

    
    useEffect(() => {
        canvasCur = canvasRef?.current;
        context = canvasCur.getContext('2d')
        
            circleArr = [
            new Circle(context, 250, 50, 0, 50),
            new Circle(context, 250, 300, 0, -50),
            new Circle(context, 150, 0, 50, 50),
            new Circle(context, 250, 150, 50, 50),
            new Circle(context, 350, 75, -50, 50),
        ]

        window.requestAnimationFrame(gameLoop)        
    },[hoverNum])

    return (
        <canvas ref={canvasRef} width={650} height={400} style={{border: '1px solid var(--color-primary)'}}/>
    )
}

export default Canvas;