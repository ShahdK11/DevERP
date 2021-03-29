package deployment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	private AuthenticationSuccessHandler authenticationSuccessHandler;
	public AuthenticationFailureHandler authenticationFailureHandler() {
        return new CustomAuthenticationFailureHandler();
    }

    @Autowired
    public WebSecurityConfig(AuthenticationSuccessHandler authenticationSuccessHandler) {
        this.authenticationSuccessHandler = authenticationSuccessHandler;
    }
   @Override
   protected void configure(HttpSecurity http) throws Exception {
      http
         .authorizeRequests()
            .antMatchers("/login.html", "/*.css", "/*.js", "/rest/**", "/webjars/**").permitAll()
            .antMatchers(HttpMethod.POST, "/rest/*").permitAll()
            .antMatchers(HttpMethod.PUT, "/rest/**").permitAll()
            .antMatchers(HttpMethod.GET, "/rest/**").permitAll()
            .anyRequest().authenticated()
            .and()
         .formLogin()
            .loginPage("/login")
            .successHandler(authenticationSuccessHandler)
            .failureHandler(authenticationFailureHandler())
            .permitAll()
            .and()
            .logout()
            .permitAll()
            .and()
            .csrf().disable();
   }
   @Autowired
   public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
      auth
         .inMemoryAuthentication()
         .withUser("K.Alrajeh@kacst.edu.sa").password("{noop}12345").roles("HR").and()
      .withUser("S.Alassaf@kacst.edu.sa").password("{noop}12345").roles("HR").and()
      .withUser("S.Almanea@kacst.edu.sa").password("{noop}12345").roles("Managers").and()
      .withUser("K.Alfaleh@kacst.edu.sa").password("{noop}12345").roles("Managers").and()
      .withUser("S.AbaAlkhail@kacst.edu.sa").password("{noop}12345").roles("Managers").and()
      .withUser("clive@kacst.edu.sa").password("{noop}12345").roles("Managers").and()
      .withUser("jrw@kacst.edu.sa").password("{noop}12345").roles("Managers").and()
      .withUser("Alasdar@kacst.edu.sa").password("{noop}12345").roles("Managers").and()
      .withUser("aaslubaie@kacst.edu.sa").password("{noop}12345").roles("Managers").and()
      .withUser("S.Alameer@kacst.edu.sa").password("{noop}12345").roles("Managers").and()
      .withUser("A.Alshaikh@kacst.edu.sa").password("{noop}12345").roles("Managers").and()
      .withUser("shahad").password("{noop}12345").roles("Managers");
      
   }
}