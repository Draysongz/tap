import React from 'react';

const Progress = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="bg-gray-200 h-4 w-full rounded-full">
      <div
        className="bg-blue-500 h-full rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default Progress;
