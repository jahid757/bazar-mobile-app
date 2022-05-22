import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/header';
import safeView from '../components/safe-view';
import Text from '../components/text/Text';

const Detail = ({route}) => {
    const {item} = route.params;
    const fullDate = `${item.date.date} ${item.date.monthName} ${item.date.year}`;
    return (
        <SafeAreaView style={[safeView.android]}>
            <Header title={item.date.dayName} subtitle={fullDate} backButton={true}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Detail;
