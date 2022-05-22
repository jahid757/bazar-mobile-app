import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet,View} from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from './text/Text';

const SingleBazar = ({item}) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => {
            navigation.navigate('Detail',{item:item})
        }} style={styles.item}>
            <View style={styles.singleItem}>
                <Text preset='h3' style={styles.text}>{item.date.dayName}</Text>
                <Text style={{marginLeft:spacing[1]}} preset='small'>({item.date.date} {item.date.monthName} {item.date.year})</Text>
            </View>
            <Text style={styles.text} preset='h3'>{item.netPrice.price} ৳</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item:{
        borderRadius:spacing[1],
        padding:spacing[3],
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:colors.white
    },
    text:{
        fontWeight:'400',
    },
    singleItem:{
        flexDirection:'row',
        // justifyContent:'space-between',
        alignItems:'center',
    }
})

export default SingleBazar;
