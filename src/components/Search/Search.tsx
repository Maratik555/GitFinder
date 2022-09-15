import { ReactComponent as SearchIcon} from 'assets/icon-search.svg';
import { Button } from 'components/Button';

import classes from './Search.module.scss';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

type FormFields = {
  username: HTMLInputElement,
}

const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={classes.search}>
        <label htmlFor="search" className={classes.label}>
          <SearchIcon />
        </label>
        <input
          id="search"
          className={classes.textField}
          type="text"
          name="username"
          placeholder="Search GitHub username…"
        />
        {hasError && (
          <div className={classes.error}>
            No results
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
}

export {Search};
