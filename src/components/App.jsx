/* eslint-disable react/jsx-no-undef */
import { Profile } from 'components/Profile/Profile';
import { Box } from 'components/Profile/Profile.styled';
import { FriendList } from 'components/FriendList/FriendList';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import data from 'components/Data/data.json';
import user from './Data/user.json';
import transactions from './Data/transactions.json';
import friends from './Data/friends.json';

export const App = () => {
  return (
    <Box>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Box>
  );
};
