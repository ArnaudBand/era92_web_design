import newsEventsData from '@/data/newsEvents.json';

export default function LatestNewsWidget() {
   const { news } = newsEventsData;

   return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-black/50">
         <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
         <ul>
            {news.map((item, index) => (
               <li key={index} className="mb-4">
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.date}</p>
                  <p className="text-gray-700">{item.description}</p>
               </li>
            ))}
         </ul>
      </div>
   );
}
