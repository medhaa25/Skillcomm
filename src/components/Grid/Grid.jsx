import "./Grid.scss";
import WorkerCard from "../WorkerCard/WorkerCard";
import PropTypes from "prop-types";

function Grid({ sortedWorkers }) {
  return (
    <section className="grid-main">
      {sortedWorkers.map((worker) => (
        <WorkerCard
          key={worker.id}
          id={worker.id}
          name={worker.name}
          profession={worker.profession}
          rating={worker.rating}
          charges={worker.charges}
          image={worker.image}
        />
      ))}
    </section>
  );
}

Grid.propTypes = {
  sortedWorkers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      charges: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Grid;
