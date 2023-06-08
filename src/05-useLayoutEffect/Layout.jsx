import { useCounter, useFetch } from "../hooks/";
import {
  ButtonsPrevNext,
  LoadingCharacter,
  CardCharacter,
} from "../03-examples/index";

export const Layout = () => {
  const { counter, incrementValue, decrementValue } = useCounter(1);
  const { data, isLoading /* , hasError */ } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  //Para arrays
  // const {name, species } = !!data && data[0];

  return (
    <>
      <h1 className="text-center">Rick and morty characters</h1>
      <hr />
      <ButtonsPrevNext
        isLoading={isLoading}
        handleCounter={{ counter, incrementValue, decrementValue }}
      />
      {isLoading ? <LoadingCharacter /> : <CardCharacter data={data} />}
    </>
  );
};
