/**
 * Execution        :   1. default node          : cmd> node utility.js
 *                      2. if nodemon installed  : cmd> nodemon utility.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose        : Write to the file function
 * 
 * 
 *  @file           : utility.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-Feb-2019
 */
module.exports=
{
 writeFile(fileName,data)
    {
    const fs = require('fs');
fs.writeFile(fileName, data, function(err) {
if(err) {
    return console.log(err);
}

//console.log("The file is saved!");
}); 
    },

        dayOfWeek(d, m, y) {   //To calculate the date 
        var v = Math.floor((14 - m) / 12)
        var y0 = y - v
        var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400)
        var m0 = m + 12 * Math.floor((14 - m) / 12) - 2
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7
        d0 = Math.floor(d0)
        console.log(d0+"Type Your DOB here...!!!!")
        return d0
    },
        leapYear(year)          //To find a leap year...
        {
        if (year%4 ==0 && year%100!=0 || year%400==0)
        {
            return true;
        }
        else
        {
            return false
        }
        
    },
        monthof(m) {             //Iterate a month...
        switch (m) {
            case 1: return 31;
                break;
            case 2: return 28;
                break;
            case 3: return 31;
                break;
            case 4: return 30;
                break;
            case 5: return 31;
                break;
            case 6: return 30;
                break;
            case 7: return 31;
                break;
            case 8: return 31;
                break;
            case 9: return 30;
                break;
            case 10: return 31;
                break;
            case 11: return 30;
                break;
            case 12: return 31;
                break;

        }
    },
        bubbleSort(datas) // To sort the given numbers...
        {  
        var j;
        var temp;var n;
        for(i=1;i<=datas;i++){
        for(j=0;j<=datas-i;j++){
            if(datas[j]>datas[j+1]){
                temp = datas[j];
                datas[j]=datas[j+1];
                datas[j+1]=temp;
            }
        }
    }
        return datas;
   
    },
    /************************************ call File **********************************/
callFile() 
{
    var fileStream = require('fs');
    var f = fileStream.readFileSync('file.txt', 'utf8');
    console.log(f);
    var arr = f.split(' ');
    return arr;
},
/************************************ file CAll **********************************/
fileCall() 
{
    var fileStream = require('fs');
    var f = fileStream.readFileSync('File.txt', 'utf8');
    var arr = f.split(' ');
    return arr;
},

fileCalls(name) 
{
    var fileStream = require('fs');
    var f = fileStream.readFileSync(name, 'utf8');
    var arr = f.split(' ');
    return arr;
},

writeFile(filename,Data)
    {
        const fs = require('fs')
        fs.writeFile(filename,Data,function(err)
        {
            if(err)
            {
                return console.log(err);
            }

        });
    },
    isPrime(number)
{
    if(number==0 || number == 1)
    {
        return false;
    }
    else
    {
        for (let index = 2; index < number; index++)
        {
            if (number % index == 0) 
            {
                return false;
            }
        }
        return true;
    }
},
/******************Anagram***************************** */
isAnagram(string1, string2) {
    string1=string1+"";
    string2=string2+"";
    if (string1.length != string2.length) {
        return false;
    }
    var arr = [];
    for (let index = 0; index < 36; index++) {
        arr[index] = 0;

    }
    for (let index = 0; index < string1.length; index++) {
        var ch = string1.charAt(index);
        if (ch >= 'a' && ch <= 'z') {
            var code = ch.charCodeAt(0);

            arr[code - 97]++;
        } else if (ch >= 'A' && ch <= 'Z') {
            var code = ch.charCodeAt(0);
            arr[code - 65]++;
        } else {
            var code = ch.charCodeAt(0);
            arr[code - 22]++;
        }
        ch = string2.charAt(index);
        if (ch >= 'a' && ch <= 'z') {
            var code = ch.charCodeAt(0);

            arr[code - 97]--;
        } else if (ch >= 'A' && ch <= 'Z') {
            var code = ch.charCodeAt(0);
            arr[code - 65]--;
        } else {
            var code = ch.charCodeAt(0);
            arr[code - 22]--;
        }


    }
    for (let index = 0; index < 36; index++) {
        if (arr[index] != 0) {
            return false;
        }
    }
    return true;
},
}
