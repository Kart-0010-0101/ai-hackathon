"use client";

export default function HomePage() {
  return (
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mb-6" style={{ height: "700px" }}>
        {/* Profile Card */}
        <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col items-center w-full h-full min-h-0">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg width="60" height="60" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" stroke="#222" strokeWidth="2"/><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#222" strokeWidth="2"/></svg>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg mb-1 text-gray-900">“Student Name”</div>
            <div className="text-gray-900">“Department”</div>
            <div className="text-gray-900">“Year”</div>
            <div className="text-gray-900">“Roll No.”</div>
            <div className="text-gray-900">”Sem”</div>
          </div>
        </div>
        {/* Calendar Card */}
        <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col w-full h-full min-h-0">
          <div className="font-bold text-center mb-2 text-gray-900">SUNDAY   MONDAY   TUESDAY   WEDNESDAY   THURSDAY   FRIDAY</div>
          <table className="w-full text-center border-collapse text-gray-900 font-bold">
            <tbody>
              <tr><td className="text-gray-900 font-bold">4</td><td className="text-gray-900 font-bold">5</td><td className="text-gray-900 font-bold">6</td><td className="text-gray-900 font-bold">1</td><td className="text-gray-900 font-bold">2</td><td className="text-gray-900 font-bold">3</td></tr>
              <tr><td className="text-gray-900 font-bold">11</td><td className="text-gray-900 font-bold">12</td><td className="text-gray-900 font-bold">13</td><td className="text-gray-900 font-bold">8</td><td className="text-gray-900 font-bold">9</td><td className="text-gray-900 font-bold">10</td></tr>
              <tr><td className="text-gray-900 font-bold">18</td><td className="text-gray-900 font-bold">19</td><td className="text-gray-900 font-bold">20</td><td className="text-gray-900 font-bold">16</td><td className="text-gray-900 font-bold">16</td><td className="text-gray-900 font-bold">17</td></tr>
              <tr><td className="text-gray-900 font-bold">25</td><td className="text-gray-900 font-bold">26</td><td className="text-gray-900 font-bold">27</td><td className="text-gray-900 font-bold">28</td><td className="text-gray-900 font-bold">30</td><td className="text-gray-900 font-bold">31</td></tr>
            </tbody>
          </table>
        </div>
        {/* Performance Graph Card */}
        <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col w-full h-full min-h-0">
          <div className="font-bold mb-2 text-gray-900">Performance Graph</div>
          <div className="flex-1 flex items-center justify-center">
            {/* Improved graph styling */}
            <svg width="220" height="140" viewBox="0 0 220 140">
              {/* Grid lines */}
              <g stroke="#e5e7eb" strokeWidth="1">
                <line x1="40" y1="40" x2="200" y2="40" />
                <line x1="40" y1="80" x2="200" y2="80" />
                <line x1="40" y1="120" x2="200" y2="120" />
              </g>
              {/* Axes */}
              <line x1="40" y1="120" x2="40" y2="20" stroke="#222" strokeWidth="2.5" />
              <line x1="40" y1="120" x2="200" y2="120" stroke="#222" strokeWidth="2.5" />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="lineGradient" x1="40" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1cc6e7" />
                  <stop offset="1" stopColor="#4ade80" />
                </linearGradient>
                <filter id="shadow" x="-10" y="-10" width="240" height="160">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#1cc6e7" flood-opacity="0.3" />
                </filter>
              </defs>
              {/* Smooth line with shadow */}
              <polyline
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="5"
                strokeLinejoin="round"
                strokeLinecap="round"
                filter="url(#shadow)"
                points="40,110 70,100 100,100 130,80 160,100 190,60 220,40"
              />
              {/* Data points with shadow */}
              <g>
                <circle cx="40" cy="110" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="70" cy="100" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="100" cy="100" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="130" cy="80" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="160" cy="100" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="190" cy="60" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="220" cy="40" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
              </g>
              {/* Axis ticks and labels */}
              <g fontSize="10" fill="#222" fontFamily="'Inter', Arial, sans-serif">
                <text x="30" y="125">0</text>
                <text x="30" y="85">50</text>
                <text x="30" y="45">100</text>
                <text x="40" y="135">Jan</text>
                <text x="70" y="135">Feb</text>
                <text x="100" y="135">Mar</text>
                <text x="130" y="135">Apr</text>
                <text x="160" y="135">May</text>
                <text x="190" y="135">Jun</text>
                <text x="220" y="135">Jul</text>
              </g>
            </svg>
          </div>
        </div>
        {/* Achievements Card */}
        <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col w-full h-full min-h-0">
          <div className="font-bold mb-2 text-gray-900">Achievements</div>
          <div className="text-2xl font-bold text-gray-900">Level: 10</div>
          <div className="text-gray-900 mb-2 font-bold">Exp: 10/1000</div>
          <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden flex items-center">
            <div className="h-full bg-green-400 rounded-full" style={{ width: '30%' }}></div>
            <div className="ml-auto mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#222" /><polygon points="12,6 14,16 12,14 10,16" fill="#b6ff00" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
