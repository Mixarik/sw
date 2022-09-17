class SwapiService {
    _swapiBase = 'https://swapi.dev/api/';

    async GetInfo(url) {
        const res = await fetch(`${this._swapiBase}${url}`);
        if (!res.ok) {
            throw new Error(`could not fetch${url} , recived ${res.status}`)
        }
        return await res.json();

    };

   async getAllPiople (){
     const res = await this.GetInfo('people/');
    return res.results
   };

    getPiople (id){
        this.GetInfo(`people/${id}/`);
    };

    async getAllPlanets (){
        const res = await this.GetInfo('planets/');
        return res.results
    };

    getPlanet (id){
        this.GetInfo(`planets/${id}/`);
    };

    async getAllStarships (){
        const res = await this.GetInfo('starships/');
        return res.results
    };

    getStarship (id){
        this.GetInfo(`starships/${id}/`);
    };
}

const swapi = new SwapiService();

swapi.getAllPiople().then((body) => body.forEach((item =>{
    console.log(item.name)
})));
swapi.getPiople(2).then((body) => console.log(body));