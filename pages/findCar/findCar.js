let CARS_URL = "http://localhost:8080/api/cars/";

let router;

export async function initFindCar(match) {
    document.getElementById("btn-fetch-car").onclick = fetchCarData
    if (match?.params?.id) {
      const id = match.params.id
      try {
        renderCar(id)
      } catch (err) {
        document.getElementById("error").innerText = "Could not find car: " + id
      }
    }
  }


async function fetchCarData() {
    document.getElementById("error").innerText = ""
    document.getElementById("foundCar").style.display = "inline";
    const id = document.getElementById("car-id-input").value 
    if (!id) {
      document.getElementById("error").innerText = "Please provide an id"
      return
    }
    try {
      renderCar(id)
    } catch (err) {
      console.log("UPS " + err.message)
    }
  }

async function renderCar(id) {
    try {
      const car = await fetch(CARS_URL + id).then(res => res.json())
      //jsonplaceholder returns an empty object for users not found, NOT an error
      if (Object.keys(car).length === 0) {  //checks for an empty object = {}
        throw new Error("No car found for id:" + id)
      }
      if(car.status >= 400){
        document.getElementById("error").innerText = "Ingen bil fundet";
      }
      document.getElementById("carid").innerText = car.id;
      document.getElementById("brand").innerText = car.brand;
      document.getElementById("model").innerText = car.model;
      document.getElementById("priceprday").innerText = car.pricePrDay;
  
    } catch (err) {
      document.getElementById("error").innerText = err
    }
  }