import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import vid1 from "../assets/6.mp4";
import vid2 from "../assets/7.mp4";

const Games = () => {

    const videosArr = [vid1, vid2];

    const [videoSrc, setVideoSrc] = useState(videosArr[0])

    return (
        <Stack direction={["column", "row"]} h={"100vh"} >
            <VStack w={"full"} >
                <video controls controlsList='nodownload' src={videoSrc} style={{ width: "100%" }} >

                </video>
                <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"} >
                    <Heading>Sample Video </Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Ex est iure voluptatem eos officiis? Id facilis suscipit voluptatem nam sit veniam minima,
                        veritatis debitis ipsum, beatae similique tenetur. Odit, adipisci.
                    </Text>
                </VStack>
            </VStack>

            <VStack w={["full", "xl"]} alignItems={"stretch"} p={"8"} spacing={"8"} overflowY={"auto"} >
                {
                    videosArr.map((item, index) => (
                        <Button variant={"ghost"} colorScheme='purple' onClick={() => setVideoSrc(item)} >
                            Teaser {index + 1}
                        </Button>
                    ))
                }
            </VStack>
        </Stack>
    )
}

export default Games