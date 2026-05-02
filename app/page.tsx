"use client";

import { useState, useEffect } from "react";

export default function EvidencePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("site_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "kochamprawde") {
      localStorage.setItem("site_auth", "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl border border-slate-200 p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-1 bg-red-700 mb-6"></div>
            <h1 className="text-2xl font-bold text-slate-900 text-center">
              Dostęp Zastrzeżony
            </h1>
            <p className="text-slate-500 text-sm mt-2 text-center">
              Wprowadź hasło, aby uzyskać dostęp do materiałów dowodowych.
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Hasło"
                className={`w-full px-4 py-3 rounded border ${
                  error ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all`}
              />
              {error && (
                <p className="text-red-600 text-xs mt-1">Nieprawidłowe hasło.</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded transition-colors"
            >
              Zaloguj się
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-[10px] uppercase tracking-widest">
              System Archiwizacji Dowodów Sądowych
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider mb-4">
            Materiał Dowodowy
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Dowód w sprawie: Sygn. akt II K 764/25
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Sąd Rejonowy w Środzie Śląskiej, II Wydział Karny
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 space-y-12">
        {/* Sekcja Informacyjna */}
        <section className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-700"></div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
            Kontekst i Wyjaśnienie
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            Niniejsza strona prezentuje oryginalny, niezmodyfikowany zapis audio z przebiegu rozprawy sądowej z dnia 15.04.2026, w sprawie <span className="font-bold">Sygn. akt II K 764/25</span> Sądu Rejonowego w Środzie Śląskiej. Opublikowane tu materiały stanowią bezsporny dowód na rażące nieprawidłowości oraz poświadczenie nieprawdy w oficjalnej dokumentacji sądowej.
          </p>
        </section>

        {/* Sekcja Odtwarzacza */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-700 animate-pulse"></div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
              Oryginalne nagranie z rozprawy (Ukryty dyktafon)
            </h3>
          </div>
          <div className="bg-slate-900 p-8 rounded-xl shadow-lg">
            <audio controls className="w-full h-12">
              <source src="/evidence/stefan-nagranie.mp3" type="audio/mpeg" />
              Twoja przeglądarka nie obsługuje odtwarzacza audio.
            </audio>
            <div className="mt-4 flex justify-between items-center text-[11px] text-slate-400 font-mono uppercase tracking-tighter">
              <span>Status: Plik zweryfikowany</span>
              <span>Format: MP3 / 320kbps</span>
            </div>
          </div>
        </section>

        {/* Sekcja Dokumentów */}
        <section className="pt-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
            Dokumentacja do pobrania
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="#"
              className="flex items-center p-5 bg-white border border-slate-200 rounded-lg hover:border-red-700 hover:shadow-md transition-all group"
            >
              <div className="bg-slate-100 p-3 rounded group-hover:bg-red-50 transition-colors">
                <svg
                  className="w-6 h-6 text-slate-600 group-hover:text-red-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-slate-900">
                  Pobierz oficjalny protokół sądowy
                </p>
                <p className="text-xs text-slate-500">(Spreparowany) - PDF</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center p-5 bg-white border border-slate-200 rounded-lg hover:border-red-700 hover:shadow-md transition-all group"
            >
              <div className="bg-slate-100 p-3 rounded group-hover:bg-red-50 transition-colors">
                <svg
                  className="w-6 h-6 text-slate-600 group-hover:text-red-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-slate-900">
                  Pobierz rzeczywisty przebieg
                </p>
                <p className="text-xs text-slate-500">(Transkrypcja nagrania) - DOCX</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">
            Własność prywatna - materiały dowodowe
          </p>
          <p className="text-slate-300 text-[10px]">
            Wszelkie prawa zastrzeżone. Kopiowanie i udostępnianie bez zgody właściciela zabronione.
          </p>
        </div>
      </footer>
    </div>
  );
}
