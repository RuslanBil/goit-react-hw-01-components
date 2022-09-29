import PropTypes from 'prop-types';
import { Item, Label, Numbers } from './StatisticsItem.styled';

export const StatisticsItem = ({ item }) => {
  return (
    <Item>
      <Label>{item.label}</Label>
      <Numbers>{item.percentage}</Numbers>
    </Item>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
