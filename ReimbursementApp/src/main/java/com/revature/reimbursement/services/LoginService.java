package com.revature.reimbursement.services;


import com.revature.reimbursement.beans.Credentials;
import com.revature.reimbursement.beans.User;
import com.revature.reimbursement.daos.LoginDao;
import com.revature.reimbursement.util.HttpException;

public class LoginService {
	
	LoginDao loginDao = new LoginDao();

	public int login(Credentials credentials) {
		// attempt to retrieve username/password from database
		User user = loginDao.getPasswordByUsername(credentials.getUsername());
		// compare them
		if (!user.getPassword().equals(credentials.getPassword())) {
			throw new HttpException(400);
		}
		return user.getId();
	}

}
