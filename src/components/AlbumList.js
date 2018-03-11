import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail'
import axios from 'axios';

class AlbumList extends React.Component {

  state = {
    albums: []
  };

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then((resp) => {
        this.setState({ albums: resp.data })
       });
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => 
      <AlbumDetail album={album} key={index}/>
    );
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    )
  }
}

export default AlbumList;