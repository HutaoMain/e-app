import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  numberOfScreens: number;
  activeIndex: number;
}

const SwipeIndicator = ({ numberOfScreens, activeIndex }: Props) => {
  const renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < numberOfScreens; i++) {
      indicators.push(
        <View
          key={i}
          style={[
            styles.indicator,
            i === activeIndex ? styles.activeIndicator : null,
          ]}
        />
      );
    }
    return indicators;
  };

  return <View style={styles.indicatorContainer}>{renderIndicators()}</View>;
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  activeIndicator: {
    width: 20,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
});

export default SwipeIndicator;
