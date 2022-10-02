


import React from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    Switch,
    useColorMode,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import style from "../Css/FAQs.module.css"


function SignUp() {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.200', 'gray.700');




    return (
        <Flex h="600px" alignItems="center" justifyContent="center">
            <Flex h="500px"
                w="600px"
                flexDirection="column"
                bg={formBackground}
                p={100}
                borderRadius={8}
                boxShadow="xl"
            >
                <Heading mb={5} mt="-80px"> Create a new account </Heading>
                <Input
                    placeholder="Enter your name"
                    type="email"
                    variant="filled"
                    mb={3}
                    bg="white"
                    w="100%"
                    p="20px"
                />
               
                <Input
                    placeholder="Enter your Email ID"
                    type="email"
                    variant="filled"
                    mb={3}
                    bg="white"
                    w="100%"
                    p="20px"
                />
                <Input
                    placeholder="**********"
                    type="password"
                    variant="filled"
                    mb={6}
                    bg="white"
                    p="20px"
                />
                <Button p="20px" colorScheme="teal" mb={8}>
                    Create a new  account



                </Button>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="dark_mode" mb="0">
                        Enable Dark Mode?
                    </FormLabel>
                    <Switch
                        id="dark_mode"
                        colorScheme="teal"
                        size="lg"
                        onChange={toggleColorMode}
                    />
                </FormControl>


                <Button className={style.FTButton} colorScheme='facebook' leftIcon={<FaFacebook />}>
                    Facebook
                </Button>
                <Button className={style.FTButton} colorScheme='twitter' leftIcon={<FaTwitter />}>
                    Twitter
                </Button>



            </Flex>
        </Flex>
    );
};

export default SignUp;
