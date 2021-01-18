import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';

const IMAGES_API = 'https://image.tmdb.org/t/p/w185'
const detalles = ( { navigation, route} ) => {

    console.log(route);
    return (
        <SafeAreaView style={{flex: 1,marginLeft:10,marginTop:10}}>
            <ScrollView>
            <View>
            <Image
            style={{width:200, height:300}}
            source={{
              uri:IMAGES_API+route.params.poster_path
            }}
          />
          <Text>Rating: {route.params.vote_average}/10</Text><Text style={{fontSize:15}}>Date: {route.params.release_date}</Text>
            </View>
            <View>
                <Text style={{fontSize:25}}>
                    {route.params.overview}
                </Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default detalles;