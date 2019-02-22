import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default class FirstPage extends Component {
  render() {
    return (
        <div className="main">
            <Link to="/Admin"> <button className="btnAdmin">Admin</button> </Link> 
            <h1> Hello Word </h1> 
        </div>
    );
  }
}
