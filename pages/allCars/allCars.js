let CARS_URL = "http://localhost:8080/api/cars/";

let router;


async function getAllCars() {
    const allCars = await fetch(CARS_URL).then(r => r.json());
    const rows = allCars.map(car => `<tr>
    <td>${car.id}</td>
    <td>${car.brand}</td>
    <td>${car.model}</td>
    <td>${car.pricePrDay}</td>
  </tr>`).join("");
  document.getElementById("tbl-body-cars").innerHTML = rows;
}
export function initAllCars(navigoRouter) {
    getAllCars()
    router = navigoRouter
  }