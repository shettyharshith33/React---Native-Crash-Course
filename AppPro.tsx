import React, { JSX } from "react";
import {View,Text,StyleSheet,useColorScheme,Button,Appearance} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function AppPro() : JSX.Element{
    const isDarkMode = useColorScheme() === "dark";
    const currentMode = Appearance.getColorScheme();
    return(
    <SafeAreaView  style = {styles.container}>
        <View style = {styles.container}>
            <Text style = {isDarkMode ? styles.darkModeText : styles.lightModeText}>Hello World</Text>
            <Text style = {{color : "white"}}>{currentMode}</Text>
            <Button title={"Click Me"} onPress={()=>{<Text>{currentMode}</Text>}}/>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        flex : 1,
        alignItems : "center",
        backgroundColor : "black",
        justifyContent : "center"
    },
    darkModeText : {
        color : "white"
    },
    lightModeText : {
        color : "black"
    }
})
export default AppPro;