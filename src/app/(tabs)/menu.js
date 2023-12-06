import { Link } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.titulo}>
          Blog do <Text style={styles.negrito}>Nerivan</Text>
        </Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.links}>
          <Link href="/(tabs)/home" asChild>
            <Pressable>
              <Text style={styles.linksTexto}>Home</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.links}>
          <Link href="/(tabs)/pesquisar" asChild>
            <Pressable style={styles.links}>
              <Text style={styles.linksTexto}>pesquisar</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.links}>
          <Link href="/(tabs)/profile" asChild>
            <Pressable style={styles.links}>
              <Text style={styles.linksTexto}>Perfil</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.links}>
          <Link href="/(tabs)/sobre" asChild>
            <Pressable style={styles.links}>
              <Text style={styles.linksTexto}>sobre</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.sociais}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.twitter.com/craquenerivan");
            }}
          >
            <View style={styles.logo}>
              <Ionicons name="logo-twitter" size={25} style={styles.icone} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.instagram.com/craquenerivan");
            }}
          >
            <View style={styles.logo}>
              <Ionicons name="logo-instagram" size={25} style={styles.icone} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.youtube.com/@craquenerivan");
            }}
          >
            <View style={styles.logo}>
              <Ionicons name="logo-youtube" size={25} style={styles.icone} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.twitch.com/craquenerivan");
            }}
          >
            <View style={styles.logo}>
              <Ionicons name="logo-twitch" size={25} style={styles.icone} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.linkedin.com/in/caiquenerivan");
            }}
          >
            <View style={styles.logo}>
              <Ionicons name="logo-linkedin" size={25} style={styles.icone} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    height: "20%",
    width: width,
    backgroundColor: "#F6F6ED",
  },
  navBar: {
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
    width: "100%",
    alignItems: "center",
  },
  titulo: {
    fontSize: 26,
    fontFamily: "OpenSans_400Regular",
    color: "#636363",
    textTransform: "uppercase",
    marginVertical: 10,
  },
  negrito: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 32,
  },
  menu: {
    justifyContent: "center",
    height: "80%",
    width: "100%",
  },
  links: {
    borderBottomColor: "#5B4200",
    borderBottomWidth: 0.5,
  },
  linksTexto: {
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    color: "#5B4200",
    textTransform: "uppercase",
    marginVertical: 10,
    textAlign: "center",
  },
  sociais: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  logo: {
    backgroundColor: "#5B4200",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    marginHorizontal: 6,
  },
  icone: {
    color: "#F6F6ED",
  },
});
