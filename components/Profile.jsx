import { useEffect, useState, useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Bar } from "react-native-progress";
import { UserContext } from "../utils/userContext";
import Badges from "./Badges";
import React from "react";
import { avatar1 } from "../assets/avatars/avatar1.png";

const Profile = () => {
  const { username } = React.useContext(UserContext);
  const [level, setLevel] = useState(0);
  const [progress, setProgress] = useState(0);
  const [totalXP, setTotalXP] = useState(0);

  useEffect(() => {
    setTotalXP(153);
  }, []);
  useEffect(() => {
    setLevel(Math.floor(totalXP / 100));
    setProgress((totalXP % 100) / 100);
  }, [totalXP]);

  return (
    <View style={styles.container}>
      <Image source={{ avatar1 }} style={styles.image} />
      <Text>{username}</Text>
      <View style={styles.bar}>
        <Bar progress={progress} width={250} height={20} />
        <Text>
          Level {level} - {progress * 100}/100
        </Text>
      </View>
      <Badges totalXP={totalXP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: { width: 300, height: 300, marginTop: 30, marginBottom: 100 },
  bar: {
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
});

export default Profile;
