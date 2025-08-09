import { Button, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import newLogo from "../../public/images/logo/New Logo (transparent).png";
import Image from "next/image";

export default function Home() {
  return (
    <VStack
      w="100vw"
      justifyContent="center"
      alignItems="center"
      spaceY={12}
      pt="5vh"
      pb="20vh"
    >
      <VStack spaceY={2}>
        <Image height={250} src={newLogo} alt="New LCM logo" />
        <Heading
          lineHeight="1"
          w="80vw"
          as="h1"
          color="cyan"
          fontSize="4rem"
          textAlign="center"
        >
          {"Lucid Creations Media Website"}
        </Heading>
      </VStack>

      <VStack w="80vw" spaceY={2}>
        <Text w="100%" textAlign="left" fontSize="lg">
          {"The LCM website and eShop has been temporarily discontinued."}
        </Text>
        <Text w="100%" textAlign="left" fontSize="lg">
          {
            "Over the years there have been many external factors that interfered with my ability to dedicate time and find motivation to work on my creative passions. This includes erotica, streaming, hypno files, and more."
          }
        </Text>
        <Text w="100%" textAlign="left" fontSize="lg">
          {
            "It has also interfered with my ability to learn new skills such as music creation and digital art."
          }
        </Text>
        <Text w="100%" textAlign="left" fontSize="lg">
          {
            "Last year I faced a layoff and haven't been able to get back into my field. I can no longer afford the costs of hosting this website on it's current platform. The website generated no sales and thus I had to make the difficult decision to shut the site down for now."
          }
        </Text>
        <Text w="100%" textAlign="left" fontSize="lg">
          {
            'I have no time frame for when or if I will reopen the eShop. I do wish to at some point, on a more modern platform. I know that the next few months will be hell for me and I will have no time to dedicate to any of this. I will have to see how things are once I start getting more free time and if I can start working on a new website, "remastering" old hypno files, and making new ones for the relaunch.'
          }
        </Text>
        <Text w="100%" textAlign="left" fontSize="lg">
          {
            "Since LCM is not registered as an LLC yet I have been contemplating rebranding the company one last time. A few weeks before coming to this decision and making this page I was being pulled to shelf Kobold as Lucid's default form. I have been enjoying hearing/seeing everyone refer to me as wolf/werwolf so much that I might keep it this way. Just like when I changed my original fursona and alias it might be time to flip to a new chapter in my life."
          }
        </Text>
        <Text w="100%" textAlign="left" fontSize="lg">
          {
            'For a little while I was debating using "Kobold Kid", my new vanity domain name, as the new brand, but I have a new idea. I will sit on it for a few months before I make any decisions.'
          }
        </Text>
        <Text w="100%" textAlign="left" fontSize="lg">
          {
            "Another option I was considering is keeping Kobold as marketing/mascot, but I am not sure about it."
          }
        </Text>
      </VStack>

      <VStack spaceY={6} w="80vw">
        <Heading
          as="h2"
          color="cyan"
          fontSize="2.5rem"
          textAlign="center"
          lineHeight="1"
        >
          {"Other LCM Resources"}
        </Heading>

        <HStack gap="6" wrap="wrap">
          <Button variant="solid" bgColor="teal" fontSize="xl">
            <Link
              target="_blank"
              color="whiteAlpha.950"
              href="https://community.lucidcreations.media/"
            >
              {"The Cove"}
            </Link>
          </Button>
          <Button variant="solid" bgColor="teal" fontSize="xl">
            <Link
              target="_blank"
              color="whiteAlpha.950"
              href="https://vrchat.com/home/group/grp_781bbe4b-51ec-4025-a14f-cf23ced90507"
            >
              {"Dreamy Drove"}
            </Link>
          </Button>
        </HStack>
        <Heading
          as="h3"
          color="cyan"
          fontSize="2.5rem"
          textAlign="center"
          lineHeight="1"
        >
          {"Lucid's Socials"}
        </Heading>

        <HStack gap="6" wrap="wrap">
          <Button variant="solid" bgColor="teal" fontSize="xl">
            <Link
              target="_blank"
              color="whiteAlpha.950"
              href="https://koboldkid.com/"
            >
              {"Kobold Kid Website"}
            </Link>
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}
