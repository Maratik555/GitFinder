import classes from './Button.module.scss';

interface ButtonProps {
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  )
}

export {Button};
