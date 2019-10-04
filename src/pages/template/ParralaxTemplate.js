import React from 'react';

const ParralaxTemplate = ({header,pages}) => {
  return (
    <>
    {header}
    <div className="contents">
      {pages}
    </div>
    </>
  );
};

export default ParralaxTemplate;