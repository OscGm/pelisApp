import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const UrlPopulares = 'http://api.themoviedb.org/3/movie/popular?api_key=02f70a2fb7623e38786e1316db596f10'

const getPopulares = async () => {
    try {
      let response = await fetch(UrlPopulares);
      let json = await response.json();
      console.log(json.results);
    } catch (error) {
      console.error(error);
    }
  };
  getPopulares();
// const enviroment = {
//     url: 'http://api.themoviedb.org/3',
//     apiKey: '02f70a2fb7623e38786e1316db596f10',
//     imgPath: 'http://image.tmdb.org/t/p/w185'
// }

const catalogo = ({navigation}) => {
    return (
        <>
            <View>
      <Image
        style={{width:50, height:50}}
        source={{
          uri: 'http://image.tmdb.org/t/p/w185/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
        }}
      />
            </View>
        </>
    )
}

export default catalogo;