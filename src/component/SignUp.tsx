import { useState, type ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
}

const SignUp= () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;
  let fieldValue: string | boolean = value;

  if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
    fieldValue = e.target.checked;
  }

  setFormData({
    ...formData,
    [name]: fieldValue
  });

  if (errors[name as keyof FormErrors]) {
    setErrors({
      ...errors,
      [name]: undefined
    });
  }
};

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.role) {
      newErrors.role = 'Please select a role';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setErrors({});
    setIsLoading(true);
    try {
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push(formData);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      toast.success('Account has been successfully created');
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8 md:p-10">
        <h1 className="text-2xl font-bold text-center text-gray-800">Create Account</h1>
        <p className="text-center text-gray-600 mt-2 mb-8">Join us to start renting house of your dream</p>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit number"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition ${errors.role ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="tenant">Tenant</option>
              <option value="landlord">Landlord</option>
            </select>
            {errors.role && <span className="text-red-500 text-xs">{errors.role}</span>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword}</span>}
            </div>
          </div>
          
          <button 
            type="submit" 
            className={`w-full py-3 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition ${isLoading ? 'bg-gray-500' : 'bg-orange-600 hover:bg-orange-700'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="text-center mt-6 text-gray-600">
          Already have an account? <Link to="/login" className="text-orange-500 font-medium hover:underline">Login here</Link>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default SignUp;