import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";

function ControlStatus() {
  return (
    <ImageBackground
      source={require("../assets/bg-home2.jpeg")}
      className="flex-1 relative  "
    >
      <StatusBar style="light" />
      {/* Header */}
      <View className="flex-row  space-x-2 items-center mt-8  justify-end">
        <Text className="p-6 my-10   text-center font-bold text-black  rounded-lg text-2xl">
          Control Status
        </Text>
      </View>
      {/* Header End */}

      {/* Content */}
      <View
        className="flex-1 mb-24  rounded-[40px] mx-4   bg-white opacity-75 
       space-x-2 items-center justify-center"
      >
        <View className=" flex items-center">
          <Text className="p-2  text-2xl font-bold">Ketinggian Air</Text>
          <TouchableOpacity className="bg-green-300/70 py-2  px-5   rounded-[20px]">
            <View>
              <Text className="text-lg "> Ketinggian Air</Text>
            </View>
          </TouchableOpacity>
          <Text className="p-2  text-2xl font-bold mt-10">Nutrisi Air</Text>
          <TouchableOpacity className="bg-green-300/70 py-2  px-5   rounded-[20px]">
            <View>
              <Text className="text-lg"> Nutrisi Air</Text>
            </View>
          </TouchableOpacity>
          <Text className="p-2  text-2xl font-bold mt-10">Suhu Sekitar</Text>
          <TouchableOpacity className="bg-green-300/70 py-2  px-5   rounded-[20px]">
            <View>
              <Text className="text-lg"> Suhu Sekitar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Content End */}
    </ImageBackground>
  );
}

export default ControlStatus;
