import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ role, isCollapsed, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div style={{ ...styles.sidebar, width: isCollapsed ? '0px' : '200px' }}>
      {!isCollapsed && (
        <>
          <ul style={styles.ul}>
            {role === 'admin' ? (
              <>
                <li style={getLinkStyle(location.pathname, '/admin/dashboard')}>
                  <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li style={getLinkStyle(location.pathname, '/admin/add-cautions')}>
                  <Link to="/admin/add-questions">Add Questions</Link>
                </li>
                
                
                <li style={getLinkStyle(location.pathname, '/admin/change-password')}>
                  <Link to="/admin/change-password">Change Password</Link>
                </li>
              </>
            ) : (
              <>
                <li style={getLinkStyle(location.pathname, '/user/dashboard')}>
                  <Link to="/user/dashboard">Dashboard</Link>
                </li>
                <li style={getLinkStyle(location.pathname, '/user/chatbot')}>
                  <Link to="/user/chatbot">AsktoCollegebot</Link>
                </li>
                <li style={getLinkStyle(location.pathname, '/user/feedback')}>
                  <Link to="/user/feedback">Feedback</Link>
                </li>
              </>
            )}
            <li style={styles.logoutItem}>
              <a onClick={handleLogout} style={styles.logoutLink}>Logout</a>
            </li>
          </ul>
        </>
      )}
      <button onClick={onToggle} style={styles.toggleButton}>
        {isCollapsed ? '>' : '<'}
      </button>
    </div>
  );
};

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <h1>University Chatbot</h1>
    </div>
  );
};

const getLinkStyle = (currentPath, targetPath) => ({
  padding: '1rem',
  display: 'block',
  backgroundColor: currentPath === targetPath ? '#e0e0e0' : 'transparent',
  fontWeight: currentPath === targetPath ? 'bold' : 'normal',
  color: '#333',
  borderLeft: currentPath === targetPath ? '4px solid #007bff' : '4px solid transparent',
  transition: 'background-color 0.3s, border-left 0.3s',
});

const styles = {
  navbar: {
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '60px',
    backgroundColor: '#007bff',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1000',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  sidebar: {
    position: 'fixed',
    top: '60px',
    left: '0',
    height: 'calc(100vh - 60px)',
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    zIndex: '900',
    overflowY: 'auto',
    transition: 'width 0.3s',
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',
    color: '#007bff',
    display: 'block',
    margin: '10px 0',
  },
  ul: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  logoutItem: {
    marginTop: 'auto',
  },
  logoutLink: {
    cursor: 'pointer',
    color: '#d9534f',
    textDecoration: 'none',
  },
  content: {
    marginLeft: '200px',
    marginTop: '60px',
    padding: '20px',
    height: 'calc(100vh - 60px)',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
    transition: 'margin-left 0.3s',
  },
};

const DashboardLayout = ({ role, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div>
      <Navbar />
      <Sidebar role={role} isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      <div style={{ ...styles.content, marginLeft: isCollapsed ? '0px' : '200px' }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
