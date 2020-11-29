import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import TransactionItem from './TransactionItem/TransactionItem';

function TransactionHistory({ items }) {
  return (
    <>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, ...props }) => (
            <TransactionItem key={id} {...props} />
          ))}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default TransactionHistory;
