import React, { Component } from 'react';
import './styles.css';
import api from '../../Services/api';
import { Link } from 'react-router-dom';

export default class Music extends Component {

    state = {
        musica: {},
    }

    componentDidMount() {
        this.loadMusic();
    }

    loadMusic = async () => {
        const { id } = this.props.match.params;

        const response = await api.get(`/Musica/${id}`);

        this.setState({musica: response.data});
    }

    DeletarMusica = async () => {

        const { musica } = this.state;

        const response = await api.delete(`DeletarMusica/${musica._id}`);

        this.props.history.push('/Admin/Musics');
    }

    render() {
        const { musica } = this.state;

        return (
            <div className="InfoMusica">
                <article>
                    <img alt={musica.urlImage}></img>
                    <h1>{musica.titulo}</h1>
                    <p>{musica.estilo}</p>
                    <div className="actions">
                        <button>Editar</button>
                        <button onClick={this.DeletarMusica}>Deletar</button>
                    </div>
                </article>

                <Link to = "/Admin/Musics"><button>Voltar</button></Link>
            </div>
        );
    }
}
