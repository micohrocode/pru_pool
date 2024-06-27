import React, { useState } from 'react';
import Select from 'react-select';
import currentUser from "../backend/data/currentUser.json"
import {uploadNewRequest, viewFilteredRides} from "../backend/function_calls/ride_calls"
import { useNavigate } from 'react-router-dom';
const RideForm: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [dropOff, setDropOff] = useState<{ label: string; value: string } | null>(null);
  const [days, setDays] = useState<string[]>([]);
  const [recurring, setRecurring] = useState(false);
  const [arrivalTime, setArrivalTime] = useState('');

  const navigate = useNavigate();

  const dropOffLocations = [
    { label: 'Scottsdale, AZ - 16260 N 71st St, Scottsdale, AZ 85254', value: 'Scottsdale, AZ - 16260 N 71st St, Scottsdale, AZ 85254' },
    { label: 'San Francisco, CA - 101 California St, San Francisco, CA 94111', value: 'San Francisco, CA - 101 California St, San Francisco, CA 94111' },
    { label: 'Thousand Oaks, CA - 2801 Townsgate Rd. Suite 300, Thousand Oaks, CA 91361', value: 'Thousand Oaks, CA - 2801 Townsgate Rd. Suite 300, Thousand Oaks, CA 91361' },
    { label: 'Hartford, CT - 280 Trumbull St, Hartford, CT 06103', value: 'Hartford, CT - 280 Trumbull St, Hartford, CT 06103' },
    { label: 'Shelton, CT - 1 Corporate Drive, Shelton, CT 06484', value: 'Shelton, CT - 1 Corporate Drive, Shelton, CT 06484' },
    { label: 'Washington, DC - 801 Pennsylvania Ave NW, Washington, DC 20004', value: 'Washington, DC - 801 Pennsylvania Ave NW, Washington, DC 20004' },
    { label: 'Tampa, FL - 1150 Assembly Drive, Suite 6, Tampa, FL 33607', value: 'Tampa, FL - 1150 Assembly Drive, Suite 6, Tampa, FL 33607' },
    { label: 'Atlanta, GA - 3350 Peachtree Rd NE, Atlanta, GA 30326', value: 'Atlanta, GA - 3350 Peachtree Rd NE, Atlanta, GA 30326' },
    { label: 'Chicago, IL - Two Prudential Plaza, 180 N Stetson Ave, Chicago, IL 60601', value: 'Chicago, IL - Two Prudential Plaza, 180 N Stetson Ave, Chicago, IL 60601' },
    { label: 'Portland, ME - 2 Portland Square, Portland, ME 04101', value: 'Portland, ME - 2 Portland Square, Portland, ME 04101' },
    { label: 'Minneapolis, MN - 700 Nicollet Mall, Minneapolis, MN 55402', value: 'Minneapolis, MN - 700 Nicollet Mall, Minneapolis, MN 55402' },
    { label: 'Newark, NJ - Plaza Building: 751 Broad St, Newark, NJ 07102', value: 'Newark, NJ - Plaza Building: 751 Broad St, Newark, NJ 07102' },
    { label: 'Newark, NJ - Prudential Tower: 655 Broad St, Newark, NJ 07102', value: 'Newark, NJ - Prudential Tower: 655 Broad St, Newark, NJ 07102' },
    { label: 'Newark, NJ - Washington St. Building: 213 Washington St, Newark, NJ 07102', value: 'Newark, NJ - Washington St. Building: 213 Washington St, Newark, NJ 07102' },
    { label: 'New York, NY - 1114 Avenue of the Americas, New York, NY 10036', value: 'New York, NY - 1114 Avenue of the Americas, New York, NY 10036' },
    { label: 'New York, NY - 1540 Broadway, New York, NY 10036', value: 'New York, NY - 1540 Broadway, New York, NY 10036' },
    { label: 'New York, NY - 237 Park Ave, New York, NY 10017', value: 'New York, NY - 237 Park Ave, New York, NY 10017' },
    { label: 'Fort Washington, PA - 600 Office Center Dr, Fort Washington, PA 19034', value: 'Fort Washington, PA - 600 Office Center Dr, Fort Washington, PA 19034' },
    { label: 'Scranton, PA - 30 Ed Preate Drive, Moosic, PA 18507', value: 'Scranton, PA - 30 Ed Preate Drive, Moosic, PA 18507' },
    { label: 'Dallas, TX - 2100 Ross Ave, Dallas, TX 75201', value: 'Dallas, TX - 2100 Ross Ave, Dallas, TX 75201' },
    { label: 'Dallas, TX - 2200 Ross Ave, Dallas, TX 75201', value: 'Dallas, TX - 2200 Ross Ave, Dallas, TX 75201' },
    { label: 'Arlington, VA - 4350 Fairfax Dr, Arlington, VA 22203', value: 'Arlington, VA - 4350 Fairfax Dr, Arlington, VA 22203' },
    { label: 'Seattle, WA - 920 5th Ave, Seattle, WA 98104', value: 'Seattle, WA - 920 5th Ave, Seattle, WA 98104' }
];


  const handleDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setDays(prevDays =>
      checked ? [...prevDays, value] : prevDays.filter(day => day !== value)
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      user: currentUser['currentUser'],
      pickup,
      drop_off: dropOff?.value || '',
      days,
      recurring,
      arrival_time: arrivalTime,
    };
    uploadNewRequest(formData);
    navigate('/map');

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
          <Select
            value={dropOff}
            onChange={(option) => setDropOff(option)}
            options={dropOffLocations}
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder="Select drop-off location"
            isSearchable
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
