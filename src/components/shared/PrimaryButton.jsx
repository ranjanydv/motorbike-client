import PropTypes from 'prop-types';

const PrimaryButton = (
  {
    onClick,
    disabled,
    text,
    type,
    className,
    leftIcon,
    rightIcon,
    fullWidth,
    small,
    ...otherProps
  }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${small ? 'rounded-sm' :'rounded-md'} 
        border
        border-primary-500
        ${small ? 'px-6 py-1' : 'px-8 py-3'}
        text-sm
        font-semibold
        bg-primary-500
        text-white
        shadow-sm
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-black
        hover:bg-transparent
        hover:text-primary-500
        transition
        duration-300 ease-in-out 
        disabled:cursor-not-allowed
        disabled:hover:bg-primary-500     
        disabled:hover:text-white   
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

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  small: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

PrimaryButton.defaultProps = {
  onClick: () => {
  },
  disabled: false,
  type: 'button',
  className: '',
};

export default PrimaryButton;