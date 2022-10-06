import React from "react";
import SwapiService from "../../services/services";
import WithDataDetails from "../hoc-helper/hoc-helper-details"
import ItemDetails from "../item-details/item-details"

const Record = ({field, label, item}) => {
  return (
    <div>
      <hr/>
      <li> {label} :{item[field]}</li>
    </div>
  )
};

const swapiService = new SwapiService();
const {
  getPeople,
  getImagePerson,
  getStarship,
  getImageStarships,
  getPlanet,
  getImagePlanets,
} = swapiService;


const PersonDetails = WithDataDetails(ItemDetails, getPeople, getImagePerson);
const PlanetsDetails = WithDataDetails(ItemDetails, getPlanet, getImagePlanets);
const StarshipsDetaild = WithDataDetails(ItemDetails, getStarship, getImageStarships);

export {Record, PersonDetails, PlanetsDetails, StarshipsDetaild}



