import classes from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode,
  text?: string,
  isLink?: boolean,
}

export const InfoItem = ({icon, text, isLink}: InfoItemProps) => {
  const currentText = text || 'Not Available';
  let currentHref;

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`
  }
  
  return (
    <div className={`${classes.infoItem}${text ? '' : ` ${classes.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >{currentText}</a>
        ) : currentText}
      </div>
    </div>
  );
};
