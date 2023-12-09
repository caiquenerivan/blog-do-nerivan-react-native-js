import REact, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { Dimensions, Text, TextInput, View } from "react-native";

const { width, height } = Dimensions.get("screen");

import { posts } from "../../data/postList";
import ListaPosts from "../../components/ListaPosts";

const mockUsuarios = [
  { id: 1, nome: "Usuário 1" },
  { id: 2, nome: "Usuário 2" },
  { id: 3, nome: "Usuário 3" },
  { id: 4, nome: "Usuário 4" },
  { id: 5, nome: "Usuário 5" },
];

export default function Pesquisar() {
  function renderItem({ item }) {
    return <ListaPosts {...item} />;
  }

  const [termoBusca, setTermoBusca] = useState("");
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const buscarUsuarios = () => {
      if (termoBusca.trim() === "") {
        setResultados([]);
        return;
      }

      const resultadosFiltrados = posts.filter(
        (post) =>
          post.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
          post.subTitulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
          post.categoria.toLowerCase().includes(termoBusca.toLowerCase())
      );

      setResultados(resultadosFiltrados);
    };

    buscarUsuarios();
  }, [termoBusca]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Blog do <Text style={styles.negrito}>Nerivan</Text>
      </Text>
      <TextInput
        style={styles.input}
        value={termoBusca}
        onChangeText={(texto) => setTermoBusca(texto)}
        placeholder="PESQUISAR"
      />

      <FlatList
        data={resultados}
        keyExtractor={(post) => post.id.toString()}
        renderItem={renderItem}
      />
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
    borderBottomColor: "#696969",
    borderBottomWidth: 0.5,
  },
  negrito: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 32,
  },
  input: {
    marginVertical: 20,
    height: 40,
    borderWidth: 0.5,
    borderBottomColor: "#696969",
    borderRadius: 100,
    padding: 10,
    fontFamily: "OpenSans_400Regular",
    paddingHorizontal: 30,
  },
});
