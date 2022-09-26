/* eslint-disable react/jsx-no-undef */
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import user from './Data/user.json';
import Section from 'components/Statistics/Section/Section';
import Statistics from 'components/Statistics/Statistics';

import StatisticalData from 'Data/data.json';

export const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Section>
        <Statistics title="Upload stats" stats={StatisticalData} />.
      </Section>
    </Container>
  );
};
