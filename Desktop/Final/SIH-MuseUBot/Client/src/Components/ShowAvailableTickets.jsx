// import React from 'react';
// import ShowAvailableTickets from '../Styles/ShowAvailableTickets.css'
// const ShowAvailableTickets = ({ tickets }) => {
//   const handleBookTicket = (museum) => {
//     alert(`Booking ticket for ${museum.museum}`);
//     // Add booking logic here
//   };

//   return (
//     <div className="tickets-container">
//       <h2>Available Tickets</h2>
//       {tickets.length > 0 ? (
//         tickets.map((ticket, index) => (
//           <div className="ticket-card" key={index}>
//             <div className="ticket-info">
//               <h3>{ticket.museum}</h3>
//               <p><strong>State:</strong> {ticket.state}</p>
//               <p><strong>City:</strong> {ticket.city}</p>
//               <p><strong>Date:</strong> {ticket.visitingDate}</p>
//               <p><strong>Time:</strong> {ticket.visitingTime}</p>
//               <p><strong>Tickets Available:</strong> {ticket.ticketsAvailable}</p>
//             </div>
//             <button className="book-button" onClick={() => handleBookTicket(ticket)}>
//               Book Ticket
//             </button>
//           </div>
//         ))
//       ) : (
//         <p>No tickets available for the selected options.</p>
//       )}
//     </div>
//   );
// };

// export default ShowAvailableTickets;
import React, { useCallback, memo } from 'react';
import '../Styles/ShowAvailableTickets.css';

const TicketCard = memo(({ ticket, onBookTicket }) => (
  <div className="ticket-card">
    <div className="ticket-info">
      <h3>{ticket.museum}</h3>
      <p><strong>State:</strong> {ticket.state}</p>
      <p><strong>City:</strong> {ticket.city}</p>
      <p><strong>Date:</strong> {ticket.visitingDate}</p>
      <p><strong>Time:</strong> {ticket.visitingTime}</p>
      <p><strong>Tickets Available:</strong> {ticket.ticketsAvailable}</p>
    </div>
    <button className="book-button" onClick={() => onBookTicket(ticket)}>
      Book Ticket
    </button>
  </div>
));

const ShowAvailableTickets = ({ tickets }) => {
  const handleBookTicket = useCallback((ticket) => {
    alert(`Booking ticket for ${ticket.museum}`);
    // Add booking logic here
  }, []);

  return (
    <div className="tickets-container">
      <h2>Available Tickets</h2>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <TicketCard 
            key={ticket.id || `${ticket.museum}-${ticket.visitingDate}-${ticket.visitingTime}`} 
            ticket={ticket} 
            onBookTicket={handleBookTicket} 
          />
        ))
      ) : (
        <p>No tickets available for the selected options.</p>
      )}
    </div>
  );
};

export default memo(ShowAvailableTickets);
