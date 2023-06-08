import React, { memo } from "react";
import PropTypes from "prop-types";

export const ShowIncrement = React.memo(({ increment }) => {
  displayName: "ShowIncrement";
  return (
    <button
      onClick={() => {
        increment();
      }}
      className="btn btn-primary"
    >
      Incrementar
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.func,
};
