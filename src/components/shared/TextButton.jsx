import PropTypes from 'prop-types';

const TextButton = (
  {
    onClick,
    disabled,
    text,
    type,
    className,
    ...otherProps
  }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        text-sm
        font-semibold
        text-primary-500
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-black
        hover:text-primary-900
        transition
        duration-300 ease-in-out 
        disabled:cursor-not-allowed
        ${className}
        `}
      {...otherProps}
    >
      {text}
    </button>
  );
};

TextButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

TextButton.defaultProps = {
  onClick: () => {
  },
  disabled: false,
  type: 'button',
  className: '',
};

export default TextButton;