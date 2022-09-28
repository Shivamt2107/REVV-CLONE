

import React from 'react'
import style from "../Css/Subscription.module.css"
import { Flex, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"




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


                    </div>




                    <div>
                        <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/LT_Desktop_1_FG.webp" alt="sub_img" className={style.  subscriptionImg} />
                    </div>

                </div>

            </div>


        </>
    )
}

export default Subscription