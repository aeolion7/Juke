import React, { Component } from 'react';
import SingleAlbum from './singleAlbum';
import AlbumList from './albumList';
import Player from './player';
import Sidebar from './sidebar';
import axios from 'axios';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {},
    };
    this.pickAlbum = this.pickAlbum.bind(this);
  }

  async componentDidMount() {
    const albumResponse = await axios.get('/api/albums');
    this.setState({
      albums: albumResponse.data,
    });
  }

  pickAlbum(albumId) {
    console.log(albumId);
    return async () => {
      const { data } = await axios.get(`/api/albums/${albumId}`);
      this.setState({
        selectedAlbum: data,
      });
    };
  }

  render() {
    return (
      <div id="main" className="row container">
        <Sidebar />
        <div className="container">
          {this.state.selectedAlbum.id ? (
            <SingleAlbum
              id={this.state.selectedAlbum.id}
              name={this.state.selectedAlbum.name}
              artworkUrl={this.state.selectedAlbum.artworkUrl}
              artist={this.state.selectedAlbum.artist.name}
              genre={this.state.selectedAlbum.genre}
              songs={this.state.selectedAlbum.songs}
            />
          ) : (
            <AlbumList albums={this.state.albums} pickAlbum={this.pickAlbum} />
          )}
        </div>
        <Player />
      </div>
    );
  }
}
