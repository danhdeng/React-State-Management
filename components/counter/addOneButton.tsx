import { FuncProps } from '../../interfaces/funcProps';

export const AddOneButton: React.FC<FuncProps> = ({
  setCounter,
}: FuncProps) => (
  <div>
    <button type="button" onClick={() => setCounter((v: number) => v + 1)}>
      Add One
    </button>
  </div>
);
