import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();
  const showDetails = () => {
    router.push('/'+props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3 className={classes.title}>{props.title}</h3>
          <address className={classes.address}>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetails}>Read</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
