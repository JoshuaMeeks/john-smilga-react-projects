import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = () => {
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn'>btn</button>
      </header>
    </article>
  );
};

export default Question;
