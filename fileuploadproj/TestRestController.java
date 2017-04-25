/**
 * 
 */
package com.example;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
	
	@PostMapping("/upload") // //new annotation since 4.3
    public String singleFileUpload(@RequestParam("file") MultipartFile file) {


        try {

            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get("D:\\Tutorials\\" + file.getOriginalFilename());
            Files.write(path, bytes);

            

        } catch (IOException e) {
            e.printStackTrace();
        }

        return "true";
    }

}
