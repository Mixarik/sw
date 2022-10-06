import {PersonsList, PlanetsList, StarshipsList} from "../sw-components/list-components"
import {Record, PersonDetails, PlanetsDetails, StarshipsDetaild} from "../sw-components/details-components"
import React from "react";

const PersonPage = () => {
  return (
    <>
      <PersonsList changeId={this.changeId}/>
      <PersonDetails selectedItemId={this.state.id}>
        <Record field='gender' label='Gender'/>
        <Record field='eyeColor' label='EyeColor'/>
      </PersonDetails>
    </>
  )
};
export {PersonPage}