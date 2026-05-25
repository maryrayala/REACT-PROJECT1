import React, { useState } from 'react';

export default function App() {
  // Navigation state: 'loginView' | 'signupView' | 'dashboardView'
  const [currentView, setCurrentView] = useState('loginView');
  
  // Simulated database state for signed-up user
  const [studentData, setStudentData] = useState(null);

  // Active session profile state (displays on dashboard)
  const [sessionUser, setSessionUser] = useState({
    name: '',
    roll: '',
    course: '',
    email: '',
  });

  // Controlled Form Inputs
  const [loginEmail, setLoginEmail] = useState('maryrayala5@gmail.com');
  const [loginPassword, setLoginPassword] = useState('mini123');

  const [signupName, setSignupName] = useState('R.Mary');
  const [signupRoll, setSignupRoll] = useState('07');
  const [signupCourse, setSignupCourse] = useState('BCA');
  const [signupEmail, setSignupEmail] = useState('maryrayala5@gmail.com');
  const [signupPassword, setSignupPassword] = useState('mini123');

  // Handle Login Logic
  const handleLogin = (e) => {
    e.preventDefault();

    if (studentData) {
      if (loginEmail === studentData.email && loginPassword === studentData.password) {
        setSessionUser({
          name: studentData.name,
          roll: studentData.roll,
          course: studentData.course,
          email: studentData.email,
        });
        setCurrentView('dashboardView');
      } else {
        alert("Invalid email or password! Please try again.");
      }
    } else {
      // Fallback preset credentials
      if (loginEmail === "maryrayala5@gmail.com" && loginPassword === "mini123") {
        setSessionUser({
          name: "R.Mary",
          roll: "07",
          course: "BCA",
          email: loginEmail,
        });
        setCurrentView('dashboardView');
      } else {
        alert("User not found. Try using the preset credentials or signing up first!");
      }
    }
  };

  // Handle Signup Logic
  const handleSignup = (e) => {
    e.preventDefault();

    const newStudent = {
      name: signupName,
      roll: signupRoll,
      course: signupCourse,
      email: signupEmail,
      password: signupPassword,
    };

    setStudentData(newStudent);
    setSessionUser({
      name: signupName,
      roll: signupRoll,
      course: signupCourse,
      email: signupEmail,
    });
    setCurrentView('dashboardView');
  };

  // Handle Logout Logic
  const handleLogout = () => {
    setLoginPassword('');
    setCurrentView('loginView');
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
        }
        body {
          background-color: #70587c;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          overflow-x: hidden;
        }
        .card {
          background-color: #c8b8db;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
          width: 100%;
          max-width: 420px;
          padding: 40px 30px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.25);
          margin: auto; 
        }
        h2 {
          color: #593d3b;
          font-size: 28px;
          margin-bottom: 25px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .form-group {
          margin-bottom: 18px;
        }
        input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #d4c5b9;
          border-radius: 8px;
          font-size: 14px;
          color: #333;
          outline: none;
          background-color: #ffffff;
          transition: all 0.25s ease;
        }
        input:focus {
          border-color: #593d3b;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(89, 61, 59, 0.15);
          transform: translateY(-1px);
        }
        .btn {
          width: 100%;
          background-color: #7d4f50;
          color: #fffcf7;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-size: 15px;
          cursor: pointer;
          margin-top: 10px;
          font-weight: 600;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 10px rgba(89, 61, 59, 0.2);
        }
        .btn:hover {
          background-color: #442d2b;
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(89, 61, 59, 0.3);
        }
        .btn:active {
          transform: translateY(0);
        }
        .btn-logout {
          background-color: transparent;
          border: 2px solid #593d3b;
          color: #593d3b;
          box-shadow: none;
        }
        .btn-logout:hover {
          background-color: #593d3b;
          color: #fffcf7;
          box-shadow: 0 4px 12px rgba(89, 61, 59, 0.15);
        }
        .footer-text {
          margin-top: 25px;
          font-size: 14px;
          color: #593d3b;
        }
        .footer-text a {
          color: #4a3321;
          text-decoration: none;
          font-weight: 700;
          position: relative;
          display: inline-block;
        }
        .footer-text a::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #4a3321;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .footer-text a:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .dashboard-info h3 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #593d3b;
        }
        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 25px;
        }
        .data-badge {
          background: rgba(255, 252, 247, 0.6);
          padding: 12px 16px;
          border-radius: 8px;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.4);
          transition: transform 0.2s ease;
        }
        .data-badge:hover {
          transform: translateX(4px);
          background: rgba(255, 252, 247, 0.9);
        }
        .data-badge strong {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #7d5e5c;
          margin-bottom: 2px;
        }
        .data-badge span {
          font-size: 15px;
          color: #2b1a0e;
          font-weight: 600;
        }
        .view {
          display: block;
          animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* LOGIN VIEW */}
      {currentView === 'loginView' && (
        <div className="card view">
          <h2>Student Login</h2>
          <form id="loginForm" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
          <p className="footer-text">
            Don't have account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('signupView'); }}>
              Signup
            </a>
          </p>
        </div>
      )}

      {/* SIGNUP VIEW */}
      {currentView === 'signupView' && (
        <div className="card view">
          <h2>Student Signup</h2>
          <form id="signupForm" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Roll No"
                value={signupRoll}
                onChange={(e) => setSignupRoll(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Course"
                value={signupCourse}
                onChange={(e) => setSignupCourse(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn">Signup</button>
          </form>
          <p className="footer-text">
            Already have account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('loginView'); }}>
              Login
            </a>
          </p>
        </div>
      )}

      {/* DASHBOARD VIEW */}
      {currentView === 'dashboardView' && (
        <div className="card view">
          <h2>Student Dashboard</h2>
          <div className="dashboard-info">
            <h3>Welcome, {sessionUser.name || 'Student'}</h3>
            <div className="grid-container">
              <div className="data-badge">
                <strong>Roll Number</strong>
                <span>{sessionUser.roll || '-'}</span>
              </div>
              <div className="data-badge">
                <strong>Enrolled Course</strong>
                <span>{sessionUser.course || '-'}</span>
              </div>
              <div className="data-badge">
                <strong>Email Address</strong>
                <span>{sessionUser.email || '-'}</span>
              </div>
            </div>
          </div>
          <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
}