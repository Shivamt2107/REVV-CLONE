

import React from 'react'
import style from "../Css/Subscription.module.css"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Flex, FormControl, FormLabel, Image, Input, Select, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import Hatchbacks from '../RevCar/Hatchbacks'
import Sedans from '../RevCar/Sedans'
import SUVs from '../RevCar/SUVs'
import { AddIcon, MinusIcon, PhoneIcon } from '@chakra-ui/icons'
import Footer from '../Footer/Footer'

const sanitized = [
    { id: 1, image: "https://www.revv.co.in/assets/RentalImages/HomeScreen/safeCars/mask-group125.webp" },
    { id: 2, image: "https://www.revv.co.in/assets/RentalImages/HomeScreen/safeCars/banner-sanitised01.png" },
    { id: 3, image: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg" },
    { id: 4, image: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg" },
    { id: 5, image: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_04-min.jpg" },


]



function Subscription() {
    return (

        <>
            <div className={style.subBackImg}>

                <div className={style.headerSubscription}>
                    <div>
                        <div className={style.rentalAndSubscriptionColor}>
                            <button>
                                <h6 className={style.rentalHSixTag}>Rentals</h6>
                                <p className={style.rentalPTag}>For hours & days</p>
                            </button>

                            <button>
                                <h6 className={style.rentalHSixTag}>Subscriptions</h6>
                                <p className={style.rentalPTag}>For months & years</p>
                            </button>

                        </div>

                        <div className={style.underFormSubsciptionImg} >
                            <img src="https://www.revv.co.in/assets/subscription/brandLogo/subscription_web.png" alt="abc" />
                            <h1>Car Subscriptions in Mumbai</h1>
                        </div>

                        <div className={style.subscriptionForm}>


                            <FormControl className={style.formmap}>
                                <Flex border="0.5px solid gray" borderRadius="10px">
                                    <img className={style.mapImg} src="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-059_pin_location-128.png" alt="" />

                                    <Select className={style.select} border="none" h="60px" placeholder='Select city' >

                                        <hr />
                                        <option border="none">Pune</option>
                                        <option border="none">Mumbai</option>
                                        <option border="none">Bangalore</option>
                                        <option border="none">Hyderabad</option>
                                        <option border="none">Delhi-NCR</option>
                                        <option border="none">Chennai</option>

                                        <hr />
                                        <option border="none">Pune</option>
                                        <option border="none">Mumbai</option>
                                        <option border="none">Bangalore</option>
                                        <option border="none">Hyderabad</option>
                                        <option border="none">Delhi-NCR</option>
                                        <option border="none">Chennai</option>



                                    </Select>
                                </Flex>
                            </FormControl>


                        </div>


                        <div className={style.searchMothAndYear}>

                            <div>
                                <div>
                                    <h1>Search     <br /> by the moths</h1>
                                </div>
                                <p>For 1,2,3 & 6 months</p>
                            </div>

                            <div>

                                <div>
                                    <h1>Search     <br /> by the year</h1>
                                </div>
                                <p>For 1 & 2 years</p>

                            </div>

                        </div>


                    </div>




                    <div>
                        <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/LT_Desktop_1_FG.webp" alt="sub_img" className={style.subscriptionImg} />
                    </div>

                </div>

            </div>

            <div className={style.whatIsRevSubscription}>


                <div>
                    <h2>What is Revv Subscription?</h2>
                    <p>It’s a different way of owning a car, without any down payment or car loan. Your monthly fee covers insurance, service & maintenance. Plus, there are no long term commitments - you can return, extend or buy-out the car when you want. And all this at a price cheaper than an EMI!</p>
                    <Button colorScheme='teal' variant='outline'>
                        Know More
                    </Button>
                </div>



                <div>
                    <iframe className={style.youtube} width="100%" height="100%" src="https://www.youtube.com/embed/KccvwVosjcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>



            </div>

            <div className={style.sanitizedAndSafe}>

                <span>Sanitized & safe cars</span>
                <div className={style.sanitizedDiv}>
                    {
                        sanitized.map((el) => {
                            return (
                                <>
                                    <div key={el.id} >
                                        <img src={el.image} alt="" />
                                    </div>

                                </>
                            )
                        })
                    }

                </div>

            </div>

            <div className={style.RevCarsMainDiv}>
                <h2>Revv Cars at affordable prices</h2>

                <div>
                    <Tabs size="xl" variant='enclosed' className={style.RevCarsMainDivTabs}>
                        <TabList className={style.TabList}>
                            <Tab _selected={{ color: 'teal' }} className={style.Tab}>Hatchbacks</Tab>
                            <Tab _selected={{ color: 'teal' }} className={style.Tab}>Sedans</Tab>
                            <Tab _selected={{ color: 'teal' }} className={style.Tab}>SUVs</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Hatchbacks />
                            </TabPanel>
                            <TabPanel>
                                <Sedans />
                            </TabPanel>
                            <TabPanel>
                                <SUVs />
                            </TabPanel>

                        </TabPanels>
                    </Tabs>
                </div>
            </div>


            <div className={style.HowItWorks}>

                <div className={style.callWorks}>
                    <h1>How it Works</h1>
                    <p className={style.callWorksIcon}>
                        <p><PhoneIcon /></p>
                        call <span className={style.number}>+91 9921363500</span>to know more
                    </p>
                </div>

                <div className={style.howItWorksSecoundMainDiv}>
                    <div className={style.WorksDiv}>
                        <img className={style.numberImg} src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-1@2x.png" alt="" />
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-1.svg" alt="" />

                            <div>
                                <h1>Select & Reserve</h1>
                                <p>Pick your car model and reserve online</p>
                            </div>
                        </div>
                    </div>


                    <div className={style.WorksDiv}>
                        <img className={style.numberImg} src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-2@2x.png" alt="" />
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-2.svg" alt="" />

                            <div>
                                <h1>Super Fast Processing</h1>
                                <p>We will call you to understand your preferences, basic KYC, Refundable Security Deposit etc. (No CIBIL Check Required)</p>
                            </div>
                        </div>
                    </div>


                    <div className={style.WorksDiv}>
                        <img className={style.numberImg} src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-3@2x.png" alt="" />
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-3.svg" alt="" />

                            <div>
                                <h1>Preparing Your Car</h1>
                                <p>After detailed quality checks and deep cleaning, your car is ready for delivery within 10-14 days</p>
                            </div>
                        </div>
                    </div>


                    <div className={style.WorksDiv}>
                        <img className={style.numberImg} src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-4@2x.png" alt="" />
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-4.svg" alt="" />

                            <div>
                                <h1>Home Delivery</h1>
                                <p>Get your car delivered at your doorstep</p>
                            </div>
                        </div>
                    </div>



                    <div className={style.WorksDiv}>
                        <img className={style.numberImg} src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-5@2x.png" alt="" />
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-5.svg" alt="" />

                            <div>
                                <h1>Hassle Free Experience</h1>
                                <p>Enjoy your car! We'll take care of routine service & insurance claims with doorstep service</p>
                            </div>
                        </div>
                    </div>



                    <div className={style.WorksDiv}>
                        <img className={style.numberImg} src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-6@2x.png" alt="" />
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-6.svg" alt="" />

                            <div>
                                <h1>Select & Reserve</h1>
                                <p>Pick your car model and reserve online</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>


            {/* FAQ section */}
            <div className={style.FAQMainDiv}>

                <div>
                    <h1>FAQs</h1>
                    <div>

                        {/* 1 */}
                        <Accordion allowMultiple className={style.FAQSectionDiv}>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' fontSize="19px">
                                                    When I use a car subscription, what are my liabilities in case of damage/ accident?
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='21px' color="teal" />
                                                ) : (
                                                    <AddIcon fontSize='21px' color="teal" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            In case of Revv car subscription your car will be covered by comprehensive insurance, to take care of damage cases. On every case of damage, your liability would be limited to the difference between the costs incurred to repair the damage and the proceeds from insurance claim with maximum liability limited to INR 10,000. In situations of irresponsible or unsafe or negligent usage, there could be discretionary exceptions to this policy, whereby you could be liable for all damages irrespective of whether or not we are able to claim insurance in such cases.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                        <hr color='teal' />

                        {/* 2 */}
                        <Accordion allowMultiple className={style.FAQSectionDiv}>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' fontSize="19px">
                                                    I reside in Mumbai and I have the Revv Subscription, can I end my subscription early, or choose to keep the car longer?
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='21px' color="teal" />
                                                ) : (
                                                    <AddIcon fontSize='21px' color="teal" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Yes, you can extend the car subscription anytime at normal prices or chose to return the car anytime by just paying the fee difference. This benefit is available in Mumbai as well as other cities within India.
                                            Extend anytime at normal prices
                                            Return anytime, Just pay fee difference
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                        <hr color='teal' />
                        {/*3  */}
                        <Accordion allowMultiple className={style.FAQSectionDiv}>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' fontSize="19px">
                                                    Is car subscription available in Mumbai and are there any restrictions on what can I use the car for?
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='21px' color="teal" />
                                                ) : (
                                                    <AddIcon fontSize='21px' color="teal" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            It is very easy to get a car subscription in Mumbai and you can use the car for pretty much all the normal requirements. Abnormal usage (e.g., speed racing, towing/pushing/propelling, transportation of goods or people on commercial basis, transportation of large/heavy/hazardous items) is not allowed.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                        <hr color='teal' />
                        {/* 4 */}
                        <Accordion allowMultiple className={style.FAQSectionDiv}>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' fontSize="19px">
                                                    What are the benefits of Car Subscription?
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='21px' color="teal" />
                                                ) : (
                                                    <AddIcon fontSize='21px' color="teal" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            Whether you are in Mumbai or want to travel to other cities, car subscription is a good choice. No upfront payments such as down payment or road tax, flexibility of subscribing for min. 1 month and extending or returning anytime, insurance and maintenance included in monthly fees, 24X7 roadside assistance and hassle-free service & maintenance are just a few benefits of Revv subscription
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                        <hr color='teal' />
                        {/* 5 */}

                        <Accordion allowMultiple className={style.FAQSectionDiv}>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' fontSize="19px">
                                                    I am in Mumbai, what will be the car registration type and whose name will it be registered in?
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='21px' color="teal" />
                                                ) : (
                                                    <AddIcon fontSize='21px' color="teal" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            When you have a car subscription from Revv, the car will be registered as a premium commercial vehicle (black plate) with an All India permit and can be driven in Mumbai or anywhere within India without any problem. It will be registered in the name of Revv (PrimeMover Mobility Technologies Pvt. Ltd.) or its supply partners.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                        <hr color='teal' />

                    </div>

                </div>
                <hr />
                <Button colorScheme='teal' variant='outline' ml="-1050px" mt="15px"> View All </Button>
            </div>


            {/* our journey so far */}

            <div className={style.OurJourneyMainDiv}>
                <div>
                    <h1>Our Journey <span className={style.OurJourneySpanFar}>So far</span></h1>

                    <div className={style.OurJourneyCards}>
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-happy-cus.svg" alt="our_journey" />
                            <h1>2500+</h1>
                            <p>Happy Subscribers</p>
                        </div>

                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-across-india.svg" alt="our_journey" />
                            <h1>22+Cities</h1>
                            <p>Across India</p>
                        </div>

                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-subscription.svg" alt="our_journey" />
                            <h1>5000+years</h1>
                            <p>SubScription Booked</p>
                        </div>

                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-customer-rating.svg" alt="our_journey" />
                            <h1>4.7 / 5</h1>
                            <p>Customer Rating</p>
                        </div>


                    </div>


                </div>

            </div>



            {/* footer */}

            <Footer />





        </>
    )
}

export default Subscription