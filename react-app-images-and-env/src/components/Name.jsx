import React from 'react';

import getRandomName from '../utils/getRandomName';

const Name = () => {
  return (
    <div>
      {getRandomName()}
    </div>
  );
}
 
export default Name;