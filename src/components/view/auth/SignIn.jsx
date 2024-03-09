import { ArrowRight, EyeIcon, EyeOffIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PrimaryButton from '../../shared/PrimaryButton.jsx';
import axios from 'axios';
import { toast } from 'sonner';

export function SignIn() {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);

  const toggleEye = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || (email === '')) setShowEmailError(true);
    if (!password || (password === '')) setShowPasswordError(true);
    const data = {
      username: email,
      password: password,
    };
    await axios.post('http://localhost:8080/api/v1/auth/login', data,
      { headers: { 'Content-Type': 'application/json' } }
    ).then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('userToken', JSON.stringify(res.data.accessToken));
      toast.success("Logged in successfully");
    }).catch((err) => {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    });

  };

  return (
    <section>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1 flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link
                to="/register"
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account{' '}
              </Link>

            </p>
            <form  className="mt-8" onSubmit={handleSignIn}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email / Username{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 relative">
                    <input
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${
                        (showEmailError && !email) ? 'border-red-500 shake-input' : 'border-gray-300 bg-transparent'
                      }`}
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {showEmailError && !email && (
                      <div className="absolute text-red-500 text-xs mt-1">
                        Email is Required
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${
                        (showPasswordError && !password) ? 'border-red-500 shake-input' : 'border-gray-300 bg-transparent'
                      }`}
                      type={isEyeOpen ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={toggleEye}
                      className="absolute top-[25%] right-[5%] text-gray-400 cursor-pointer"
                    >
                      {isEyeOpen && <EyeIcon size={20}/>}
                      {!isEyeOpen && <EyeOffIcon size={20}/>}
                    </button>
                    {showPasswordError && !password && (
                      <div className="absolute text-red-500 text-xs mt-1">
                        Password is Required
                      </div>
                    )}
                  </div>
                </div>
                <div className="py-2">
                  <PrimaryButton
                    text="Get Started"
                    rightIcon={<ArrowRight className="ml-2" size={16}/>}
                    fullWidth
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="order-1 lg:order-2 h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SignIn;
