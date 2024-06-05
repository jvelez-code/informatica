package com.udistrital;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class AppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppBackendApplication.class, args);
		System.out.print("Hola Mundo");
	}

}
