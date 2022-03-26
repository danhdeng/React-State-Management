import { IFuncProps } from '../../../interfaces/IFuncProps';

export const AddOneButton: React.FC<IFuncProps> = ({
  setCounter,
}: IFuncProps) => (
  <div>
    <button type="button" onClick={() => setCounter((v: number) => v + 1)}>
      Add One
    </button>
  </div>
);
