import { Box, Button, ButtonGroup, Container, Flex, Heading, Image, SliderProvider, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import Login from "./Login";




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
                        <Link to="FAQs">
                            <Button h="30px" colorScheme='teal'  variant='outline'><Text fontSize='16px' color='teal.500'>FAQs</Text></Button>
                        </Link>

                        <Spacer />
                       
                        <Link to="/">
                            <Button h="30px" colorScheme='teal' variant='outline'><Text fontSize='16px' color='teal'>Login or SignUp</Text></Button>
                        </Link>
                     
                    </ButtonGroup>
                </Flex>


            </Box>
            <hr />
        </div>

    )
}

export default Navbar;







