package com.example.webo.service;

import java.util.List;

import com.example.webo.entity.Users;

public interface UserService {

	
	//adds new users to database
	  String addUser(Users user);
	  
	  // checks email is already present in database or not
	  
	boolean checkmobile(String mobile);
	
	//validate users credentials
	boolean validate(String mobile, String password);

	

	List<Users> findAllUsers();

	
}
