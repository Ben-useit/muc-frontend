import { useEffect, useState } from 'react';
import customFetch from '../axios';

const User = (request) => {
  const params = new URLSearchParams(window.location.search);
  const verificationToken = params.get('verificationToken');
  const email = params.get('email');
  const [isLoading, setIsLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const { data } = await customFetch.post('/auth/verify-email', {
          verificationToken,
          email,
        });
        setVerified(true);
      } catch (error) {
        console.log('fetch error:', error);
      }
      setIsLoading(false);
    };
    verifyEmail();
  }, []);
  if (verified)
    return (
      <div style={{ margin: '40px' }}>
        {' '}
        <h3>Email verified!</h3>
        <h4>You can now log in.</h4>
      </div>
    );
  return (
    <div style={{ margin: '40px' }}>
      {' '}
      <h3>Email verification failed!</h3>
    </div>
  );
};
export default User;
