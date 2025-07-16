import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from '../utils/auth';

export default function Layout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    auth.logout();
    setUser(null);
    router.push('/login');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <nav style={{ 
        padding: '1rem', 
        backgroundColor: '#333', 
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>My App</h1>
        {user ? (
          <div>
            <span>Welcome, {user.username}!</span>
            <button 
              onClick={handleLogout}
              style={{ 
                marginLeft: '1rem', 
                padding: '0.5rem 1rem',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button 
              onClick={() => router.push('/login')}
              style={{ 
                marginRight: '1rem', 
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
            <button 
              onClick={() => router.push('/register')}
              style={{ 
                padding: '0.5rem 1rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Register
            </button>
          </div>
        )}
      </nav>
      <main style={{ padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}