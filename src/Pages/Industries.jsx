import React, { Suspense } from 'react';
import IndustryCategory from '../Component/IndustryCategory';

const Industries = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
        <IndustryCategory></IndustryCategory>
      </Suspense>

    </div>
  );
};

export default Industries;