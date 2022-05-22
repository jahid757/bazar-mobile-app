import { StyleSheet, Platform } from "react-native";
import { spacing } from "../theme/spacing";

export default StyleSheet.create({
    android:{
        flex:1,
        paddingTop:Platform.OS === 'android' ? spacing[8] : 0,
    }
});