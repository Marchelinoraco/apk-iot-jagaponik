import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View } from "react-native";

function MonitorStatus() {
  return (
    <ImageBackground
      source={require("../assets/bg-home2.jpeg")}
      className="flex-1 relative  "
    >
      <StatusBar style="light" />
      {/* Header */}
      <View className="flex-row  space-x-2 items-center mt-8  justify-end">
        <Text className="p-6 my-10   text-center font-bold text-black  rounded-lg text-2xl">
          Monitor Status
        </Text>
      </View>
      {/* Header End */}

      {/* Content */}
      <View
        className="flex-1 mb-24  rounded-[40px] mx-4   bg-white opacity-70
        items-center justify-center"
      >
        <View className="flex  items-center">
          <Text className="text-xl font-bold">Suhu Air</Text>
          <Text className="py-1 mt-3  px-5 text-lg  bg-green-300/70 android:rounded-[10px]  ios:rounded-[10px] ">
            Suhu Air
          </Text>
          <Text className="text-xl font-bold mt-10">Suhu Sekitar</Text>
          <Text className="py-1 mt-3  px-5 text-lg bg-green-300/70 rounded-[10px]">
            Suhu Sekitar
          </Text>
          <Text className="text-xl font-bold mt-10">Ketinggian Air</Text>
          <Text className="py-1 mt-3  px-5 text-lg bg-green-300/70 rounded-[10px]">
            Ketinggian Air
          </Text>
          <Text className="text-xl font-bold mt-10">Nilai Nutrisi PPM</Text>
          <Text className="py-1 mt-3  px-5 text-lg bg-green-300/70 rounded-[10px]">
            Nilai Nutrisi PPM
          </Text>
        </View>
      </View>
      {/* Content End */}
    </ImageBackground>
  );
}

export default MonitorStatus;
