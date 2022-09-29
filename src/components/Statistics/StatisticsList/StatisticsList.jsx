import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';
import { List } from './StatisticsList.styled';

export const StatisticsList = ({ stats }) => {
  return (
    <List>
      {stats.map(item => {
        return <StatisticsItem key={item.id} item={item} />;
      })}
    </List>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
