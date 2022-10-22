import React from "react";


function WithDataDetails(View, getData, getImageUrl) {
  return (class extends React.Component {

    state = {
      itemInfo: null,
      image: null,
    };

    componentDidUpdate(prevProps) {
      const {selectedItemId} = this.props;

      if (selectedItemId !== prevProps.selectedItemId) {
        getData(selectedItemId)
          .then((res) => {
            this.setState({itemInfo: res, image: getImageUrl(res)})
          })
      }
    }

    render() {
      if (!this.state.itemInfo) {
        return;
      }
      return (
        <View
          getImageId={this.state.image}
          getInfoItem={this.state.itemInfo}
          recordInfo={this.props.children}
        />
      )
    }
  })
}
export default WithDataDetails

