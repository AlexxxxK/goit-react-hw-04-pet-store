import React, { Component } from "react";
import PetsList from "../PetsList/PetsList";
import petsArray from "../../assets/pets.json";
import styles from "./Pets.module.css";

export default class Pets extends Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    this.setState({ pets: petsArray });
  }

  render() {
    const { pets } = this.state;
    return (
      <div className="PetsWrapper">
        <h2 className={styles.title}>Available pets:</h2>
        <PetsList pets={pets} />
      </div>
    );
  }
}
