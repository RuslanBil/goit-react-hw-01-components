import PropTypes from 'prop-types';
import { Th } from './TableHead.styled';

export const TableHead = ({ title }) => {
  return <Th>{title.toUpperCase()}</Th>;
};

TableHead.propTypes = {
  title: PropTypes.string.isRequired,
};
