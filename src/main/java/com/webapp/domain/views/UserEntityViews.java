package com.webapp.domain.views;

public final class UserEntityViews {

  public interface IdName {}

  public interface ImageFilename {}

  public interface IdNameEmail extends IdName {}

  public interface AllWithoutSubscriptions extends IdNameEmail, ImageFilename {}

}
