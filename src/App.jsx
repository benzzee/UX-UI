import React, { useState, useEffect } from 'react';
import { initialSlides } from './mockData';

// --- CUSTOM INTERACTIVE GRAPHIC COMPONENTS ---

// 1. UX Intro: Empathy + Problem Solving
const UXIntroAnimation = ({ slideId }) => {
  // Onboarding mobile mockup state
  const [onboardStep, setOnboardStep] = useState(0);
  useEffect(() => {
    if (slideId !== 'w1-s6') return;
    const interval = setInterval(() => {
      setOnboardStep(prev => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [slideId]);

  // Fitness tracker state
  const [steps, setSteps] = useState(4520);
  useEffect(() => {
    if (slideId !== 'w1-s7') return;
    const interval = setInterval(() => {
      setSteps(prev => (prev >= 4580 ? 4520 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  }, [slideId]);

  if (slideId === 'w1-s6') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">โมเดลสอนการใช้งานแอป (Onboarding Flow) - เล่นอัตโนมัติ</span>
        <div style={{
          width: '320px',
          height: '420px',
          background: 'white',
          borderRadius: '32px',
          border: '2px solid rgba(225,29,72,0.15)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {/* Status bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 24px', fontSize: '10px', color: '#94a3b8', fontWeight: 'bold', background: '#fafafa' }}>
            <span>09:41 น.</span>
            <span>🔋 100%</span>
          </div>

          {/* Stepper Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', margin: '20px 0' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: onboardStep === 0 ? '#e11d48' : '#cbd5e1', transition: 'all 0.3s' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: onboardStep === 1 ? '#e11d48' : '#cbd5e1', transition: 'all 0.3s' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: onboardStep === 2 ? '#e11d48' : '#cbd5e1', transition: 'all 0.3s' }}></div>
          </div>

          {/* Step Contents */}
          <div style={{ flexGrow: 1, padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
            {onboardStep === 0 && (
              <div style={{ animation: 'pulse 3s infinite' }}>
                <span style={{ fontSize: '48px' }}>👋</span>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', margin: '14px 0 8px 0', fontFamily: 'Kanit' }}>ยินดีต้อนรับสู่แอปเรียนรู้</h4>
                <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>เริ่มต้นห้องเรียนที่สนุกที่สุดในการทำความเข้าใจการปฏิสัมพันธ์กับคอมพิวเตอร์ดิจิทัล</p>
              </div>
            )}
            {onboardStep === 1 && (
              <div>
                <span style={{ fontSize: '48px' }}>🎯</span>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', margin: '14px 0 8px 0', fontFamily: 'Kanit' }}>ระบุเป้าหมายการเรียน</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '180px', margin: '10px auto 0 auto' }}>
                  <div style={{ padding: '6px 12px', background: '#fff1f2', border: '1.5px solid #fb7185', borderRadius: '8px', fontSize: '11px', color: '#e11d48', fontWeight: 'bold', animation: 'pulse 1.5s infinite' }}>🎨 การออกแบบอินเตอร์เฟส (UI)</div>
                  <div style={{ padding: '6px 12px', background: '#f1f5f9', border: '1.5px dashed #cbd5e1', borderRadius: '8px', fontSize: '11px', color: '#64748b' }}>🧠 การวิเคราะห์ผู้ใช้ (UX)</div>
                </div>
              </div>
            )}
            {onboardStep === 2 && (
              <div>
                <span style={{ fontSize: '48px' }}>🚀</span>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#10b981', margin: '14px 0 8px 0', fontFamily: 'Kanit' }}>ตั้งค่าเรียบร้อย!</h4>
                <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>ระบบวิเคราะห์ส่วนบุคคลของคุณพร้อมใช้งานแล้ว เริ่มต้นบทเรียนกันเลย</p>
                <button style={{ background: '#10b981', border: 'none', color: 'white', padding: '8px 24px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', marginTop: '16px' }}>เข้าสู่ห้องเรียน</button>
              </div>
            )}
          </div>

          <div style={{ padding: '24px', textAlign: 'center' }}>
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>แอนิเมชันจำลอง - ปรับขั้นตอนตามเวลา</span>
          </div>
        </div>
      </div>
    );
  }

  if (slideId === 'w1-s7') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">ระบบวิเคราะห์แอปสุขภาพ (Fitness Tracker) - อัปเดตออโต้</span>
        <div style={{
          width: '320px',
          height: '420px',
          background: 'white',
          borderRadius: '32px',
          border: '2px solid rgba(225,29,72,0.15)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {/* Status bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 24px', fontSize: '10px', color: '#94a3b8', fontWeight: 'bold', background: '#fafafa' }}>
            <span>09:41 น.</span>
            <span>🔋 100%</span>
          </div>

          {/* Fitness dashboard */}
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
            <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', fontFamily: 'Kanit' }}>กิจกรรมสุขภาพวันนี้</h4>
            
            {/* Step Counter Widget */}
            <div style={{ background: '#fff1f2', borderRadius: '18px', padding: '16px', display: 'flex', alignItems: 'center', gap: '14px', border: '1px solid rgba(225,29,72,0.1)' }}>
              <span style={{ fontSize: '32px' }}>🏃</span>
              <div>
                <span style={{ fontSize: '10px', color: '#e11d48', fontWeight: 'bold', display: 'block', fontFamily: 'Kanit' }}>จำนวนก้าวที่เดินวันนี้</span>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', fontFamily: 'Inter' }}>{steps.toLocaleString()}</span>
                <span style={{ fontSize: '10px', color: '#64748b' }}> / 5,000 ก้าว</span>
              </div>
            </div>

            {/* Live Heartbeat Widget */}
            <div style={{ background: '#f8fafc', borderRadius: '18px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: '#475569', fontWeight: 'bold', fontFamily: 'Kanit' }}>อัตราการเต้นของหัวใจ</span>
                <span style={{ fontSize: '12px', color: '#ef4444', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ animation: 'pulse 1s infinite', display: 'inline-block' }}>❤️</span> 78 BPM
                </span>
              </div>
              
              {/* Animated heartbeat wave SVG */}
              <div style={{ height: '50px', background: 'white', borderRadius: '8px', overflow: 'hidden', position: 'relative', border: '1px solid #f1f5f9' }}>
                <svg width="250" height="50" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <path 
                    d="M 0 25 L 30 25 L 40 10 L 50 40 L 60 25 L 120 25 L 130 5 L 140 45 L 150 25 L 200 25 L 210 10 L 220 40 L 230 25 L 250 25" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="2.5" 
                    strokeDasharray="400"
                    strokeDashoffset="0"
                    style={{
                      animation: 'drawWave 4s infinite linear'
                    }}
                  />
                </svg>
              </div>
            </div>
            
            <div style={{ background: '#f0fdf4', borderRadius: '14px', padding: '10px 14px', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '16px' }}>✅</span>
              <span style={{ fontSize: '10px', color: '#166534', lineHeight: '1.4', fontFamily: 'Kanit' }}>ความหน่วงตอบสนองน้อยที่สุด (Fast UX Response)</span>
            </div>
          </div>
          
          <style>{`
            @keyframes drawWave {
              0% { stroke-dashoffset: 400; }
              100% { stroke-dashoffset: 0; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  const isProduct = slideId === 'w1-s2' || slideId === 'w1-s4';
  const isProblem = slideId === 'w1-s3';
  const isBehavior = slideId === 'w1-s5';
  
  return (
    <div className="visual-container">
      <span className="art-badge">โมเดลการทำงานของ UX - ไฮไลต์ตามหัวข้อการเรียน</span>
      <svg width="430" height="430" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id="blobGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(251, 113, 133, 0.4)" />
            <stop offset="100%" stopColor="rgba(225, 29, 72, 0)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Soft background blob */}
        <circle cx="100" cy="100" r="70" fill="url(#blobGrad)" style={{
          animation: 'pulse 6s infinite alternate ease-in-out'
        }} />

        {/* Center Product Hub */}
        <g 
          transform="translate(100, 100)" 
          style={{ 
            filter: isProduct ? 'url(#glow)' : 'none',
            transform: `translate(100px, 100px) scale(${isProduct ? 1.25 : 1})`,
            transformOrigin: 'center',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          <circle r="25" fill={isProduct ? '#e11d48' : '#f43f5e'} style={{ opacity: isProblem || isBehavior ? 0.4 : 1, transition: 'all 0.5s' }} />
          <text y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Kanit">
            PRODUCT
          </text>
        </g>

        {/* Outer nodes (User Goals, Problem Solving, Empathy) */}
        {/* Node 1: User Behavior */}
        <g 
          transform="translate(100, 30)" 
          style={{ 
            transform: `translate(100px, 30px) scale(${isBehavior ? 1.3 : 1})`, 
            transformOrigin: 'center', 
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
          }}
        >
          <circle r="16" fill="white" stroke={isBehavior ? '#e11d48' : '#fb7185'} strokeWidth={isBehavior ? '3' : '2'} style={{ opacity: isProduct || isProblem ? 0.3 : 1, transition: 'all 0.5s' }} />
          <circle r="3" fill="#e11d48" style={{ opacity: isProduct || isProblem ? 0.3 : 1 }} />
          <text y="28" textAnchor="middle" fontSize="9" fontWeight={isBehavior ? 'bold' : '500'} fill={isBehavior ? '#e11d48' : '#1e293b'} fontFamily="Kanit">พฤติกรรมผู้ใช้</text>
          <path d="M 0 16 L 0 45" stroke="#fb7185" strokeDasharray="3 3" strokeWidth="1.5" style={{ opacity: isBehavior ? 1 : 0.4, transition: 'all 0.5s' }} />
        </g>

        {/* Node 2: Problem Solving */}
        <g 
          transform="translate(35, 140)" 
          style={{ 
            transform: `translate(35px, 140px) scale(${isProblem ? 1.3 : 1})`, 
            transformOrigin: 'center', 
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
          }}
        >
          <circle r="16" fill="white" stroke={isProblem ? '#e11d48' : '#fb7185'} strokeWidth={isProblem ? '3' : '2'} style={{ opacity: isProduct || isBehavior ? 0.3 : 1, transition: 'all 0.5s' }} />
          <path d="M -5 0 L 5 0 M 0 -5 L 0 5" stroke="#e11d48" strokeWidth="2" style={{ opacity: isProduct || isBehavior ? 0.3 : 1 }} />
          <text y="28" textAnchor="middle" fontSize="9" fontWeight={isProblem ? 'bold' : '500'} fill={isProblem ? '#e11d48' : '#1e293b'} fontFamily="Kanit">แก้ปัญหา</text>
          <path d="M 12 -10 L 45 -25" stroke="#fb7185" strokeDasharray="3 3" strokeWidth="1.5" style={{ opacity: isProblem ? 1 : 0.4, transition: 'all 0.5s' }} />
        </g>

        {/* Node 3: Empathy */}
        <g transform="translate(165, 140)">
          <circle r="16" fill="white" stroke="#fb7185" strokeWidth="2" style={{ opacity: isProduct || isProblem || isBehavior ? 0.3 : 1, transition: 'all 0.5s' }} />
          <path d="M-6 -2 C-3 -6, 3 -6, 6 -2 C9 -6, 15 -6, 18 -2 C20 2, 12 10, 6 14 C0 10, -8 2, -6 -2 Z" fill="#e11d48" transform="scale(0.5) translate(-12, -8)" style={{ opacity: isProduct || isProblem || isBehavior ? 0.3 : 1 }} />
          <text y="28" textAnchor="middle" fontSize="9" fontWeight="500" fill="#1e293b" fontFamily="Kanit">ความเข้าอกเข้าใจ</text>
          <path d="M -12 -10 L -45 -25" stroke="#fb7185" strokeDasharray="3 3" strokeWidth="1.5" style={{ opacity: isProduct || isProblem || isBehavior ? 0.3 : 0.4, transition: 'all 0.5s' }} />
        </g>

        {/* Orbiting particles */}
        <circle r="4" fill="#e11d48" style={{
          motionPath: 'path("M 100 30 Q 150 50 165 140 Q 100 120 35 140 Q 50 50 100 30 Z")',
          animation: 'orbit 8s infinite linear',
          offsetPath: 'path("M 100 30 Q 150 50 165 140 Q 100 120 35 140 Q 50 50 100 30 Z")'
        }} />
      </svg>
      <style>{`
        @keyframes orbit {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
      `}</style>
    </div>
  );
};

// 2. UX vs UI split wipes demo
const UXvsUIAnimation = ({ slideId }) => {
  const [sliderVal, setSliderVal] = useState(50);
  const [isInteracted, setIsInteracted] = useState(false);

  // Auto sweep slider back and forth for slide w1-s8
  useEffect(() => {
    if (isInteracted) return;

    if (slideId === 'w1-s9') {
      setSliderVal(10); // lock to UX wireframe
    } else if (slideId === 'w1-s10') {
      setSliderVal(90); // lock to UI styled view
    } else {
      let direction = 1;
      let val = 50;
      const interval = setInterval(() => {
        val += direction * 2;
        if (val >= 85) {
          direction = -1;
        } else if (val <= 15) {
          direction = 1;
        }
        setSliderVal(val);
      }, 60);
      return () => clearInterval(interval);
    }
  }, [slideId, isInteracted]);

  const handleSliderChange = (e) => {
    setIsInteracted(true);
    setSliderVal(Number(e.target.value));
  };

  return (
    <div className="visual-container" style={{ width: '100%' }}>
      <span className="art-badge">เปรียบเทียบ UX (ลวดลายลอจิก) & UI (สีสันเสร็จสิ้น) - {isInteracted ? 'ควบคุมด้วยมือ' : 'โหมดสไลด์ออโต้'}</span>
      <div style={{ position: 'relative', width: '360px', height: '450px', background: '#f8fafc', borderRadius: '32px', overflow: 'hidden', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.06)', border: '2px solid #e2e8f0' }}>
        
        {/* Left Side: UX Wireframe */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#e2e8f0', padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ height: '52px', border: '1.5px dashed #94a3b8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: '#64748b', fontWeight: 'bold' }}>Header (Navbar)</div>
          <div style={{ flexGrow: 1, border: '1.5px dashed #94a3b8', borderRadius: '18px', display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px' }}>
            <div style={{ width: '74px', height: '74px', borderRadius: '50%', border: '1.5px dashed #94a3b8', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#64748b' }}>Avatar</div>
            <div style={{ height: '16px', background: '#cbd5e1', width: '70%', margin: '0 auto', borderRadius: '4px' }}></div>
            <div style={{ height: '16px', background: '#cbd5e1', width: '40%', margin: '0 auto', borderRadius: '4px' }}></div>
            <div style={{ height: '50px', border: '1.5px dashed #94a3b8', borderRadius: '8px', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#64748b', fontWeight: 'bold' }}>Button Placeholder</div>
          </div>
        </div>

        {/* Right Side: UI styled (with clipPath based on sliderVal) */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: 'white',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          clipPath: `polygon(${sliderVal}% 0%, 100% 0%, 100% 100%, ${sliderVal}% 100%)`,
          transition: 'none'
        }}>
          <div style={{ height: '52px', background: 'linear-gradient(135deg, #e11d48, #fb7185)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', color: 'white', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(225,29,72,0.15)' }}>User Dashboard</div>
          <div style={{ flexGrow: 1, background: '#fff1f2', borderRadius: '18px', display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px', border: '1px solid rgba(225,29,72,0.1)' }}>
            <div style={{ width: '76px', height: '76px', borderRadius: '50%', background: 'linear-gradient(135deg, #fecdd3, #fb7185)', margin: '0 auto', border: '2px solid white', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>👩‍🎓</div>
            <div style={{ height: '16px', background: '#1e293b', width: '80%', margin: '0 auto', borderRadius: '4px' }}></div>
            <div style={{ height: '11px', background: '#94a3b8', width: '50%', margin: '0 auto', borderRadius: '4px' }}></div>
            <button style={{ height: '50px', background: '#e11d48', border: 'none', borderRadius: '8px', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Kanit', boxShadow: '0 4px 10px rgba(225,29,72,0.2)' }}>ดูข้อมูลผลการเรียน</button>
          </div>
        </div>

        {/* Split Divider line */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${sliderVal}%`, width: '4px', background: '#e11d48', zIndex: 10, cursor: 'ew-resize', boxShadow: '0 0 8px #e11d48' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e11d48', border: '3px solid white', position: 'absolute', top: '50%', left: '-14px', transform: 'translateY(-50%)', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}></div>
        </div>
      </div>
      
      {/* Slider Control */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', width: '100%', maxWidth: '240px' }}>
        <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#64748b', fontFamily: 'Kanit' }}>UX (โครงสร้าง)</span>
        <input type="range" min="0" max="100" value={sliderVal} onChange={handleSliderChange} style={{ flexGrow: 1, accentColor: '#e11d48' }} />
        <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#e11d48', fontFamily: 'Kanit' }}>UI (ความสวยงาม)</span>
      </div>
    </div>
  );
};

// 3. UI Roles: Micro-interactions & feedback
const UIRolesAnimation = ({ slideId }) => {
  const [liked, setLiked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [prog, setProg] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);
  const [activeQualityGrid, setActiveQualityGrid] = useState(0);

  // Floating heart emojis for slide w1-s12
  const [hearts, setHearts] = useState([]);
  const addFloatingHeart = () => {
    const id = Math.random();
    setHearts(prev => [...prev, { id, left: Math.random() * 80 + 10 }]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== id));
    }, 2000);
  };

  // 1. Emotional UI (w1-s12) auto-pop hearts and scales heart
  useEffect(() => {
    if (slideId !== 'w1-s12') return;
    const interval = setInterval(() => {
      addFloatingHeart();
      setLiked(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, [slideId]);

  // 2. Interactive Components (w1-s14) auto-loop sequence
  useEffect(() => {
    if (slideId !== 'w1-s14' || manualOverride) return;
    
    let timer;
    const runSequence = () => {
      // Step 1: Click heart
      setLiked(true);
      timer = setTimeout(() => {
        // Step 2: Toggle switch
        setToggle(true);
        timer = setTimeout(() => {
          // Step 3: Run progress
          let currentProg = 0;
          const progInterval = setInterval(() => {
            currentProg += 10;
            setProg(currentProg);
            if (currentProg >= 100) {
              clearInterval(progInterval);
              timer = setTimeout(() => {
                // Step 4: Reset all
                setLiked(false);
                setToggle(false);
                setProg(0);
                timer = setTimeout(runSequence, 1500);
              }, 2000);
            }
          }, 100);
        }, 1200);
      }, 1200);
    };

    runSequence();
    return () => {
      clearTimeout(timer);
    };
  }, [slideId, manualOverride]);

  // 3. UI Summary grid clockwise loop (w1-s15)
  useEffect(() => {
    if (slideId !== 'w1-s15') return;
    const interval = setInterval(() => {
      setActiveQualityGrid(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [slideId]);

  const triggerProgressManual = () => {
    setManualOverride(true);
    setProg(0);
    setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 10;
        setProg(current);
        if (current >= 100) clearInterval(interval);
      }, 80);
    }, 100);
  };

  const handleHeartClick = () => {
    setManualOverride(true);
    setLiked(!liked);
    if (!liked && slideId === 'w1-s12') {
      addFloatingHeart();
    }
  };

  const handleToggleClick = () => {
    setManualOverride(true);
    setToggle(!toggle);
  };

  if (slideId === 'w1-s12') {
    return (
      <div className="visual-container" style={{ width: '100%', position: 'relative' }}>
        <span className="art-badge">จิตวิทยาการออกแบบทางอารมณ์ (Emotional Design)</span>
        
        <div style={{
          width: '360px',
          height: '400px',
          background: 'linear-gradient(135deg, #fff5f5, #ffe3e3)',
          borderRadius: '32px',
          border: '2px solid #ffc9c9',
          boxShadow: '0 12px 35px rgba(225,29,72,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Floating Hearts Emojis */}
          {hearts.map(h => (
            <div 
              key={h.id} 
              className="floating-emoji-heart"
              style={{
                position: 'absolute',
                left: `${h.left}%`,
                bottom: '120px',
                fontSize: '28px',
                pointerEvents: 'none',
                animation: 'driftUp 2s forwards ease-out'
              }}
            >
              ❤️
            </div>
          ))}

          <button 
            onClick={handleHeartClick}
            style={{
              background: 'white',
              border: 'none',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px',
              boxShadow: liked ? '0 0 30px rgba(225,29,72,0.4)' : '0 6px 15px rgba(0,0,0,0.06)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5)',
              transform: liked ? 'scale(1.25)' : 'scale(1)'
            }}
          >
            {liked ? '💖' : '🤍'}
          </button>
          
          <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#be123c', marginTop: '24px', fontFamily: 'Kanit' }}>การสร้างความสุขผ่านการกด</h4>
          <p style={{ fontSize: '12px', color: '#868e96', marginTop: '6px', textAlign: 'center', padding: '0 30px', lineHeight: '1.4' }}>ความเด้งตอบสนองของรูปหัวใจและอนุภาคที่ลอยขึ้นช่วยให้สมองหลั่งสารแห่งความพึงพอใจ</p>
        </div>

        <style>{`
          @keyframes driftUp {
            0% { transform: translateY(0) scale(0.5); opacity: 1; }
            100% { transform: translateY(-200px) scale(1.3); opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  if (slideId === 'w1-s13') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">มนุษย์มีส่วนร่วมผ่านหน้าจอ (Interactive Medium)</span>
        
        <div style={{
          width: '320px',
          height: '420px',
          background: 'white',
          borderRadius: '32px',
          border: '2px solid rgba(225,29,72,0.15)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {/* Status bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 24px', fontSize: '10px', color: '#94a3b8', fontWeight: 'bold', background: '#fafafa' }}>
            <span>09:41 น.</span>
            <span>🔋 100%</span>
          </div>

          <div style={{ flexGrow: 1, padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <div style={{ width: '220px', height: '140px', border: '2.5px dashed #cbd5e1', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'Kanit' }}>เว็บโรงเรียนดีไซน์ใหม่</span>
              
              {/* Pulsing overlay pointer */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(225, 29, 72, 0.2)',
                animation: 'rippleWave 2s infinite ease-out'
              }}></div>
              
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#e11d48',
                boxShadow: '0 0 10px #e11d48'
              }}></div>
            </div>

            <div style={{ textAlign: 'center', maxWidth: '240px' }}>
              <h5 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b', fontFamily: 'Kanit' }}>จุดสัมผัสโต้ตอบ (Medium Touch)</h5>
              <p style={{ fontSize: '11px', color: '#64748b', marginTop: '6px', lineHeight: '1.4' }}>อินเทอร์เฟซเชื่อมโยงผู้ใช้เข้ากับลอจิกคอมพิวเตอร์ผ่านการแตะสัมผัสเบาๆ</p>
            </div>
          </div>

          <style>{`
            @keyframes rippleWave {
              0% { transform: translate(-50%, -50%) scale(0.3); opacity: 1; }
              100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (slideId === 'w1-s15') {
    const qualities = [
      { name: '1. Friendly (เป็นมิตร)', desc: 'ปุ่มเข้าใจง่าย ถนอมสายตา', icon: '😊' },
      { name: '2. Trustworthy (มั่นใจ)', desc: 'จัดกลุ่มชัดเจน มีระเบียบและปลอดภัย', icon: '🛡️' },
      { name: '3. Reasonable (มีเหตุผล)', desc: 'การนำทางสอดคล้องกันไม่ขัดแย้ง', icon: '🧠' },
      { name: '4. Attractive (ดึงดูดใจ)', desc: 'สีสวยงาม สัดส่วนสเปซสมบูรณ์', icon: '✨' }
    ];
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">4 คุณสมบัติสำคัญของอินเทอร์เฟซที่เปี่ยมประสิทธิภาพ</span>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          width: '360px',
          marginTop: '10px'
        }}>
          {qualities.map((q, idx) => {
            const isActive = activeQualityGrid === idx;
            return (
              <div 
                key={idx}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '16px',
                  border: isActive ? '2px solid #e11d48' : '2.5px solid #e2e8f0',
                  boxShadow: isActive ? '0 8px 20px rgba(225,29,72,0.12)' : 'none',
                  transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <span style={{ fontSize: '24px' }}>{q.icon}</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: isActive ? '#e11d48' : '#1e293b', fontFamily: 'Kanit' }}>{q.name}</span>
                <p style={{ fontSize: '10px', color: '#64748b', lineHeight: '1.3' }}>{q.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (slideId === 'w1-s11') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">ความพึงพอใจการจัดวางองค์ประกอบอินเทอร์เฟซ</span>
        
        <div style={{
          width: '350px',
          background: 'white',
          borderRadius: '28px',
          padding: '24px',
          border: '2px solid rgba(225,29,72,0.18)',
          boxShadow: '0 8px 25px rgba(225,29,72,0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <div style={{ borderLeft: '3px solid #e11d48', paddingLeft: '10px' }}>
            <span style={{ fontSize: '11px', color: '#e11d48', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>UI Look & Feel</span>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b', fontFamily: 'Kanit', marginTop: '2px' }}>การจัดองค์ประกอบโดยรวม</h4>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: '#fff1f2', borderRadius: '16px', padding: '16px', border: '1px solid rgba(225,29,72,0.06)' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e11d48', animation: 'pulse 1.2s infinite' }}></div>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#be123c', fontFamily: 'Kanit' }}>ความสวยงามประณีต</span>
            </div>
            <div style={{ height: '8px', background: 'rgba(225,29,72,0.15)', width: '90%', borderRadius: '4px' }}></div>
            <div style={{ height: '8px', background: 'rgba(225,29,72,0.15)', width: '60%', borderRadius: '4px' }}></div>
          </div>
          
          <span style={{ fontSize: '10px', color: '#64748b', textAlign: 'center', fontStyle: 'italic' }}>"หน้าตาที่ดีช่วยกระตุ้นให้อยากปฏิสัมพันธ์เชิงระบบ"</span>
        </div>
      </div>
    );
  }

  return (
    <div className="visual-container" style={{ width: '100%' }}>
      <span className="art-badge">ห้องปฏิบัติการปุ่มโต้ตอบ (Micro-interactions) - {manualOverride ? 'ควบคุมอิสระ' : 'สาธิตอัตโนมัติ'}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '360px', padding: '36px', background: 'white', borderRadius: '32px', border: '1px solid rgba(225,29,72,0.15)', boxShadow: '0 10px 30px rgba(225,29,72,0.08)' }}>
        
        {/* Heart button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'Kanit' }}>ปุ่มถูกใจ (Heart Scale):</span>
          <button 
            onClick={handleHeartClick} 
            style={{ 
              background: liked ? '#ffe4e6' : '#f1f5f9', 
              border: 'none', 
              width: '54px', 
              height: '54px', 
              borderRadius: '50%', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '26px',
              transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: liked ? 'scale(1.2)' : 'scale(1)'
            }}
          >
            {liked ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Toggle Switch */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'Kanit' }}>สวิตช์เปิด/ปิด (Slide Switch):</span>
          <div 
            onClick={handleToggleClick}
            style={{
              width: '66px',
              height: '34px',
              borderRadius: '17px',
              background: toggle ? '#e11d48' : '#cbd5e1',
              position: 'relative',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          >
            <div style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: 'white',
              position: 'absolute',
              top: '4px',
              left: toggle ? '36px' : '4px',
              transition: 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
            }}></div>
          </div>
        </div>

        {/* Progress Ring trigger */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', fontFamily: 'Kanit' }}>แถบความก้าวหน้า:</span>
            <button className="btn btn-outline" onClick={triggerProgressManual} style={{ padding: '6px 14px', fontSize: '11px', borderRadius: '8px' }}>เริ่มดาวน์โหลด</button>
          </div>
          <div style={{ width: '100%', height: '12px', background: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ width: `${prog}%`, height: '100%', background: 'linear-gradient(90deg, #e11d48, #fb7185)', transition: 'width 0.1s ease', borderRadius: '6px' }}></div>
          </div>
          <span style={{ fontSize: '10px', color: '#64748b', textAlign: 'right' }}>ดาวน์โหลดแล้ว {prog}%</span>
        </div>
      </div>
    </div>
  );
};

// 4. UX/UI Principles: Interactive Venn Diagram
const UXUIPrinciplesAnimation = ({ slideId }) => {
  return (
    <div className="visual-container">
      <span className="art-badge">ศาสตร์ (UX) และ ศิลป์ (UI) ประสานกัน</span>
      <div style={{ position: 'relative', width: '420px', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Ring 1: UX */}
        <div style={{
          position: 'absolute',
          left: '10px',
          width: '230px',
          height: '230px',
          borderRadius: '50%',
          border: '4px solid #fb7185',
          background: 'rgba(254, 205, 211, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px',
          textAlign: 'center',
          animation: 'pulse 4s infinite alternate ease-in-out'
        }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#be123c', fontFamily: 'Kanit' }}>UX (ศาสตร์)</span>
          <span style={{ fontSize: '12px', color: '#be123c' }}>พฤติกรรม & เหตุผล</span>
        </div>

        {/* Ring 2: UI */}
        <div style={{
          position: 'absolute',
          right: '10px',
          width: '230px',
          height: '230px',
          borderRadius: '50%',
          border: '4px solid #e11d48',
          background: 'rgba(225, 29, 72, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px',
          textAlign: 'center',
          animation: 'pulse 4s infinite alternate-reverse ease-in-out'
        }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#881337', fontFamily: 'Kanit' }}>UI (ศิลป์)</span>
          <span style={{ fontSize: '12px', color: '#881337' }}>ความรู้สึก & สีสัน</span>
        </div>

        {/* Intersection center glowing star */}
        <div style={{
          position: 'absolute',
          width: '124px',
          height: '124px',
          borderRadius: '50%',
          background: 'white',
          border: '4px solid #e11d48',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px rgba(225, 29, 72, 0.4)',
          zIndex: 5,
          textAlign: 'center',
          animation: 'spin 12s infinite linear'
        }}>
          <div style={{ transform: 'rotate(0deg)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#e11d48' }}>SUCCESS</span>
            <span style={{ fontSize: '12px', color: '#1e293b' }}>PRODUCT</span>
          </div>
        </div>

      </div>
    </div>
  );
};

// 5. User Centric & Design Thinking Process
const UserCentricAnimation = ({ slideId }) => {
  const steps = [
    { name: 'Empathize', color: '#fda4af', desc: 'เข้าใจผู้ใช้เชิงลึก สัมภาษณ์ รวบรวมปัญหา' },
    { name: 'Define', color: '#f43f5e', desc: 'สรุปปัญหาหลัก และจัดทำคู่แข่ง/Persona' },
    { name: 'Ideate', color: '#e11d48', desc: 'ระดมไอเดียแนวทางแก้ไขที่แปลกใหม่' },
    { name: 'Prototype', color: '#be123c', desc: 'สร้างแบบจำลองกระดาษหรือภาพเสมือนจริง' },
    { name: 'Test', color: '#9f1239', desc: 'ทดสอบกับกลุ่มตัวอย่าง ค้นหาข้อผิดพลาด' },
  ];
  
  const [activeStep, setActiveStep] = useState(0);

  // 1. Design thinking step cycles for slide w2-s7
  useEffect(() => {
    if (slideId !== 'w2-s7') {
      if (slideId === 'w2-s3') {
        setActiveStep(0); // Empathize highlight
      }
      return;
    }
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideId]);

  // 2. Chat Dialogue for w2-s4 (User Interview)
  const chatDialogue = [
    { sender: 'interviewer', text: 'สวัสดีค่ะ รบกวนสัมภาษณ์การใช้งานแอปเรียนหน่อยค่ะ ปัญหายอดฮิตคืออะไรคะ?' },
    { sender: 'user', text: 'หาปุ่มส่งการบ้านไม่เจอเลยค่ะ มันกลืนไปกับพื้นหลังหมด หาเหนื่อยมาก' },
    { sender: 'interviewer', text: 'เข้าใจเลยค่ะ แล้วรู้สึกอย่างไรขณะใช้งานตอนนั้นคะ?' },
    { sender: 'user', text: 'รู้สึกกังวลมากค่ะ กลัวกดส่งไม่ทันเดดไลน์ อยากให้ดีไซน์ปุ่มเด่นชัดขึ้นกว่านี้ค่ะ' }
  ];
  const [chatLimit, setChatLimit] = useState(1);
  useEffect(() => {
    if (slideId !== 'w2-s4') return;
    const interval = setInterval(() => {
      setChatLimit(prev => (prev >= chatDialogue.length ? 1 : prev + 1));
    }, 3200);
    return () => clearInterval(interval);
  }, [slideId]);

  // 3. Affinity Map grouping states (w2-s6)
  const [grouped, setGrouped] = useState(false);
  useEffect(() => {
    if (slideId !== 'w2-s6') return;
    const interval = setInterval(() => {
      setGrouped(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, [slideId]);

  // 4. Double Diamond point coordinates tracking (w2-s9)
  const [ddPos, setDdPos] = useState(0);
  useEffect(() => {
    if (slideId !== 'w2-s9') return;
    const interval = setInterval(() => {
      setDdPos(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, [slideId]);

  // Render Interview Chat bubbles (w2-s4)
  if (slideId === 'w2-s4') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">แบบจำลองวิจัยผู้ใช้: การสัมภาษณ์ (User Interview) - เล่นอัตโนมัติ</span>
        
        <div style={{
          width: '360px',
          height: '420px',
          background: '#f8fafc',
          borderRadius: '32px',
          border: '2px solid rgba(225,29,72,0.15)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ background: 'white', padding: '16px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '20px' }}>🎙️</span>
            <div>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1e293b', display: 'block', fontFamily: 'Kanit' }}>การบันทึกบทสัมภาษณ์ UX Research</span>
              <span style={{ fontSize: '9px', color: '#64748b' }}>ผู้ให้สัมภาษณ์: น้องแป้ง (นักเรียน ปวช.2)</span>
            </div>
          </div>

          {/* Conversation Bubbles */}
          <div style={{ flexGrow: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
            {chatDialogue.slice(0, chatLimit).map((chat, idx) => {
              const isInterviewer = chat.sender === 'interviewer';
              return (
                <div 
                  key={idx} 
                  style={{
                    alignSelf: isInterviewer ? 'flex-start' : 'flex-end',
                    maxWidth: '80%',
                    background: isInterviewer ? 'white' : '#e11d48',
                    color: isInterviewer ? '#1e293b' : 'white',
                    padding: '10px 14px',
                    borderRadius: isInterviewer ? '4px 16px 16px 16px' : '16px 16px 4px 16px',
                    fontSize: '11px',
                    lineHeight: '1.4',
                    border: isInterviewer ? '1px solid #cbd5e1' : 'none',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
                    animation: 'fadeIn 0.4s ease'
                  }}
                >
                  {chat.text}
                </div>
              );
            })}
          </div>

          <div style={{ padding: '14px', textAlign: 'center', background: 'white', borderTop: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>บันทึกดิบวิเคราะห์ (Qualitative User Data)</span>
          </div>
        </div>
      </div>
    );
  }

  // Render Persona Card (w2-s5)
  if (slideId === 'w2-s5') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">แบบจำลองตัวตนในอุดมคติ (Persona Card)</span>
        
        <div style={{
          width: '350px',
          background: 'white',
          borderRadius: '28px',
          border: '2px solid rgba(225,29,72,0.18)',
          boxShadow: '0 10px 30px rgba(225,29,72,0.06)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {/* Header profile info */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #fecdd3, #fb7185)', fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>👩</div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b', fontFamily: 'Kanit' }}>นางสาวกานต์ชนก (กานต์)</h4>
              <span style={{ fontSize: '11px', color: '#64748b' }}>อายุ: 17 ปี (ระดับชั้น ปวช.2 คอมพิวเตอร์ดีไซน์)</span>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: 0 }} />

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#e11d48', display: 'block', fontFamily: 'Kanit' }}>🎯 เป้าหมายหลัก (Goals)</span>
              <span style={{ fontSize: '11px', color: '#475569' }}>ต้องการเข้าถึงลิงก์ส่งผลงานการบ้านการเขียนโปรแกรมได้ไวกว่าเดิมเพื่อส่งได้ตรงเวลา</span>
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#ef4444', display: 'block', fontFamily: 'Kanit' }}>⚠️ อุปสรรคขัดใจ (Pain Points)</span>
              <span style={{ fontSize: '11px', color: '#475569' }}>ปุ่มแถบเมนูด้านบนซ้อนหาไม่เจอ ตัวหนังสือขนาดเล็กสับสนขั้นตอนเยอะมาก</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Affinity & Journey Map (w2-s6)
  if (slideId === 'w2-s6') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">ความสัมพันธ์และการจัดกลุ่มปัญหา (Affinity Grouping) - {grouped ? 'จัดระเบียบเสร็จสิ้น' : 'รวบรวมเบื้องต้น'}</span>
        
        <div style={{
          width: '360px',
          height: '400px',
          background: '#f8fafc',
          borderRadius: '32px',
          border: '2.5px solid #cbd5e1',
          boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {grouped ? (
            /* GROUPED STICKY NOTES */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1, animation: 'fadeIn 0.5s' }}>
              <div>
                <span style={{ fontSize: '10px', color: '#e11d48', fontWeight: 'bold', display: 'block', fontFamily: 'Kanit', marginBottom: '8px' }}>หมวดหมู่ที่ 1: ปัญหาระบบนำทาง (Nav Navigation)</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ background: '#fef08a', padding: '10px', width: '130px', height: '80px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.06)', fontSize: '9px', color: '#854d0e', fontFamily: 'Kanit' }}>"หาปุ่มส่งการบ้านแถบเมนูด้านบนไม่เจอเลยค่ะ"</div>
                  <div style={{ background: '#fef08a', padding: '10px', width: '130px', height: '80px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.06)', fontSize: '9px', color: '#854d0e', fontFamily: 'Kanit' }}>"ลิงก์ซ่อนเกะกะสับสนมาก เมนูเยอะ"</div>
                </div>
              </div>

              <div>
                <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 'bold', display: 'block', fontFamily: 'Kanit', marginBottom: '8px' }}>หมวดหมู่ที่ 2: ปัญหาความยากฟอนต์ (Typography)</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ background: '#fed7aa', padding: '10px', width: '130px', height: '80px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.06)', fontSize: '9px', color: '#c2410c', fontFamily: 'Kanit' }}>"ตัวหนังสือหัวข้อเรื่องเล็กอ่านไม่ออก สับสน"</div>
                </div>
              </div>
            </div>
          ) : (
            /* SCATTERED STATE */
            <div style={{ position: 'relative', flexGrow: 1, animation: 'fadeIn 0.5s' }}>
              <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 'bold', fontFamily: 'Kanit' }}>กระดานรวบรวมโพสต์อิทดิบ:</span>
              
              <div style={{ position: 'absolute', top: '40px', left: '10px', background: '#fef08a', padding: '10px', width: '135px', height: '80px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.06)', fontSize: '9px', color: '#854d0e', transform: 'rotate(-4deg)', fontFamily: 'Kanit' }}>
                "หาปุ่มส่งการบ้านแถบเมนูด้านบนไม่เจอเลยค่ะ"
              </div>
              
              <div style={{ position: 'absolute', top: '150px', right: '10px', background: '#fef08a', padding: '10px', width: '135px', height: '80px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.06)', fontSize: '9px', color: '#854d0e', transform: 'rotate(5deg)', fontFamily: 'Kanit' }}>
                "ลิงก์ซ่อนเกะกะสับสนมาก เมนูเยอะ"
              </div>

              <div style={{ position: 'absolute', top: '220px', left: '20px', background: '#fed7aa', padding: '10px', width: '135px', height: '80px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.06)', fontSize: '9px', color: '#c2410c', transform: 'rotate(-2deg)', fontFamily: 'Kanit' }}>
                "ตัวหนังสือหัวข้อเรื่องเล็กอ่านไม่ออก สับสน"
              </div>
            </div>
          )}

          <div style={{ padding: '10px 0', borderTop: '1px solid #cbd5e1', textAlign: 'center' }}>
            <span style={{ fontSize: '9px', color: '#94a3b8' }}>จัดกลุ่มอัตโนมัติสลับโชว์ความสัมพันธ์ใน 4 วินาที</span>
          </div>
        </div>
      </div>
    );
  }

  // Render Lean UX loop (w2-s8)
  if (slideId === 'w2-s8') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">วงล้อกระบวนการคิดฉับไว (Lean UX Iteration Loop)</span>
        
        <div style={{
          width: '360px',
          height: '380px',
          background: 'white',
          borderRadius: '32px',
          border: '2px solid rgba(225,29,72,0.18)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Circulating circle loop path */}
          <div className="lean-loop-ring" style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '3px dashed #fb7185',
            position: 'relative',
            animation: 'spin 16s infinite linear'
          }}>
            {/* Think node */}
            <div style={{ position: 'absolute', top: '-25px', left: '75px', width: '50px', height: '50px', borderRadius: '50%', background: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '9px', fontWeight: 'bold', boxShadow: '0 3px 6px rgba(0,0,0,0.15)', fontFamily: 'Kanit' }}>THINK</div>
            
            {/* Make node */}
            <div style={{ position: 'absolute', bottom: '15px', right: '-15px', width: '50px', height: '50px', borderRadius: '50%', background: '#be123c', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '9px', fontWeight: 'bold', boxShadow: '0 3px 6px rgba(0,0,0,0.15)', fontFamily: 'Kanit' }}>MAKE</div>
            
            {/* Check node */}
            <div style={{ position: 'absolute', bottom: '15px', left: '-15px', width: '50px', height: '50px', borderRadius: '50%', background: '#fb7185', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '9px', fontWeight: 'bold', boxShadow: '0 3px 6px rgba(0,0,0,0.15)', fontFamily: 'Kanit' }}>CHECK</div>
          </div>
          
          <div style={{ position: 'absolute', textAlign: 'center', maxWidth: '140px' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', display: 'block', fontFamily: 'Kanit' }}>LEAN UX</span>
            <span style={{ fontSize: '10px', color: '#64748b' }}>เน้นสร้างไว ทดสอบไว และอัปเดต</span>
          </div>
        </div>
      </div>
    );
  }

  // Render Double Diamond pathways (w2-s9)
  if (slideId === 'w2-s9') {
    // Tracing paths coordinates mapping
    const dotX = 40 + (ddPos / 100) * 320;
    let dotY = 100;
    if (ddPos < 25) {
      dotY = 100 - (ddPos / 25) * 60; // going up in first diamond
    } else if (ddPos < 50) {
      dotY = 40 + ((ddPos - 25) / 25) * 60; // going down to center point
    } else if (ddPos < 75) {
      dotY = 100 - ((ddPos - 50) / 25) * 60; // going up in second diamond
    } else {
      dotY = 40 + ((ddPos - 75) / 25) * 60; // going down to final point
    }

    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">แบบจำลองความคิด ดับเบิ้ลไดมอนด์ (Double Diamond) - วาดพิกัดจุดนำส่ง</span>
        
        <div style={{
          width: '360px',
          height: '240px',
          background: 'white',
          borderRadius: '28px',
          border: '2px solid rgba(225,29,72,0.18)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Double Diamond paths SVG */}
          <svg width="340" height="180" style={{ overflow: 'visible' }}>
            {/* Diamond 1 outlines */}
            <polygon points="40,90 120,30 200,90 120,150" fill="none" stroke="#fecdd3" strokeWidth="2.5" />
            
            {/* Diamond 2 outlines */}
            <polygon points="200,90 280,30 360,90 280,150" fill="none" stroke="#fda4af" strokeWidth="2.5" />

            {/* Middle connecting labels */}
            <text x="40" y="110" fontSize="8" fill="#94a3b8" textAnchor="middle" fontFamily="Kanit">เริ่มปัญหา</text>
            <text x="120" y="170" fontSize="8" fill="#e11d48" textAnchor="middle" fontFamily="Kanit">Discover & Define</text>
            <text x="200" y="110" fontSize="8" fill="#94a3b8" textAnchor="middle" fontFamily="Kanit">นิยามปัญหาได้</text>
            <text x="280" y="170" fontSize="8" fill="#e11d48" textAnchor="middle" fontFamily="Kanit">Develop & Deliver</text>
            <text x="360" y="110" fontSize="8" fill="#10b981" textAnchor="middle" fontFamily="Kanit">สำเร็จผลิตภัณฑ์</text>

            {/* Animated coord point */}
            <circle cx={dotX} cy={dotY} r="8" fill="#e11d48" style={{ boxShadow: '0 0 10px #e11d48', transition: 'all 0.05s linear' }} />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="visual-container" style={{ width: '100%' }}>
      <span className="art-badge">คลิกแต่ละสเต็ปเพื่อเรียนรู้กระบวนการคิดเชิงออกแบบ (Design Thinking) - เล่นตามเวลา</span>
      
      {/* Circle steps */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative', margin: '40px 0', padding: '0 24px' }}>
        <div style={{ position: 'absolute', top: '29px', left: '24px', right: '24px', height: '4px', background: '#fca5a5', zIndex: 1 }}></div>
        {steps.map((st, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '50%',
              background: activeStep === idx ? '#e11d48' : 'white',
              border: `2px solid ${st.color}`,
              color: activeStep === idx ? 'white' : st.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '18px',
              cursor: 'pointer',
              zIndex: 5,
              position: 'relative',
              boxShadow: activeStep === idx ? '0 4px 10px rgba(225,29,72,0.3)' : '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Info details */}
      <div style={{ background: '#fff1f2', borderRadius: '24px', padding: '28px', width: '100%', minHeight: '140px', border: '1px solid rgba(225,29,72,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{ background: steps[activeStep].color, color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold' }}>ขั้นตอนที่ {activeStep + 1}</span>
          <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#1e293b', fontFamily: 'Kanit' }}>{steps[activeStep].name}</span>
        </div>
        <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>{steps[activeStep].desc}</p>
      </div>
    </div>
  );
};

// 6. Cognitive Load form mockup
const CognitiveLoadAnimation = ({ slideId }) => {
  const [loadType, setLoadType] = useState('high'); // 'high' or 'low'
  const [complete, setComplete] = useState(false);
  const [statusStep, setStatusStep] = useState(0); // 0 = spinner, 1 = progress, 2 = success
  const [statusProg, setStatusProg] = useState(0);

  // w2-s14 Auto-typing credit card numbers
  const [cardDigits, setCardDigits] = useState(['', '', '', '']);
  const [cardCheck, setCardCheck] = useState(false);

  // w2-s15 Usability Testing auto pointer overlay
  const [tapIndex, setTapIndex] = useState(0);

  // 1. Cognitive Load high/low auto toggler (w2-s10)
  useEffect(() => {
    if (slideId !== 'w2-s10') return;
    const interval = setInterval(() => {
      setLoadType(prev => (prev === 'high' ? 'low' : 'high'));
    }, 4000);
    return () => clearInterval(interval);
  }, [slideId]);

  // 2. System Status progress loader (w2-s13)
  useEffect(() => {
    if (slideId !== 'w2-s13') return;
    let timer;
    const runStatusLoop = () => {
      setStatusStep(0);
      setStatusProg(0);
      timer = setTimeout(() => {
        setStatusStep(1);
        let progress = 0;
        const progInterval = setInterval(() => {
          progress += 10;
          setStatusProg(progress);
          if (progress >= 100) {
            clearInterval(progInterval);
            setStatusStep(2);
            timer = setTimeout(runStatusLoop, 3000);
          }
        }, 120);
      }, 1200);
    };
    runStatusLoop();
    return () => clearTimeout(timer);
  }, [slideId]);

  // 3. Error Prevention auto-typing credit card inputs (w2-s14)
  useEffect(() => {
    if (slideId !== 'w2-s14') return;
    let timer;
    const runCardTyping = () => {
      setCardDigits(['', '', '', '']);
      setCardCheck(false);
      
      timer = setTimeout(() => {
        setCardDigits(['4444', '', '', '']);
        timer = setTimeout(() => {
          setCardDigits(['4444', '5555', '', '']);
          timer = setTimeout(() => {
            setCardDigits(['4444', '5555', '6666', '']);
            timer = setTimeout(() => {
              setCardDigits(['4444', '5555', '6666', '7777']);
              setCardCheck(true);
              timer = setTimeout(runCardTyping, 3500); // loop
            }, 1000);
          }, 800);
        }, 800);
      }, 1000);
    };
    runCardTyping();
    return () => clearTimeout(timer);
  }, [slideId]);

  // 4. Usability Testing loop (w2-s15)
  useEffect(() => {
    if (slideId !== 'w2-s15') return;
    const interval = setInterval(() => {
      setTapIndex(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [slideId]);

  // Render Mental Models physical vs digital equivalent (w2-s11)
  if (slideId === 'w2-s11') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">แบบจำลองความเข้าใจในใจ (Mental Models)</span>
        
        <div style={{
          width: '350px',
          background: 'white',
          borderRadius: '28px',
          border: '2px solid rgba(225,29,72,0.18)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div>
            <span style={{ fontSize: '11px', color: '#e11d48', fontWeight: 'bold', display: 'block', fontFamily: 'Kanit' }}>เปรียบเทียบ: โลกความจริง ➔ หน้าจอดิจิทัล</span>
            <p style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>สร้างปุ่มโต้ตอบที่เชื่อมโยงความคุ้นเคยเดิมของมนุษย์ในชีวิตจริง</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'center' }}>
            <div style={{ border: '2.5px dashed #cbd5e1', borderRadius: '16px', padding: '16px', background: '#f8fafc' }}>
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '8px' }}>🗑️</span>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b', fontFamily: 'Kanit' }}>ถังขยะจริง</span>
              <p style={{ fontSize: '9px', color: '#94a3b8', marginTop: '2px' }}>มีไว้ทิ้งเศษกระดาษ</p>
            </div>
            
            <div style={{ border: '2.5px solid #fb7185', borderRadius: '16px', padding: '16px', background: '#fff1f2', animation: 'pulse 2s infinite' }}>
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '8px' }}>🗑️</span>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#e11d48', fontFamily: 'Kanit' }}>ปุ่มลบไฟล์ดิจิทัล</span>
              <p style={{ fontSize: '9px', color: '#be123c', marginTop: '2px' }}>เมื่อกดจะเข้าใจทันทีว่าใช้ลบ</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Heuristics Guidelines (w2-s12)
  if (slideId === 'w2-s12') {
    const rules = [
      { num: '1', title: 'Visibility of System Status', desc: 'คอยบอกสถานะระบบปัจจุบัน', highlight: true },
      { num: '2', title: 'Match System & Real World', desc: 'เลียนแบบโมเดลในโลกจริง' },
      { num: '3', title: 'User Control & Freedom', desc: 'มีปุ่มกดยกเลิกและกดย้อนกลับ' },
      { num: '4', title: 'Consistency & Standards', desc: 'ใช้ฟอนต์และสีที่เป็นหนึ่งเดียวกัน' },
      { num: '5', title: 'Error Prevention', desc: 'ออกแบบบล็อกเพื่อเลี่ยงความผิดพลาด', highlight: true }
    ];
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">10 มาตรฐานความง่ายระดับโลก (10 Usability Heuristics)</span>
        
        <div style={{
          width: '355px',
          background: 'white',
          borderRadius: '28px',
          border: '2px solid rgba(225,29,72,0.18)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {rules.map((r, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                background: r.highlight ? '#fff1f2' : 'none',
                border: r.highlight ? '1.5px solid #fb7185' : '1px solid #f1f5f9',
                padding: '10px 14px',
                borderRadius: '12px',
                animation: r.highlight ? 'pulse 2.5s infinite' : 'none'
              }}
            >
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: r.highlight ? '#e11d48' : '#e2e8f0', color: r.highlight ? 'white' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold' }}>{r.num}</div>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: r.highlight ? '#e11d48' : '#1e293b', display: 'block' }}>{r.title}</span>
                <span style={{ fontSize: '9px', color: '#64748b' }}>{r.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render Heuristic Status Progress loops (w2-s13)
  if (slideId === 'w2-s13') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge"> Visibility of System Status (การบอกสถานะ) - ลูปอัตโนมัติ</span>
        
        <div style={{
          width: '350px',
          background: 'white',
          borderRadius: '28px',
          border: '2px solid rgba(225,29,72,0.18)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '260px'
        }}>
          {statusStep === 0 && (
            <div style={{ textAlign: 'center', animation: 'fadeIn 0.4s' }}>
              <div style={{ width: '48px', height: '48px', border: '4px solid #fca5a5', borderTop: '4px solid #e11d48', borderRadius: '50%', animation: 'spin 1s infinite linear', margin: '0 auto 16px auto' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1e293b', fontFamily: 'Kanit' }}>กำลังตรวจสอบสิทธิ์ใบงานของคุณครู...</span>
              <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '6px' }}>คอยรายงานสถานะให้ผู้ใช้ทราบว่าไม่มีการค้างระบบ</p>
            </div>
          )}

          {statusStep === 1 && (
            <div style={{ width: '100%', textAlign: 'center', animation: 'fadeIn 0.4s' }}>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1e293b', fontFamily: 'Kanit', display: 'block', marginBottom: '14px' }}>กำลังส่งความปลอดภัย: อัปโหลดการบ้าน {statusProg}%</span>
              
              <div style={{ width: '100%', height: '14px', background: '#f1f5f9', borderRadius: '7px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                <div style={{ width: `${statusProg}%`, height: '100%', background: 'linear-gradient(90deg, #e11d48, #fb7185)', transition: 'width 0.12s linear' }}></div>
              </div>
              <span style={{ fontSize: '10px', color: '#64748b', display: 'block', marginTop: '10px' }}>มีสถานะแถบประมวลผลชัดเจน</span>
            </div>
          )}

          {statusStep === 2 && (
            <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#d1fae5', border: '3px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', margin: '0 auto 16px auto', animation: 'pulse 1.5s infinite' }}>✅</div>
              <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#065f46', fontFamily: 'Kanit' }}>ส่งไฟล์รายงานสำเร็จเรียบร้อย!</span>
              <p style={{ fontSize: '10px', color: '#047857', marginTop: '4px' }}>ผู้ใช้มั่นใจระดับความคืบหน้า 100%</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render Error Prevention typing masks (w2-s14)
  if (slideId === 'w2-s14') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">Error Prevention (การล็อกค่าความผิดพลาด) - จำลองการพิมพ์บัตร</span>
        
        <div style={{
          width: '350px',
          background: 'white',
          borderRadius: '28px',
          border: '2.5px solid #fb7185',
          boxShadow: '0 8px 25px rgba(225,29,72,0.05)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div>
            <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 'bold', display: 'block', fontFamily: 'Kanit' }}>กลไกป้องกันกรอกเลขผิดอัตโนมัติ</span>
            <p style={{ fontSize: '10px', color: '#64748b', marginTop: '4px' }}>แบ่งกล่องการกรอกแยกทีละ 4 ตัวอักษรช่วยป้องกันสายตาพิมพ์เกินล่วงหน้า</p>
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <input disabled value={cardDigits[0]} placeholder="4444" style={{ width: '58px', fontSize: '14px', padding: '10px 0', border: '2px solid #e11d48', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', color: '#1e293b', background: 'white' }} />
            <input disabled value={cardDigits[1]} placeholder="5555" style={{ width: '58px', fontSize: '14px', padding: '10px 0', border: cardDigits[1] ? '2px solid #e11d48' : '2.5px dashed #cbd5e1', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', color: '#1e293b', background: 'white' }} />
            <input disabled value={cardDigits[2]} placeholder="6666" style={{ width: '58px', fontSize: '14px', padding: '10px 0', border: cardDigits[2] ? '2px solid #e11d48' : '2.5px dashed #cbd5e1', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', color: '#1e293b', background: 'white' }} />
            <input disabled value={cardDigits[3]} placeholder="7777" style={{ width: '58px', fontSize: '14px', padding: '10px 0', border: cardDigits[3] ? '2px solid #e11d48' : '2.5px dashed #cbd5e1', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', color: '#1e293b', background: 'white' }} />
          </div>

          {cardCheck && (
            <div style={{ background: '#ecfdf5', borderRadius: '12px', padding: '10px', border: '1.5px solid #10b981', display: 'flex', alignItems: 'center', gap: '8px', animation: 'fadeIn 0.4s' }}>
              <span style={{ fontSize: '16px' }}>💚</span>
              <span style={{ fontSize: '10px', color: '#065f46', fontFamily: 'Kanit' }}>เลขบัตรเครดิตถูกต้อง (มีระบบช่วยตรวจสอบ format อัตโนมัติ)</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render Usability Testing overlay simulator (w2-s15)
  if (slideId === 'w2-s15') {
    return (
      <div className="visual-container" style={{ width: '100%' }}>
        <span className="art-badge">แบบทดสอบผู้ใช้จริง (Usability Testing Sim)</span>
        
        <div style={{
          width: '320px',
          height: '420px',
          background: 'white',
          borderRadius: '32px',
          border: '2px solid rgba(225,29,72,0.15)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {/* Status bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 24px', fontSize: '10px', color: '#94a3b8', fontWeight: 'bold', background: '#fafafa' }}>
            <span>09:41 น.</span>
            <span>🔋 100%</span>
          </div>

          <div style={{ flexGrow: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>
            <h5 style={{ fontSize: '13px', fontWeight: 'bold', color: '#1e293b', fontFamily: 'Kanit' }}>โจทย์: ลองค้นหาลิงก์และกดส่งใบงานวิจัย</h5>
            
            {/* Buttons inside phone mockup */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', position: 'relative' }}>
              <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '8px', fontSize: '11px', color: '#475569', textAlign: 'center', border: tapIndex === 0 ? '2px solid #e11d48' : '1px solid #e2e8f0', transition: 'all 0.3s' }}>
                ลิงก์สำรองวิชาชีพระยะสั้น
              </div>
              <div style={{ background: '#e11d48', padding: '12px', borderRadius: '8px', fontSize: '11px', color: 'white', fontWeight: 'bold', textAlign: 'center', border: tapIndex === 1 ? '3px solid black' : 'none', transition: 'all 0.3s', boxShadow: '0 4px 10px rgba(225,29,72,0.2)' }}>
                🚀 ปุ่มหลัก: กดเพื่อดาวน์โหลดและส่งงาน
              </div>
              <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '8px', fontSize: '11px', color: '#475569', textAlign: 'center', border: tapIndex === 2 ? '2px solid #e11d48' : '1px solid #e2e8f0', transition: 'all 0.3s' }}>
                เมนูย่อยตัวเลือกติดต่อแผนการเรียน
              </div>

              {/* Tapping hand pointer */}
              <div style={{
                position: 'absolute',
                top: tapIndex === 0 ? '16px' : tapIndex === 1 ? '60px' : '106px',
                left: '70%',
                fontSize: '28px',
                pointerEvents: 'none',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 10,
                transform: 'scale(1.2)'
              }}>
                👈
              </div>
            </div>
          </div>

          <div style={{ padding: '14px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
            <span style={{ fontSize: '9px', color: '#e11d48', fontWeight: 'bold', fontFamily: 'Kanit' }}>ผลลัพธ์: ตรวจสอบความถูกต้องว่ากดเจอปุ่มหลักภายใน 2.5 วินาที</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="visual-container" style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
        <button 
          onClick={() => { setLoadType('high'); setComplete(false); }} 
          className={`btn ${loadType === 'high' ? 'btn-primary' : 'btn-outline'}`}
          style={{ padding: '6px 12px', fontSize: '10px', borderRadius: '8px' }}
        >
          สมองล้า (High Load)
        </button>
        <button 
          onClick={() => { setLoadType('low'); setComplete(false); }} 
          className={`btn ${loadType === 'low' ? 'btn-primary' : 'btn-outline'}`}
          style={{ padding: '6px 12px', fontSize: '10px', borderRadius: '8px' }}
        >
          สมองโล่ง (Low Load)
        </button>
      </div>

      <div style={{ width: '360px', background: 'white', borderRadius: '28px', border: '1px solid rgba(225,29,72,0.15)', padding: '32px', boxShadow: '0 8px 25px rgba(225,29,72,0.05)' }}>
        {loadType === 'high' ? (
          /* HIGH COGNITIVE LOAD */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '13px', color: '#ef4444', fontWeight: 'bold' }}>⚠️ แบบฟอร์มสับสน (ยากมาก!)</span>
            <input placeholder="กรอกข้อมูลรหัสบัตรเครดิตทั้งหมดตรงนี้ไม่มีวรรค" style={{ fontSize: '11px', padding: '10px', border: '1px solid #fda4af', borderRadius: '4px' }} />
            <input placeholder="กรอกรหัสพินสี่หลักของธนาคารและวันหมดอายุต่อกัน" style={{ fontSize: '11px', padding: '10px', border: '1px solid #fda4af', borderRadius: '4px' }} />
            <input placeholder="ที่อยู่จัดส่งและที่อยู่ใบกำกับภาษีทั้งหมดในช่องนี้" style={{ fontSize: '11px', padding: '10px', border: '1px solid #fda4af', borderRadius: '4px' }} />
            <button style={{ background: '#64748b', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>ดำเนินการจ่าย</button>
          </div>
        ) : (
          /* LOW COGNITIVE LOAD (VISIBILITY OF STATUS + ERROR PREVENTION) */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '13px', color: '#10b981', fontWeight: 'bold' }}>✅ ใช้ง่าย (ป้องกันความผิดพลาด)</span>
            
            {/* Step status */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10px', color: '#64748b' }}>
              <span>ขั้นตอนที่ 2 จาก 2 (ชำระเงิน)</span>
              <span>เชื่อมต่อปลอดภัย...</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px' }}>
              <div style={{ width: '80%', height: '100%', background: '#10b981', borderRadius: '4px' }}></div>
            </div>

            {/* Error prevention inputs */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <input maxLength="4" placeholder="4444" style={{ width: '54px', fontSize: '12px', padding: '10px', border: '1px solid #e11d48', borderRadius: '4px', textAlign: 'center' }} />
              <input maxLength="4" placeholder="5555" style={{ width: '54px', fontSize: '12px', padding: '10px', border: '1px solid #e11d48', borderRadius: '4px', textAlign: 'center' }} />
              <input maxLength="4" placeholder="6666" style={{ width: '54px', fontSize: '12px', padding: '10px', border: '1px solid #e11d48', borderRadius: '4px', textAlign: 'center' }} />
              <input maxLength="4" placeholder="7777" style={{ width: '54px', fontSize: '12px', padding: '10px', border: '1px solid #e11d48', borderRadius: '4px', textAlign: 'center' }} />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input placeholder="ดด/ปป" style={{ flexGrow: 1, fontSize: '12px', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', textAlign: 'center' }} />
              <input placeholder="CVV" style={{ flexGrow: 1, fontSize: '12px', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', textAlign: 'center' }} />
            </div>

            <button 
              onClick={() => setComplete(true)} 
              style={{ background: '#e11d48', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            >
              {complete ? '🎉 ชำระเงินเรียบร้อย!' : 'จ่ายเงินผ่านระบบที่ปลอดภัย'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// 7. Visual Hierarchy: Contrast, Size and Layout toggler
const VisualHierarchyAnimation = ({ slideId }) => {
  const [useHierarchy, setUseHierarchy] = useState(true);

  // 1. Visual Hierarchy comparison auto toggler (w2-s17)
  useEffect(() => {
    if (slideId !== 'w2-s17') {
      setUseHierarchy(true);
      return;
    }
    const interval = setInterval(() => {
      setUseHierarchy(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, [slideId]);

  // Show proportions spacings grids overlay (w2-s19)
  const showRuler = slideId === 'w2-s19';
  const showContrastHighlight = slideId === 'w2-s18';

  return (
    <div className="visual-container" style={{ width: '100%' }}>
      <button 
        className="btn btn-secondary" 
        onClick={() => setUseHierarchy(!useHierarchy)} 
        style={{ marginBottom: '16px', padding: '6px 14px', fontSize: '10px', borderRadius: '8px' }}
      >
        {useHierarchy ? '❌ ปิดระบบจำแนกสายตา' : '✨ เปิดระบบจัดลำดับสายตา (Visual Hierarchy)'}
      </button>

      <div style={{ 
        width: '360px', 
        background: 'white', 
        borderRadius: '32px', 
        padding: '36px', 
        border: showContrastHighlight ? '3.5px solid #e11d48' : '2px solid rgba(225,29,72,0.18)', 
        boxShadow: showContrastHighlight ? '0 12px 35px rgba(225,29,72,0.25)' : '0 12px 35px rgba(225,29,72,0.06)',
        display: 'flex', 
        flexDirection: 'column', 
        gap: useHierarchy ? '18px' : '10px',
        textAlign: useHierarchy ? 'left' : 'center',
        position: 'relative',
        animation: showContrastHighlight ? 'pulse 3s infinite' : 'none'
      }}>
        {useHierarchy ? (
          /* WITH HIERARCHY */
          <>
            {/* Spacing ruler line indicator 1 */}
            {showRuler && (
              <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#fb7185', color: 'white', fontSize: '8px', padding: '2px 6px', borderRadius: '4px', border: '1.5px dashed white', fontFamily: 'Inter' }}>
                Margin: 24px (มีสมดุลที่ดี)
              </div>
            )}

            <span style={{ fontSize: '11px', color: '#e11d48', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>วิชาเด่นสัปดาห์นี้</span>
            
            {showRuler && (
              <div style={{ height: '4px', background: 'rgba(251, 113, 133, 0.4)', borderTop: '1px dashed #e11d48', borderBottom: '1px dashed #e11d48', margin: '4px 0' }} title="Whitespace gap spacing proof"></div>
            )}

            <h4 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e293b', lineHeight: '1.2' }}>การออกแบบติดต่อผู้ใช้ ปวช.2</h4>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>เรียนรู้หลักการจัดวางเลย์เอาต์ การทำโครงร่างสเก็ตช์ รวมถึงจิตวิทยาเชิงลึกของผู้ใช้งานในการโต้ตอบกับเว็บไซต์</p>
            
            <button style={{ 
              width: '100%', 
              background: '#e11d48', 
              color: 'white', 
              border: 'none', 
              padding: '12px 16px', 
              borderRadius: '8px', 
              fontSize: '13px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              boxShadow: showContrastHighlight ? '0 0 20px #e11d48' : '0 4px 10px rgba(225,29,72,0.2)',
              animation: showContrastHighlight ? 'pulse 1.2s infinite' : 'none'
            }}>
              คลิกเริ่มเรียนรู้เลย
            </button>
          </>
        ) : (
          /* NO HIERARCHY */
          <>
            <h4 style={{ fontSize: '15px', fontWeight: 'normal', color: '#475569' }}>การออกแบบติดต่อผู้ใช้ ปวช.2</h4>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.5' }}>เรียนรู้หลักการจัดวางเลย์เอาต์ การทำโครงร่างสเก็ตช์ รวมถึงจิตวิทยาเชิงลึกของผู้ใช้งานในการโต้ตอบกับเว็บไซต์</p>
            <span style={{ fontSize: '15px', color: '#475569' }}>วิชาเด่นสัปดาห์นี้</span>
            <button style={{ width: '100%', background: '#475569', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', fontSize: '14px', cursor: 'pointer' }}>คลิกเริ่มเรียนรู้เลย</button>
          </>
        )}
      </div>
    </div>
  );
};

// 8. Design Systems Toolkit (Typography, Color, Grid lines overlay)
const DesignSystemsAnimation = ({ slideId }) => {
  const [showGrid, setShowGrid] = useState(false);
  const [manualGrid, setManualGrid] = useState(false);

  // Automatically toggle the columns design grid layout overlay (slide w2-s20)
  useEffect(() => {
    if (slideId !== 'w2-s20' || manualGrid) return;
    const interval = setInterval(() => {
      setShowGrid(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideId, manualGrid]);

  const toggleGridManual = () => {
    setManualGrid(true);
    setShowGrid(!showGrid);
  };

  return (
    <div className="visual-container" style={{ width: '100%' }}>
      <button 
        className="btn btn-secondary" 
        onClick={toggleGridManual} 
        style={{ marginBottom: '16px', padding: '6px 14px', fontSize: '10px', borderRadius: '8px' }}
      >
        {showGrid ? '🚫 ปิดเส้นกริดออกแบบ' : '📐 แสดงตารางกริด (Grid Systems)'}
      </button>

      <div style={{ position: 'relative', width: '360px', background: 'white', borderRadius: '32px', padding: '32px', border: '1px solid rgba(225,29,72,0.15)', boxShadow: '0 8px 25px rgba(225,29,72,0.06)', overflow: 'hidden' }}>
        
        {/* Grid System columns overlays */}
        {showGrid && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', gap: '8px', padding: '0 24px', pointerEvents: 'none', zIndex: 10 }}>
            <div style={{ flex: 1, background: 'rgba(251, 113, 133, 0.15)', height: '100%', borderLeft: '1px dashed rgba(225,29,72,0.2)', borderRight: '1px dashed rgba(225,29,72,0.2)' }}></div>
            <div style={{ flex: 1, background: 'rgba(251, 113, 133, 0.15)', height: '100%', borderLeft: '1px dashed rgba(225,29,72,0.2)', borderRight: '1px dashed rgba(225,29,72,0.2)' }}></div>
            <div style={{ flex: 1, background: 'rgba(251, 113, 133, 0.15)', height: '100%', borderLeft: '1px dashed rgba(225,29,72,0.2)', borderRight: '1px dashed rgba(225,29,72,0.2)' }}></div>
            <div style={{ flex: 1, background: 'rgba(251, 113, 133, 0.15)', height: '100%', borderLeft: '1px dashed rgba(225,29,72,0.2)', borderRight: '1px dashed rgba(225,29,72,0.2)' }}></div>
          </div>
        )}

        {/* Design System Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 5 }}>
          
          {/* Typography */}
          <div>
            <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>1. TYPOGRAPHY SYSTEM</span>
            <div style={{ borderLeft: '3px solid #e11d48', paddingLeft: '10px' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', lineHeight: 1.1 }}>Header H1</div>
              <div style={{ fontSize: '14px', color: '#64748b' }}>Body Text (Min 16px สำหรับหน้าจอ)</div>
            </div>
          </div>

          {/* Color Palettes */}
          <div>
            <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>2. COLOR SYSTEMS (ไม่เกิน 5 สี)</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#e11d48', border: '1.5px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} title="Primary Color (#e11d48)"></div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#fb7185', border: '1.5px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} title="Accent Color (#fb7185)"></div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#fff1f2', border: '1.5px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} title="Background (#fff1f2)"></div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#10b981', border: '1.5px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} title="Success (#10b981)"></div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#ef4444', border: '1.5px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} title="Error (#ef4444)"></div>
            </div>
          </div>

          {/* Button states */}
          <div>
            <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>3. BUTTON COMPONENTS STATES</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button style={{ width: '100%', background: '#e11d48', border: 'none', color: 'white', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold' }}>สถานะปกติ (Normal)</button>
              <button style={{ width: '100%', background: '#be123c', border: 'none', color: 'white', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', boxShadow: '0 0 10px rgba(225,29,72,0.35)' }}>สถานะชี้เมาส์ (Hover/Active)</button>
              <button disabled style={{ width: '100%', background: '#e2e8f0', border: 'none', color: '#94a3b8', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'not-allowed' }}>สถานะปิดใช้งาน (Disabled)</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// 9. Digital Portfolio Wireframe & High-fidelity Mockup
const PortfolioWireframeAnimation = () => {
  const [isHifi, setIsHifi] = useState(false);

  // Auto transition demo every 5 seconds to show students
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHifi(prev => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visual-container" style={{ width: '100%' }}>
      <button 
        className="btn btn-secondary" 
        onClick={() => setIsHifi(!isHifi)} 
        style={{ marginBottom: '16px', padding: '6px 14px', fontSize: '10px', borderRadius: '8px', zIndex: 10 }}
      >
        {isHifi ? '📐 สลับเป็นโครงร่างลวดลาย (Wireframe)' : '✨ สลับเป็นหน้าจอดีไซน์จริง (High-Fidelity UI)'}
      </button>

      <div style={{
        width: '320px',
        height: '450px',
        background: isHifi ? 'white' : '#f8fafc',
        borderRadius: '32px',
        border: isHifi ? '2px solid rgba(225,29,72,0.15)' : '2.5px dashed #cbd5e1',
        boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: '24px 20px'
      }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: isHifi ? '#94a3b8' : '#64748b', fontWeight: 'bold', marginBottom: '20px' }}>
          <span>09:41 น.</span>
          <span>🔋 100%</span>
        </div>

        {/* Profile Avatar Placeholder (Circle) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          {isHifi ? (
            /* HIFI AVATAR */
            <div style={{
              width: '84px',
              height: '84px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fecdd3, #fb7185)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '44px',
              border: '3px solid white',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              animation: 'pulse 3s infinite',
              transition: 'all 0.5s'
            }}>
              👩‍💻
            </div>
          ) : (
            /* WIREFRAME AVATAR (Circle with Crossed Lines X) */
            <div style={{
              width: '84px',
              height: '84px',
              borderRadius: '50%',
              border: '2px dashed #94a3b8',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              transition: 'all 0.5s'
            }}>
              {/* Crossed lines represent placeholder image */}
              <svg width="84" height="84" style={{ position: 'absolute', top: 0, left: 0 }}>
                <line x1="12" y1="12" x2="72" y2="72" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="72" y1="12" x2="12" y2="72" stroke="#cbd5e1" strokeWidth="1.5" />
              </svg>
              <span style={{ fontSize: '8px', color: '#94a3b8', zIndex: 5, background: 'white', padding: '2px 4px', borderRadius: '4px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>IMAGE</span>
            </div>
          )}

          {/* Dotted annotation line pointing to image */}
          {!isHifi && (
            <div style={{ position: 'absolute', left: '-10px', top: '30px', fontSize: '8px', color: '#e11d48', fontWeight: 'bold', fontFamily: 'Kanit' }}>
              รูปโปรไฟล์ (กากบาท) 👈
            </div>
          )}
        </div>

        {/* Name and Job Title Placeholders */}
        <div style={{ textAlign: 'center', marginTop: '16px', position: 'relative' }}>
          {isHifi ? (
            /* HIFI TEXT */
            <div style={{ animation: 'fadeIn 0.5s' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b', fontFamily: 'Kanit' }}>นางสาวนลินญา เอี่ยมเจริญ</h4>
              <span style={{ fontSize: '11px', color: '#e11d48', fontWeight: 'bold', display: 'block', marginTop: '2px', fontFamily: 'Kanit' }}>UX/UI Designer (Junior)</span>
            </div>
          ) : (
            /* WIREFRAME BLOCKS */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center', transition: 'all 0.5s' }}>
              <div style={{ width: '150px', height: '14px', border: '1.5px dashed #94a3b8', borderRadius: '4px', background: 'white' }} title="ชื่อ-นามสกุล"></div>
              <div style={{ width: '100px', height: '10px', border: '1.5px dashed #94a3b8', borderRadius: '4px', background: 'white' }} title="ตำแหน่งงาน"></div>
              
              <div style={{ position: 'absolute', right: '-10px', top: '4px', fontSize: '8px', color: '#e11d48', fontWeight: 'bold', fontFamily: 'Kanit' }}>
                👉 ชื่อ & ตำแหน่ง
              </div>
            </div>
          )}
        </div>

        {/* Short Bio Description (Lines placeholder) */}
        <div style={{ margin: '20px 0', position: 'relative' }}>
          {isHifi ? (
            /* HIFI DESCRIPTION */
            <p style={{ fontSize: '10.5px', color: '#64748b', textAlign: 'center', lineHeight: '1.5', margin: 0, animation: 'fadeIn 0.5s' }}>
              "รักการจัดองค์ประกอบภาพ ขยัน อดทน และพร้อมเรียนรู้สิ่งใหม่ๆ เพื่อสร้างสรรค์เว็บไซต์ที่ตอบโจทย์ผู้ใช้งานที่สุด"
            </p>
          ) : (
            /* WIREFRAME LINES */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', transition: 'all 0.5s' }}>
              <div style={{ height: '3px', background: '#cbd5e1', width: '100%', borderRadius: '2px' }}></div>
              <div style={{ height: '3px', background: '#cbd5e1', width: '90%', borderRadius: '2px', alignSelf: 'center' }}></div>
              <div style={{ height: '3px', background: '#cbd5e1', width: '95%', borderRadius: '2px', alignSelf: 'center' }}></div>
              <div style={{ height: '3px', background: '#cbd5e1', width: '60%', borderRadius: '2px', alignSelf: 'center' }}></div>

              <div style={{ position: 'absolute', left: '-10px', top: '-14px', fontSize: '8px', color: '#e11d48', fontWeight: 'bold', fontFamily: 'Kanit' }}>
                ประวัติย่อ (เส้นเรียงกัน) 👈
              </div>
            </div>
          )}
        </div>

        {/* Button for Portfolio */}
        <div style={{ marginTop: 'auto', position: 'relative' }}>
          {isHifi ? (
            /* HIFI BUTTON */
            <button style={{
              width: '100%',
              background: '#e11d48',
              color: 'white',
              border: 'none',
              padding: '11px',
              borderRadius: '10px',
              fontSize: '12px',
              fontWeight: 'bold',
              fontFamily: 'Kanit',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(225,29,72,0.2)',
              animation: 'pulse 2s infinite',
              transition: 'all 0.3s'
            }}>
              📥 ดูผลงานของฉัน (Portfolio)
            </button>
          ) : (
            /* WIREFRAME BUTTON PLACEHOLDER */
            <div style={{
              width: '100%',
              height: '38px',
              border: '2px dashed #94a3b8',
              background: 'white',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              color: '#94a3b8',
              fontWeight: 'bold',
              fontFamily: 'Kanit',
              transition: 'all 0.5s'
            }}>
              BUTTON PLACEHOLDER
              
              <div style={{ position: 'absolute', right: '-10px', top: '-20px', fontSize: '8px', color: '#e11d48', fontWeight: 'bold', fontFamily: 'Kanit' }}>
                👉 ปุ่มดูผลงาน
              </div>
            </div>
          )}
        </div>

        {/* Social Contacts Icons Placeholder */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', position: 'relative' }}>
          {isHifi ? (
            /* HIFI CONTACTS */
            <div style={{ display: 'flex', gap: '16px', animation: 'fadeIn 0.5s' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', border: '1px solid #fecdd3' }} title="ส่งเมล: nalin@school.ac.th">📧</div>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', border: '1px solid #fecdd3' }} title="โทร: 081-234-5678">📞</div>
            </div>
          ) : (
            /* WIREFRAME CONTACT PLACEHOLDERS (Circles) */
            <div style={{ display: 'flex', gap: '16px', transition: 'all 0.5s' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px dashed #94a3b8', background: 'white' }}></div>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px dashed #94a3b8', background: 'white' }}></div>
              
              <div style={{ position: 'absolute', left: '-10px', top: '10px', fontSize: '8px', color: '#e11d48', fontWeight: 'bold', fontFamily: 'Kanit' }}>
                ช่องทางติดต่อ (วงกลม) 👈
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Router dispatcher for slide graphic components
const GraphicDispatcher = ({ slide }) => {
  const type = slide ? slide.animationType : null;
  const slideId = slide ? slide.id : null;

  switch (type) {
    case 'ux-intro': return <UXIntroAnimation slideId={slideId} />;
    case 'ux-vs-ui': return <UXvsUIAnimation slideId={slideId} />;
    case 'ui-roles': return <UIRolesAnimation slideId={slideId} />;
    case 'ux-ui-principles': return <UXUIPrinciplesAnimation slideId={slideId} />;
    case 'user-centric': return <UserCentricAnimation slideId={slideId} />;
    case 'cognitive-load': return <CognitiveLoadAnimation slideId={slideId} />;
    case 'visual-hierarchy': return <VisualHierarchyAnimation slideId={slideId} />;
    case 'design-systems': return <DesignSystemsAnimation slideId={slideId} />;
    case 'portfolio-wireframe':
      return (
        <div style={{ 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%', 
          padding: '40px',
          background: 'rgba(225, 29, 72, 0.02)',
          borderRadius: '32px',
          border: '3px dashed #fb7185',
          boxShadow: 'inset 0 4px 12px rgba(225,29,72,0.02)',
          minHeight: '380px'
        }}>
          <span style={{ fontSize: '72px', animation: 'pulse 2.5s infinite', display: 'block', marginBottom: '20px' }}>📝</span>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#be123c', fontFamily: 'Kanit' }}>พื้นที่โจทย์กิจกรรมปฏิบัติ</h4>
          <p style={{ fontSize: '13px', color: '#64748b', marginTop: '10px', lineHeight: '1.6', maxWidth: '300px', fontFamily: 'Kanit' }}>
            ข้อนี้ไม่มีภาพเฉลยแนวทางล่วงหน้า เพื่อให้นักเรียนได้ใช้กระบวนการคิดและสร้างสรรค์โครงร่างลวดลาย (Wireframe) ด้วยตนเองทั้งหมด
          </p>
          <div style={{ marginTop: '24px', fontSize: '11px', color: '#e11d48', fontWeight: 'bold', border: '1.5px solid #fecdd3', background: 'white', padding: '10px 20px', borderRadius: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            ✏️ ลงมือออกแบบในสมุดเรียนหรือเครื่องมือดิจิทัลตามโจทย์
          </div>
        </div>
      );
    default:
      return (
        <div style={{ textAlign: 'center', color: '#94a3b8' }}>
          <span style={{ fontSize: '48px' }}>🎨</span>
          <p style={{ fontSize: '12px', marginTop: '10px' }}>ไม่มีโมเดลการทดลองในสไลด์นี้</p>
        </div>
      );
  }
};

// --- APP COMPONENT ---

export default function App() {
  // Load slides from localStorage or fallback to initialSlides
  const [slides, setSlides] = useState(() => {
    const saved = localStorage.getItem('school_slides_v10');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length === initialSlides.length) {
          return parsed;
        }
      } catch (e) {
        console.error("Error parsing localStorage slides", e);
      }
    }
    return initialSlides;
  });

  const [teacherMode, setTeacherMode] = useState(false);
  const [activeWeek, setActiveWeek] = useState(null); // null = Home page, 1 = Week 1, 2 = Week 2
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  // Teacher Passcode Modal
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');

  // Slide Edit Modal
  const [editingSlide, setEditingSlide] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editSubtitle, setEditSubtitle] = useState('');
  const [editContent, setEditContent] = useState('');

  // Persist slides in localStorage
  useEffect(() => {
    localStorage.setItem('school_slides_v10', JSON.stringify(slides));
  }, [slides]);

  // Filter slides to show based on week and role
  const getVisibleSlides = () => {
    if (activeWeek === null) return [];
    return slides.filter(slide => {
      if (slide.week !== activeWeek) return false;
      // In student mode, hide slides that are flagged as isHidden
      if (!teacherMode && slide.isHidden) return false;
      return true;
    });
  };

  const visibleSlides = getVisibleSlides();
  const currentSlide = visibleSlides[currentSlideIdx];

  // Navigation functions
  const handleNext = () => {
    if (currentSlideIdx < visibleSlides.length - 1) {
      setCurrentSlideIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIdx > 0) {
      setCurrentSlideIdx(prev => prev - 1);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeWeek !== null && !showLoginModal && !editingSlide) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeWeek, currentSlideIdx, visibleSlides, showLoginModal, editingSlide]);

  // Passcode verification
  const handleTeacherLoginSubmit = (e) => {
    e.preventDefault();
    if (passcode === '21341') {
      setTeacherMode(true);
      setShowLoginModal(false);
      setPasscode('');
      setLoginError('');
    } else {
      setLoginError('รหัสผ่านไม่ถูกต้อง เฉพาะครูผู้สอนเท่านั้นที่มีรหัสนี้');
    }
  };

  // Open Edit Modal
  const openEditModal = (slide) => {
    setEditingSlide(slide);
    setEditTitle(slide.title);
    setEditSubtitle(slide.subtitle || '');
    setEditContent(slide.content.join('\n'));
  };

  // Save edited slide contents
  const saveSlideEdit = (e) => {
    e.preventDefault();
    const updated = slides.map(item => {
      if (item.id === editingSlide.id) {
        return {
          ...item,
          title: editTitle,
          subtitle: editSubtitle,
          content: editContent.split('\n').filter(p => p.trim() !== '')
        };
      }
      return item;
    });
    setSlides(updated);
    setEditingSlide(null);
  };

  // Toggle Hide / Show slide
  const toggleSlideVisibility = (slideId) => {
    const updated = slides.map(item => {
      if (item.id === slideId) {
        return { ...item, isHidden: !item.isHidden };
      }
      return item;
    });
    setSlides(updated);
  };

  // Toggle Hide / Show entire week
  const toggleWeekVisibility = (weekNum) => {
    const weekSlides = slides.filter(s => s.week === weekNum);
    const allHidden = weekSlides.every(s => s.isHidden);
    
    const updated = slides.map(item => {
      if (item.week === weekNum) {
        return { ...item, isHidden: !allHidden ? true : false };
      }
      return item;
    });
    setSlides(updated);
    setCurrentSlideIdx(0);
    alert(allHidden 
      ? `เปิดแสดงสไลด์ทั้งหมดในสัปดาห์ที่ ${weekNum} เรียบร้อยแล้ว!` 
      : `ซ่อนสไลด์ทั้งหมดในสัปดาห์ที่ ${weekNum} จากมุมมองนักเรียนเรียบร้อยแล้ว!`
    );
  };

  // Reset to initial mock data
  const resetToDefaults = () => {
    if (window.confirm('คุณต้องการรีเซ็ตข้อมูลสไลด์และเนื้อหากลับเป็นค่าตั้งต้นใช่หรือไม่?')) {
      setSlides(initialSlides);
      setCurrentSlideIdx(0);
      alert('คืนค่าข้อความสไลด์เรียบร้อยแล้ว!');
    }
  };

  return (
    <div>
      {/* Decorative artistic background splashes */}
      <div className="art-background">
        <div className="splash splash-1"></div>
        <div className="splash splash-2"></div>
        <div className="splash splash-3"></div>
      </div>

      {/* Main Top Header Navbar */}
      <header className="top-navbar glass-panel">
        <div className="logo-section" style={{ cursor: 'pointer' }} onClick={() => { setActiveWeek(null); setCurrentSlideIdx(0); }}>
          <div className="logo-icon">🎨</div>
          <div>
            <span className="logo-text">UI/UX Studio Class</span>
          </div>
        </div>

        <div className="nav-actions">
          {teacherMode ? (
            <>
              <div className="teacher-indicator-badge">
                <span>🔐</span> บทบาทครูผู้สอน (ครูรุ่งนภา)
              </div>
              <button className="btn btn-outline" onClick={resetToDefaults} style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
                🔄 รีเซ็ตสไลด์ทั้งหมด
              </button>
              <button className="btn btn-danger" onClick={() => { setTeacherMode(false); setActiveWeek(null); setCurrentSlideIdx(0); }} style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
                ออกจากระบบครู
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={() => setShowLoginModal(true)}>
              🔑 ลงชื่อเข้าใช้เป็นครูผู้สอน
            </button>
          )}
        </div>
      </header>

      {/* RENDER BODY */}
      <main>
        {activeWeek === null ? (
          /* ================= LANDING HOME SCREEN ================= */
          <div className="welcome-container glass-panel">
            <span className="course-badge">หลักสูตรวิชาชีพระยะสั้น & ปวช.</span>
            
            <h1 className="welcome-title">การออกแบบติดต่อผู้ใช้</h1>
            <div className="grade-badge">ระดับชั้นมัธยมศึกษา/วิชาชีพ ปวช.2 (สัปดาห์ที่ 1 - 2)</div>

            {/* Instructor credit */}
            <div className="teacher-info-card">
              <div className="teacher-avatar">👩‍🏫</div>
              <div className="teacher-details">
                <div className="teacher-label">ครูผู้สอนประจำวิชา</div>
                <div className="teacher-name">ครูรุ่งนภา เอี่ยมชูกุล</div>
              </div>
            </div>

            {/* Weeks content selection grid */}
            <div className="week-selector">
              <div className="week-card" onClick={() => { setActiveWeek(1); setCurrentSlideIdx(0); }}>
                <div className="week-num">Week 1 (สัปดาห์ที่ 1)</div>
                <h3 className="week-title">ความรู้เบื้องต้นและการออกแบบ UX</h3>
                <p className="week-desc">ทำความเข้าใจแนวคิดพื้นฐานเกี่ยวกับความหมายของระบบพฤติกรรมผู้ใช้ การแก้ปัญหารอบด้าน และตารางความแตกต่างที่ชัดเจนระหว่างสายงาน UX และ UI</p>
                <div className="week-action">
                  <span>เริ่มศึกษาเนื้อหาบทเรียน</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>

              <div className="week-card" onClick={() => { setActiveWeek(2); setCurrentSlideIdx(0); }}>
                <div className="week-num">Week 2 (สัปดาห์ที่ 2)</div>
                <h3 className="week-title">ศาสตร์และศิลป์แห่งการออกแบบ UX/UI</h3>
                <p className="week-desc">เจาะลึกทฤษฎีขั้นสูง จิตวิทยากลุ่มสี ระบบโครงสร้างฟอนต์ และกระบวนการคิด Design Thinking รวมถึงกฎ 10 ข้อในการลดภาระสมองของผู้ใช้งาน</p>
                <div className="week-action">
                  <span>เริ่มศึกษาเนื้อหาบทเรียน</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= PRESENTATION SLIDES SCREEN ================= */
          <div className="presentation-container">
            {/* Header elements inside slide presentation */}
            <div className="slide-header">
              <button className="back-button" onClick={() => { setActiveWeek(null); setCurrentSlideIdx(0); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '4px' }}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                กลับไปที่หน้าแรก
              </button>
              
              <div className="slide-meta-info">
                <span className="week-tag">สัปดาห์ที่ {activeWeek}</span>
                {visibleSlides.length > 0 && (
                  <span className="slide-indicator">สไลด์ที่ {currentSlideIdx + 1} / {visibleSlides.length}</span>
                )}
                {teacherMode && (
                  <button 
                    className="btn btn-outline" 
                    onClick={() => toggleWeekVisibility(activeWeek)} 
                    style={{ padding: '6px 12px', fontSize: '0.8rem', marginLeft: '12px', borderColor: 'var(--primary)', color: 'var(--primary)' }}
                  >
                    {slides.filter(s => s.week === activeWeek && !s.isHidden).length === 0 
                      ? '👁️ แสดงทั้งสัปดาห์นี้' 
                      : '👁️‍🌫️ ซ่อนทั้งสัปดาห์นี้'}
                  </button>
                )}
              </div>
            </div>

            {/* Check if all slides in this week are hidden by the teacher */}
            {visibleSlides.length === 0 ? (
              <div className="glass-panel" style={{ padding: '80px 40px', textAlignment: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '48px', marginBottom: '20px' }}>👁️‍🌫️</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-dark)' }}>เนื้อหาหน่วยการเรียนรู้นี้ยังไม่เปิดเผย</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '8px', maxWidth: '400px', textAlign: 'center' }}>ขณะนี้คุณครูผู้สอนได้ทำการซ่อนเนื้อหาในวิชาสัปดาห์นี้ทั้งหมดชั่วคราว</p>
                {teacherMode && (
                  <button className="btn btn-primary" onClick={resetToDefaults} style={{ marginTop: '20px' }}>
                    รีเซ็ตเพื่อแสดงสไลด์
                  </button>
                )}
              </div>
            ) : (
              /* Split Layout for Slide View */
              <>
                <div className="slide-grid">
                  
                  {/* Left Column: Text Content and Teacher Controls */}
                  <div className="slide-content-card glass-panel">
                    <span className="slide-category">{currentSlide.subtitle}</span>
                    <h2 className="slide-title">
                      {currentSlide.title}
                      {currentSlide.isHidden && (
                        <span style={{ marginLeft: '10px', fontSize: '0.75rem', background: '#ef4444', color: 'white', padding: '3px 8px', borderRadius: '6px', fontWeight: '600', verticalAlign: 'middle' }}>
                          🚫 ถูกซ่อนอยู่ (เฉพาะคุณครูที่เห็นสไลด์นี้)
                        </span>
                      )}
                    </h2>
                    
                    <div className="slide-body-paragraphs">
                      {currentSlide.content.map((paragraph, index) => {
                        if (paragraph.startsWith('•')) {
                          return (
                            <ul key={index}>
                              <li>{paragraph.substring(2)}</li>
                            </ul>
                          );
                        }
                        return <p key={index}>{paragraph}</p>;
                      })}
                    </div>

                    {/* Teacher Action Controls (Exposed only to verified teacher) */}
                    {teacherMode && (
                      <div className="teacher-actions-bar">
                        <button className="btn btn-secondary" onClick={() => openEditModal(currentSlide)} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
                          📝 แก้ไขข้อความสไลด์
                        </button>
                        <button 
                          className={`btn ${currentSlide.isHidden ? 'btn-outline' : 'btn-secondary'}`} 
                          onClick={() => toggleSlideVisibility(currentSlide.id)}
                          style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                        >
                          {currentSlide.isHidden ? '👁️ แสดงสไลด์ให้นักเรียนเห็น' : '👁️‍🌫️ ซ่อนสไลด์นี้จากนักเรียน'}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Custom Interactive Animated Graphics */}
                  <div className="slide-graphic-card glass-panel">
                    <div className="graphic-container">
                      <GraphicDispatcher slide={currentSlide} />
                    </div>
                  </div>

                </div>

                {/* Bottom navigation slide bar */}
                <div className="slide-navigation-bar glass-panel">
                  <button 
                    className="btn btn-secondary" 
                    onClick={handlePrev}
                    disabled={currentSlideIdx === 0}
                    style={{ opacity: currentSlideIdx === 0 ? 0.5 : 1, cursor: currentSlideIdx === 0 ? 'not-allowed' : 'pointer' }}
                  >
                    ◀ ย้อนกลับ
                  </button>

                  <div className="slide-selector-dots">
                    {visibleSlides.map((_, idx) => (
                      <button 
                        key={idx}
                        className={`slide-dot ${idx === currentSlideIdx ? 'active' : ''}`}
                        onClick={() => setCurrentSlideIdx(idx)}
                        title={`ข้ามไปยังสไลด์ที่ ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button 
                    className="btn btn-primary" 
                    onClick={handleNext}
                    disabled={currentSlideIdx === visibleSlides.length - 1}
                    style={{ opacity: currentSlideIdx === visibleSlides.length - 1 ? 0.5 : 1, cursor: currentSlideIdx === visibleSlides.length - 1 ? 'not-allowed' : 'pointer' }}
                  >
                    หน้าถัดไป ▶
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>

      {/* ================= MODAL DIALOGS ================= */}

      {/* 1. Teacher Passcode Unlock Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowLoginModal(false)}>×</button>
            <h3 className="modal-title">🔐 ลงชื่อเข้าใช้ (ระบบคุณครู)</h3>
            <p className="modal-desc">กรอกรหัสผ่านควบคุมผู้สอน เพื่อเข้าสู่ระบบการแก้ไขโครงสร้างสไลด์และซ่อนหัวข้อการเรียนวิชาออกแบบติดต่อผู้ใช้</p>
            
            <form onSubmit={handleTeacherLoginSubmit}>
              <div className="form-group">
                <label className="form-label">รหัสผ่านควบคุมห้องเรียน:</label>
                <input 
                  type="password" 
                  value={passcode} 
                  onChange={(e) => setPasscode(e.target.value)}
                  className="form-input" 
                  placeholder="กรอกรหัสผ่านลับ..."
                  autoFocus 
                />
                {loginError && <p className="form-error">{loginError}</p>}
              </div>

              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowLoginModal(false)}>ยกเลิก</button>
                <button type="submit" className="btn btn-primary">ยืนยันความถูกต้อง</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. Teacher Content Edit Modal */}
      {editingSlide && (
        <div className="modal-overlay" onClick={() => setEditingSlide(null)}>
          <div className="modal-content glass-panel" style={{ maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setEditingSlide(null)}>×</button>
            <h3 className="modal-title">📝 แก้ไขข้อความสไลด์</h3>
            <p className="modal-desc">ทำการแก้ไขหัวข้อและเนื้อหาสไลด์เพื่ออัปเดตแก่นักเรียนในการสอนจริง ข้อมูลจะบันทึกอัตโนมัติบนอุปกรณ์เครื่องนี้</p>
            
            <form onSubmit={saveSlideEdit}>
              <div className="form-group">
                <label className="form-label">หัวข้อหลักของสไลด์ (Title):</label>
                <input 
                  type="text" 
                  value={editTitle} 
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="form-input" 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">หัวข้อย่อย / หมวดหมู่ (Subtitle):</label>
                <input 
                  type="text" 
                  value={editSubtitle} 
                  onChange={(e) => setEditSubtitle(e.target.value)}
                  className="form-input" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">เนื้อหาสไลด์ (ทีละบรรทัด สำหรับแยกแต่ละส่วนหรือสัญลักษณ์หัวข้อย่อย ขึ้นต้นด้วย • สำหรับเครื่องหมายหัวข้อย่อย):</label>
                <textarea 
                  value={editContent} 
                  onChange={(e) => setEditContent(e.target.value)}
                  className="form-textarea" 
                  required 
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setEditingSlide(null)}>ยกเลิก</button>
                <button type="submit" className="btn btn-primary">บันทึกข้อมูลสไลด์</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
