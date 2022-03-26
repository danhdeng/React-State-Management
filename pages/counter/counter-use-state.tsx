import { useState } from 'react';
import { AddOneButton } from '../../components/counter/useState/addOneButton';
import { Container } from '../../components/counter/useState/container';
import { Counter } from '../../components/counter/useState/counter';

export default function CounterUseState() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <Container>
        <AddOneButton setCounter={setCounter} />
        <Counter counter={counter}></Counter>
      </Container>
    </div>
  );
}
