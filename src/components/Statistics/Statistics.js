import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Statistics({ title = '', stats }) {
  return (
    <>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.statList}>
          {stats.map(data => (
            <li
              className={s.item}
              key={data.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={s.label}>{data.label}</span>
              <span className={s.percentage}>{data.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
};
