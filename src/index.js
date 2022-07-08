module.exports = function toReadable (number) {

    let result='';
    let result1='';
    let result2='';
    let result3='';
    let str=number;
    let str1=0;
    let str2=0;
    let str3=0;
    let s=0;
    let value='';
        
    function index() {
        switch(s) {
            case 0: value='zero'; return(value);
            case 1: value='one'; return(value);
            case 2: value='two'; return(value);
            case 3: value='three'; return(value);
            case 4: value='four'; return(value);
            case 5: value='five'; return(value);
            case 6: value='six'; return(value);
            case 7: value='seven'; return(value);
            case 8: value='eight'; return(value);
            case 9: value='nine'; return(value);
            case 10: value='ten'; return(value);
            case 11: value='eleven'; return(value);
            case 12: value='twelve'; return(value);
            case 13: value='thirteen'; return(value);
            case 14: value='fourteen'; return(value);
            case 15: value='fifteen'; return(value);
            case 16: value='sixteen'; return(value);
            case 17: value='seventeen'; return(value);
            case 18: value='eighteen'; return(value);
            case 19: value='nineteen'; return(value);
            case 20: value='twenty'; return(value);
            case 30: value='thirty'; return(value);
            case 40: value='forty'; return(value);
            case 50: value='fifty'; return(value);
            case 60: value='sixty'; return(value);
            case 70: value='seventy'; return(value);
            case 80: value='eighty'; return(value);
            case 90: value='ninety'; return(value); 
            case 100: value='one hundred'; return(value);    
            case 200: value='two hundred'; return(value);      
            case 300: value='three hundred'; return(value);
            case 400: value='four hundred'; return(value);
            case 500: value='five hundred'; return(value);
            case 600: value='six hundred'; return(value);
            case 700: value='seven hundred'; return(value);
            case 800: value='eight hundred'; return(value); 
            case 900: value='nine hundred'; return(value);        
        }           
    }    
    
    if (str<=20 || str===30 || str===40 || str===50 || str===60 || str===70 || str===80 || str===90 || str===100 || str===200 || str===300 || str===400 || str===500 || str===600 || str===700 || str===800 ||str===900){
        s=str;
        result=index();
    } else {
        if (str>100){
            str3=str%10;
            str2=str%100-str3;
            str1=str-str2-str3;
            s=str1;
            result1=index()+' ';
            if ((str2+str3)>20 && str3!==0){
                s=str2;
                result2=index()+' ';
                s=str3;
                result3=index();
                result=result1+result2+result3;
            } else {
                s=str2+str3;
                result2=index();
                result=result1+result2;               
            }                        
        } else{
            str3=str%10;
            str2=str%100-str3;
            s=str2;
            result2=index()+' ';
            s=str3;
            result3=index();
            result=result2+result3;
        }

    }
    
    return(result);    
  
}
