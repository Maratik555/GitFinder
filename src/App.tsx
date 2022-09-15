import { useState } from 'react';

import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';
import Footer  from 'components/Footer';
import { GithubUser, GithubError, LocalGithubUser } from 'types';
import { defaultUser } from 'mock';
import { extractLocalUser, isGithubUser } from 'utils';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  }

  return (
		<Container>
			<TheHeader />
			<Search hasError={!user} onSubmit={fetchUser} />
			{user && <UserCard {...user} />}
			<Footer />
		</Container>
	)
}

export default App;
