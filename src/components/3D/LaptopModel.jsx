import { useGLTF, Html } from '@react-three/drei';
import { useRef } from 'react';

const LaptopModel = ({ onClick }) => {
  const { scene } = useGLTF('/models/laptop.glb');
  const groupRef = useRef();

  return (
    <group ref={groupRef} onClick={onClick} position={[0, -0.3, 0]} scale={2.5}>
      <primitive object={scene} />

      {/* HTML Screen overlay - aligned to the Display area of this GLB model */}
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.12}
        position={[-0.01, 0.40, -0.39]}
        rotation={[-0.03, 0, 0]}
        occlude
      >
        <div style={{
          width: '340px',
          height: '226px',
          background: '#050505',
          color: '#00ff33',
          padding: '20px',
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: '13px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Scanline effect on screen */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.15) 100%)',
            backgroundSize: '100% 4px',
            pointerEvents: 'none',
            opacity: 0.3,
            zIndex: 2
          }}></div>

          <p style={{ marginBottom: '2px', color: '#ff0033', fontSize: '12px', letterSpacing: '2px', fontWeight: 'bold' }}>TADJ EDDINE BOUDERBA</p>
          <p style={{ marginBottom: '4px', color: '#ff0033', fontSize: '9px', letterSpacing: '1px', opacity: 0.8 }}>[ NEO SECURITY TERMINAL v2.0 ]</p>
          
          <div style={{ width: '85%', height: '1px', background: '#ff0033', margin: '6px 0', opacity: 0.4 }}></div>
          
          <div style={{ width: '85%', textAlign: 'left', fontSize: '11px', marginTop: '4px' }}>
            <p style={{ marginBottom: '4px', color: '#ffffff' }}><span style={{ color: '#00ff33' }}>~ root@neo </span>$ boot_system <span style={{ color: '#ff0033', float: 'right' }}>[ OK ]</span></p>
            <p style={{ marginBottom: '4px', color: '#ffffff' }}><span style={{ color: '#00ff33' }}>~ root@neo </span>$ load_profile -u tadj_eddine <span style={{ color: '#ff0033', float: 'right' }}>[ OK ]</span></p>
            <p style={{ marginBottom: '4px', color: '#ffffff' }}><span style={{ color: '#00ff33' }}>~ root@neo </span>$ decrypt_portfolio <span style={{ color: '#ff0033', float: 'right' }}>[ OK ]</span></p>
            <p style={{ marginBottom: '8px', color: '#00ff33' }}>&gt; awaiting_access... █</p>
          </div>
          <button
            onClick={onClick}
            style={{
              marginTop: '12px',
              padding: '8px 24px',
              background: 'rgba(255,0,51,0.15)',
              border: '1px solid #ff0033',
              color: '#ff0033',
              cursor: 'pointer',
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255,0,51,0.4)';
              e.target.style.boxShadow = '0 0 15px rgba(255,0,51,0.5)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255,0,51,0.15)';
              e.target.style.boxShadow = 'none';
            }}
          >
            ► ENTER
          </button>
        </div>
      </Html>
    </group>
  );
};

useGLTF.preload('/models/laptop.glb');

export default LaptopModel;
