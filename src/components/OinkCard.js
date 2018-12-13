import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class OinkCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }
  render() {
    return (
      <div
        className="ui four wide column"
        onClick={() => this.setState({ showDetails: !this.state.showDetails })}
      >
        <Card style={{ textAlign: "center" }}>
          <Image src={this.props.pig.image} />
          <Card.Content>
            <Card.Header>{this.props.pig.name}</Card.Header>
            {this.state.showDetails && (
              <div>
                <Card.Meta>
                  <span className="date">
                    {
                      this.props.pig[
                        "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                      ]
                    }{" "}
                    lbs
                  </span>
                </Card.Meta>
                <Card.Meta>
                  <span className="date">
                    {this.props.pig.greased ? (
                      <span> This here pig dun been greased! </span>
                    ) : (
                      <span> This oinkster needs a greasing! </span>
                    )}
                  </span>
                </Card.Meta>
                <Card.Description>{this.props.pig.specialty}</Card.Description>
              </div>
            )}
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="trophy" />
              Pig honor: {this.props.pig["highest medal achieved"]}
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default OinkCard;
