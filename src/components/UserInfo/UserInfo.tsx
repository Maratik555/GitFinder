import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';
import { InfoItem, InfoItemProps } from 'components/InfoItem';

import classes from './UserInfo.module.scss';

export interface UserInfoProps {
  company?: string,
  location?: string,
  twitter?: string,
  blog?: string,
}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      text: location,
      icon: <LocationIcon />,
    },
    {
      text: blog,
      icon: <BlogIcon />,
      isLink: true,
    },
    {
      text: twitter,
      icon: <TwitterIcon />,
    },
    {
      text: company,
      icon: <CompanyIcon />,
    },
  ];
  
  return (
    <div className={classes.userInfo}>
      {items.map((item, idx) => (
        <InfoItem {...item} key={idx} />
      ))}
    </div>
  );
};
