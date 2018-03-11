import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {

  var {
    imageStyles,
    thumbnailStyles,
    textContainer,
    thumbnailContainerStyle,
    headerTextStyle
  } = styles;

  const {
    thumbnail_image,
    image,
    title,
    artist,
    url
  } = album;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyles}
          />
        </View>
        <View style={ textContainer }>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyles}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>

    </Card>
  );
}

var handlePress = function () {
  Alert.alert(
    'Not judging, but....',
    'You listen to Taylor Swift?',
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ],
    { cancelable: false }
  )
}

const styles = {
  imageStyles: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailStyles: {
    width: 50,
    height: 50
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  }
}

export default AlbumDetail;
