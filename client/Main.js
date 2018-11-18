import React, { Component } from 'react';
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
          <AllAlbums albums={this.state.albums} />
        </div>
        <Player />
      </div>
    );
  }
}

function Album(props) {
  return (
    <div className="album">
      <a>
        <img src={props.artworkUrl} />
        <p>{props.name}</p>
        <small>{props.artist}</small>
      </a>
    </div>
  );
}

function AllAlbums(props) {
  return (
    <div id="albums" className="row wrap">
      {props.albums.map(album => {
        return (
          <Album
            key={album.id}
            name={album.name}
            artist={album.artist.name}
            artworkUrl={album.artworkUrl}
          />
        );
      })}
    </div>
  );
}

function Player() {
  return (
    <div id="player-container">
      <div id="player-controls">
        <div className="row center">
          <i className="fa fa-step-backward" />
          <i className="fa fa-pause-circle" />
          <i className="fa fa-step-forward" />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div id="sidebar">
      <img src="juke.svg" id="logo" />
      <section>
        <h4>
          <a>ALBUMS</a>
        </h4>
      </section>
    </div>
  );
}
