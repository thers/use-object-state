// @flow
// $FlowIssue: thanks to that react type defs are provided as built-ins to flow distribution they're always late
import { useState } from 'react';

export function useObjectState<T: Object>(initialState: T): [T, ($Shape<T>) => void] {
  const [state, setStateRaw] = useState(initialState);

  const setState = (partialState) => setStateRaw({
    ...state,
    ...partialState,
  });

  return [state, setState];
}
