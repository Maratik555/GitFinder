import { UserInfo, UserInfoProps } from 'components/UserInfo';
import { UserStat, UserStatProps } from 'components/UserStat';
import { UserTitle, UserTitleProps } from 'components/UserTitle';
import classes from './UserCard.module.scss';

interface UserCardProps extends UserStatProps, UserTitleProps, UserInfoProps {
	avatar: string
	bio?: string
	html_url?: string
}

const UserCard = (props: UserCardProps) => (
  <div className={classes.userCard}>
    <img
      className={classes.avatar}
      src={props.avatar}
      alt={props.login}
    />
    <UserTitle
      html_url={props.html_url}
      login={props.login}
      name={props.name}
      created={props.created}
    />
    <p className={`${classes.bio}${props.bio ? '' : ` ${classes.empty}`}`}>{props.bio || 'This profile has no bio'}</p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);

export {UserCard};
