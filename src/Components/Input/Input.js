import React from 'react';

const Input = ({name, value, type, onChangeHandle}) => {

   return (
      <div>
         <label htmlFor={name}>{name}</label>
         <input type={type} id={name} name={name} value={value} onChange={onChangeHandle} />
      </div>
   );
};

export default Input;
