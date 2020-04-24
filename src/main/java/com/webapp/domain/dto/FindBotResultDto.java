package com.webapp.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class FindBotResultDto {

  private Integer id;
  private String name;
  private String imageFilename;
  private String category;

}
