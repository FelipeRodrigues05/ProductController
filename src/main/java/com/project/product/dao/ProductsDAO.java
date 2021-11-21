package com.project.product.dao;

import org.springframework.data.repository.CrudRepository;

import com.project.product.beans.Products;

public interface ProductsDAO extends CrudRepository<Products, Integer> {
		
	public Products findByNameAndBrand(String name, String brand);
	
	public Products removeByNameAndBrand(String name, String brand);
}
