import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Highlight,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import Typewriter from "typewriter-effect";

import { seo, data } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  return (
    <>
      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <Image
          // change source depending on the color mode
          src="https://mahad-farah-portfolio.nyc3.digitaloceanspaces.com/images/portrait-dark.JPG"
          width="350"
          height="350"
          alt="avatar bigheads"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
          // make it a circle
          borderRadius="full"
        />
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
            Hi, I'm Mahad{" "}
            <span role="img" aria-label="hand">
              👋🏿
            </span>
          </Heading>
          <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
            Bringing{" "}
            <Text as="span" color={color}>
              Ideas
            </Text>{" "}
            to life with code.
          </Heading>
          <Text py="4">
            A{" "}
            <Text as="span" fontWeight="600">
              full-stack
            </Text>{" "}
            and{" "}
            <Text as="span" fontWeight="600">
              and devops engineer
            </Text>{" "}
            based in the Toronto, I specialize in python and javascript.
          </Text>
          <Button
            colorScheme="telegram"
            variant="ghost"
            size="lg"
            fontSize="20px"
          >
            <a href="mailto:me@mahadfarah.tech">Get in touch</a>
          </Button>
        </Box>
      </Box>

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        <Heading
          fontSize={["3xl", "4xl"]}
          fontWeight="700"
          // make it underlined
          _after={{
            content: '""',
            display: "block",
            width: "full",
            height: "20%",
            marginTop: "20px",
            backgroundColor: "telegram.500",
          }}
        >
          Experience
        </Heading>
        {data.map((item, index) => (
          <Box
            d={{ lg: "flex" }}
            justifyContent={{ lg: "center" }}
            padding="4"
            alignItems={{ lg: "center" }}
            flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
            key={index}
          >
            <Box
              w={{ base: "80%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) == 1 && "10" }}
              pr={{ lg: isOdd(index) == 0 && "10" }}
              // make image centered in the box
              display="flex"
              justifyContent="center"
            >
              <Image
                src={item.image}
                alt={item.title}
                // make image size height 300px but maintain aspect ratio
                height="300"
                width="300"
                objectFit="contain"
                // add border radious to all corners
                borderRadius="5%"
                pb="4"
              />
            </Box>

            <Box w={{ lg: "50%" }}>
              <Heading as="h2">{item.company}</Heading>
              <Heading as="h3" fontSize="xl" fontWeight="500" py="2">
                {item.title}
              </Heading>

              <Text py="4">{item.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
