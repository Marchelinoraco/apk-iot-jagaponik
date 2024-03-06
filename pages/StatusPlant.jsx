import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View } from "react-native";

function StatusPlant() {
  return (
    <ImageBackground
      source={require("../assets/bg-home2.jpeg")}
      className="flex-1 relative  "
    >
      <StatusBar style="light" />
      {/* Header */}
      <View className="flex-row  space-x-2 items-center mt-8  justify-end">
        <Text className="p-6 my-10   text-center font-bold text-black  rounded-lg text-2xl">
          Status Tanaman
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
        </View>
      </View>
      {/* Content End */}
    </ImageBackground>
  );
}

export default StatusPlant;
