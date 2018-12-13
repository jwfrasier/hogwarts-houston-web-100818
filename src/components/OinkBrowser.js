import React from "react";
import OinkCard from "./OinkCard";

class OinkBrowser extends React.Component {
  renderOinkCards = () => {
    return this.props.pigs.map(pig => {
      return <OinkCard pig={pig} key={pig.id} />;
    });
  };

  render() {
    return <div className="ui grid container">{this.renderOinkCards()}</div>;
  }
}

export default OinkBrowser;
