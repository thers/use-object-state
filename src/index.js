import { useState } from 'react';

export function useObjectState<T: Object>(initialState: T) {
  const [state, setStateRaw] = useState(initialState);

  const setState = (partialState) => setStateRaw({
    ...state,
    ...partialState,
  });

  return [state, setState];
}
