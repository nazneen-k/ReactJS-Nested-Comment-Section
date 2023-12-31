// import React from 'react'

// function Action({handleClick,type,className}) {
//   return (
//     <div>Action</div>
//   )
// }

// export default Action

import React from "react";

const Action = ({ handleClick, type, className }) => {
  return (
    <div className={className} onClick={handleClick}>
      {type}
    </div>
  );
};

export default Action;
