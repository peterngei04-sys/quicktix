import React from "react";

const events = [
  { id: 1, title: "Music Concert", date: "2026-03-10", price: 500 },
  { id: 2, title: "Art Exhibition", date: "2026-03-15", price: 300 },
];

function EventList() {
  return (
    <div className="w-full max-w-md space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
        >
          <div>
            <h2 className="font-bold text-lg">{event.title}</h2>
            <p className="text-gray-500">{event.date}</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Buy Ksh {event.price}
          </button>
        </div>
      ))}
    </div>
  );
}

export default EventList;
