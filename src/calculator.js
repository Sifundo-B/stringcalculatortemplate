class Calculator{
    add(numbers){
        if(!numbers){
            return 0;
        }
        let sum =0;
            let myarr= numbers.split(/[\n,;//]/ );
        for (let index = 0; index < myarr.length; index++) {
           sum += parseInt(myarr[index]);
            
        }
        return sum;
    }
}


module.exports = Calculator