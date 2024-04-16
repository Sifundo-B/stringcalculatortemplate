class Calculator{
    add(numbers){
        
        if(!numbers){
            return 0;
        }
        
            let myarr = numbers.split(/[\n,]/ );
            //'=', ',', ':'
            let sum =0;
            for (let index = 0; index < myarr.length; index++) {
               sum += parseInt(myarr[index]);
                
            }
            return sum;
        
    }
}

module.exports = Calculator