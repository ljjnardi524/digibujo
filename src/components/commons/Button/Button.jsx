import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  const {
    buttonClass, disabled, href, onClick, text, textClass, type,
  } = props;

  const renderButton = () => (
    <button
      className={`${disabled ? 'disabled-button' : 'default-button'} ${buttonClass}`}
      data-testid="button"
      disabled={disabled}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      <span className={textClass}>{text}</span>
    </button>
  );

  if (!href) return renderButton();
  return <Link to={href}>{renderButton()}</Link>;
};

Button.defaultProps = {
  buttonClass: '',
  disabled: false,
  href: null,
  onClick: () => {},
  textClass: '',
  type: 'button',
};

Button.propTypes = {
  buttonClass: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  textClass: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
