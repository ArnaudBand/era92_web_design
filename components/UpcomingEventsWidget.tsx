import newsEventsData from '@/data/newsEvents.json';

export default function UpcomingEventsWidget() {
   const { events } = newsEventsData;

   return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-black/50">
         <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
         <ul>
            {events.map((event, index) => (
               <li key={index} className="mb-4">
                  <h4 className="text-lg font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.date} - {event.location}</p>
                  <p className="text-gray-700">{event.description}</p>
               </li>
            ))}
         </ul>
      </div>
   );
}
