import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

export default function Comentarios(props) {
  return (
    <View style={styles.sobre}>
        <Text style={styles.h2}>sobre o autor</Text>
      <View style={styles.sobreSection}>
        <Image source={props.foto} style={styles.foto} />
        <View>
          <Text style={styles.autor}>{props.nome}</Text>
          <Text style={styles.sobreTexto}>{props.sobre}</Text>
        </View>
        <TextInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 20,
    textTransform: "lowercase",
    color: "#5B4200",
    fontFamily: "Roboto_700Bold",
    paddingVertical: 10,
  },
  
  sobre: {
    marginHorizontal:20,
    paddingVertical: 20,
    paddingBottom: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
  },
  sobreSection: {
    flexDirection: "row",
    width:"100%",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginRight: 20,
    alignItems: "center",
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
    marginHorizontal: 10,
  },
  sobreTexto: {
    maxWidth: "80%",
    fontFamily: "Roboto_400Regular",
    color: "#696969",
    fontSize: 12,
    marginHorizontal: 10,
  },
});
