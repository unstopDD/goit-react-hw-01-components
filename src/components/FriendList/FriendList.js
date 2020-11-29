
import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';
import styles from './FriendList.module.css';

export default function FriendList ({ friends }) {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map(({ id, ...props }) => (
          <FriendItem key={id} {...props} />
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};


