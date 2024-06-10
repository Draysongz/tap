import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div
      className={`h-5 w-10/12 mx-auto bg-gray-100 rounded-full overflow-hidden relative`}
    >
      <div
        style={{ width: `${progress}%` }}
        className={`h-full bg-yellow-400 rounded-full`}
      ><p className='text-sm text-center font-semibold'>100%</p></div>
    </div>
  );
};

export default ProgressBar;