import React from "react";
import "./app.css"
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import Error from "../error-indicator/error-indicator"
import SwapiService from "../../services/services";
import {SwapiServiceProvider} from "../swapi-service-constex/swapi-service-contex"
import {PersonsList, PlanetsList, StarshipsList} from "../sw-components/list-components"
import {Record, PersonDetails, PlanetsDetails, StarshipsDetaild} from "../sw-components/details-components"
import {BrowserRouter as Router, Route} from "react-router-dom";


export default class App extends React.Component {
  swapiService = new SwapiService();

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


  render() {

    if (this.state.error) {
      return (
        <Error/>
      )
    }


    return (
      <Router>
        <SwapiServiceProvider value={this.swapiService}>
          <div className='app'>
            <Header/>
            <div className='app-main'>
              <RandomPlanet/>
              <div className='app-main-content'>

                <PersonsList changeId={this.changeId}/>
                <PersonDetails selectedItemId={this.state.id}>
                  <Record field='gender' label='Gender'/>
                  <Record field='eyeColor' label='EyeColor'/>
                </PersonDetails>


              </div>
            </div>
          </div>
        </SwapiServiceProvider>
      </Router>
    )
  }
}
