import { useState } from 'react';
import Wrapper from '../assets/wrappers/Register';
import customFetch from '../axios';
import useLocalState from '../utils/localState';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    const { name, email, password } = values;
    try {
      const { data } = await customFetch.post('/auth/register', {
        name,
        email,
        password,
      });
      showAlert({
        text: `Please confirm your email!`,
        type: 'success',
      });
      setLoading(false);
      //navigate('/');
    } catch (error) {
      showAlert({ text: error.response.data.msg });
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <div className='page'>
        <form className='form' method='POST' onSubmit={onSubmit}>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-input'
              name='name'
              id='name'
              onChange={handleChange}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='text'
              className='form-input'
              name='email'
              id='email'
              onChange={handleChange}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-input'
              name='password'
              id='password'
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className='btn btn-block'
            style={{ margin: '0.5rem' }}
          >
            submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
