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
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa] p-6 font-sans text-slate-900">
        <div className="w-full max-w-[440px] space-y-12">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-[10px] font-bold uppercase tracking-[0.6em] text-slate-400">Wymagana Autoryzacja</h1>
              <div className="h-[1px] w-8 bg-slate-200 mx-auto"></div>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-4">
                <label htmlFor="password" className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block text-center">Hasło</label>
                <input
                  id="password"
                  name="password"
                  type="text"
                  autoFocus
                  required
                  className="block w-full bg-white border border-slate-200 px-6 py-4 text-sm text-center focus:outline-none focus:border-slate-400 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.05)] transition-all rounded-full text-slate-900 placeholder:text-slate-300"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-black hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all rounded-full"
              >
                Enter
              </button>
              {error && (
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center animate-in fade-in slide-in-from-top-1">{error}</p>
              )}
            </form>
          </div>

          <div className="px-4">
            <p className="text-[11px] leading-relaxed text-slate-400 text-center font-medium max-w-sm mx-auto">
              Niniejsza strona prezentuje oryginalny, niezmodyfikowany zapis audio z przebiegu rozprawy sądowej z dnia 15.04.2026, w sprawie Sygn. akt II K 764/25 Sądu Rejonowego w Środzie Śląskiej. Opublikowane tu materiały stanowią bezsporny dowód na rażące nieprawidłowości oraz poświadczenie nieprawdy w oficjalnej dokumentacji sądowej poprzez celowe sfałszowanie protokołu.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-red-50">
      {/* Top Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">II</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 leading-none">Sygn. akt</p>
              <h2 className="text-sm font-bold text-slate-900">II K 764/25</h2>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 leading-none text-right">Instancja</p>
            <p className="text-xs font-medium text-slate-600">Sąd Rejonowy w Środzie Śląskiej</p>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* Hero Section */}
        <header className="space-y-8 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 border border-red-100">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">Materiał Dowodowy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-slate-950 leading-tight">
            Analiza przebiegu rozprawy <span className="text-slate-400 font-sans font-light">z dnia 15.04.2026</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed font-light">
            Prezentowane materiały stanowią bezsporny dowód na rażące nieprawidłowości oraz poświadczenie nieprawdy w oficjalnej dokumentacji sądowej poprzez celowe sfałszowanie protokołu.
          </p>
        </header>

        {/* Audio Evidence Grid */}
        <section className="space-y-8">
          <div className="flex items-end justify-between border-b border-slate-100 pb-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Nagranie Główne</h3>
          </div>

          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 tracking-tight">Zapis z ukrytego rejestratora</h4>
                  <p className="text-sm text-slate-400">Rozprawa główna • 15.04.2026 • Format MP3</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 custom-audio-container">
                <audio controls controlsList="nodownload noplaybackrate" preload="none" className="w-full h-10 opacity-80">
                  <source src="/api/download" type="audio/mpeg" />
                  Odtwarzacz niedostępny.
                </audio>
                <style jsx global>{`
                  .custom-audio-container audio::-webkit-media-controls-panel {
                    background-color: transparent !important;
                  }
                  .custom-audio-container audio::-webkit-media-controls-enclosure {
                    background-color: transparent !important;
                  }
                `}</style>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="/api/download"
                download
                className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Pobierz nagranie</span>
              </a>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="space-y-8 pb-20">
          <div className="flex items-end justify-between border-b border-slate-100 pb-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Dokumentacja</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/api/track?type=protokol_sfalszowany"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-100 p-8 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.02)] transition-all hover:border-red-200 hover:shadow-[0_30px_60px_-15px_rgba(220,38,38,0.08)]"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg group-hover:text-red-600 transition-colors">Protokół Sądowy</h4>
                  <p className="text-sm text-slate-400 mt-1 uppercase font-bold tracking-widest text-[10px]">Wersja zmanipulowana</p>
                </div>
                <div className="pt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-red-500 transition-colors">
                  <span>Otwórz dokument</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>

            <a
              href="/api/track?type=protokol_prawdziwy"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-100 p-8 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.02)] transition-all hover:border-slate-900 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg group-hover:text-slate-900 transition-colors">Rzeczywisty Przebieg</h4>
                  <p className="text-sm text-slate-400 mt-1 uppercase font-bold tracking-widest text-[10px]">Pełna transkrypcja audio</p>
                </div>
                <div className="pt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                  <span>Otwórz dokument</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
            &copy; 2024 Archiwum Sprawy II K 764/25
          </p>
          <div className="flex space-x-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Poufne</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Bezsporne</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Oryginalne</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
