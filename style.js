function pkg(){
    var ip=document.getElementById("input").value;
    var opt=document.getElementById("opt").value;
    var kg=document.getElementById("kg").value;
    var g=document.getElementById("g").value;
    var lbs=document.getElementById("lbs").value;
    var n=document.getElementById("n").value;
    var lit=document.getElementById("lit").value;
    var ton=document.getElementById("ton").value;
    var oun=document.getElementById("oun").value; 
    var cle=document.getElementById("cle").value;
        if(opt==kg || opt == lit){
        document.getElementById("kgoutput").innerHTML=ip;
        document.getElementById("gramoutput").innerHTML=ip*1000;
        document.getElementById("poundoutput").innerHTML=ip*2.205;
        document.getElementById("newtons").innerHTML=ip*9.80665;
        document.getElementById("milligrams").innerHTML=ip*1000000;
        document.getElementById("liters").innerHTML=ip*1;
        document.getElementById("tons").innerHTML=ip*0.0011;
        document.getElementById("ounces").innerHTML=ip*35.274;
        }
        if(opt==g){
            document.getElementById("kgoutput").innerHTML=ip/1000;
            document.getElementById("gramoutput").innerHTML=ip;
            document.getElementById("poundoutput").innerHTML=(ip*2.205)/1000;
            document.getElementById("newtons").innerHTML=(ip*9.80665)/1000;
            document.getElementById("milligrams").innerHTML=ip*1000;
            document.getElementById("liters").innerHTML=(ip*1)/1000;
            document.getElementById("tons").innerHTML=(ip*0.0011)/1000;
            document.getElementById("ounces").innerHTML=(ip*35.274)/1000;
            }
        if(opt==cle){
            document.getElementById("kgoutput").innerHTML=000;
            document.getElementById("gramoutput").innerHTML=000;
            document.getElementById("poundoutput").innerHTML=000;
            document.getElementById("newtons").innerHTML=000;
            document.getElementById("milligrams").innerHTML=00;
            document.getElementById("liters").innerHTML=000;
            document.getElementById("tons").innerHTML=000;
            document.getElementById("ounces").innerHTML=000;  
        }
		 if(opt==lbs){
        document.getElementById("kgoutput").innerHTML=ip*0.453592;
        document.getElementById("gramoutput").innerHTML=ip*1000*0.453592;
        document.getElementById("poundoutput").innerHTML=ip;
        document.getElementById("newtons").innerHTML=ip*9.80665*0.453592;
        document.getElementById("milligrams").innerHTML=ip*1000000*0.453592;
        document.getElementById("liters").innerHTML=ip*1.96*0.453592;
        document.getElementById("tons").innerHTML=ip*0.0011*0.453592;
        document.getElementById("ounces").innerHTML=ip*35.274*0.453592;
        }
    }
    