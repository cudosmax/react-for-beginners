import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coeverImg, title, summary, genres }) {
  return (
    <div key={id}>
      <img src={coeverImg} alt={title} />
      <h2>
        <Link to='/movie'>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coeverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
