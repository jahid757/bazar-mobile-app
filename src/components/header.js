import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import Text from "./text/Text";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, subtitle, backButton }) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        { justifyContent: backButton && "space-between" },
      ]}
    >
      {backButton && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
      )}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.text} preset="h1">
          {title}
        </Text>
        {subtitle && (
          <Text style={[styles.text, { marginLeft: spacing[2] }]} preset="h3">
            ({subtitle})
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: colors.white,
    padding: spacing[2],
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
  },
});

export default Header;
