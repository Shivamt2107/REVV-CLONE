import styled from '@emotion/styled'
import React from 'react'
import style from "../Css/FAQs.module.css"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, ButtonGroup } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import Footer from '../Footer/Footer'


function FAQs() {
  return (

    <>

      <div className={style.FAQAllbody}>

        <div className={style.FAQsMainDiv}>

          <div className={style.ButtonDiv}>
            <Button h="50px" bg="gray.200" className={style.buttonCss} color="black" colorScheme='teal' variant='outline'>
              About Revv
            </Button>
            <br />
            <Button h="50px" className={style.buttonCss} bg="gray.200" color="black" colorScheme='teal' variant='outline'>
              Your Booking
            </Button>
            <br />
            <Button h="50px" className={style.buttonCss} bg="gray.200" color="black" colorScheme='teal' variant='outline'>
              Payments & Refunds
            </Button>
            <br />
            <Button h="50px" bg="gray.200" className={style.buttonCss} colorScheme='teal' color="black" variant='outline'>
              Your Trip
            </Button>
          </div>





          <div className={style.FaQsSecoundSection}>

            <h1>ABOUT REVV</h1>

            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What is Revv?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Revv is a self drive car rental service that provides you with all the privacy, fun and convenience of your own car, without the hassles of owning and maintaining one. We drop and pick-up cars from your doorstep, so that you can spend time on the more important thing - your drive! The doorstep drop and pick-up of cars is our standard way of serving you, and is available throughout the areas served by us.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Am I eligible to use Revv's services?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      To avail Revv's services, you must be at least 21 years old, and your driving license for "Light Motor Vehicles" must be at least 1 year old (at the time of starting the trip). Driving license printed on A4 sheet of paper (original or otherwise), driving license on Digilocker or M-Parivaahan app and commercial driving licenses will not be accepted.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>




            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Which are the areas where I can avail Revv's services?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      We are currently serving in Bangalore, Hyderabad, Chennai, Mumbai, Pune, Delhi NCR, Chandigarh, Jaipur, Visakhapatnam, Mysore, Coimbatore, Mangalore, Kolkata, Kochi, Ahmedabad, Trivandrum, Surat, Tirupati , Vijayawada, Bhubaneswar, Nagpur & Vadodara.

                      Delhi NCR : We are covering most parts of Delhi & Gurgaon and some parts of Noida & Ghaziabad.

                      Hyderabad, Bangalore, Mumbai, Pune, Jaipur, Chennai, Visakhapatnam, Mangalore, Kolkata, Kochi, Ahmedabad, Trivandrum, Surat, Tirupati, Vijayawada, Bhubaneswar, Nagpur & Vadodara : We serve the main city and the airport area.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>




            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Is there a "Kilometres limit" to how much I can drive?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      This depends on the pricing plan that you select. If you go for the “Unlimited kms” pricing plans (available only without fuel, and only for bookings whose duration is more than 72 hours), there is absolutely no limit to the kilometres that you can drive, and you have complete flexibility of driving the car as much as you want. Revv it up! Other pricing plans have a "Kilometres limit", which varies based on the plan selected. You can still drive beyond the kilometres limit, but the additional kilometres clocked will attract an additional charge.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <Accordion allowMultiple className={style.AccordionCss}>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Are there restrictions on where I can travel?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      All of our cars are equipped with an All India Tourist Permit, so you are free to drive anywhere in the country. All India Tourist Permit means that the car is legally permitted to ply in any state in the country, after paying the inter-state taxes at the state borders. However, we do not permit taking Revv vehicles to Leh/Ladakh region, Kaza/Nako region and spiti valley. We also advise you to avoid bad terrains (especially in non- SUV cars) and areas affected by civil unrest.

                      Please note: Interstate taxes at the state borders are to be paid and borne by the customer. Our cars are equipped with Fast tag devices for your convenience. The toll charges incurred during your trip will be billed to you in your invoice.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Do I have to bring the car back to the same location?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      No, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking later, however, it will then attract applicable modification charges.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Can I book a one-way trip?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Yes, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking later, however, it will then attract applicable modification charges.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Can I book for any duration of time?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      For rentals, the minimum booking duration is 10 hours, and the maximum is upto 90 days.

                      If you need a car for longer period of time, please try Revv subscriptions, wherein you can subscribe to a car for minimum of 1 month and maximum of 36 months. Check out our
                      subscriptions
                      page for more details.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What is Peak Season? Are the prices different during Peak Season?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Peak season refers to festive periods of very high demand. Our hourly rental tariffs are different for weekdays (Mon-Fri), weekends (Sat-Sun) and the Peak Season. The dates and prices for the Peak Season are dynamically decided based on the demand.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What kind of cars can I choose from?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      We have a curated selection of cars, which includes block-buster models across segments such as SUVs, ultra-luxury cars, hatchbacks and sedans. We are constantly increasing our portfolio; so keep a close watch for your favourite car, just in case we don’t have it already.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          In the event of an accident or damage to the vehicle, what is my maximum liability?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      In the event of damages, your liability is limited to a maximum of Rs 10000. You will need to pay Damage Fee equivalent to the repair cost (as estimated by an authorized dealership) and downtime losses, upto a maximum of Rs 10000. This is independent of the nature and terms of the insurance cover that Revv has on the cars.

                      Please note that the maximum liability policy is intended to benefit and protect the responsible user. In situations of irresponsible or unsafe or negligent usage, there could be discretionary exceptions to this policy, whereby the user could be liable for all damages irrespective of whether or not Revv is able to claim insurance in such cases. Examples of such situation include, but are not limited to:

                      When the User is not in compliance with the laws and/or with terms of the Revv User Agreement
                      When the User is found to be under the influence of alcohol/narcotics while driving
                      When the User is over-speeding (i.e. above prescribed speed limit of road or 125 Kms/Hr, whichever is lower)
                      When the User is in violation of traffic rules or of the Motor Vehicles Act (for example, if the User has not paid the inter-state tax while crossing a state border)
                      When the person driving the vehicle at the time of the incident is found to be different than the one who made the booking
                      When the vehicle workshop and/or insurance company deem the damage to be consequential in nature (this will be clearly stated in the accident report). Consequential damage occurs when the User continues driving the vehicle even when it is performing abnormally
                      When the number of people in the car at the time of the incident exceed the standard seating capacity of the car
                      When the incident happened in a state for which the user had failed to pay the inter-state tax while entering the state
                      When there is misrepresentation of information in the driving license and ID proof details shared by the user
                      Where there is clear evidence of extremely rash and negligent driving on the user’s part
                      In cases where the estimated damage charges exceed the security deposit, we will request the user to pay the same at the time of returning the car. In cases of non-payment, Revv reserves the right of legal action, reporting to credit bureau and reporting to other authorities or persons, irrespective of their direct relevance to the case.

                      In cases of accident, fare for the unused hours will not be refunded.

                      Revv typically avoids charging for very minor damages (e.g., minor scratches and dents), and covers the vast majority of damage incidents under the maximum liability policy.

                      In cases of collision or User failure, towing and impounding charges will be paid by the User. In cases of vehicle failure, towing and impounding charges will be paid by us.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Is Revv 24/7?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Yes, we are accessible 24x7. But as of now, we don’t allow bookings starting or ending between 12 midnight and 4 am.


                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Can I take a pet along with me?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      While we love pets, some of our customers might be allergic to them so we can’t allow pets in cars.



                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Is there any speed limit?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      125 Kms/Hr is the speed limit. Exceeding it will attract a penalty for over-speeding. In some states (e.g., Karnataka, Maharashtra, Delhi-NCR), some cars might be equipped with speed governors, which will automatically restrict the speed to 80Kms/Hr. This is as per government directives.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <h1 className={style.youTrip}>YOUR TRIP</h1>


            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          How do I make a booking?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Booking with us is quick and easy. You can make a booking through our app (android or iOS), website or by giving us a call at +91-9250035555. Just select your city, date and time of your trip, key in your location and choose the type of car you want. Then enter your payment details, confirm payment and you are ready to go!

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What if I need to modify or cancel my booking?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      You can modify or cancel your booking through either our app, website or by calling us. Our ability to modify/cancel the booking and the relevant charges depend upon your time of informing us and availability of cars. Please refer to our Fee policy for more details on the allowable modifications and applicable charges.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>

            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What happens if I return the car late?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      We understand that sometimes there can be last-minute changes in your plans, and we will try our best to accommodate them. But in situations where it can cause trouble to the next user (ie, the person whose booking starts after your ends), we cannot allow late returns. Please refer to our Fee policy for more details on late fees and extension charges

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          If I return the car before the scheduled end time of my booking, do I get any refunds?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      In case of shortening, we can try arranging an earlier pickup of the car, if you inform us at least 3 hours before your preferred pick-up time. However, no charges or refunds will be applicable on the base fare for the original trip.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          If I return the car before the scheduled end time of my booking, do I get any refunds?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      In case of shortening, we can try arranging an earlier pickup of the car, if you inform us at least 3 hours before your preferred pick-up time. However, no charges or refunds will be applicable on the base fare for the original trip.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What all is included in my booking?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Our prices include the rental charge, insurance and GST. You have the option of “with fuel” and “without fuel” pricing. In “with fuel” pricing, prices include fuel. In “without fuel” pricing, prices exclude fuel.

                      Our prices do not include tolls, inter-state taxes and parking. No hidden charges!

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>





            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Is fuel included in my booking?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      For “with fuel” pricing: Prices include fuel. If you need to refuel during your journey, we will reimburse the cost. Just show the fuel bills to our delivery executive at the time of returning the car, and allow him to take a photograph of them. Please do NOT hand-over the original bill to the delivery executive, we will not be responsible for loss of bills handed over to the delivery executive. Please note that:
                      Fuel bills need to be shown to our delivery executive at the time of return, we will NOT be able to reimburse fuel bills shared with us later.
                      The fuel expense needs to reconcile reasonably with the distance travelled.
                      The fuel expense needs to reconcile reasonably with the standard fuel efficiency of the car. For the purpose of this reconciliation and for the benefit of the user, we assume a lower mileage than what is defined by ARAI (Automotive Research Association of India).
                      The date on the fuel bill should fall within the booking period.
                      Hand-written fuel bills will be considered invalid.
                      For “without fuel” pricing: Prices exclude fuel. In case you are returning the car at a lower fuel level than what was received, we will charge a flat Rs 500 refuelling service charge + actual fuel cost to get the tank to the same level as what was received.

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Can I club two discount vouchers?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      You can only use one offer/promo per booking.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>




            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Can I create a booking with Revv if I have international DL?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      A person who is having an International DL, can definitely create a booking with Revv under the condition that He/She must have an IDP (International Driving Permit) alongwith International DL and passport.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <h1 className={style.youTrip}>PAYMENTS & REFUNDS</h1>



            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What modes of payments are accepted?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      We accept payments by credit cards, debit cards, net-banking, UPI and popular wallets. Payments need to be made in advance through our website or mobile app.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>




            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Do I get any reimbursement for the fuel I fill in my Revv car?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      For “with fuel” pricing: If you need to refuel during your journey, we will reimburse the cost. Just show the fuel bills to our delivery executive at the time of returning the car, and allow him to take a photograph of them. Please do NOT hand-over the original bill to the delivery executive, we will not be responsible for loss of bills handed over to the delivery executive. Please note that:
                      Fuel bills need to be shown to our delivery executive at the time of return, we will NOT be able to reimburse fuel bills shared with us later.
                      The fuel expense needs to reconcile reasonably with the distance travelled.
                      The fuel expense needs to reconcile reasonably with the standard fuel efficiency of the car. For the purpose of this reconciliation and for the benefit of the user, we assume a lower mileage than what is defined by ARAI (Automotive Research Association of India).
                      The date on the fuel bill should fall within the booking period.
                      Hand-written fuel bills will be considered invalid.
                      For “without fuel” pricing: We give you a full tank, and we need the same back from you. Hence there is no need for any fuel reimbursements. In the rare instances where we give you less-than- full tank fuel, and you return us more fuel than what you got from us, we will reimburse the difference.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>





            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Who pays for parking and tolls/inter-state entry taxes?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      These expenses depend on your usage, hence you need to pay for them.

                      Our cars are equipped with Fast tag devices for your convenience. The toll charges incurred during your trip will be billed to you in your invoice.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>




            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          Do I need to pay the fines incurred during my booking, due to parking/traffic violations?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Yes.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>

            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          How much time does it take to get my refund back?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      All refunds are typically made within 10 days of completing the bookings. However, in some cases, there might be some procedural delays from the banks. Please do let us know in case your refund has not been credited to your account within 10 days and we will make sure we do everything we can to expedite it.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <h1 className={style.youTrip}>YOUR TRIP</h1>


            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What documents do I need to take the delivery of my Revv car?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      While taking the delivery of your car, you will need to show your ORIGINAL Driving License and ID proof (same as the ones whose details you provided while making the booking). These documents will be verified for validity. In case these documents are unavailable/invalid/unverifiable, your booking will be subject to cancellation. Revv’s decision in this matter will be final and binding. Please note that driving license printed on A4 sheet of paper (original or otherwise) will not be considered as a valid document.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          How do I check-in for my booking?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Our delivery executive will deliver the car to your doorstep. Before he hands- over the car to you, he will share with you a pre-filled checklist that summarises the car’s condition at that time. Please confirm the details in the checklist, sign it and you are good to go. In case any information in the checklist is not correct, please notify the delivery executive or call us.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What do I do if the vehicle breaks down or if I meet with an accident?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      In such cases, please notify us Revv immediately (by calling) and we will guide you through the entire process. We will coordinate with the road-side assistance and insurance. Unless unavoidable, please do not leave the scene of the accident until proper support has arrived. You may be required to file/sign formality documents associated with the accident.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>




            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          How do I check-out from my booking?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      On your return, please check-out from your booking using our app. You also have the option of calling us to notify. Even if you forget to notify us, you will be charged only till the actual end time of your booking.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>


            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What are the requirements when I drive across a State border?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Each State has different procedures and regulations. Most States will require a commercially registered vehicle to stop at the border RTO station to pay the relevant tolls/taxes. All Revv cars are equipped with original copies of the RC Card, Insurance Note, Self-Drive License, and the All India Permit, which will help you get through this conveniently. For many states, the state entry tax can be paid online as well.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>



            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What is the amount that I must pay at a State border crossing?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Prices vary depending on State and vehicle type (larger vehicles have higher tolls/taxes).
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>




            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What do I do if a border officer at the State RTO crossing is causing a problem?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      This should not occur since all of Revv's vehicles are equipped with all the necessary documents. In the event that an incident arises, please give us a call, and we will do our best to help you get back to driving
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>




            <Accordion allowMultiple className={style.AccordionCss}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton bg="gray.100">
                        <Box flex='1' fontSize='19px' fontWeight="600" textAlign='left'>
                          What if I leave something in Revv's car?
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize='19px' />
                        ) : (
                          <AddIcon fontSize='19px' />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Well, we will do our best to help you find your belongings if you inform us soon enough. But as you can imagine, we cannot guarantee it since finding it back is not fully in our control. So, please check the car thoroughly before handing it back to us.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>






          </div>



        </div>
      </div>



      <Footer/>


    </>
  )
}

export default FAQs