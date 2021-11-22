import axios from "axios"

const BASE_URL = "http://localhost:8080/products"

class ProductService {

  getProducts() {
    return axios.get(BASE_URL)
  }

  createProduct() {
    let product = {
      "name": document.getElementById("txtname").value,
      "brand": document.getElementById("txtbrand").value,
      "quantity": document.getElementById("txtquantity").value,
      "value": document.getElementById("txtvalue").value
    }

    console.log(product)

    // CONFIGS > POSTMAN/INSOMNIA
    let content = {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json"
      }
    }

    // ENVIA OS DADOS DO FRONT PARA O BACK
    fetch("http://localhost:8080/products", content)
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("added", JSON.stringify(res))
      })
      .catch(err => {
        window.alert("Algo deu errado\nTente Novamente!")
        console.log(err)
      })
  }
  
  getProductById(productId) {
    return axios.get(BASE_URL + "/" + productId)
  }

  updateProduct() {
    let product = {
      "name": document.getElementById("txtname").value,
      "brand": document.getElementById("txtbrand").value,
      "quantity": document.getElementById("txtquantity").value,
      "value": document.getElementById("txtvalue").value
    }

    console.log(product)

  }

}

export default new ProductService()