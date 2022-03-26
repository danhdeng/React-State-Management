import { useState } from 'react';
import { AddOneButton } from '../../components/counter/useState/addOneButton';
import { Container } from '../../components/counter/container';
import { Counter } from '../../components/counter/counter';

// type CounterPageProps = {
//   counter?: number;
//   children?: ReactNode;
// };

// const Container = ({ children }: CounterPageProps) => <div>{children}</div>;

// const AddOneButton: React.FC<FuncProps> = ({ setCounter }: FuncProps) => (
//   <div>
//     <button type="button" onClick={() => setCounter((v: number) => v + 1)}>
//       Add One
//     </button>
//   </div>
// );

// const Counter = ({ counter }: CounterPageProps) => (
//   <div>Counter: {counter}</div>
// );

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
