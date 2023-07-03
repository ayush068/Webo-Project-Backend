package com.example.webo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.webo.entity.Users;
import com.example.webo.repository.UserRepository;



@Service
public class UserServiceImplementation implements UserService {
	
	@Autowired
	UserRepository repo;

	@Override
	public String addUser(Users user) {
		repo.save(user);
		return "User added successfully";
	}

	@Override
	public boolean checkmobile(String mobile) {
		// TODO Auto-generated method stub
		return repo.existsBymobile(mobile);
	}

	// for validating users
		@Override
		public boolean validate(String mobile, String password) {
			// TODO Auto-generated method stub
			if(repo.existsBymobile(mobile)) {
				Users u=repo.getBymobile(mobile);
				String dbPassword=u.getPassword();
			

				if(password.equals(dbPassword)) {
					return true;
				}
				else {
			return false;
		}
			}
			else {
				return false;
			}
		}

		public List<Users> findAllUsers() {
			 List<Users> slist = repo.findAll();
				
				
				List<Users> users;
					
			        return slist ;
		}
	
}
