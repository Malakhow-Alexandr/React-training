import PropTypes from 'prop-types';

export default function Painting({ image, name, time, calories, servings }) {
  return (
    <div>
      <img src={image} alt={name} width="480" />
      <h2>{name}</h2>
      <p>time: {time}</p>
      <p>calories: {calories}</p>
      <p>servings: {servings}</p>
    </div>
  );
}
Painting.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
};
