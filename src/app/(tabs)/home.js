import { Link } from "expo-router";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import pac from "../../assets/imgs/pac.jpg";



const {width, height} = Dimensions.get('screen');

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Blog do <Text style={styles.negrito}>Nerivan</Text>
      </Text>
      <ScrollView>
        <Link href="/post/1" asChild>
          <Pressable style={styles.post}>
            <Image source={pac} style={styles.imagem} />
            <View style={styles.textosPost}>
              <Text numberOfLines={2} style={styles.tituloPost}>50 anos de hip-hop</Text>
              <Text numberOfLines={2} style={styles.subTituloPost}>a origem do estilo mais influente de toda a década</Text>
              <Text numberOfLines={1} style={styles.autorPost}>Por Caique Nerivan</Text>
              <Text numberOfLines={2} style={styles.dataPost}>Postado em 04/10/2023</Text>
            </View>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
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
  post: {
    height: 160,
    paddingVertical: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagem: {
    height: "100%",
    width: "45%",
    resizeMode: "cover",
  },
  textosPost:{
    width: "50%",
    paddingLeft:2,
    justifyContent: "center"
  },
  tituloPost:{
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
    color: "#636363",
    textTransform: "uppercase",
    paddingBottom: 6

  },
  subTituloPost:{
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: "#636363",
    textTransform: "uppercase",
    paddingBottom: 6
  },
  autorPost: {
    fontSize: 10,
    fontFamily: "Roboto_300Light",
    color: "#636363",
    paddingBottom: 6
  },
  dataPost:{
    fontSize: 12,
    fontFamily: "Roboto_300Light",
    color: "#636363",
    textTransform: "uppercase",
  }
});