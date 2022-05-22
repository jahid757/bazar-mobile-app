import React from 'react';
import {View, StyleSheet,SafeAreaView,FlatList,Pressable} from 'react-native';
import Header from '../components/header';
import safeView from '../components/safe-view';
import SingleBazar from '../components/single-bazar';
import { DATA } from '../data/data';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from './../components/text/Text';

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={[styles.container,safeView.android]}>
            <Header title='BAZAR'/>
            <View style={styles.content}>
                <FlatList
                    // contentContainerStyle={styles.item}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
                    data={DATA}
                    renderItem={({item}) => {
                        return (
                            <SingleBazar item={item}/>
                        )
                    }}
                    
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    content:{
        backgroundColor:colors.whiteLight,
        flex:1,
        padding:spacing[4],
    },
    separator:{
        borderBottomWidth:spacing[3],
        borderBottomColor:colors.whiteLight,
    }
    
})

export default Home;
