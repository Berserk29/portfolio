import { useEffect, useRef } from "react"
import { Canvas } from "./physicsCanvas.styled"
import { Engine, Render, Bodies, World, Mouse, MouseConstraint, Runner } from 'matter-js'

const PhysicsCanvas = () => {
    const canvasRef = useRef()
    const engine = useRef(Engine.create())

    useEffect(() => {
        const cw = canvasRef.current.clientWidth;
        const ch = canvasRef.current.clientHeight;

        const render = Render.create({
            element: canvasRef.current,
            engine: engine.current,
            options: {
              width: cw,
              height: ch,
              wireframes: false,
              background: 'transparent'
            }  
        })

        const circleA = Bodies.circle(50,20,25)
        const circleB = Bodies.circle(150,20,25)
        const ground = Bodies.rectangle(350,ch,cw,15, {isStatic: true})
        const wallLeft = Bodies.rectangle(0, 250 , 5 , ch, {isStatic: true})
        const wallRight = Bodies.rectangle(cw, 250 , 5 , ch, {isStatic: true})

        const mouse = Mouse.create(render.canvas);
            const mouseConstraint = MouseConstraint.create(engine.current, {
            mouse: mouse,
            constraint: {
                render: {visible: false}
            }
        })

        World.add(engine.current.world, [
            circleA,
            circleB,
            ground,
            wallLeft,
            wallRight,
            mouseConstraint,
        ])
            
        Render.run(render);
        Runner.run(engine.current)
        

        return () => {
            Render.stop(render)
            World.clear(engine.current.world)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {}
        }

    }, [])

    return (
        <Canvas ref={canvasRef}/>
    )
}

export default PhysicsCanvas


