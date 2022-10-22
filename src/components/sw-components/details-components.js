
import SwapiService from "../../services/services";
import WithDataDetails from "../hoc-helper/hoc-helper-details"
import ItemDetails , {Record} from "../item-details/item-details"

const swapiService = new SwapiService();
const {
  getPeople,
  getImagePerson,
  getStarship,
  getImageStarships,
  getPlanet,
  getImagePlanets,
} = swapiService;

const PersonDetails = WithDataDetails(ItemDetails, getPeople, getImagePerson );
const PlanetsDetails = WithDataDetails(ItemDetails, getPlanet, getImagePlanets);
const StarshipsDetaild = WithDataDetails(ItemDetails, getStarship, getImageStarships);

export {Record, PersonDetails, PlanetsDetails, StarshipsDetaild}



