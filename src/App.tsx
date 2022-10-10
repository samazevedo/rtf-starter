import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { GlobalStyle, theme } from './shared/theme'
import { ThemeProvider } from 'styled-components'
import { OrbitControls } from '@react-three/drei'

const Box = () => {
    const ref = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        ref.current.rotation.x += 0.01
    })
    return (
        <mesh ref={ref}>
            <boxGeometry />
            <meshBasicMaterial color='lightgreen' />
        </mesh>
    )
}

export const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Canvas>
                    <OrbitControls />
                    <Box />
                </Canvas>
            </ThemeProvider>
        </>
    )
}
