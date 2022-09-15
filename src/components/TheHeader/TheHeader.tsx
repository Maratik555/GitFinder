import { ThemeSwitcher } from 'components/ThemeSwitcher';
import classes from './TheHeader.module.scss';

const TheHeader = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        DEV
      </div>
      <ThemeSwitcher />
    </div>
  )
}

export {TheHeader};