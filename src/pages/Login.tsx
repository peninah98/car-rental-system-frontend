import  { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fadeIn = {
  animation: 'fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) both',
};

if (typeof document !== 'undefined' && !document.getElementById('login-fadein-keyframes')) {
  const style = document.createElement('style');
  style.id = 'login-fadein-keyframes';
  style.innerHTML = `
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(40px) scale(0.98); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    .login-pulse:active {
      animation: loginPulse 0.4s;
    }
    @keyframes loginPulse {
      0% { box-shadow: 0 0 0 0 #ea580c66; }
      70% { box-shadow: 0 0 0 10px #ea580c00; }
      100% { box-shadow: 0 0 0 0 #ea580c00; }
    }
  `;
  document.head.appendChild(style);
}


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      if (user) {
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/');
        }, 1200);
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gradient-to-br from-orange-50 via-white to-gray-100">
      <div
        className="w-full max-w-md bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
        style={fadeIn}
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-200 opacity-10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-200 opacity-10 rounded-full blur-2xl animate-pulse" />
        <h1 className="text-3xl font-extrabold text-center text-gray-800 tracking-tight mb-2 animate-fadein">Welcome Back!</h1>
        <p className="text-center text-gray-500 mb-8 animate-fadein delay-100">Login to your account to continue</p>
        <form className="space-y-7" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-orange-200 focus:border-orange-200 outline-none transition-all duration-300 bg-gray-50 shadow-sm hover:shadow-md ${errors.email ? 'border-red-500' : 'border-gray-200 border'}`}
              autoComplete="username"
              style={{ transition: 'box-shadow 0.3s, border 0.3s' }}
            />
            {errors.email && <span className="text-red-500 text-xs animate-fadein">{errors.email}</span>}
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300 bg-gray-50 shadow-sm hover:shadow-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              autoComplete="current-password"
              style={{ transition: 'box-shadow 0.3s, border 0.3s' }}
            />
            {errors.password && <span className="text-red-500 text-xs animate-fadein">{errors.password}</span>}
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg text-white font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 bg-orange-600 hover:bg-orange-700 active:login-pulse relative overflow-hidden`}
            disabled={isLoading}
            style={{ letterSpacing: '0.03em' }}
          >
            <span className="inline-block align-middle animate-fadein">
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                  Logging in...
                </span>
              ) : (
                'Log In'
              )}
            </span>
          </button>
        </form>
        <div className="text-center mt-8 text-gray-600 animate-fadein delay-300">
          Don't have an account?{' '}
          <Link to="/register" className="text-orange-500 font-semibold hover:underline transition-colors duration-200">Sign up here</Link>
        </div>
        <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </div>
  );
};

export default Login;
