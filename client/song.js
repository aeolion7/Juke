import React from 'react';

function Song(props) {
  return (
    <tr>
      <td>
        <i className="fa fa-play-circle" />
      </td>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.artist}</td>
      <td>{props.genre}</td>
    </tr>
  );
}

export default Song;
