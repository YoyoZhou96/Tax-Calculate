export default class Hst{
    calculate(income, dTax){
        let oTax;

        if (income <= 40922) {
            oTax = income * 0.0505;
        } else if (income <= 81847) {
            oTax = (income-40922) * 0.0915 + 2067;
        } else if (income <= 150000) {
            oTax = (income-81847) * 0.1116 + 5811;
        } else if (income <= 220000) {
            oTax = (income-150000) * 0.1216 + 13417;
        } else {
            oTax = (income-150000) * 0.1316 + 21929;
        }

        let fTax;
        
        if (income<=45282){
            fTax = income * 0.15;
        }else if(income<=90563) {
            fTax = (income-45282) * 0.205 + 6792;
        }else if(income<=140388){
            fTax = (income-90563) * 0.26 + 16075;
        }else if(income<=200000){
            fTax = (income-140388) * 0.29 + 29029;
        }else {
            fTax = (income-200000) * 0.33 + 46317;
        }
           

        let Total;
        Total = oTax + fTax - dTax;

        let Owing;
        Owing = income - Total;

        return [oTax.toFixed(2), fTax.toFixed(2), Total.toFixed(2), Owing.toFixed(2)];
    }

}

