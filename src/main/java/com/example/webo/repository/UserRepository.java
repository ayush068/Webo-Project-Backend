package com.example.webo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.webo.entity.Users;


	public interface UserRepository extends JpaRepository<Users, Integer>{
		boolean existsBymobile(String mobile);

		

		Users getBymobile(String mobile);
		 
}
