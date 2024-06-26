import React, { useState } from 'react';

const RideForm: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [dropOff, setDropOff] = useState('');
  const [days, setDays] = useState<string[]>([]);
  const [recurring, setRecurring] = useState(false);
  const [arrivalTime, setArrivalTime] = useState('');

  const handleDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setDays(prevDays =>
      checked ? [...prevDays, value] : prevDays.filter(day => day !== value)
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      pickup,
      drop_off: dropOff,
      days,
      recurring,
      arrival_time: arrivalTime,
    };
    console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-l from-[#42a7f0] to-[#004d99]">
      <form onSubmit={handleSubmit} className="text-black max-w-lg w-full bg-blue p-8 rounded-xl shadow-lg space-y-6 bg-gradient-to-l from-[#f0f9ff] to-[#cfecfd]">
        <h2 className="text-2xl font-bold mb-4 text-center">Ride Request Form</h2>
        
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Pickup Location:</label>
          <input
            type="text"
            value={pickup}
            onChange={e => setPickup(e.target.value)}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Drop-off Location:</label>
          <input
            type="text"
            value={dropOff}
            onChange={e => setDropOff(e.target.value)}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <fieldset className="flex flex-col space-y-2">
          <legend className="text-lg font-medium">Days:</legend>
          <div className="grid grid-cols-2 gap-2">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
              <label key={day} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={day}
                  checked={days.includes(day)}
                  onChange={handleDaysChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </fieldset>
        
        <div className="flex items-center space-x-2">
          <label className="text-lg font-medium">Recurring:</label>
          <input
            type="checkbox"
            checked={recurring}
            onChange={e => setRecurring(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Arrival Time:</label>
          <input
            type="time"
            value={arrivalTime}
            onChange={e => setArrivalTime(e.target.value)}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RideForm;
