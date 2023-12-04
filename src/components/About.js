import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

const { width, height } = Dimensions.get("screen");

export default function Comentarios(props) {
  return (
    <View style={styles.sobreSection}>
      <Image source={props.foto} style={styles.foto} />

      <View>
        <Text style={styles.autor}>{props.nome}</Text>
        <Text style={styles.sobre}>{props.sobre}</Text>
      </View>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  sobreSection: {
    flexDirection: "row",
    maxWidth: width,
    justifyContent: "space-between",
    paddingVertical: 20,
    marginRight: 20,
    alignItems: "center"
  },
  foto: {
    height: 120,
    width: 120,
    borderRadius: 999,
    resizeMode: "contain",
  },
  autor: {
    fontFamily: "Roboto_700Bold",
    color: "#696969",
    fontSize: 18,
    marginHorizontal:10
  },
  sobre: {
    maxWidth: "80%",
    fontFamily: "Roboto_400Regular",
    color: "#696969",
    fontSize: 12,
    marginHorizontal:10
  },
});
