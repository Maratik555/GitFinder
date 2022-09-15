import { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import classes from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark]);

  return (
    <div className={classes.switcher} onClick={() => setDark(!isDark)}>
      <span>
        {themeText}
      </span>
      <ThemeIcon className={classes.icon} />
    </div>
  )
}

export {ThemeSwitcher};