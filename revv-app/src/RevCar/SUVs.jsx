
import React from 'react'
import style from "../Css/Subscription.module.css"

const carsData = [
  {
    id: 1,
    image_url: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Mahindra_marazzo.jpg",
    name: "Mahindra Marazzo",
    brand: "hyundai",
    city: "Bangalore",
    fuel_type: "petrol",
    cartype: "hatchback",
    price_per_month: 13500,
    strikedoffprice: 14500,
    fuel: "https://cdn4.iconfinder.com/data/icons/objects-6/24/Gas-Pump-128.png",
  },

  {
    id: 2,
    image_url: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Maruti_suzuki_vitara_brezza.jpg",
    name: "Maruti Vitara Brezza",
    brand: "hyundai",
    city: "Delhi",
    fuel_type: "diesel",
    cartype: "suv",
    price_per_month: 11900,
    strikedoffprice: 13700,
    fuel: "https://cdn4.iconfinder.com/data/icons/objects-6/24/Gas-Pump-128.png",
  },

  {
    id: 3,
    image_url: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/SUV_new/Maruti_suzuki_ertiga.jpg",
    name: "Maruti Ertiga",
    brand: "hyundai",
    city: "Chennai",
    fuel_type: "petrol",
    cartype: "sedan",
    price_per_month: 11500,
    strikedoffprice: 13500,
    fuel: "https://cdn4.iconfinder.com/data/icons/objects-6/24/Gas-Pump-128.png",
  },



];


function SUVs() {
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

export default SUVs





