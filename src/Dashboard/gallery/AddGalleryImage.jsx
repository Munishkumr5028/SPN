// AddGallery.jsx
import React, { useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import './AddGallery.css';

const initialData = [
  { id: 1, eventName: "New Year Party", date: "2024-01-01" },
  { id: 2, eventName: "Birthday Bash", date: "2024-03-15" },
  { id: 3, eventName: "Company Meeting", date: "2024-05-20" },
];

export default function AddGallery() {
  const [events, setEvents] = useState(initialData);
  const [newEvent, setNewEvent] = useState({ eventName: '', date: '', image: null });
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setNewEvent((prev) => ({ ...prev, image: files[0] }));
    } else {
      setNewEvent((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddEvent = () => {
    if (newEvent.eventName && newEvent.date && newEvent.image) {
      const newId = events.length > 0 ? events[events.length - 1].id + 1 : 1;
      setEvents([...events, { id: newId, ...newEvent }]);
      setNewEvent({ eventName: '', date: '', image: null });
      setShowModal(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="event-table-container">
        <div className="header-row">
          <h2 className="title-left">Event List</h2>
          <button className="btn add" onClick={() => setShowModal(true)}>Add Event</button>
        </div>

        <table className="event-table full-width">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr><td colSpan="4" className="no-events">No events available.</td></tr>
            ) : (
              events.map((event) => (
                <tr key={event.id}>
                  <td>{event.eventName}</td>
                  <td>{event.date}</td>
                  <td>
                    <button className="btn delete" onClick={() => handleDelete(event.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Add New Event</h3>
              <input type="text" name="eventName" placeholder="Event Name" value={newEvent.eventName} onChange={handleChange} />
              <input type="date" name="date" value={newEvent.date} onChange={handleChange} />
              <input type="file" name="image" accept="image/*" onChange={handleChange} />
              <div className="modal-buttons">
                <button className="btn save" onClick={handleAddEvent}>Save</button>
                <button className="btn cancel" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
