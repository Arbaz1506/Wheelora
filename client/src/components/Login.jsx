import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';

const Login = () => {
  const { setShowLogin, saveToken, navigate, axios } = useAppContext();

  const [state, setState] = useState('login'); // 'login' or 'register'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      // Axios POST request
      const { data } = await axios.post(`/api/user/${state}`, {
        name,
        email,
        password,
      });

      if (data.success) {
        saveToken(data.token); // ✅ set token in localStorage, axios header, and state
        navigate('/');
        setShowLogin(false);
        toast.success(state === 'login' ? 'Logged in successfully' : 'Account created successfully');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Prevent scrolling while login modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="relative z-[1000] bg-white w-80 sm:w-[352px] p-8 py-10 rounded-lg shadow-lg flex flex-col gap-4 text-sm text-gray-700"
      >
        <h2 className="text-2xl font-semibold text-center">
          <span className="text-indigo-600">User</span> {state === 'login' ? 'Login' : 'Sign Up'}
        </h2>

        {state === 'register' && (
          <div className="w-full">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded p-2 outline-indigo-500"
            />
          </div>
        )}

        <div className="w-full">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded p-2 outline-indigo-500"
          />
        </div>

        <div className="w-full">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded p-2 outline-indigo-500"
          />
        </div>

        <p className="text-sm text-center">
          {state === 'register' ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setState('login')}
                className="text-indigo-600 font-medium cursor-pointer"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span
                onClick={() => setState('register')}
                className="text-indigo-600 font-medium cursor-pointer"
              >
                Sign up
              </span>
            </>
          )}
        </p>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md text-white transition-all ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {loading ? 'Please wait...' : state === 'register' ? 'Create Account' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
