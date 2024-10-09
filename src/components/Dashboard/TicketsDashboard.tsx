import React from 'react';
import './TicketDashboard.css';

const TicketsDashboard: React.FC = () => {
  const tickets = [
    { id: 1, title: 'Tickets pelo robô', percentage: 34.5, growth: 15.8 },
    { id: 2, title: 'Tickets gerados', percentage: 4.35, growth: 15.8 },
    { id: 3, title: 'Tickets resolvidos', percentage: 94.5, growth: 15.8 },
    { id: 4, title: 'Tickets em aguardo', percentage: 1.5, growth: 15.8 },
    { id: 5, title: 'Ticket não respondidos', percentage: 4.0, growth: 15.8 },
  ];

  return (
    <div className="ticket-container">
      {tickets.map((ticket, index) => (
        <div key={index} className="ticket">
          <div className="ticket-content">
            <h2 className="ticket-title">{ticket.title}</h2>
            <p className="ticket-subtitle">Monthly report</p>
            <p className="ticket-percentage">{ticket.percentage}%</p>
            <p className="ticket-growth">+{ticket.growth}%</p>
          </div>
          <div className="ticket-number">
            <div className={`number-circle color-${index + 1}`}>
              <span>582</span>
              <span className="date">Hoje</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketsDashboard;
