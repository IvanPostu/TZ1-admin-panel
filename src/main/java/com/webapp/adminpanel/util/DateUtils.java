package com.webapp.adminpanel.util;

import java.util.Calendar;
import java.util.Date;

public abstract class DateUtils {


  /**
   * 
   * @param a
   * @param b
   * a > b
   * @return
   */
  public static long getDiffYears(Date a, Date b){
  

    Calendar calendarA = Calendar.getInstance();
    calendarA.setTime(b);

    Calendar calendarB = Calendar.getInstance();
    calendarB.setTime(a);

    long diff = calendarB.get(Calendar.YEAR) - calendarA.get(Calendar.YEAR);

    if (calendarA.get(Calendar.MONTH) > calendarB.get(Calendar.MONTH) || 
        (
          calendarA.get(Calendar.MONTH) == calendarB.get(Calendar.MONTH) 
          && calendarA.get(Calendar.DATE) > calendarB.get(Calendar.DATE)
        )
        ) {
        diff--;
    }

    return diff;
  }

}