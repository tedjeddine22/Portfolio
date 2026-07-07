import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import LaptopModel from './LaptopModel';

const LaptopScene = ({ onEnter }) => {
    return (
        <div className="intro-screen" id="intro-screen">
            <Canvas camera={{ position: [0, 1.8, 4.2], fov: 40 }}>
                <color attach="background" args={['#050505']} />

                {/* Lighting - Green neon Shellmates theme */}
                <ambientLight intensity={0.35} />
                <spotLight
                    position={[5, 8, 5]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1.5}
                    castShadow
                    color="#ffffff"
                />
                {/* Green accent lights */}
                <pointLight position={[-3, 2, -3]} intensity={0.6} color="#00ff33" />
                <pointLight position={[3, 2, 3]} intensity={0.4} color="#00ff33" />
                <pointLight position={[0, 3, 0]} intensity={0.2} color="#00e5ff" />
                {/* Subtle backlight */}
                <pointLight position={[0, -1, -2]} intensity={0.15} color="#00ff33" />

                <Suspense fallback={null}>
                    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
                        <LaptopModel onClick={onEnter} />
                    </Float>
                    <Environment preset="city" />
                    <ContactShadows
                        position={[0, -1.2, 0]}
                        opacity={0.6}
                        scale={10}
                        blur={2.5}
                        far={4}
                        color="#00ff33"
                    />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.8}
                    maxPolarAngle={Math.PI / 1.8}
                    minPolarAngle={Math.PI / 3}
                />
            </Canvas>

            <p className="intro-hint">[ Click the laptop to enter ]</p>
        </div>
    );
};

export default LaptopScene;
