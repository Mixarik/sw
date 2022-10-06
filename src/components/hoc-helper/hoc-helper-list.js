import React from "react";
import Spinner from "../spinner/spinner";

function WithDataList(View, getData) {
  return (class extends React.Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData()
        .then((res) => {
          this.setState({data: res})
        });
    }

    render() {
      if (!this.state.data) {
        return <Spinner/>
      }
      return (

          <View {...this.props}
                data={this.state.data}
          />
      )
    }
  })
}

export default WithDataList
