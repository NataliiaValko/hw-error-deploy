import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Container from './Container/Container';

import userData from '../components/Profile/userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import './App.css';

function App() {
  return (
    <Container>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
