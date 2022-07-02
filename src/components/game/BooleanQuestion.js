import React from 'react';

const BooleanQuestion = (question) => (
  <div id="answer">
    <button
      type="button"
      id="true-answer"
    >
      Verdadeiro
    </button>
    <button
      type="button"
      id="false-answer"
    >
      Falso
    </button>
  </div>
);

export default BooleanQuestion;
