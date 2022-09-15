import { ReactNode } from 'react';
import classes from './Container.module.scss';

interface ContainerProps {
  children: ReactNode,
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export {Container};
