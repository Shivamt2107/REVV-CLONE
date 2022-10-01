


import styled from '@emotion/styled'
import React from 'react'
import style from "../Css/Footer.module.css"
import { CgFacebook, FaApple, FaGooglePlay, FaPlaystation } from 'react-icons/fa';
import { BsFacebook } from "react-icons/bs";
import { Button, ButtonGroup } from '@chakra-ui/react'


function Footer() {
    return (

        <>



            <div className={style.FooterMainDiv}>

                <div className={style.FooterFlexDiv}>
                    <ul className={style.FooterUl}>Top 7 Hyundai Car Subscription Cities</ul>
                    <li className={style.FooterLi}>Hyundai Car Subscription in Bangalore</li>
                    <li className={style.FooterLi}>Hyundai Car Subscription in Hyderabad</li>
                    <li className={style.FooterLi}>Hyundai Car Subscription in Mumbai</li>
                    <li className={style.FooterLi}>Hyundai Car Subscription in Delhi-NCR</li>
                    <li className={style.FooterLi}>Hyundai Car Subscription in Chennai</li>
                    <li className={style.FooterLi}>Hyundai Car Subscription in Pune</li>
                    <li className={style.FooterLi}>Hyundai Car Subscription in Kolkata</li>

                </div>

                <div className={style.FooterFlexDiv}>
                    <ul className={style.FooterUl}>Top 7 Mahindra Car Subscription Cities</ul>
                    <li className={style.FooterLi}>Mahindra Car Subscription in Bangalore</li>
                    <li className={style.FooterLi}>Mahindra Car Subscription in Hyderabad</li>
                    <li className={style.FooterLi}>Mahindra Car Subscription in Mumbai</li>
                    <li className={style.FooterLi}>Mahindra Car Subscription in Delhi-NCR</li>
                    <li className={style.FooterLi}>Mahindra Car Subscription in Pune</li>
                    <li className={style.FooterLi}>Mahindra Car Subscription in Kolkata</li>
                    <li className={style.FooterLi}>Mahindra Car Subscription in Ahmedabad</li>

                </div>


                <div className={style.FooterFlexDiv}>
                    <ul className={style.FooterUl}>Top 7 Revv Car Subscription Cities</ul>
                    <li className={style.FooterLi}>Revv Car Subscription in Bangalore</li>
                    <li className={style.FooterLi}>Revv Car Subscription in Hyderabad</li>
                    <li className={style.FooterLi}>Revv Car Subscription in Mumbai</li>
                    <li className={style.FooterLi}>Revv Car Subscription in Delhi-NCR</li>
                    <li className={style.FooterLi}>Revv Car Subscription in Chennai</li>
                    <li className={style.FooterLi}>Revv Car Subscription in Pune</li>
                    <li className={style.FooterLi}>Revv Car Subscription in Kolkata</li>

                </div>



            </div>


            <div className={style.FooterLastSEctionMainDiv}>

                <div className={style.LastSectionDiv}>

                    <div>
                        <img src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" alt="" />
                        <p>2022 Primemover Mobility Technologies Pvt Ltd. <br /> All rights reserved</p>
                    </div>

                    <div>

                        <ul>Home</ul>
                        <ul>Subscriptions</ul>
                        <ul>How it works?</ul>
                        <ul>Subscribe Vs Buy</ul>
                        <ul>FAQs</ul>


                    </div>

                    <div>

                        <h1>Social</h1>
                        <div>
                            <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-facebook-128.png" alt="" />
                            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-128.png" alt="" />
                            <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-128.png" alt="" />
                            <img src="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-148_play_video_youtube-128.png" alt="" />
                            <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/social-linkedin-128.png" alt="" />

                        </div>
                        <h2>Download the Revv App!</h2>


                        <Button className={style.ButtonFooter} colorScheme='teal'  leftIcon={<FaApple />}>
                            Download App Store
                        </Button>
                        <br />
                        <Button className={style.ButtonFooter} colorScheme='teal' leftIcon={<FaGooglePlay />}>
                            Download Google Play
                        </Button>




                    </div>

                </div>

            </div>



        </>
    )
}

export default Footer