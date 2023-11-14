import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Breack"];

export default function Header({ currentTime, setCurrentTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyles,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyles: {
    padding: 5,
    width: "33%",
    borderWidth: 3,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
  },
});
