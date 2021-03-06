import { Button as ChakraButton, Text } from "@chakra-ui/react";

type Props = {
  holderName?: string;
  ml?: string;
  fontSize?: string;
  h?: string;
  onClick?(): void;
};

export function Button({ holderName, ml, fontSize, h, onClick }: Props) {
  return (
    <ChakraButton
      onClick={onClick}
      fontSize={fontSize}
      ml={ml}
      my="auto"
      color="#333"
      background="mint"
      borderRadius="20"
      border="none"
      cursor="pointer"
      px="10"
      py="5"
      h={h}
      _hover={{ style: "none" }}
      _active={{ style: "none" }}
      _focus={{
        boxShadow: "0 0 1px 2px rgba(3,218, 197, .75)",
      }}
    >
      <Text fontSize="1.2rem">{holderName}</Text>
    </ChakraButton>
  );
}
