$(document).ready(function(){
    $("#toggle").click(function(){
        $("#title").slideUp();
        $("#converter-1").slideDown();
    });

    $("#select-1").change(function(){
        var selected = $("#select-1").val();
        if(selected == '0'){
            $("#input-1").slideUp();
            $("#result").slideUp();
            $("#select-2").slideUp();
            $("#convert-btn").slideUp();
            $("#reset").slideUp();
            $("#input-decimal").slideUp();
        }
        else{
            $("#input-1").slideDown();
            $("#input-1").removeClass("invisible");
            $("#select-2").slideDown();
        }
    });

    $("#select-2").change(function(){
        var selected = $("#select-2").val();
        if(selected == '0'){
            $("#convert-btn").slideUp();
            $("#result").slideUp();
        }
        else{
            $("#convert-btn").slideDown();
            $("#reset").slideDown();
            $("#input-decimal").slideDown();
        }
    });

    $("#reset").click(function(){
        $("#input-1").slideUp();
        $("#result").slideUp();
        $("#select-2").slideUp();
        $("#convert-btn").slideUp();
        $("#reset").slideUp();
        $("#input-decimal").slideUp();
        $('input').each(function(){
            $(this).val("");
        });
    });

    $("#convert-btn").click(function(){
        var celcius = 4;
        var reamur = 5;
        var fahrenheit = 9;
        var bilangan1 = $("#select-1").val();
        var bilangan2 = $("#select-2").val();
        var input = $("#input-1").val();
        var decimal = $("#input-decimal").val();
        $("#result").slideDown();
        if(bilangan1 == '1' && bilangan2 == '2'){
            hasil_hitung = (4/5)*input;
            pembulatan = hasil_hitung.toFixed(decimal);
            $("#result").html("Hasil Konversi dari Celcius menuju Reamur adalah: <b>" + pembulatan + " R </b>");
        }
        else if(bilangan1 == '1' && bilangan2 == '3'){
            hasil_hitung = (9/5)*input+32;
            pembulatan = hasil_hitung.toFixed(decimal);
            $("#result").html("Hasil Konversi dari Celcius menuju Fahrenheit adalah: <b>" + pembulatan + " F </b>");
        }
        else if(bilangan1 == '2' && bilangan2 == '1'){
            hasil_hitung = (5/4)*input;
            pembulatan = hasil_hitung.toFixed(decimal);
            $("#result").html("Hasil Konversi dari Reamur menuju Celcius adalah: <b>" + pembulatan + " C </b>");
        }
        else if(bilangan1 == '2' && bilangan2 == '3'){
            hasil_hitung = (9/4)*input+32;
            pembulatan = hasil_hitung.toFixed(decimal);
            $("#result").html("Hasil Konversi dari Reamur menuju Fahrenheit adalah: <b>" + pembulatan + " F </b>");
        }
        else if(bilangan1 == '3' && bilangan2 == '1'){
            hasil_hitung = (5/9)*(input-32);
            pembulatan = hasil_hitung.toFixed(decimal);
            $("#result").html("Hasil Konversi dari Fahrenheit menuju Celcius adalah: <b>" + pembulatan + " C </b>");
        }
        else if(bilangan1 == '3' && bilangan2 == '2'){
            hasil_hitung = (4/9)*(input-32);
            pembulatan = hasil_hitung.toFixed(decimal);
            $("#result").html("Hasil Konversi dari Fahrenheit menuju Reamur adalah: <b>" + pembulatan + " R </b>");
        }
    });
  });