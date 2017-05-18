import React, { Component } from 'react';

class Menu extends Component {
  
  displayValue(){
    return this.props.display;
  }
  
  render() {
    return (
      <div className="Menu">
        esto es el menu con display {this.displayValue()}
        
      </div>
    );
  }
}

export default Menu;
