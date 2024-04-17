class Calculator{
    add(numbers){
        if(!numbers){
            return 0;
        }
        let delimiter = ','
        if (numbers.startsWith('//')) {
            delimiter=numbers[2];
           numbers= numbers.substring(4);
        }
        let sum =0;
            let myarr= numbers.split(new RegExp(`[\\n${delimiter}]`));
        for (let index = 0; index < myarr.length; index++) {
            if(myarr[index].trim() !== "" )
           sum += parseInt(myarr[index]);
            
        }
        return sum;

    }
}


module.exports = Calculator