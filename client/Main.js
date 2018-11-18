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
    };
  }

  async componentDidMount() {
    const albumResponse = await axios.get('/api/albums');
    this.setState({
      albums: albumResponse.data,
    });
  }

  render() {
    return (
      <div id="main">
        <Sidebar />
        <div className="row container">
          {/* The music starts here! */}
          {/* <AlbumList albums={this.state.albums} /> */}
          <SingleAlbum />
        </div>
        <Player />
      </div>
    );
  }
}
