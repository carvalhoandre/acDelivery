package com.carvalhoandre.dsdeliver.repositories;

import java.util.List;


import com.carvalhoandre.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product ,Long>  {
	
	List<Product> findAllByOrderByNameAsc();
}
