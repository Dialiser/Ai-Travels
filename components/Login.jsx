import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";  

export default function Login() {
  const router=useRouter();

  return (
    <View>
      <Image
        style={{
          width: "100%",
          height: 550,
        }}
        source={require("./../assets/images/login1.jpg")}
      />

      <View style={Styles.container}>
        <Text
          style={{
            fontSize: 28,
            textAlign: "center",
            marginTop: 30,
          }}
        >
          AI Travels Planner
        </Text>

        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 10,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel trends with AI Travels.
        </Text>

        <TouchableOpacity
          style={Styles.button}
          onPress={() => router.push('/auth/sign-in')}
        >
          <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    marginTop: -20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '17%',
  },
});
