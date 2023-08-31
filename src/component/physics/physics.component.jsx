import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Mouse, MouseConstraint, Runner } from "matter-js";

import { Container } from "./physics.styled";

const Physics = () => {
    const containerRef = useRef()
    const engineRef = useRef(Engine.create());
    const runnerRef = useRef(Runner.create());

    useEffect(() => {
        const engine = engineRef.current;
        const runner = runnerRef.current;

        // Configure renderer
        const render = Render.create({
            element: containerRef.current,
            engine: engine,
            options : {
                width: 1000,
                height: 800,
                wireframes: false,
            }
        })
   
        // Create some bodies
        const boxA = Bodies.circle(100,200,60);
        const boxB = Bodies.circle(200,200,80, {density: 0.1});
        const ground = Bodies.rectangle(500, 600, 1000, 20, {isStatic: true});

        // Create mouse
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                render: {visible: false}
            }
        })

        // Add bodies to the world
        World.add(engine.world, [boxA, boxB ,ground, mouseConstraint]);

        // Start renderer and runner
        Engine.run(engine)
        Render.run(render)

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            World.clear(engine.world);
            Engine.clear(engine);
          };
      }, [])
    

    return (
        <Container ref={containerRef} />
    )
}

export default Physics;