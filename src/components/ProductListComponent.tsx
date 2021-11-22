import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService.js';

interface ProductProps {
  id: number;
  name: string;
  brand: string;
  quantity: number;
  value: number; 
}

interface ProductState {
  products: Array<ProductProps>
}


class ProductListComponent extends Component<{}, ProductState> {
  
  constructor(props: any) {
    super(props);
    
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    ProductService.getProducts().then((res) => {
      this.setState({ products: res.data })
    })

  }

  render() {
    return (
      <div>
        <h2 className="text-center">Products List</h2>
        <div className = "row">
          <Link to="/add-product"><button className="btn btn-primary">New Product</button></Link>
        </div>
        <div className='row'>

          <table className="table table-striped table-bordered">

            <thead>
              <tr>
                <th> Name </th>
                <th> Brand </th>
                <th> Quantity </th>
                <th> Value </th>
                <th> Actions </th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.products.map(
                  product =>
                    <tr key={product.id}>
                      <td> {product.name} </td>
                      <td> {product.brand}© </td>
                      <td> {product.quantity} un. </td>
                      <td> R${product.value} </td>
                      <td>
                        <Link to={`/update-product/${product.id}`}><button className="btn btn-info">Update</button></Link>
                        </td>
                    </tr>
                )
              }
            </tbody>

          </table>

        </div>
      </div>
    );
  }
}

export default ProductListComponent;