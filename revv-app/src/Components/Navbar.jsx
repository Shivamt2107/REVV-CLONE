import { Box, Button, ButtonGroup, Container, Flex, Heading, Image, SliderProvider, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import Login from "./Login";

import style from "../Css/FAQs.module.css"


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
                            <Button h="30px" colorScheme='teal' variant='outline'><Text fontSize='16px' color='teal.500'>FAQs</Text></Button>
                        </Link>

                        <Spacer />


                        <Button h="30px" colorScheme='teal' variant='outline'><Text fontSize='16px' color='teal'><Link to="/login">Login</Link></Text></Button>
                     
                        <Button h="30px" colorScheme='teal' variant='outline'><Text fontSize='16px' color='teal'><Link to="/signup">SignUp</Link></Text></Button>




                    </ButtonGroup>
                </Flex>


            </Box>
            <hr />
        </div>

    )
}

export default Navbar;







