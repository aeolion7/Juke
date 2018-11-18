import React from 'react';
import Album from './album';
import Song from './song';

function SingleAlbum(props) {
  return (
    <div className="container">
      <div id="single-album" className="column">
        <Album
          name={props.name}
          artist={props.artist}
          artworkUrl={props.artworkUrl}
        />
        <table id="songs">
          <tbody>
            <tr className="gray">
              <td />
              <td>#</td>
              <td>Name</td>
              <td>Artist</td>
              <td>Genre</td>
            </tr>
            {props.songs.map(song => {
              return (
                <Song
                  key={song.id}
                  id={song.id}
                  name={song.name}
                  artist={props.artist}
                  genre={song.genre}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SingleAlbum;
