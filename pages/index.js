import {Canvas, useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import React, {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import styled from "styled-components";
// import types from three
const URL = '../model3d/cartoonSportCar/scene.gltf'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta la altura al 100% del viewport */
  background: antiquewhite;
`

function Model() {
    const obj = useLoader(GLTFLoader, URL)

    return <primitive object={obj.scene} position={[0, -1, 0]} scale={[2, 2, 2]}/>
}

export default function cartoonSportCar() {

    return (

        <Container>
                    <Canvas
                        camera={{
                            position: [9, 7, 8.2],
                            fov: 50,
                            zoom: 1
                        }}
                    >
                        <ambientLight color={'white'} intensity={0.3}/>
                        <ambientLight color={'white'} intensity={1.7}/>
                        <spotLight angle={0.15} color={'white'} penumbra={1} position={[10, 10, 10]}/>
                        <Suspense>
                            <Model/>
                        </Suspense>
                        <OrbitControls/>
                    </Canvas>
        </Container>
    )
}
