import { useGLTF, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';

const KaliScreen = ({ onClick }) => {
  const [lines, setLines] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);
  const bodyRef = useRef(null);

  const terminalSequence = [
    { type: 'system', text: '┌──────────────────────────────────────────┐', delay: 200 },
    { type: 'system', text: '│  Kali Linux - Security Terminal          │', delay: 350 },
    { type: 'system', text: '└──────────────────────────────────────────┘', delay: 500 },
    { type: 'empty', delay: 600 },
    { type: 'ascii', delay: 700 },
    { type: 'empty', delay: 900 },
    { type: 'separator', delay: 1000 },
    { type: 'empty', delay: 1100 },
    { type: 'prompt', text: '┌──(root㉿tadjeddine)-[~]', delay: 1200 },
    { type: 'command', prompt: '└─# ', cmd: 'systemctl start portfolio', status: '[ OK ]', delay: 1400 },
    { type: 'empty', delay: 1800 },
    { type: 'prompt', text: '┌──(root㉿tadjeddine)-[~]', delay: 1900 },
    { type: 'command', prompt: '└─# ', cmd: 'nmap -sV localhost', status: '', delay: 2100 },
    { type: 'output', text: 'Starting Nmap 7.94...', delay: 2500 },
    { type: 'output', text: 'PORT    STATE  SERVICE    VERSION', delay: 2700 },
    { type: 'highlight', text: '443/tcp open   https      Portfolio/4.0', delay: 2900 },
    { type: 'success', text: '| No vulnerabilities found.', delay: 3100 },
    { type: 'empty', delay: 3300 },
    { type: 'prompt', text: '┌──(root㉿tadjeddine)-[~]', delay: 3400 },
    { type: 'command', prompt: '└─# ', cmd: 'cat /etc/motd', status: '', delay: 3600 },
    { type: 'motd', text: '« Where there is a Shell,', delay: 3900 },
    { type: 'motd', text: '  There is a way »', delay: 4100 },
    { type: 'empty', delay: 4400 },
    { type: 'prompt', text: '┌──(root㉿tadjeddine)-[~]', delay: 4500 },
    { type: 'command', prompt: '└─# ', cmd: './access_portfolio', status: '', delay: 4700 },
    { type: 'success', text: '[✓] Access granted.', delay: 5100 },
    { type: 'waiting', text: '> awaiting_interaction...', delay: 5400 },
  ];

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  // Type out lines
  useEffect(() => {
    const timeouts = [];
    terminalSequence.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, { ...line, key: index }]);
        // Auto scroll
        if (bodyRef.current) {
          bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
        if (index === terminalSequence.length - 1) {
          setTimeout(() => {
            setTypingDone(true);
            setTimeout(() => setShowButton(true), 400);
          }, 500);
        }
      }, line.delay);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach(t => clearTimeout(t));
  }, []);

  const s = {
    line: { margin: '0', fontSize: '7.5px', lineHeight: '1.5', whiteSpace: 'pre' },
  };

  const renderLine = (line) => {
    switch (line.type) {
      case 'system':
        return <p key={line.key} style={{ ...s.line, color: 'rgba(0,255,51,0.45)', fontSize: '6.5px' }}>{line.text}</p>;
      case 'ascii':
        return (
          <div key={line.key} style={{ color: '#00ff33', fontSize: '5px', lineHeight: '1.3', textShadow: '0 0 4px rgba(0,255,51,0.3)', padding: '2px 0' }}>
            <pre style={{ margin: 0, fontFamily: 'inherit' }}>{`  ,.--.,
 /  o   \\      ╔═══════════════════════╗
|   __   |     ║ TADJ EDDINE BOUDERBA  ║
|  /  \\  |     ║ Cybersecurity Analyst  ║
 \\ \\__/ /      ║ USTHB - 4ème année    ║
  '----'       ╚═══════════════════════╝
 /      \\
/ /|  |\\ \\`}</pre>
          </div>
        );
      case 'separator':
        return <p key={line.key} style={{ ...s.line, color: 'rgba(0,255,51,0.2)', fontSize: '6px' }}>──────────────────────────────────────</p>;
      case 'prompt':
        return <p key={line.key} style={{ ...s.line, color: '#00ff33', fontWeight: 'bold', textShadow: '0 0 3px rgba(0,255,51,0.2)' }}>{line.text}</p>;
      case 'command':
        return (
          <p key={line.key} style={{ ...s.line }}>
            <span style={{ color: '#00ff33', fontWeight: 'bold' }}>{line.prompt}</span>
            <span style={{ color: '#fff' }}>{line.cmd}</span>
            {line.status && <span style={{ color: '#00ff33', float: 'right', fontWeight: 'bold', fontSize: '7px' }}>{line.status}</span>}
          </p>
        );
      case 'output':
        return <p key={line.key} style={{ ...s.line, color: 'rgba(255,255,255,0.65)', paddingLeft: '4px' }}>{line.text}</p>;
      case 'highlight':
        return <p key={line.key} style={{ ...s.line, color: '#00e5ff', paddingLeft: '4px', textShadow: '0 0 4px rgba(0,229,255,0.3)' }}>{line.text}</p>;
      case 'success':
        return <p key={line.key} style={{ ...s.line, color: '#00ff33', fontWeight: 'bold', paddingLeft: '4px', textShadow: '0 0 4px rgba(0,255,51,0.3)' }}>{line.text}</p>;
      case 'motd':
        return <p key={line.key} style={{ ...s.line, color: '#00ff33', fontStyle: 'italic', textAlign: 'center', fontSize: '8px', textShadow: '0 0 6px rgba(0,255,51,0.4)' }}>{line.text}</p>;
      case 'waiting':
        return (
          <p key={line.key} style={{ ...s.line, color: '#00ff33' }}>
            {line.text} <span style={{ opacity: showCursor ? 1 : 0, textShadow: '0 0 6px rgba(0,255,51,0.6)' }}>█</span>
          </p>
        );
      case 'empty':
        return <p key={line.key} style={{ ...s.line, height: '4px' }}>&nbsp;</p>;
      default:
        return null;
    }
  };

  return (
    <div style={{
      width: '340px',
      height: '226px',
      background: '#0a0a0a',
      fontFamily: '"Share Tech Mono", monospace',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Scanlines */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 100%)',
        backgroundSize: '100% 3px', pointerEvents: 'none', opacity: 0.15, zIndex: 5,
      }} />

      {/* Title Bar */}
      <div style={{
        display: 'flex', alignItems: 'center', height: '16px', padding: '0 6px',
        background: '#1a1a2e', borderBottom: '1px solid rgba(0,255,51,0.1)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: '3px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        </div>
        <span style={{ flex: 1, textAlign: 'center', fontSize: '6px', color: 'rgba(255,255,255,0.4)' }}>
          root@tadjeddine: ~
        </span>
      </div>

      {/* Terminal Body */}
      <div ref={bodyRef} style={{
        flex: 1, padding: '6px 10px', overflowY: 'auto', position: 'relative', zIndex: 1,
        scrollbarWidth: 'none',
      }}>
        {lines.map(line => renderLine(line))}

        {typingDone && (
          <>
            <p style={{ ...s.line, color: '#00ff33', fontWeight: 'bold', marginTop: '2px' }}>┌──(root㉿tadjeddine)-[~]</p>
            <p style={{ ...s.line }}>
              <span style={{ color: '#00ff33', fontWeight: 'bold' }}>└─# </span>
              <span style={{ color: '#00ff33', opacity: showCursor ? 1 : 0, textShadow: '0 0 6px rgba(0,255,51,0.6)' }}>█</span>
            </p>
          </>
        )}
      </div>

      {/* Enter Button */}
      <div style={{
        padding: '4px 10px 8px', display: 'flex', justifyContent: 'center',
        opacity: showButton ? 1 : 0, transform: showButton ? 'translateY(0)' : 'translateY(5px)',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)', pointerEvents: showButton ? 'all' : 'none',
      }}>
        <button
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          style={{
            padding: '5px 18px', background: 'rgba(0,255,51,0.08)', border: '1px solid #00ff33',
            color: '#00ff33', cursor: 'pointer', fontFamily: '"Share Tech Mono", monospace',
            fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase',
            borderRadius: '3px', transition: 'all 0.25s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#00ff33';
            e.target.style.color = '#000';
            e.target.style.boxShadow = '0 0 15px rgba(0,255,51,0.5)';
            e.target.style.fontWeight = '700';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(0,255,51,0.08)';
            e.target.style.color = '#00ff33';
            e.target.style.boxShadow = 'none';
            e.target.style.fontWeight = 'normal';
          }}
        >
          ▶ ACCESS PORTFOLIO
        </button>
      </div>
    </div>
  );
};

const LaptopModel = ({ onClick }) => {
  const { scene } = useGLTF('/models/laptop.glb');
  const groupRef = useRef();

  return (
    <group ref={groupRef} onClick={onClick} position={[0, -0.6, 0]} scale={2.5}>
      <primitive object={scene} />

      {/* Kali Linux terminal on laptop screen */}
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.12}
        position={[-0.01, 0.40, -0.39]}
        rotation={[-0.03, 0, 0]}
        occlude
      >
        <KaliScreen onClick={onClick} />
      </Html>
    </group>
  );
};

useGLTF.preload('/models/laptop.glb');

export default LaptopModel;
