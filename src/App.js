import Profile from './components/Profile/';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import Section from './components/Section';

import user from './user.json'
import statsData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';


export default function App() {
    return (
        <>
         <Section title="Profile">
        <Profile {...user}/>
            </Section>
            
            <Section title="Statistics">
           <Statistics stats={statsData} title="Upload stats" />
            </Section>

            <Section title="Friend list">
        <FriendList friends={friends} />
      </Section>

      <Section title="Transaction history">
        <TransactionHistory items={transactions} />
      </Section>
    
            </>
    )
   
}