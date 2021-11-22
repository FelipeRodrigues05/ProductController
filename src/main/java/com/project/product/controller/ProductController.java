package com.project.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.product.beans.Products;
import com.project.product.dao.ProductsDAO;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class ProductController {

	@Autowired
	private ProductsDAO prodDao;

	// READ ALL PRODUCTS
	@GetMapping("/products")
	public ResponseEntity<List<Products>> getAllProducts() {
		List<Products> prodList = (List<Products>) prodDao.findAll();
		if (prodList.size() == 0) {

			return ResponseEntity.status(404).build();

		}

		return ResponseEntity.ok(prodList);
	}

	// CREATE PRODUCT
	@PostMapping("/products")
	public ResponseEntity<Products> createProduct(@RequestBody Products products) {
		try {
			prodDao.save(products);

			return ResponseEntity.ok(products);

		} catch (Exception e) {
			e.printStackTrace();

			return ResponseEntity.status(404).build();
		}
	}

	// UPDATE PRODUCT
	@PutMapping("/products/{id}")
	public ResponseEntity<Products> updateProduct(@PathVariable("id") int id, @RequestBody Products products) {
		try {
			Products currentProduct = prodDao.findById(id).orElseThrow(RuntimeException::new);
			currentProduct.setName(products.getName());
			currentProduct.setBrand(products.getBrand());
			currentProduct.setQuantity(products.getQuantity());
			currentProduct.setValue(products.getValue());

			Products updatedProduct = prodDao.save(products);
			return ResponseEntity.ok(updatedProduct);

		} catch (Exception e) {
			e.printStackTrace();

			return ResponseEntity.noContent().build();
		}
	}

	// DELETE PRODUCT
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Products> deleteProduct(@PathVariable("id") int id, @RequestBody Products products) {
		prodDao.deleteById(id);

		return ResponseEntity.ok().build();
	}

	// DELETE ALL
	@DeleteMapping("/products")
	public ResponseEntity<Products> resetDatabase() {
		prodDao.deleteAll();
		return ResponseEntity.ok().build();
	}

}
