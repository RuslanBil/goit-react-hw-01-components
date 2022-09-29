import PropTypes from 'prop-types';
import { TableRaw } from './TableRaw/TableRaw';
import { TableHead } from './TableHead/TableHead';
import { Tr } from './TableHead/TableHead.styled';
import { Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <TableHead title="type" />
          <TableHead title="amount" />
          <TableHead title="currency" />
        </Tr>
      </thead>

      <tbody>
        {items.map(item => {
          return <TableRaw key={item.id} item={item} />;
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
