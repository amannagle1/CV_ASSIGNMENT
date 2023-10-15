package cvAssignment;

import java.util.HashMap;
import java.util.Map;

public class romanConverter {
    public static void main(String[] args) {
        
        
        int result=convertRomanToInt("XXV");

        System.out.println(result);
    }

    public static int convertRomanToInt(String roman){

        if (roman ==null || roman.length() == 0) {
            return 0;
        }

        Map<Character, Integer > map= new HashMap<>();
        map.put('I', 1);
         map.put('V', 5);
          map.put('X', 10);
           map.put('L', 50);
            map.put('C', 100);
             map.put('D', 500);
              map.put('M', 1000);

              int output=0;
              for (int i = 0; i < roman.length()-1; i++) {
                
                if (map.get(roman.charAt(i)) >= map.get(roman.charAt(i+1))) {
                    output=output+map.get(roman.charAt(i));
                } else {
                    output=output-map.get(roman.charAt(i));
                }
              }
              output=output+map.get(roman.charAt(roman.length()-1));
              return output;

    }
}
