import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handler = event => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handler, reset];
}

export default useInput;
