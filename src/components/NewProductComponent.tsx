import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService.js';

interface ProdState {
  productName: string;
  productBrand: string;
  productQuantity: string;
  productValue: string;
}

class NewProductComponent extends Component<{}, ProdState> {
  cancel: any;

  constructor(props: any) {
    super(props)

    this.state = {
        productName: '',
        productBrand: '',
        productQuantity: '',
        productValue: ''
    }

    this.changeProductNameHandler = this.changeProductNameHandler.bind(this)
    this.changeProductBrandHandler = this.changeProductBrandHandler.bind(this)
    this.changeProductQuantityHandler = this.changeProductQuantityHandler.bind(this)
    this.changeProductPriceHandler = this.changeProductPriceHandler.bind(this)

    this.saveProduct = this.saveProduct.bind(this)
  }

  saveProduct = () => {
    ProductService.updateProduct()
  }

  // HANDLERS PARA SETAR AS DEVIDAS VARIAVEIS, COM OS VALORES FORNECIDOS NA TAG <input/>
  changeProductNameHandler = (event: any) => {
    this.setState({productName: event.target.value})
  }

  changeProductBrandHandler = (event: any) => {
    this.setState({productBrand: event.target.value})
  }

  changeProductQuantityHandler = (event: any) => {
    this.setState({productQuantity: event.target.value})
  }

  changeProductPriceHandler = (event: any) => {
    this.setState({productValue: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className="text-center"> Add Product </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input placeholder='Product Name' id = "txtname" className="form-control" value={this.state.productName} onChange={this.changeProductNameHandler}></input>
                  </div>
                  <div className="form-group">
                    <label>Brand</label>
                    <input placeholder='Product Brand' id = "txtbrand" className="form-control" value={this.state.productBrand} onChange={this.changeProductBrandHandler}></input>
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input placeholder='Product Quantity' id = "txtquantity" className="form-control" value={this.state.productQuantity} onChange={this.changeProductQuantityHandler}></input>
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input placeholder='Product Price' id = "txtvalue" className="form-control" value={this.state.productValue} onChange={this.changeProductPriceHandler}></input>
                  </div>

                  <Link to="/products"><button className="btn btn-success" onClick={this.saveProduct}> Save </button></Link>
                  <Link to="/products"><button className='btn btn-danger' style={{marginLeft: "10px"}}>Cancel</button></Link>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProductComponent;