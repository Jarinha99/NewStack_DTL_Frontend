import React, { Component } from 'react';
import './styles.css';
import api from '../../Services/api';
import { Link } from 'react-router-dom';

export default class AddMusic extends Component {

  state ={
    data:{
      titulo: "",
      estilo: "",
      urlImage: "",
      urlMusic: ""
    }
  }

  constructor(props){
    super(props);
    this.titulo = React.createRef();
    this.estilo = React.createRef();
  }

  preencheData = () => {
    this.setState({data: { titulo: this.titulo.current.value, 
      estilo: this.estilo.current.value, 
      urlImage: "teste.png", 
      urlMusic: "teste.mpc" } });
  }

  AdicionaMusica = async () => {

    await this.preencheData();

    await api.post("/CriarMusica", this.state.data);

    this.props.history.push('/Admin/Musics');
  }

  render() {
    return (
        <div className="AddMusic">
            <article>
                <h1> Adicionar Música </h1>
                <p>Titulo:<input ref={this.titulo} type="text" ></input></p>
                <p>Estilo: <select ref={this.estilo} type="text">> 
                  <option value="Rap">Rap</option>
                  <option value="Reggae">Reggae</option>
                  <option value="Rock">Rock</option>
                  <option value="Indie">Indie</option>
                </select></p>
                <p>Upload Imagem</p>
                <p>Upload Música</p>
                <h2><button onClick={this.AdicionaMusica}> Adicionar </button></h2>
            </article>

            <Link to = "/Admin"><button>Voltar</button></Link>
        </div>        
    );
  }
}
