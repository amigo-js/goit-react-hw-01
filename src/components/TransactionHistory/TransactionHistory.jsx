
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.transactionHeader}>Type</th>
          <th className={css.transactionHeader}>Amount</th>
          <th className={css.transactionHeader}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transactionBody}>
        {transactions.map((item) => {
          return (
            <tr key={item.id} className={css.transactionRow}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
