import { useGlobalSearchParams } from "expo-router";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import caique from "../../assets/imgs/caique.jpg";

import Comentarios from "../../components/Comentario";
import About from "../../components/About";
import ArtigoPost from "../../components/ArtigoPost";
import { posts } from "../../data/postList";



const { width, height } = Dimensions.get("screen");

export default function Post() {
  const { id, titulo, subTitulo, capa, autor, data, likes, categoria, comentario, texto } = useGlobalSearchParams();

  const qtdLikes = likes;

  return (
    <ScrollView style={styles.container}>
      <ArtigoPost titulo={titulo} subTitulo={subTitulo} capa={capa} autor={autor} data={data} likes={likes}/>
      <View style={styles.outrosPosts}>
        <Text style={styles.h2}>posts recentes</Text>
      </View>

      <Comentarios
        nome="{comentario.nome}"
        comentario="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        likes={8000}
      />

      <About
        foto={caique}
        nome="Caique Nerivan"
        sobre="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    width: width,
    backgroundColor: "#F6F6ED",
  },

  h2: {
    fontSize: 20,
    textTransform: "lowercase",
    color: "#5B4200",
    fontFamily: "Roboto_700Bold",
    paddingVertical: 10,
  },

  outrosPosts: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
  },
});
