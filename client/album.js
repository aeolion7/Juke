import React from 'react';

function Album(props) {
  return (
    <div className="album">
      <a onClick={props.pickAlbum && props.pickAlbum(props.id)}>
        <img src={props.artworkUrl} />
        <p>{props.name}</p>
        <small>{props.artist}</small>
      </a>
    </div>
  );
}

export default Album;
