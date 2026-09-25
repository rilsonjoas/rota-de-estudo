package com.narniano.studypath.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    OpenAPI studyPathOpenApi() {
        return new OpenAPI().info(new Info()
                .title("Rota de Estudo API")
                .description("API REST do StudyPath")
                .version("0.1.0"));
    }
}
