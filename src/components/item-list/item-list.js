import React from "react";
import './item-list.css'

export default class ItemList extends React.Component {
  render() {

    const {data, changeId}=this.props;

    return (
      <ul className="list-group">
        {data.map((el) => {
          const label = this.props.children(el);
          return (
            <li onClick={() => changeId(el.id)} key={el.id} className="list-group-item">
              {label}
            </li>
          );
        })}
      </ul>
    )
  };
}


