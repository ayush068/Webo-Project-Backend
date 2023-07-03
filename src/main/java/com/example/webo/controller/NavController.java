package com.example.webo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavController {

	@GetMapping("/main")
	  public String index() {
	    return "index";
	}
	@GetMapping("/myindex")
	  public String myindex() {
	    return "myindex";
	}
	
	@GetMapping("/SignUp")
	  public String SignUp() {
	    return "SignUp";
	}
	
	
	@GetMapping("/login")
	  public String login() {
	    return "login";
	}
	
	@GetMapping("/createOrder")
	  public String payNow() {
	    return "payNow";
	}
	
}
