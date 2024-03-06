import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, TouchableOpacity } from "react-native";

import React, { Component } from "react";
import { styled } from "nativewind";

const StyledText = styled(Text);

function SplashScreen({ navigation }) {
  //  const componenDidMount() {
  //   setTimeout(() => {
  // this.props.navigation.dispath(StackActions.replace("MonitorStatus"))
  //   }, 3000);
  // }

  return (
    <ImageBackground
      source={require("../assets/bg-hidroponik.jpeg")}
      className="flex-1 items-center bg-gradient-to-br bg-green-800 to-green-500/50  justify-center"
    >
      <StyledText className="py-2  text-center font-bold text-white  rounded-lg text-5xl">
        JagaPonik
      </StyledText>
      <StatusBar style="light" />

      <TouchableOpacity
        className=""
        onPress={() => navigation.navigate("Home")}
      >
        <StyledText className="p-2 mt-10 bg-[#5EA722] rounded-[20px] ios:rounded-[20px] text-2xl  text-white font-semibold">
          Get Started
        </StyledText>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default SplashScreen;
