/**
 * Execution        :   1. default node          : cmd> node PalindromeChecker.js
 *                      2. if nodemon installed  : cmd> nodemon PalindromeChecker.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose        :   To chech the given string is Palindrome or not.
 * 
 * 
 *  @file           :   PalindromeChecker.js
 *  @overview       :   To chech the given string is Palindrome or not useing Dequeue.
 *  @author         :   Nandhakumar <nandhak907@gmail.com>
 *  @version        :   1.0
 *  @since          :   12-Feb-2019
 */
var access=require('../Implementation/Dequeue');
var readline=require('readline-sync');
function check()
{
    var take=new access.Dequeue;
  var answer=readline.question("Enter the string : ");
  var result=take.PalindromeChecker(answer);
  if(result==false)
  {
      console.log("Given String is not a Palindrome :( ");
  }
  else
  {
      console.log("Given String is a palindrome :) ");
  }
}
check();
