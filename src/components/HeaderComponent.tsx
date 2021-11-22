import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
            <div><a href="https://youtube.com" className='navbar-brand'>Product Controller App</a></div>
          </nav> 
        </header>
      </div>
    );
  }
}

export default HeaderComponent;