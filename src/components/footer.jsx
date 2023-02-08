import { Box, Button, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaRegListAlt } from "react-icons/fa";

import { MAX_WIDTH } from "config";

// Fell free to add your social media accounts!
const socialAccounts = [
  { icon: FaGithub, path: "https://github.com/MahadF-cs", title: "Github" },
  {
    icon: FaLinkedin,
    path: "https://www.linkedin.com/in/mahadfarah/",
    title: "Linkedin",
  },
  {
    icon: FaRegListAlt,
    path: "https://mahad-farah-portfolio.nyc3.digitaloceanspaces.com/resume/resume2023-mahadfarah.pdf",
    title: "Resume",
  },
];

const Footer = () => {
  return (
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="2">
          {socialAccounts.map((item, index) => (
            <ChakraLink
              href={item.path}
              aria-label={item.title}
              mx="2"
              _focus={{ outline: "none" }}
              key={index}
              isExternal
            >
              <Button aria-label={item.title}>
                <Icon as={item.icon} w="6" h="6" />
              </Button>
            </ChakraLink>
          ))}
        </Box>
        <Box py="2">
          <Text>
            Built with{" "}
            <ChakraLink
              href="https://nextjs.org/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Next.js
            </ChakraLink>{" "}
            &{" "}
            <ChakraLink
              href="https://chakra-ui.com/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Chakra UI
            </ChakraLink>
            , Hosted on{" "}
            <ChakraLink
              href="http://digitalocean.com/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Digital Ocean
            </ChakraLink>
            {/* make another button with a resume link */}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
