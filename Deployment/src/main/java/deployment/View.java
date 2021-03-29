package deployment;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class View {

	@RequestMapping({"/login"})
	public String getURLValue(HttpServletRequest request){
	    return "forward:/login.html";
	}
	
	
	
	
}
