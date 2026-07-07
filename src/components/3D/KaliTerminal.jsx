import { useState, useEffect, useRef } from 'react';

// Progress bar animation extracted outside to prevent re-mounting
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { 
          clearInterval(interval); 
          return 100; 
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);
  
  const barWidth = progress >= 100 ? 100 : progress;
  const filled = Math.floor(barWidth / 4);
  const empty = 25 - filled;
  
  return (
    <div className="term-line term-output" style={{ fontFamily: '"Share Tech Mono", monospace' }}>
      <span style={{ color: '#00ff33' }}>  Loading: [</span>
      <span style={{ color: '#00ff33', textShadow: '0 0 4px rgba(0,255,51,0.4)' }}>{'█'.repeat(filled)}</span>
      <span style={{ color: 'rgba(255,255,255,0.15)' }}>{'░'.repeat(Math.max(0, empty))}</span>
      <span style={{ color: '#00ff33' }}>] {Math.min(barWidth, 100)}%</span>
    </div>
  );
};

const KaliTerminal = ({ onEnter }) => {
  const [lines, setLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [matrixChars, setMatrixChars] = useState([]);
  const terminalRef = useRef(null);

  // Kali Linux dragon ASCII art (authentic style)
  const kaliArt = `
   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   ██                                        ██
   ██  ████████╗ ██████╗ ██████╗        ██╗  ██
   ██  ╚══██╔══╝██╔═══██╗██╔══██╗       ██║  ██
   ██     ██║   ███████║ ██║  ██║       ██║  ██
   ██     ██║   ██╔══██║ ██║  ██║ ██╗   ██║  ██
   ██     ██║   ██║  ██║ ██████╔╝ ╚██████╔╝  ██
   ██     ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═════╝   ██
   ██                                        ██
   ██  ┌─ EDDINE BOUDERBA ─────────────────┐ ██
   ██  │  Cybersecurity Analyst & Dev      │ ██
   ██  │  USTHB - 4ème année Ingénierie    │ ██
   ██  └───────────────────────────────────┘ ██
   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`;

  // Terminal boot sequence
  const terminalSequence = [
    { type: 'system', text: '[    0.000000] Kali GNU/Linux Rolling - Kernel 6.6.15-amd64', delay: 100 },
    { type: 'system', text: '[    0.000012] Command line: BOOT_IMAGE=/boot/vmlinuz-6.6.15-amd64', delay: 250 },
    { type: 'system-ok', text: '[  OK  ] Reached target - Basic System', delay: 500 },
    { type: 'system-ok', text: '[  OK  ] Started Network Manager', delay: 700 },
    { type: 'system-ok', text: '[  OK  ] Started OpenSSH Server', delay: 900 },
    { type: 'empty', delay: 1000 },
    { type: 'banner', delay: 1100 },
    { type: 'empty', delay: 1600 },
    { type: 'info', text: '  ┌────────────────────────────────────────────────────────┐', delay: 1700 },
    { type: 'info', text: '  │   System: Kali Linux 2026     │  Host: tadjeddine-sec   │', delay: 1800 },
    { type: 'info', text: '  │   Uptime: 0 mins              │  Shell: zsh 5.9         │', delay: 1900 },
    { type: 'info', text: '  │   CPU: AMD Ryzen 5 5600H      │  RAM: 16GB DDR5         │', delay: 2000 },
    { type: 'info', text: '  └────────────────────────────────────────────────────────┘', delay: 2100 },
    { type: 'empty', delay: 2300 },
    { type: 'prompt', text: '┌──(root㉿tadjeddine)-[~]', delay: 2400 },
    { type: 'command-exec', prompt: '└─# ', text: 'sudo nmap -sV --script=vuln 127.0.0.1', delay: 2600 },
    { type: 'empty', delay: 3000 },
    { type: 'output', text: 'Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-07-07 02:57 CET', delay: 3100 },
    { type: 'output', text: 'Nmap scan report for localhost (127.0.0.1)', delay: 3300 },
    { type: 'output', text: 'PORT     STATE  SERVICE     VERSION', delay: 3500 },
    { type: 'highlight', text: '22/tcp   open   ssh         OpenSSH 9.6 (protocol 2.0)', delay: 3700 },
    { type: 'highlight', text: '443/tcp  open   https       Portfolio/4.0-SECURE', delay: 3900 },
    { type: 'highlight', text: '8080/tcp open   http-proxy  Nginx 1.25', delay: 4100 },
    { type: 'output', text: 'OS: Linux 6.6.15-amd64 | Host: tadjeddine-sec', delay: 4300 },
    { type: 'success', text: '|_vulners: No known vulnerabilities found ✓', delay: 4500 },
    { type: 'output', text: 'Nmap done: 1 IP address (1 host up) scanned in 12.34 seconds', delay: 4700 },
    { type: 'empty', delay: 4900 },
    { type: 'prompt', text: '┌──(root㉿tadjeddine)-[~]', delay: 5000 },
    { type: 'command-exec', prompt: '└─# ', text: 'cat /etc/motd', delay: 5200 },
    { type: 'empty', delay: 5500 },
    { type: 'motd', text: '  ╔═══════════════════════════════════════════════════╗', delay: 5600 },
    { type: 'motd', text: '  ║  « Where there is a Shell, There is a way »       ║', delay: 5700 },
    { type: 'motd', text: '  ╚═══════════════════════════════════════════════════╝', delay: 5800 },
    { type: 'empty', delay: 6000 },
    { type: 'prompt', text: '┌──(root㉿tadjeddine)-[~]', delay: 6100 },
    { type: 'command-exec', prompt: '└─# ', text: './init_portfolio.sh --mode=visitor --access=granted', delay: 6300 },
    { type: 'empty', delay: 6700 },
    { type: 'progress', delay: 6800 },
    { type: 'empty', delay: 8800 },
    { type: 'success', text: '[✓] Portfolio interface loaded successfully', delay: 9000 },
    { type: 'success', text: '[✓] Secure connection established (TLS 1.3)', delay: 9200 },
    { type: 'success', text: '[✓] Authentication: visitor@portfolio — ACCESS GRANTED', delay: 9400 },
    { type: 'empty', delay: 9600 },
    { type: 'waiting', text: '> system ready — awaiting interaction...', delay: 9800 },
  ];

  // Generate background characters (dev/security themed)
  useEffect(() => {
    const symbols = ['jc', 'css', '{ }', '</>', 'sudo', 'root', '0x9F', 'nmap', 'sys', 'SSH', 'ffuf', '0x00', 'bash', 'AES', 'dev'];
    const chars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8, // Slower fall for words
      char: symbols[Math.floor(Math.random() * symbols.length)],
      size: 12 + Math.random() * 10,
      opacity: 0.05 + Math.random() * 0.1,
    }));
    setMatrixChars(chars);
  }, []);

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
        setLines(prev => [...prev, line]);
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
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



  const renderLine = (line, index) => {
    switch (line.type) {
      case 'system':
        return <div key={index} className="term-line term-system">{line.text}</div>;
      case 'system-ok':
        return (
          <div key={index} className="term-line term-output">
            <span style={{ color: '#00ff33', fontWeight: 'bold' }}>[  OK  ] </span>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>{line.text.replace('[  OK  ] ', '')}</span>
          </div>
        );
      case 'banner':
        return (
          <div key={index} className="term-ascii">
            <pre style={{ margin: 0, fontFamily: '"Share Tech Mono", monospace' }}>{kaliArt}</pre>
          </div>
        );
      case 'info':
        return <div key={index} className="term-line" style={{ color: '#00e5ff', fontSize: '0.78rem' }}>{line.text}</div>;
      case 'prompt':
        return <div key={index} className="term-line term-prompt-line"><span className="term-prompt-user">{line.text}</span></div>;
      case 'command-exec':
        return (
          <div key={index} className="term-line term-command-line">
            <span className="term-prompt-hash">{line.prompt}</span>
            <span className="term-typed">{line.text}</span>
          </div>
        );
      case 'output':
        return <div key={index} className="term-line term-output">{line.text}</div>;
      case 'highlight':
        return <div key={index} className="term-line term-output-highlight">{line.text}</div>;
      case 'success':
        return <div key={index} className="term-line term-output-success">{line.text}</div>;
      case 'motd':
        return <div key={index} className="term-line term-motd">{line.text}</div>;
      case 'progress':
        return <ProgressBar key={index} />;
      case 'waiting':
        return (
          <div key={index} className="term-line term-output-success">
            {line.text} <span className={`term-cursor ${showCursor ? 'visible' : ''}`}>█</span>
          </div>
        );
      case 'empty':
        return <div key={index} className="term-line">&nbsp;</div>;
      default:
        return <div key={index} className="term-line">{line.text}</div>;
    }
  };

  return (
    <div className="kali-intro" id="intro-screen">
      {/* Matrix rain background */}
      <div className="kali-matrix-rain">
        {matrixChars.map(c => (
          <span
            key={c.id}
            className="matrix-char"
            style={{
              left: `${c.left}%`,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
              fontSize: `${c.size}px`,
              opacity: c.opacity,
            }}
          >
            {c.char}
          </span>
        ))}
      </div>

      {/* Ambient particles */}
      <div className="kali-particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="kali-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Top status bar */}
      <div className="kali-status-bar">
        <div className="kali-status-left">
          <span className="kali-status-dot"></span>
          <span>SECURE CONNECTION</span>
        </div>
        <div className="kali-status-center">TADJ EDDINE BOUDERBA — PORTFOLIO TERMINAL</div>
        <div className="kali-status-right">
          <span>TLS 1.3</span>
          <span className="kali-status-dot"></span>
        </div>
      </div>

      {/* Terminal window */}
      <div className="kali-terminal-window">
        {/* Title bar */}
        <div className="kali-titlebar">
          <div className="kali-titlebar-dots">
            <span className="dot-close"></span>
            <span className="dot-minimize"></span>
            <span className="dot-maximize"></span>
          </div>
          <div className="kali-titlebar-title">
            <span style={{ color: 'rgba(0,255,51,0.6)' }}>root@tadjeddine</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>:</span>
            <span style={{ color: 'rgba(0,229,255,0.6)' }}>~</span>
          </div>
          <div className="kali-titlebar-actions">
            <span>─</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        {/* Terminal body */}
        <div className="kali-terminal-body" ref={terminalRef}>
          {lines.map((line, index) => renderLine(line, index))}
          
          {typingDone && (
            <>
              <div className="term-line term-prompt-line">
                <span className="term-prompt-user">┌──(root㉿tadjeddine)-[~]</span>
              </div>
              <div className="term-line term-command-line">
                <span className="term-prompt-hash">└─# </span>
                <span className={`term-cursor ${showCursor ? 'visible' : ''}`}>█</span>
              </div>
            </>
          )}
        </div>

        {/* Enter button */}
        <div className={`kali-enter-container ${showButton ? 'visible' : ''}`}>
          <button className="kali-enter-btn" onClick={onEnter}>
            <span className="kali-enter-icon">▶</span>
            <span>ACCESS PORTFOLIO</span>
            <span className="kali-enter-badge">VISITOR</span>
          </button>
        </div>
      </div>

      {/* Bottom hint */}
      <p className="kali-hint">
        <span className="kali-hint-bracket">[</span>
        Press the button or click anywhere to access the system
        <span className="kali-hint-bracket">]</span>
      </p>
    </div>
  );
};

export default KaliTerminal;
