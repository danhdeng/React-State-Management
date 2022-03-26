import React from 'react';
import { CounterUseContext } from '../../components/counter/useContext/counterUseContext';

export default function CounterContextUseState() {
  return (
    <div>
      <CounterUseContext />
      <CounterUseContext />
      <CounterUseContext />
      <CounterUseContext />
    </div>
  );
}
