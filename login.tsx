import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

const LoginScreen = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        Alert.alert(`ID: ${id}, Password: ${password}`);
    };

    return (
        <View style={styles.container}>
            <TextInput value={id} onChangeText={setId} placeholder={"아이디를 입력하세요"} style={styles.input} />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder={"비밀번호를 입력하세요"}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button title={"로그인"} onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
    },
});

export default LoginScreen;
