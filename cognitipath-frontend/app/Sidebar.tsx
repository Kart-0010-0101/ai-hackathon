"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <aside className="w-64 flex flex-col items-center py-8 px-2 bg-gradient-to-b from-orange-500 to-orange-200 rounded-tr-3xl rounded-br-3xl shadow-lg min-h-screen">
      <div className="mb-12 mt-2 w-full flex justify-center">
        <Image src="/logo.svg" alt="CognitiPath Logo" width={120} height={60} />
      </div>
      <nav className="flex flex-col gap-8 w-full">
        <a 
          href="/home" 
          onClick={(e) => { e.preventDefault(); navigateTo("home"); }} 
          className={`text-lg font-medium transition-all duration-200 ${pathname === "/home" ? "bg-white text-orange-700 rounded-l-full px-6 py-3 font-bold shadow-lg" : "text-white hover:font-bold hover:bg-orange-400/40 px-6 py-3 rounded-l-full"}`}
        >
          Home
        </a>
        <a 
          href="/summarizer" 
          onClick={(e) => { e.preventDefault(); navigateTo("summarizer"); }} 
          className={`text-lg font-medium transition-all duration-200 ${pathname === "/summarizer" ? "bg-white text-orange-700 rounded-l-full px-6 py-3 font-bold shadow-lg" : "text-white hover:font-bold hover:bg-orange-400/40 px-6 py-3 rounded-l-full"}`}
        >
          AI SUMMARIZER
        </a>
        <a 
          href="/quiz" 
          onClick={(e) => { e.preventDefault(); navigateTo("quiz"); }} 
          className={`text-lg font-medium transition-all duration-200 ${pathname === "/quiz" ? "bg-white text-orange-700 rounded-l-full px-6 py-3 font-bold shadow-lg" : "text-white hover:font-bold hover:bg-orange-400/40 px-6 py-3 rounded-l-full"}`}
        >
          Quiz
        </a>
        <a 
          href="/flashcards" 
          onClick={(e) => { e.preventDefault(); navigateTo("flashcards"); }} 
          className={`text-lg font-medium transition-all duration-200 ${pathname === "/flashcards" ? "bg-white text-orange-700 rounded-l-full px-6 py-3 font-bold shadow-lg" : "text-white hover:font-bold hover:bg-orange-400/40 px-6 py-3 rounded-l-full"}`}
        >
          Flashcards
        </a>
      </nav>
    </aside>
  );
} 