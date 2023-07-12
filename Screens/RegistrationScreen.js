import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.userBox}>
          <Image />
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Регістрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.input}
              placeholder="Login"
              value={name}
              onChangeText={nameHandler}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={login}
              onChangeText={loginHandler}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={passwordHandler}
            ></TextInput>
            <TouchableOpacity style={styles.buttonForm} activeOpacity={0.7}>
              <Text style={styles.textButton}>Зареєструватися</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 549,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },

  userBox: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 32,
  },

  title: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 33,
  },

  form: {
    position: "absolute",
    top: 92,
    alignItems: "center",
    marginHorizontal: 10,
  },

  input: {
    width: 343,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
  },

  buttonForm: {
    height: 51,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginTop: 43,
  },

  textButton: {
    color: "#fff",
    fontWeight: 400,
    fontSize: 16,
  },
});

export default RegistrationScreen;
