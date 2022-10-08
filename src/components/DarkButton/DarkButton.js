import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DarkButton = ({dark,handleDark}) => {


    return (
      <div>
    
          <div onClick={handleDark} >
            <button className={`${dark ? 'text-white' : 'text-black'} `} >
                {dark ? <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>:<FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>}
            </button>
        </div>
      </div>
    );
};

export default DarkButton