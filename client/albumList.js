import React from 'react';
import Album from './album';

function AlbumList(props) {
  return (
    <div id="albums" className="row wrap">
      {props.albums.map(album => {
        return (
          <Album
            key={album.id}
            id={album.id}
            name={album.name}
            artist={album.artist.name}
            artworkUrl={album.artworkUrl}
            pickAlbum={props.pickAlbum}
          />
        );
      })}
    </div>
  );
}

export default AlbumList;
