import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const catalogo = ({navigation}) => {
    const [resultado, guardarResultado] = useState({});

 useEffect (()=>{
  const getPopulares = async () => {
    const UrlPopulares = 'http://api.themoviedb.org/3/movie/popular?api_key=02f70a2fb7623e38786e1316db596f10'
    try {
      const response = await fetch (UrlPopulares);
      const respuesta = await response.json();

      for (let i =0; i<respuesta.results.length;i++){
        guardarResultado(respuesta);
      }
    } catch (error) {
      console.error(error);
    }
  };
 getPopulares();


 })
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