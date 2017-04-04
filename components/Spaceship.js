import React from 'react'

export default class SpaceShip extends React.Component {
  render(){
    return(
      <div className="space-ship">
      <p> {this.props.name}</p>
      <p>{this.props.speed}</p>
      <p>{this.props.hasRockets}</p>
      <p>{this.props.colors}</p>
      </div>
  );
}
   };


SpaceShip.defaultProps = {
     hasRockets: false,
     colors: ['black', 'red']
   };




// OR declare your component first, and then:
