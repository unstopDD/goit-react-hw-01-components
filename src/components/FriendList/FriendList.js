import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={s.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};
