import React from "react";
import "./app.css"
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import Error from "../error-indicator/error-indicator"
import {PersonsList, PlanetsList, StarshipsList} from "../sw-components/list-components"
import {Record, PersonDetails, PlanetsDetails, StarshipsDetaild} from "../sw-components/details-components"
import {Route, Routes} from "react-router-dom";


export default class App extends React.Component {

  state = {
    id: null,
    error: false,
  };

  componentDidCatch() {
    this.setState({error: true})
  }

  changeId = (newId) => {
    this.setState({id: newId})
  };

  PersonPage = () => {
    return (
      <>
        <PersonsList changeId={this.changeId}/>

        <PersonDetails selectedItemId={this.state.id}>
          <Record field='name' label='name'/>
          <Record field='gender' label='gender'/>
        </PersonDetails>
      </>
    )
  };
  PlanetPage = () => {
    return (
      <>
        <PlanetsList changeId={this.changeId}/>

        <PlanetsDetails selectedItemId={this.state.id}>
          <Record field='population' label='population'/>
          <Record field='rotationPeriod' label='rotationPeriod'/>
          <Record field='diameter' label='diameter'/>
        </PlanetsDetails>
      </>
    )
  };
  StarshipPage = () => {
    return (
      <>
        <StarshipsList changeId={this.changeId}/>

        <StarshipsDetaild selectedItemId={this.state.id}>
          <Record field='model' label='model'/>
          <Record field='length' label='length'/>
          <Record field='costInCredits' label='cost'/>>
        </StarshipsDetaild>
      </>
    )
  };


  render() {

    if (this.state.error) {
      return (
        <Error/>
      )
    }

    return (
      <div className='app'>
        <Header/>
        <div className='app-main'>
          <RandomPlanet/>
          <div className='app-main-content'>
            <Routes>

              <Route path="/" element={<h3>Hello to StarDB</h3>}/>

              <Route path="/persons" element={this.PersonPage()}/>

              <Route path="/planets" element={this.PlanetPage()}/>

              <Route path="/starships" element={this.StarshipPage()}/>

            </Routes>
          </div>
        </div>
      </div>
    )
  }
}
