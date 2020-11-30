import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import Section from './Section';

import user from '../data/user.json';
import statsData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export default function App() {
  const { name, tag, location, avatar, stats } = user;
  return (
    <>
      <Section title="Profile">
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Section>

      <Section title="Statistics">
        <Statistics stats={statsData} title="Upload stats" />
        <Statistics stats={statsData} />
      </Section>

      <Section title="Friend list">
        <FriendList friends={friends} />
      </Section>

      <Section title="Transaction history">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}
