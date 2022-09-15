import classes from './UserStat.module.scss';

export interface UserStatProps {
  repos: number,
  followers: number,
  following: number,
}

const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={classes.userStat}>
    <div className={classes.info}>
      <div className={classes.infoTitle}>Repos</div>
      <div className={classes.infoNumber}>{repos}</div>
    </div>
    <div className={classes.info}>
      <div className={classes.infoTitle}>Following</div>
      <div className={classes.infoNumber}>{following}</div>
    </div>
    <div className={classes.info}>
      <div className={classes.infoTitle}>Followers</div>
      <div className={classes.infoNumber}>{followers}</div>
    </div>
  </div>
);

export {UserStat};
