import React from 'react';

const Subtitle = ({ text}) => {
  return (
    <div className='sm:text-md text-base text-[#D00200] font-semibold'>
      {text}
    </div>
  );
};

export default Subtitle;