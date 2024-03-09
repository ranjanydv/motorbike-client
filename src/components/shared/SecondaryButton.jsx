import PropTypes from 'prop-types';

const SecondaryButton = (
  {
    onClick,
    disabled,
    text,
    type,
    className,
    leftIcon,
    rightIcon,
    fullWidth,
    ...otherProps
  }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-md
        border
        border-secondary-700
        px-8 py-3
        text-sm
        font-semibold
        text-black
        shadow-sm
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-black
        hover:bg-primary-500
        hover:text-white
        transition
        duration-300 ease-in-out
        disabled:cursor-not-allowed
        disabled:hover:bg-transparent     
        disabled:hover:text-primary-500  
        flex
        items-center
        ${fullWidth && 'w-full flex-row justify-center'}
        ${className}
        `}
      {...otherProps}
    >
      {leftIcon && leftIcon}
      {text}
      {rightIcon && rightIcon}
    </button>
  );
};

SecondaryButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

SecondaryButton.defaultProps = {
  onClick: () => {
  },
  disabled: false,
  type: 'button',
  className: '',
};

export default SecondaryButton;