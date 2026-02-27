// src/App.jsx
import React from "react";
import "./App.css";

const events = [
  { name: "Music Concert", date: "2026-03-10", price: 500 },
  { name: "Art Exhibition", date: "2026-03-15", price: 300 },
  { name: "Tech Meetup", date: "2026-03-20", price: 200 },
];

function App() {
  return (
    <div className="bg-gradient-main text-white min-h-screen flex flex-col items-center">
      <header className="text-4xl font-bold mb-8 animate-fade-in">QuickTix</header>
      <p className="text-lg mb-8 animate-fade-in delay-200">
        Sell and manage event tickets easily.
      </p>

      <main className="w-full max-w-md">
        {events.map((event, idx) => (
          <div
            key={event.name}
            className={`card animate-fade-in delay-${idx * 200}`}
          >
            <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
            <p className="mb-4">{event.date}</p>
            <button className="button-hover bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold">
              Buy Ksh {event.price}
            </button>
          </div>
        ))}
      </main>

      <footer className="footer mt-auto text-center">
        © 2026 QuickTix — Powered by PECO Industries
      </footer>
    </div>
  );
}

export default App;
