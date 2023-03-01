package com.citiustech.config;

import javax.servlet.Filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.citiustech.filter.SecurityFilter;
import com.citiustech.serviceImpl.UserDetailsServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Autowired
	private AuthenticationEntryPoint authenticationEntryPoint;
	
	@Bean
	public SecurityFilter securityFilter() {
		return new SecurityFilter();
	}
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception{
		
		return super.authenticationManagerBean();
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
		}
	
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(userDetailsService)
		.passwordEncoder(passwordEncoder());
	}
	
	protected void configure(HttpSecurity http) throws Exception{
		http.cors().and().csrf().disable()
		.authorizeRequests()
		
		.antMatchers("/auth/**").permitAll()
		.antMatchers("/mail/**").permitAll()
		.antMatchers("/details/**").permitAll()
		.antMatchers("/visit/**").permitAll()
		.antMatchers("/appointment/**").permitAll()
	    .antMatchers("/inbox/**").permitAll()
	    .antMatchers("/admin").hasAnyAuthority("ROLE_ADMIN","ROLE_PATIENT","ROLE_PHYSICIAN","ROLE_NURSE")
        .antMatchers("/patient").hasAuthority("ROLE_USER")
        .antMatchers("/nurse").hasAuthority("ROLE_NURSE")
        .antMatchers("/physician").hasAuthority("ROLE_PHYSICIAN")
        .anyRequest().authenticated()
        .and()
		.exceptionHandling()
		.authenticationEntryPoint(authenticationEntryPoint)
		.and()
		.sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		;
		http.addFilterBefore(securityFilter(), UsernamePasswordAuthenticationFilter.class); 
	}
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
		return source;
	}
	
	/*
	 * @Bean public ObjectMapper serializingObjectMapper() { ObjectMapper
	 * objectMapper = new ObjectMapper(); objectMapper.findAndRegisterModules();
	 * return objectMapper; }
	 */
	

}
