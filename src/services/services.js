export default class SwapiService {
  _swapiBase = 'https://swapi.dev/api/';


  getInfo = async (url) => {
    const res = await fetch(`${this._swapiBase}${url}`);
    if (!res.ok) {
      throw new Error(`could not fetch${url} , recived ${res.status}`)
    }
    return await res.json();
  };
  getImagePerson = (item) => {
    return `https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`
  };
  getImageStarships = (item) => {
    return `https://starwars-visualguide.com/assets/img/starships/${item.id}.jpg`
  };
  getImagePlanets = (item) => {
    return `https://starwars-visualguide.com/assets/img/planets/${item.id}.jpg`
  };

  getAllPeople = async () => {
    const res = await this.getInfo('people/');
    return res.results.map((el) => this._transformPerson(el));
  };

  getPeople = async (id) => {
    const person = await this.getInfo(`people/${id}/`);
    return this._transformPerson(person)
  };

  getAllPlanets = async () => {
    const res = await this.getInfo('planets/');
    return res.results.map(this._transformPlanet)
  };

  getPlanet = async (id) => {
    const planet = await this.getInfo(`planets/${id}/`);
    return this._transformPlanet(planet)
  };

  getAllStarships = async () => {
    const res = await this.getInfo('starships/');
    return res.results.map(this._transformStarship)
  };

  getStarship = async (id) => {
    const starship = await this.getInfo(`starships/${id}/`);
    return this._transformStarship(starship)
  };

  _extractId(item) {
    const regExp = /\/([0-9]*)\/$/;
    return item.url.match(regExp)[1]
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    }
  };
  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  };
}

