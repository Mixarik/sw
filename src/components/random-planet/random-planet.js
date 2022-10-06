import React from "react";
import './random-planet.css'
import SwapiService from '../../services/services'
import Spinner from '../spinner/spinner'
import Error from "../error-indicator/error-indicator";

export default class RandomPlanet extends React.Component {
  SwapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };


  componentDidMount() {
    this.updatePlanet();
    this.interval =setInterval(()=>this.updatePlanet(),5000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  planetData = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.SwapiService
      .getPlanet(id)
      .then((res) => this.planetData(res))
      .catch(() => this.onError())
  };


  render() {
    const {planet, loading, error} = this.state;

    const errorIndicator =  error ? <Error /> :null;
    const spinner = loading ? <Spinner/> : null;
    const randomPlanet = !loading && !error ? <PlanetView planet={planet}/> : null;


    return (
      <div className='randomPlanet'>
        {errorIndicator}
        {spinner}
        {randomPlanet}
      </div>
    )
  }
};

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter,} = planet;
  return (
    <div className='randomPlanet-block'>
      <div className='randomPlanet-img'>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="("/>
      </div>
      <div className='randomPlanet-info'>
        <h2>{name}</h2>
        <div className='randomPlanet-listInfo'>
          <ul>
            <hr/>
            <li>Population :{population}</li>
            <hr/>
            <li>Rotation Period :{rotationPeriod}</li>
            <hr/>
            <li>Diameter :{diameter}</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

