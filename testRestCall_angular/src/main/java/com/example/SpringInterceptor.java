/**
 * 
 */
package com.example;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 * @author Harry Potter
 *
 */
public class SpringInterceptor extends HandlerInterceptorAdapter {

	
	
	
	
	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		System.out.println("RaviTeja");
		response.setHeader("Access-Control-Allow-Origin", "*");
	}
	
	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		System.out.println("RaviTeja");
		response.setHeader("Access-Control-Allow-Origin", "*");
		return true;
	}
	
	
	
	
}
