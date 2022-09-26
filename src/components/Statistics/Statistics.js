import PropTypes from 'prop-types';

import s from './StatisticListItem/StatisticList.module.css';
import StatisticListItem from './StatisticListItem/StatisticListItem';

function Statistics({ title, stats }) {
  return (
    <>
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s.statistics}>
        {stats.map(stats => (
          <StatisticListItem
            key={stats.id}
            label={stats.label}
            percentage={stats.percentage}
          />
        ))}
      </ul>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
