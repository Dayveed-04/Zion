import { useState } from 'react';
import EventCard from '../components/EventCard';
import { eventsData, filterCategories, type EventCategory } from '../data/EventData';


const Events = () => {
  const [activeFilter, setActiveFilter] = useState<EventCategory>('all');

  const filteredEvents = activeFilter === 'all' 
    ? eventsData
    : eventsData.filter(event => event.category === activeFilter);

  return (
    <div className="min-h-screen ">

      <section className="max-w-6xl mx-auto px-4 py-12 text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          2026 Event Calendar
        </h1>
        <p className="text-gray-600">
          Join us throughout the year for worship, fellowship, and spiritual growth
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as EventCategory)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all  ${
                activeFilter === filter.id
                  ? 'bg-[#DB241E] text-white'
                  : 'bg-red-100 text-gray-700 border border-gray-300 hover:border-[#DB241E]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              tagLabel={event.tagLabel}
              tagColor={event.tagColor}
              date={event.date}
              time={event.time}
              description={event.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;