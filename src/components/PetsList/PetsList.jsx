import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PetsList.module.css";

const PetsList = ({ pets = [] }) => (
  <ul className={styles.petsList}>
    {pets.map(pet => (
      <li key={pet.id} className={styles.petsListItem}>
        <Link to={`/pets/${pet.id}`} className={styles.petLink}>
          <img src={pet.image} alt={pet.breed} />
          <p className={styles.petName}>{pet.name}</p>
        </Link>
      </li>
    ))}
  </ul>
);

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PetsList;
