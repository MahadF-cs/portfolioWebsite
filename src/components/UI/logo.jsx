import { chakra, Image, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700">
        <Image
          // depending on light or dark mode, the logo will be different
          src={
            useColorMode().colorMode === "light"
              ? "https://mahad-farah-portfolio.nyc3.digitaloceanspaces.com/images/logo-black.png"
              : "https://mahad-farah-portfolio.nyc3.digitaloceanspaces.com/images/logo-white.png"
          }
          alt="logo"
          // make the logo responsive byt smaller
          w={["20px", "25px", "30px"]}
          h={["20px", "25px", "30px"]}
        />
      </chakra.a>
    </NextLink>
  );
};

export default Logo;
