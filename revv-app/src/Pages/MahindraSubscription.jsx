import React from 'react'
import style from "../Css/HyundaiSubscription.module.css"
import { Button, Form } from 'react-bootstrap';
import { Flex, FormControl, FormHelperText, FormLabel, Input, Select } from '@chakra-ui/react'





function MahindraSubscription() {
  return (

    <>

      <div className={style.mainDivShivam}>





        <div className={style.mahindraDivBackIMG}>

          <div className={style.hyundaiFormDiv}>

            <img src="https://www.revv.co.in/grapheneImages/newopen/logo_mahindra_sub_web@3x.png" alt="" />

            <p>Powered by Revv</p>


            <h1 className={style.hyundaiCarHTwoTag}>Mahindra Cars Subscription in India</h1>

            <div className={style.FormControl}>
              <FormControl className={style.formmap}>
                <Flex border="0.5px solid gray" borderRadius="10px" p="5px">
                  <img className={style.mapImg} src="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-059_pin_location-128.png" alt="" />

                  <Select className={style.select} border="none" h="30px" fontSize="19px" placeholder='Select city' >

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



              <div className={style.FormDate}>
                <FormControl>

                  <Form.Group className={style.DateGroup}>
                    <Form.Label className={style.DateLabel}>Select Date :</Form.Label>

                    <Form.Control className={style.dateControl} type="date" name="dob" placeholder="Date of Birth" />
                  </Form.Group>

                </FormControl>
              </div>

            </div>



            <Button className={style.HyundaiButton} colorScheme='teal' variant='solid'>
              Search
            </Button>






          </div>



        </div>

      </div>




    </>
  )
}

export default MahindraSubscription







