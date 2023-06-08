import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useLayoutEffect } from "react";

export const CardCharacter = ({ data }) => {
  const { name, image, species } = data;

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
    return () => {};
  }, []);

  return (
    <>
      <blockquote className="blockquote" style={{ display: "flex" }}>
        <img src={image} alt={`avatar-${name}`} />
        <p ref={pRef} className="mb-2.5">
          Species : {species}
        </p>
        <footer className="blockquote-footer">{name}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

CardCharacter.propTypes = {
  data: PropTypes.object,
};
