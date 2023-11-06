import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"



const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container minH={"100vh"} maxW={"container.xl"} p="16">

                <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"}
                    m={"auto"}>
                    Services
                </Heading>

                <Stack h={"full"} alignItems={"center"} p={"4"} direction={["column", "row"]} >
                    <Image src={img5} h={["40", "400"]} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium nemo soluta ipsam blanditiis autem pariatur ex eius cum, odio hic quaerat! Consequatur cupiditate nulla distinctio, ipsam blanditiis aliquid.
                        Porro quod esse laudantium atque, dolores quam libero officia asperiores eaque. Ex reiciendis fugit tempore?
                        Sed eius nulla eum sint, modi adipisci eum eius inventore aliquid molestias mollitia atque vitae voluptates, animi incidunt illo velit libero voluptatum?
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={"100vh"} >
            <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} >
                Play Hard or Go Home
            </Heading>
        </Box>

        <Box w="full" h={"100vh"} >
            <Image src={img2} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Wanna Play
            </Heading>
        </Box>

        <Box w="full" h={"100vh"} >
            <Image src={img3} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={"blackAlpha.600"} color={"violet"} {...headingOptions}>
                Vintage Love
            </Heading>
        </Box>

        <Box w="full" h={"100vh"} >
            <Image src={img4} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Who's the Boss
            </Heading>
        </Box>
    </Carousel >
)


export default Home