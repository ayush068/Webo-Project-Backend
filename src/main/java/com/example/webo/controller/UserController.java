package com.example.webo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


import com.example.webo.service.UserService;
import com.example.webo.entity.Users;



@Controller
public class UserController {
	 @Autowired
	    UserService userService;
	 @PostMapping("/addUser")
	    public String addUser(@RequestParam("Name") String Name,
	                          @RequestParam("mobile") String mobile,
	                          @RequestParam("email") String email,
	                          @RequestParam("password") String password,
	                          @RequestParam("confirmPassword") String confirmPassword ,Model model) {

	        boolean mobileExists = userService.checkmobile(mobile);
	        if (!mobileExists) {
	            Users user = new Users();
	            user.setName(Name);
	            user.setMobile(mobile);
	            user.setEmail(email);
	            user.setPassword(password);
	            user.setConfirmPassword(confirmPassword);
	           

	            userService.addUser(user);
	           // model.addAttribute("successMessage", "User registered successfully");
	            
	            System.out.println("User registered successfully");
	            return "redirect:/login";
	            //return "redirect:/register?success";
	        } else {
	        	
	        	
	            System.out.println("User already exists!");
	            
	            return "redirect:/register";
	        }
	    }
	    @GetMapping("/users")
	    public String listRegisteredUsers(Model model){
	        List<Users> users = userService.findAllUsers();
	        model.addAttribute("users", users);
	        return "users";
	    }
	 
	 @PostMapping("/validate")
	 public String validate(@RequestParam("mobile") String mobile,
	                        @RequestParam("password") String password, Model model) {

	     if (mobile == null || mobile.isEmpty() || password == null || password.isEmpty()) {
	         System.out.println("Unknown mobile or empty password!");
	         return "/error";
	     }

	     boolean isValidUser = userService.validate(mobile, password);
	     if (isValidUser) {
	         String message = "User login successful!";
	         model.addAttribute("message", message);
	         return "index";
	     } else {
	         System.out.println("Invalid credentials. Please try again.");
	         return "/error";
	     }
	 }
}