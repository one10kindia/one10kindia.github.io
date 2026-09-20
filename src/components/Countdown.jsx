import { useEffect, useState } from 'react';
import './Countdown.css';

const RACE_DATE = new Date('2027-03-07T05:30:00+05:30').getTime();

function getTimeLeft() {
  const diff = Math.max(0, RACE_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ compact = false }) {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Min', value: time.mins },
    { label: 'Sec', value: time.secs },
  ];

  return (
    <div className={`countdown ${compact ? 'compact' : ''}`}>
      {units.map((u) => (
        <div className="countdown-unit" key={u.label}>
          <span className="countdown-value">{String(u.value).padStart(2, '0')}</span>
          <span className="countdown-label">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
