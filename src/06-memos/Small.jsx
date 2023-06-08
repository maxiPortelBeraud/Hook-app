import PropTypes from "prop-types";
import { memo } from "react";

export const Small = memo(({ value }) => {
  return <small>{value}</small>;
});

Small.displayName = "Small";

Small.propTypes = {
  value: PropTypes.number,
};
