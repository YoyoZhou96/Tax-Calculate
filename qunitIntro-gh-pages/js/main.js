import Hst from "./Hst.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(()=>{
    $("#calculate").click((evt)=>{
        evt.preventDefault();
        const nIncome = $("#total_income").val();
        const ndeducted= $("#deducted_tax").val();
        const amount = new Hst();
        var [oTax, fTax, total, owing] = amount.calculate(nIncome, ndeducted);
        $("#ontax").html(oTax);
        $("#fdtax").html(fTax);
        $("#tax").html(total);
        $("#owi").html(owing);
    })
});

