import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import LaptopModel from './LaptopModel';

const LaptopScene = ({ onEnter }) => {
    return (
        <div className="intro-screen" id="intro-screen">
            <Canvas camera={{ position: [0, 1.5, 4], fov: 40 }}>
                <color attach="background" args={['#050505']} />

                {/* Lighting */}
                <ambientLight intensity={0.3} />
                <spotLight
                    position={[5, 8, 5]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1.5}
                    castShadow
                    color="#ffffff"
                />
                <pointLight position={[-3, 2, -3]} intensity={0.5} color="#ff0033" />
                <pointLight position={[3, 2, 3]} intensity={0.3} color="#ff0033" />

                <Suspense fallback={null}>
                    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
                        <LaptopModel onClick={onEnter} />
                    </Float>
                    <Environment preset="city" />
                    <ContactShadows
                        position={[0, -1.2, 0]}
                        opacity={0.5}
                        scale={8}
                        blur={2.5}
                        far={4}
                        color="#ff0033"
                    />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                    maxPolarAngle={Math.PI / 1.8}
                    minPolarAngle={Math.PI / 3}
                />
            </Canvas>

            <p className="intro-hint">[ Click the laptop to enter ]</p>
        </div>
    );
};

export default LaptopScene;
