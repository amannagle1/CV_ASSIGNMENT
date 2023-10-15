package cvAssignment;


public class checkPanagram {
    public static void main(String[] args) {
       
        String sentence ="The quick brown fox jumps over the lazy dog";
      boolean result = checkPanagram(sentence.toLowerCase());
       if (result == true) {
        System.out.println(" It is a panagram sentence ");
       }
       else{
        System.out.println("It is  Not a panagram sentence");
       }
    }

    public static boolean checkPanagram(String sentence)
    {
        if (sentence.length()< 26) {
            return false;
        } else {
           for (char character = 'a'; character <= 'z'; character++) {
            
            if (sentence.indexOf( character) < 0 ) {
                return false;
            }
           }
        }
        return true;
    }
}