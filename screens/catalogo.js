//librerias
import React, { useEffect, useState } from 'react';
import { Button, TouchableHighlight, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import detalles from './detalles';

const catalogo = ({navigation}) => {

  const URL_API_POPULARES = 'https://api.themoviedb.org/3/movie/popular?api_key=02f70a2fb7623e38786e1316db596f10'
  const IMAGES_API = 'https://image.tmdb.org/t/p/w185'
  const [movies, setMovies] = useState([]);

  const detallesMovie = (id) => {
    navigation.navigate("Detalles",id)
  }
  
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
      <SafeAreaView>
        <Text style={{fontSize:40, alignSelf: 'center', fontWeight:'bold'}}>Populares</Text>
      <ScrollView horizontal={true}>
          {movies.length > 0 && movies.map((movie) =>  (
           <TouchableHighlight key={movie.id} onPress={() => detallesMovie(movie)}> 
          <Image resizeMode='center'
            style={{width:100, height:150}}
            source={{
              uri:IMAGES_API+movie.poster_path
            }}
          />
          </TouchableHighlight>))}
          <Button
          title = 'Mas'
          onPress= { () => getPupulares() }
          />
        </ScrollView>
      </SafeAreaView>
    )
}

export default catalogo;