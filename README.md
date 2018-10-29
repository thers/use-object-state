# use-object-state

Brings your beloved behaviour of merging state object into old one when setting it to react 16.7.0 and beyond by providing `useObjectState` custom hook.

# Example

```jsx harmony
import { useObjectState } from 'use-object-state';

export function CountersComponent() {
  const [counters, setCounters] = useObjectState({
    foo: 0,
    bar: 0,
  });
  
  const incrementFooCounter = () => setCounters({
    foo: counters.foo + 1,
  });
  const incrementBarCounter = () => setCounters({
    foo: counters.bar + 1,
  });
  
  return (
    <>
      Foo: {counters.foo},
      <button onClick={incrementFooCounter}>
        Increment foo
      </button>
      
      <br/>
      
      Bar: {counters.bar},
      <button onClick={incrementBarCounter}>
        Increment bar
      </button>
    </>
  );
}

```
