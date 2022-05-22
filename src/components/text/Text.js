import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import { textPreset } from './text-preset';

const Text = ({children,preset,style}) => {
    const styleText = StyleSheet.compose(textPreset[preset],style);
    return (
        <RNText style={styleText}>{children}</RNText>
    );
}

export default Text;
