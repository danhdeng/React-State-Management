import React, { useState } from 'react';
import { CounterContext } from '../../../context/counterContext';
import { CounterPageProps } from '../../../types/counterPageProps';
import { Container } from '../container';
import { AddOneButton } from './addOneButton';
import { Counter } from './counter';
import { CountContextProvider } from './couterContextProvider';

export const CounterUseContext = () => {
  return (
    <CountContextProvider>
      <Container>
        <AddOneButton />
        <Counter></Counter>
      </Container>
    </CountContextProvider>
  );
};
