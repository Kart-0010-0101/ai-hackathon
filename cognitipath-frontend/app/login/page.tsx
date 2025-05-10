import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/'); // Redirect to homepage or dashboard
    }
  }, [status, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Welcome Back <span className="inline-block">👋</span></h2>
          <p className="text-gray-500 mb-6">Today is a new day. It's your day. You shape it.<br/>Sign in to start managing your projects.</p>
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); signIn('google'); }}>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Example@email.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                disabled
              />
            </div>
            <div className="flex justify-end text-sm mb-2">
              <a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-md font-semibold hover:bg-gray-900 transition"
            >
              Sign in
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-2 text-gray-400">Or</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
          <button
            onClick={() => signIn('google')}
            className="w-full flex items-center justify-center py-2 px-4 bg-gray-900 text-white rounded-md font-semibold hover:bg-black transition"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.64 2.36 30.13 0 24 0 14.82 0 6.73 5.82 2.69 14.09l7.98 6.2C12.13 13.7 17.57 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.03l7.19 5.59C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.29c-1.13-3.36-1.13-6.97 0-10.33l-7.98-6.2C.7 16.09 0 19.01 0 22c0 2.99.7 5.91 1.97 8.54l8.7-6.25z"/><path fill="#EA4335" d="M24 44c6.13 0 11.64-2.03 15.54-5.53l-7.19-5.59c-2.01 1.35-4.59 2.13-7.35 2.13-6.43 0-11.87-4.2-13.33-9.79l-8.7 6.25C6.73 42.18 14.82 48 24 48z"/></g></svg>
            Sign in with Google
          </button>
          <div className="text-center mt-6 text-gray-600 text-sm">
            Don't you have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="hidden md:flex w-1/2 bg-orange-50 items-center justify-center">
          <Image
            src="/login-illustration.svg"
            alt="Login Illustration"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
} 