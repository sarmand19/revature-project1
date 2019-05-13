package com.revature.reimbursement.servlets;


import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.servlets.DefaultServlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.reimbursement.beans.Credentials;
import com.revature.reimbursement.services.LoginService;
import com.revature.reimbursement.util.HttpException;


public class LoginServlet extends DefaultServlet {
	
LoginService loginService = new LoginService();
	
	
	
	@Override
	public void init() {
		System.out.println("LoginServlet is initializing");
	}
	
	@Override
	//To give permission to the client to submit request to this servlet.
	// Every servlet should have this.
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		response.addHeader("Access-Control-Allow-Headers", "content-type");
		response.addHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
		super.service(request, response);
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		ObjectMapper om = new ObjectMapper();
		Credentials credentials = om.readValue(request.getInputStream(), Credentials.class);
		Integer id = null;
		try {
			id = this.loginService.login(credentials);
		} catch (HttpException e) {
			response.setStatus(e.getStatus());
			return;
		}
		System.out.println(credentials.getUsername()+credentials.getPassword());
		HttpSession session = request.getSession();
		
		session.setAttribute("id", id);	
		/********************************************************************************/
		String resp = "{\"id\":"+id+",\"username\":\""+credentials.getUsername()+"\""+"}";
		response.getWriter().write(resp);
	}

}
