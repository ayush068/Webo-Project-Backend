package com.example.webo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.webo.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
