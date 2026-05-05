"use client";

import { useState } from "react";

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        const data = await response.json();
        setError(data.message || "Błąd");
        setPassword("");
      }
    } catch (err) {
      setError("Błąd systemowy");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-4 font-sans text-slate-900">
        <div className="w-full max-w-[200px] space-y-4">
          <h1 className="text-sm font-medium">Hasło:</h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              id="password"
              name="password"
              type="text"
              autoFocus
              required
              className="block w-full border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:border-slate-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-2 text-xs font-medium uppercase tracking-wider hover:bg-slate-800 transition-colors"
            >
              Enter
            </button>
            {error && <p className="text-[10px] text-red-500 uppercase text-center">{error}</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-4 shadow-lg border-b-4 border-red-700">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight uppercase flex flex-col gap-2">
            <span>Dowód w sprawie:</span>
            <span>Sygn. akt II K 764/25</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
            Sąd Rejonowy w Środzie Śląskiej, II Wydział Karny
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Informational Section */}
        <section className="bg-white border-l-4 border-red-700 p-8 shadow-sm rounded-r-lg">
          <p className="text-lg leading-relaxed text-slate-700 italic">
            &quot;Niniejsza strona prezentuje oryginalny, niezmodyfikowany zapis audio z przebiegu rozprawy sądowej z dnia 15.04.2026, w sprawie Sygn. akt II K 764/25 Sądu Rejonowego w Środzie Śląskiej. Opublikowane tu materiały stanowią bezsporny dowód na rażące nieprawidłowości oraz poświadczenie nieprawdy w oficjalnej dokumentacji sądowej.&quot;
          </p>
        </section>

        {/* Audio Player Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="h-2 w-2 bg-red-600 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-slate-800">
              Oryginalne nagranie z rozprawy (Ukryty dyktafon)
            </h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-800 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4">
               <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Audio ID: 76425-SECURE-RECORD</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-700/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Plik audio: stefan-nagranie.mp3</h3>
                    <p className="text-slate-400 text-sm">Rozprawa główna - 15.04.2026</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <audio controls preload="none" className="w-full h-12 filter invert brightness-100 contrast-125">
                  <source src="/api/download" type="audio/mpeg" />
                  Twoja przeglądarka nie obsługuje odtwarzacza audio.
                </audio>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="grid md:grid-cols-2 gap-6">
          <a
            href="#"
            className="group flex items-center justify-between bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-red-600 transition-all hover:shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-red-50 p-3 rounded-lg group-hover:bg-red-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="block font-bold text-slate-800 group-hover:text-red-700 transition-colors">Protokół Sądowy</span>
                <span className="block text-xs text-slate-500 uppercase font-semibold">(Spreparowany)</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

          <a
            href="#"
            className="group flex items-center justify-between bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-800 transition-all hover:shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-slate-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="block font-bold text-slate-800 group-hover:text-slate-900 transition-colors">Rzeczywisty Przebieg</span>
                <span className="block text-xs text-slate-500 uppercase font-semibold">(Transkrypcja nagrania)</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200">
        <div className="text-center text-slate-500 text-sm">
          <p>&copy; 2024 Archiwum Sprawy II K 764/25.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest">Prawda nie wymaga interpretacji. Prawda jest faktem.</p>
        </div>
      </footer>
    </div>
  );
}
