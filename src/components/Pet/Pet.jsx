import React, { Component } from "react";
import PropTypes from "prop-types";
import findPetById from "../../helpers/findPetById";
import petsArray from "../../assets/pets.json";
import styles from "./Pet.module.css";

export default class Pet extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = { pet: {} };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState({ pet: findPetById(petsArray, id) });
  }

  handleReturnToPetsList = () => {
    const { history } = this.props;
    history.push("/pets");
  };

  render() {
    const { pet } = this.state;
    return (
      <div className="PetWrapper">
        <button
          type="button"
          className={styles.button}
          onClick={this.handleReturnToPetsList}
        >
          Return
        </button>
        <h2 className={styles.title}>All about {pet.name}</h2>
        <div className={styles.wrapper}>
          <img src={pet.image} alt={pet.breed} className={styles.image} />
          <div>
            <p>
              Age: <span>{pet.age}</span>
            </p>
            <p>
              Gender: <span>{pet.gender}</span>
            </p>
            <p>
              Color: <span>{pet.color}</span>
            </p>
            <p>
              Breed: <span>{pet.breed}</span>
            </p>
          </div>
        </div>
        <p className={styles.description}>{pet.description}</p>
      </div>
    );
  }
}
