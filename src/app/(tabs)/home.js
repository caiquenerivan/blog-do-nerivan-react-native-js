import { Link } from "expo-router";
import { Text, StyleSheet, SafeAreaView, Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import pac from "../../assets/imgs/pac.jpg";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Blog do <Text style={styles.negrito}>Nerivan</Text>
      </Text>
      <ScrollView>
        <View style={styles.post}>
          <Image source={pac} style={styles.imagem} />
          <View>
            <Text>50 anos de hip-hop</Text>
            <Text>a origem do estilo mais influente da década</Text>
            <Text>Por Caique Nerivan</Text>
            <Text>Postado em 04/10/2023</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F6F6ED",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 26,
    fontFamily: "OpenSans_400Regular",
    color: "#636363",
    textTransform: "uppercase",
    marginVertical: 10,
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
  },
  negrito: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 32,
  },
  imagem: {
    height:"100%",
    maxWidth: "40%",
    marginRight: 20,
    resizeMode:"cover"
  },
  post: {
    height: 160,
    paddingVertical: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
