package com.carvalhoandre.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carvalhoandre.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order ,Long>  {
}
