/**
 * 
 */
package com.example;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Harry Potter
 *
 */

@RestController
public class TestRestController {
	
	@RequestMapping(value="/getName", method= RequestMethod.GET)
	public String getName(HttpServletResponse res){
		System.out.println("Ravi");
		//res.setHeader("Access-Control-Allow-Origin", "*");
		return "RaviTeja";
	}

}
