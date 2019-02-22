import React, { Component } from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

export default class Admin extends Component {
  render() {
    return (
        <div className="MainAdmin">
            <Link to="/Admin/Musics"> <button> <h4> Listar Musicas</h4> </button> </Link>
            <Link to="/Admin/AddMusic"> <button> <h4> Adicionar Musica </h4> </button> </Link>
        </div>
    );
  }
}
