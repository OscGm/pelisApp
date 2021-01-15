//librerias
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from 'react-native';

const catalogo = ({navigation}) => {

  const URL_API_POPULARES = 'https://api.themoviedb.org/3/movie/popular?api_key=02f70a2fb7623e38786e1316db596f10'
  const IMAGES_API = 'https://image.tmdb.org/t/p/w185'
  const [movies, setMovies] = useState([]);
  
  useEffect (()=>{
    fetch(URL_API_POPULARES)
    .then((res) => res.json())
    .then((data) => {
      // Ver datos de la api
      console.log(data.results);
      setMovies(data.results);
    });
  }, []);
    return (
      <>
      <ScrollView>
        <Text style={{alignContent:'center'}}>
          {movies.length > 0 && movies.map((movie) => <Image key={movie.id}
            style={{width:100, height:100}}
            source={{
              uri:IMAGES_API+movie.poster_path
            }}
          />)}
        </Text>
        </ScrollView>
      </>
    )
}

export default catalogo;