import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.detailsStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  detailsStyle: {
    color: "gray",
  },
});

export default ResultsDetail;
