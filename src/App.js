import React from 'react';
import Accordion from './components/Accordion'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library amongst engineers'
  },
  {
    title: 'How do you use React?',
    content: 'you use React by creating components'
  }
];

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
