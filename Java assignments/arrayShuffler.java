package cvAssignment;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class arrayShuffler {
    
    public static void main(String[] args) {
         Integer []array={1,2,3,4,5,6,7,8,9};
         
         List<Integer>list=Arrays.asList(array);
         Collections.shuffle(list);
       list.toArray(array);

       System.out.println(Arrays.toString(array));
    }
}
