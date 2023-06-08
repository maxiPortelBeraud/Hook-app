import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, incrementValue, decrementValue, resetValue } = useCounter(0);
  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => incrementValue()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={resetValue}>
        reset
      </button>
      <button className="btn btn-primary" onClick={() => decrementValue()}>
        -1
      </button>
    </>
  );
};
