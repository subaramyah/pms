package com.citiustech.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.citiustech.model.UserDetailsImpl;
import com.citiustech.serviceImpl.UserDetailsServiceImpl;
import com.citiustech.util.JwtUtils;

public class SecurityFilter  extends OncePerRequestFilter{
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	
	protected void doFilterInternal(HttpServletRequest request, 
			HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		 try {
			 String jwt = readJwtToken(request);
			 if(jwt!=null && jwtUtils.validateToken(jwt)) {
				 String email = jwtUtils.getUsernameFromJwtToken(jwt);
				 
				 //load user object from db
				 
				 UserDetails userDetails = userDetailsService.loadUserByUsername(email);
				 
				 UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null,userDetails.getAuthorities());
				 authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				 SecurityContextHolder.getContext().setAuthentication(authentication);
				 }
		 }catch(Exception e) {
			 e.printStackTrace();
			 }
		 filterChain.doFilter(request,response);
			 
			 
		 }
	
	private String readJwtToken(HttpServletRequest request) {
		String headerAuth = request.getHeader("Authorization");
		if(StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer")) {
			return headerAuth.substring(7,headerAuth.length());
		}
		return null;
			
		}
		
	}
	


