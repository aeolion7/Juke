import React, { Component } from 'react';
import { AlbumList, Sidebar, Player } from './';
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
          <AlbumList albums={this.state.albums} />
        </div>
        <Player />
      </div>
    );
  }
}
