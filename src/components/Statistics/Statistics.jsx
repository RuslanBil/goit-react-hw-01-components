import PropTypes from 'prop-types';
import { Box } from './Statistics.styled';
import { Heading } from './Heading/Heading';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      boxShadow="10px 10px 5px 0px rgba(0,0,0,0.55)"
      width="300px"
      textAlign="center"
      mb={3}
    >
      {title && <Heading title="Upload stats" />}
      <StatisticsList stats={stats} />
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
