import { useEffect, useState } from 'react';
import api from '../api/api';
import { useRouter } from 'next/router';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await api.get('/profile');
        setProfile(res.data);
      } catch (err) {
        alert('Not authorized. Please login.');
        router.push('/login');
      }
    };
    loadProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}