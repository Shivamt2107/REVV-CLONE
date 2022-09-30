import { Box, Button, ButtonGroup, Container, Flex, Heading, Image, SliderProvider, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom"


function Navbar() {

    return (
        <div >
            <Box>

                <Flex className="navbar" w="full" alignItems='center' gap='15' pl="60px" pr="40px" mt="5px" bg="">
                    <Link to="/">
                        <Box p='2' cursor="pointer">
                            <Image src='https://www.revv.co.in/grapheneImages/newopen/logo.svg' alt='Dan Abramov' />
                        </Box>
                    </Link>
                    <Spacer />
                    <ButtonGroup gap='2' mt="2px">

                        <Link to="hyundai">
                            <Button h="30px" colorScheme='teal' variant='outline'><Text fontSize='16px' color='teal'>Hyundai Subscripition</Text></Button>
                        </Link>

                        <Link to="mahindra">
                            <Button h="30px" colorScheme='teal' variant='outline'><Text fontSize='16px' color='teal'>Mahindra Subscripition</Text></Button>
                        </Link>
                        <Spacer />

                        <Text fontSize='20px' color='black'>
                            <Link to="login"> Login</Link> or <Link to="signup">SignUp</Link>
                        </Text>
                    </ButtonGroup>
                </Flex>


            </Box>
        </div>

    )
}

export default Navbar;

