class SwapiService {
    _swapiBase = 'https://swapi.dev/api/';

    async getInfo(url) {
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
        this.getInfo(`people/${id}/`);
    };

    async getAllPlanets (){
        const res = await this.getInfo('planets/');
        return res.results
    };

    getPlanet (id){
        this.getInfo(`planets/${id}/`);
    };

    async getAllStarships (){
        const res = await this.getInfo('starships/');
        return res.results
    };

    getStarship (id){
        this.getInfo(`starships/${id}/`);
    };
}

const swapi = new SwapiService();

swapi.getAllPiople().then((body) => body.forEach((item =>{
    console.log(item.name)
})));
swapi.getPiople(2).then((body) => console.log(body));