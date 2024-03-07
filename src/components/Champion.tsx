import { FaCoins, FaRegHeart, FaStar } from "react-icons/fa";
import {  Box,  Button,  Grid,  HStack,  Image,  Text,  useColorModeValue,  VStack,} from "@chakra-ui/react";
import { IChampion, IOrigin } from "../types";

export default function Champion({
    name,
    champion_photo,
    price,
    health,
    AD,
    attack_range,
    attack_speed,
    DPS,
    armor,
    magic_resistance,
    skill_name,
    skill_category,
    mana_start,
    mana_total,
    skill_description,
    skill_effect,
    skill_photo,
    origin,
    job,
}: IChampion) {
  const gray = useColorModeValue("gray.600", "gray.300");
  console.log(origin)
  return (
    <VStack alignItems={"flex-start"}>
      <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
      <Image minH="120" src={champion_photo[0].file} />
        <Button
          variant={"unstyled"}
          position="absolute"
          top={0}
          right={0}
          color="white"
        >
          
        </Button>
      </Box>
      <Box>
        {}
        <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {origin[0].name}
        </Text>
        <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {origin[0].origin_description}
        </Text>
        <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {origin[0].origin_effect}
        </Text>
        <Box backgroundColor={gray}>
        <Image minH="120" src={origin[0].origin_photo[0].file} />
        </Box>


          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {name}
          </Text>
          <FaCoins size="20px" color="orange"/>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {price}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {health}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {AD}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {attack_range}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {attack_speed}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {DPS}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {armor}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {magic_resistance}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {skill_name}
          </Text>
          <Image minH="280" src={skill_photo[0].file} />
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {skill_category}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {mana_start}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {mana_total}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {skill_description}
          </Text>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
          {skill_effect}
          </Text>


        </Box>
    </VStack>
  );
}