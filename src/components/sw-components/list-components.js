import SwapiService from "../../services/services";
import WithDataList from "../hoc-helper/hoc-helper-list";
import ItemList from "../item-list/item-list";
import React from "react";

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = swapiService;

const withPropsList = (View, fn) => {
  return (props) => {
    return (
      <View {...props}>
        {fn}
      </View>
    )
  }
};
const renderName = ({name}) => <span>{name}</span>;
const renderNameModel = ({name, model}) => <span>{`${name} (${model})`}</span>;

const PersonsList = WithDataList(withPropsList(ItemList, renderName), getAllPeople);
const PlanetsList = WithDataList(withPropsList(ItemList, renderName), getAllPlanets);
const StarshipsList = WithDataList(withPropsList(ItemList, renderNameModel), getAllStarships);

export {
  PersonsList,
  PlanetsList,
  StarshipsList,
}