import React from 'react';
import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-indigo-600">CognitiPath</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/notes" className="text-gray-600 hover:text-gray-900">
                Notes
              </Link>
              <Link href="/quizzes" className="text-gray-600 hover:text-gray-900">
                Quizzes
              </Link>
              <Link href="/flashcards" className="text-gray-600 hover:text-gray-900">
                Flashcards
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 