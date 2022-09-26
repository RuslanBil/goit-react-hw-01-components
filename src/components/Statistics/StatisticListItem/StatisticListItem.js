import PropTYpes from 'prop-types';
import s from './StatisticList.module.css';

function getRandomColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${r()}, ${r()}, ${r()})`;
}

function StatisticListItem({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: getRandomColor() }}>
      <span className="label">{label}</span>
      <san className="percentage">{percentage}%</san>
    </li>
  );
}
StatisticListItem.propTypes = {
  label: PropTYpes.string.isRequired,
  percentage: PropTYpes.number.isRequired,
};

export default StatisticListItem;
