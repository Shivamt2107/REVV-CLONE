
import React from 'react'
import style from "../Css/Subscription.module.css"



const carsData = [
  {
    id: 1,
    image_url: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Maruti_suzuki_dzire.jpg",
    name: "Maruti Swift Dzire",
    brand: "hyundai",
    city: "Bangalore",
    fuel_type: "petrol",
    cartype: "hatchback",
    price_per_month: 244.699,
    strikedoffprice: 22.199,
    fuel: "https://cdn4.iconfinder.com/data/icons/objects-6/24/Gas-Pump-128.png",
  },

  {
    id: 2,
    image_url: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Honda_amaze.jpg",
    name: "Honda Amaze",
    brand: "hyundai",
    city: "Delhi",
    fuel_type: "diesel",
    cartype: "suv",
    price_per_month: 26.999,
    strikedoffprice: 24.499,
    fuel: "https://cdn4.iconfinder.com/data/icons/objects-6/24/Gas-Pump-128.png",
  },

  {
    id: 3,
    image_url: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/honda_city.jpg",
    name: "Honda City",
    brand: "hyundai",
    city: "Chennai",
    fuel_type: "petrol",
    cartype: "sedan",
    price_per_month: 28.899,
    strikedoffprice: 25.399,
    fuel: "https://cdn4.iconfinder.com/data/icons/objects-6/24/Gas-Pump-128.png",
  },



];



function Sedans() {
  return (

    <>
     

      <div className={style.RevCarDataDiv}>
        {
          carsData.map((el) => {
            return (
              <div key={el.id} className={style.CarCardData}>

                <img src={el.image_url} alt="carData" className={style.carImg} />
                <h1>{el.name}</h1>
                <div>
                  <img className={style.petrol} src={el.fuel} alt="" />
                  <p>{el.fuel_type}</p>
                </div>
                <h2>₹ {el.strikedoffprice} <span className={style.carRupee}>/month ₹{el.price_per_month}</span></h2>
              </div>
            )
          })
        }
      </div>


    </>
  )
}

export default Sedans






