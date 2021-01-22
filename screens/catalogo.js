//librerias
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, Button, TouchableHighlight } from 'react-native';
import detalles from './detalles';

const catalogo = ({navigation}) => {

  // URL API
  const URL_API_POPULARES = 'https://api.themoviedb.org/3/movie/popular?api_key=02f70a2fb7623e38786e1316db596f10&page='
  const IMAGES_API = 'https://image.tmdb.org/t/p/w185'

  // STATE
  const [movies, setMovies] = useState([]);

  const languageESP = '&language=es';

  // Mover entre Pantallas
  const detallesMovie = (id) => {
    navigation.navigate("Detalles",id)
  }
  
  // Obtener resultados de la API
  useEffect (()=>{
    const listPeliculas = async (page) => {
      const res = await fetch(URL_API_POPULARES+page+languageESP);
      const result = await res.json();
      setMovies(result.results)
    }
    listPeliculas();
  }, []);
  



    return (
      <SafeAreaView >
      <ScrollView>
          {movies.length > 0 && movies.map((movie) =>  (
           <TouchableHighlight underlayColor='gray' style={{paddingVertical:5}} key={movie.id} onPress={() => detallesMovie(movie)}> 
          <Image 
            style={{width:100, height:150}}
            source={{
              uri:IMAGES_API+movie.poster_path
            }}
          />
          </TouchableHighlight>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
}

export default catalogo;