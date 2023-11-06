import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Container maxW={"container.xl"} h={"120vh"} p={"16"} >
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full", "96"]} margin={"auto"} my={"16"} >
                    <Heading alignSelf={"center"} >GAMING ZONE</Heading>

                    <Avatar alignSelf={"center"} boxSize={"32"} />

                    <Input placeholder='name' required type='text' focusBorderColor={"purple.500"} />
                    <Input placeholder='email' required type='email' focusBorderColor={"purple.500"} />
                    <Input placeholder='password' required type='password' focusBorderColor={"purple.500"} />

                    <Button colorScheme='purple' type='submit' >Sign Up</Button>

                    <Text textAlign={"right"}>
                        Already Signed Up?{" "}
                        <Button variant={"link"} colorScheme='purple'>
                            <Link to={"/login"}>Log In</Link>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container>
    )
}

export default Signup