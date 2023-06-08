export const ButtonsPrevNext = (data) => {
  const { isLoading, handleCounter } = data;
  const { counter, decrementValue, incrementValue } = handleCounter;

  return (
    <div className="text-center mb-4">
      <button
        disabled={isLoading || counter == 1}
        onClick={() => decrementValue()}
        className="btn btn-primary"
      >
        Previous character
      </button>

      <button
        disabled={isLoading}
        onClick={() => incrementValue()}
        className="btn btn-primary"
      >
        Next character
      </button>
    </div>
  );
};
