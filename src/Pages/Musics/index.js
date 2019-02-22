import React, { Component } from 'react';
import  './styles.css';
import api from '../../Services/api';
import { Link } from 'react-router-dom';

export default class Musics extends Component {
  
  constructor(props){
    super(props);
    this.estilo = React.createRef();
  }

  state = {
    musicas: [],
    Infomusica: {},
    page: 1,
  }

  componentDidMount() {
    this.loadMusics();
  }

  loadMusics = async (page = 1) => {
    const response = await api.get(`/Musicas?page=${page}`);

    const { docs, ...Infomusica} = response.data;

    this.setState({ musicas: docs, Infomusica, page});
  };

  nextPage = () => {
    const { page, Infomusica} = this.state;

    if(page == Infomusica.pages) return;

    const pageNumber = page + 1;

    this.loadMusics(pageNumber);
  }

  prevPage = () => {
    const { page } = this.state;

    if(page == 1) return;

    const pageNumber = page - 1;

    this.loadMusics(pageNumber);
  }

  PesquisarPorEstilo = async () => {

    if(this.estilo.current.value == "Todos"){
      this.loadMusics();
      return;
    }

    const response = await api.get(`/Musicas/Estilos/${this.estilo.current.value}`);

    this.setState({musicas: response.data});
  }

  render() {

    const { page, musicas, Infomusica}  = this.state;


    return (
      
      <div className="ListaMusicas">
        <Link to="/Admin"><button className="btnVoltar"> Voltar </button></Link>
        <br />
        <select ref={this.estilo} className="txtPesquisar" type="text">> 
          <option value="Todos">Todos</option>
          <option value="Rap">Rap</option>
          <option value="Reggae">Reggae</option>
          <option value="Rock">Rock</option>
          <option value="Indie">Indie</option>
        </select>
        <button onClick={this.PesquisarPorEstilo} className="btnPesquisar"> Pesquisar </button>

        {musicas.map(musica => (
          <article key={musica._id}>
            {/*<img src={musica.urlImage}></img> <br/>*/}
            <strong> {musica.titulo} </strong>
            <p>{musica.estilo}</p>
            <Link to={`/Admin/Music/${musica._id}`}>Acessar</Link>
          </article>
        ))}        
        <div className="actions">
          <button disabled={page == 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page == Infomusica.pages} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}
