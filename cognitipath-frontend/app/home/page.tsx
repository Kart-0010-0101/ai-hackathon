"use client";

import { useState } from "react";
import React from "react";

export default function HomePage() {
  // Mock quiz data: { [date: string]: { attempts: number, accuracy: number } }
  const quizStats: { [date: string]: { attempts: number, accuracy: number } } = {
    "4": { attempts: 2, accuracy: 80 }, "5": { attempts: 1, accuracy: 100 }, "6": { attempts: 0, accuracy: 0 }, "1": { attempts: 3, accuracy: 67 }, "2": { attempts: 1, accuracy: 100 }, "3": { attempts: 0, accuracy: 0 },
    "11": { attempts: 1, accuracy: 100 }, "12": { attempts: 2, accuracy: 90 }, "13": { attempts: 0, accuracy: 0 }, "8": { attempts: 1, accuracy: 100 }, "9": { attempts: 2, accuracy: 75 }, "10": { attempts: 0, accuracy: 0 },
    "18": { attempts: 0, accuracy: 0 }, "19": { attempts: 1, accuracy: 100 }, "20": { attempts: 2, accuracy: 80 }, "21": { attempts: 1, accuracy: 100 }, "22": { attempts: 0, accuracy: 0 }, "23": { attempts: 0, accuracy: 0 },
    "25": { attempts: 1, accuracy: 100 }, "26": { attempts: 0, accuracy: 0 }, "27": { attempts: 2, accuracy: 90 }, "28": { attempts: 1, accuracy: 100 }, "29": { attempts: 0, accuracy: 0 }, "30": { attempts: 1, accuracy: 100 },
  };
  const [tooltip, setTooltip] = useState<{ visible: boolean, x: number, y: number, content: string }>({ visible: false, x: 0, y: 0, content: "" });
  const calendarRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent, date: number) => {
    const stats = quizStats[String(date)];
    let x = e.clientX, y = e.clientY;
    if (calendarRef.current) {
      const rect = calendarRef.current.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      
      // Adjust tooltip position to stay within bounds
      const tooltipWidth = 150; // Approximate tooltip width
      const tooltipHeight = 60; // Approximate tooltip height
      
      if (x + tooltipWidth > rect.width) {
        x = x - tooltipWidth;
      }
      if (y + tooltipHeight > rect.height) {
        y = y - tooltipHeight;
      }
    }
    setTooltip({
      visible: true,
      x,
      y,
      content: stats ? `Quizzes: ${stats.attempts}\nAccuracy: ${stats.accuracy}%` : `Quizzes: 0\nAccuracy: 0%`
    });
  };
  const handleMouseLeave = () => setTooltip({ ...tooltip, visible: false });

  return (
    <div className="w-full max-w-6xl bg-gradient-to-br from-white via-[#f5f6f8] to-orange-50 rounded-2xl p-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mb-6" style={{ height: "700px" }}>
        {/* Profile Card */}
        <div className="rounded-2xl bg-white shadow-2xl p-8 flex flex-col items-center w-full h-full min-h-0 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1">
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
        <div className="rounded-2xl bg-white shadow-2xl p-8 flex flex-col w-full h-full min-h-0 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1">
          <div className="font-bold text-center mb-2 text-gray-900">MONDAY   TUESDAY   WEDNESDAY   THURSDAY   FRIDAY   SATURDAY</div>
          <div className="relative" ref={calendarRef}>
            <table className="w-full text-center border-collapse text-gray-900 font-bold">
              <tbody>
                {(() => {
                  const daysInMonth = 31;
                  const startDay = 0; // 0 = Monday
                  const weeks = [];
                  let day = 1;
                  for (let w = 0; w < 6; w++) {
                    const week = [];
                    for (let d = 0; d < 7; d++) {
                      if ((w === 0 && d < startDay) || day > daysInMonth) {
                        week.push(null);
                      } else {
                        week.push(day++);
                      }
                    }
                    weeks.push(week);
                  }
                  return weeks.map((row, i) => (
                    <tr key={i}>
                      {row.map((date, j) => (
                        <td key={j} className="text-gray-900 font-bold py-2">
                          {date ? (
                            <span
                              className="cursor-pointer hover:underline"
                              onMouseEnter={e => handleMouseEnter(e, date)}
                              onMouseLeave={handleMouseLeave}
                            >
                              {date}
                            </span>
                          ) : null}
                        </td>
                      ))}
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
            {tooltip.visible && (
              <div
                className="absolute z-50 bg-white border border-gray-300 rounded shadow-lg px-4 py-2 text-sm text-gray-900 whitespace-pre"
                style={{ left: tooltip.x + 10, top: tooltip.y - 10 }}
              >
                {tooltip.content}
              </div>
            )}
          </div>
        </div>
        {/* Performance Graph Card */}
        <div className="rounded-2xl bg-white shadow-2xl p-8 flex flex-col w-full h-full min-h-0 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1">
          <div className="font-bold mb-2 text-gray-900">Performance Graph</div>
          <div className="flex-1 flex items-center justify-center">
            <svg width="400" height="240" viewBox="0 0 400 240">
              {/* Grid lines */}
              <g stroke="#e5e7eb" strokeWidth="1">
                <line x1="80" y1="80" x2="360" y2="80" />
                <line x1="80" y1="160" x2="360" y2="160" />
                <line x1="80" y1="220" x2="360" y2="220" />
              </g>
              {/* Axes */}
              <line x1="80" y1="220" x2="80" y2="40" stroke="#222" strokeWidth="2.5" />
              <line x1="80" y1="220" x2="360" y2="220" stroke="#222" strokeWidth="2.5" />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="lineGradient" x1="80" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1cc6e7" />
                  <stop offset="1" stopColor="#4ade80" />
                </linearGradient>
                <filter id="shadow" x="-10" y="-10" width="420" height="260">
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
                points="80,210 120,190 160,190 200,150 240,190 280,110 320,60 360,40"
              />
              {/* Data points with shadow */}
              <g>
                <circle cx="80" cy="210" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="120" cy="190" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="160" cy="190" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="200" cy="150" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="240" cy="190" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="280" cy="110" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="320" cy="60" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
                <circle cx="360" cy="40" r="7" fill="#fff" stroke="#1cc6e7" strokeWidth="4" />
              </g>
              {/* Axis ticks and labels */}
              <g fontSize="14" fill="#222" fontFamily="'Inter', Arial, sans-serif" textAnchor="end">
                <text x="75" y="225">0</text>
                <text x="75" y="165">50</text>
                <text x="75" y="85">100</text>
              </g>
              <g fontSize="16" fill="#222" fontFamily="'Inter', Arial, sans-serif" textAnchor="middle">
                <text x="80" y="235">Jan</text>
                <text x="120" y="235">Feb</text>
                <text x="160" y="235">Mar</text>
                <text x="200" y="235">Apr</text>
                <text x="240" y="235">May</text>
                <text x="280" y="235">Jun</text>
                <text x="320" y="235">Jul</text>
                <text x="360" y="235">Aug</text>
              </g>
            </svg>
          </div>
        </div>
        {/* Achievements Card */}
        <div className="rounded-2xl bg-white shadow-2xl p-8 flex flex-col w-full h-full min-h-0 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1">
          <div className="font-bold mb-4 text-gray-900 text-lg">Achievements</div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg text-white text-2xl font-extrabold border-4 border-green-200">
              10
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">Level <span className="text-green-600">10</span></div>
              <div className="text-gray-700 font-semibold">Exp: <span className="text-green-600">10</span>/1000</div>
            </div>
          </div>
          <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden flex items-center shadow-inner">
            <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500" style={{ width: '30%' }}></div>
            <div className="ml-auto mr-2 flex items-center justify-center w-7 h-7 rounded-full bg-green-600 shadow text-white font-bold text-lg border-2 border-white">
              <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#fff" /><polygon points="12,7 15,16 12,14 9,16" fill="#b6ff00" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 