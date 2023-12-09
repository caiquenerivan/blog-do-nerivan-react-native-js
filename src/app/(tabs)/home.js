import { Link } from "expo-router";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
} from "react-native";

import ListaPosts from "../../components/ListaPosts.js";
import { posts } from "../../data/postList";


const { width, height } = Dimensions.get("screen");

export default function Home() {
  function renderItem({ item }) {
    return <ListaPosts {...item} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Blog do <Text style={styles.negrito}>Nerivan</Text>
      </Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
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
    borderBottomColor: "#69696969",
    borderBottomWidth: 0.5,
  },
  negrito: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 32,
  },
});
