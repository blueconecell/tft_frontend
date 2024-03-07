import { Box, Grid, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IChampion } from "../types";
import RoomSkeleton from "../components/RoomSkeleton";
import Champion from "../components/Champion";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [champions, setChampions] = useState<IChampion[]>([]);
  const fetchRooms = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/champions/");
    const json = await response.json();
    setChampions(json);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchRooms();
  }, []);
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      {isLoading ? (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      {champions.map((champion) => (
        <Champion
        id = {champion.id}
        name = {champion.name}
        champion_photo={champion.champion_photo}
        price = {champion.price}
        health={champion.health}
        AD={champion.AD}
        attack_range={champion.attack_range}
        attack_speed={champion.attack_speed}
        DPS={champion.DPS}
        armor={champion.armor}
        magic_resistance={champion.magic_resistance}
        skill_name={champion.skill_name}
        skill_category={champion.skill_category}
        mana_start={champion.mana_start}
        mana_total={champion.mana_total}
        skill_description={champion.skill_description}
        skill_effect={champion.skill_effect}
        skill_photo={champion.skill_photo}
        origin={champion.origin}
        job={champion.job}
        
        />
      ))}
    </Grid>
  );
}