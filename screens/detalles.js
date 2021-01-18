import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';

const IMAGES_API = 'https://image.tmdb.org/t/p/w185'
const detalles = ( { navigation, route} ) => {

    console.log(route);
    return (
        <SafeAreaView style={{flex: 1,marginLeft:10}}>
            <ScrollView>
            <View>
                <Text style={{fontSize:40, alignSelf: 'center', fontWeight:'bold'}}>{route.params.title}</Text>
            <Image
            style={{width:200, height:300}}
            source={{
              uri:IMAGES_API+route.params.poster_path
            }}
          />
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