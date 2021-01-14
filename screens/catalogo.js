import React from 'react';
import { Image, StyleSheet, View, Text} from 'react-native';
const API_KEY = '02f70a2fb7623e38786e1316db596f10'
const URL = 'http://api.themoviedb.org/3/movie/popular?api_key=02f70a2fb7623e38786e1316db596f10'
const IMG_URL = 'http://image.tmdb.org/t/p/w185/'

console.log(Api);
const catalogo = ({navigation}) => {
    return (
        <>
            <View>
                <Text>
                    Catalogo
                </Text>
            </View>
        </>
    )
}

export default catalogo;