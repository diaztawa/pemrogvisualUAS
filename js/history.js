var mysql = require('mysql');
            var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'db_tverter'
            });
        window.onload = function () { history() }

        function history(){
            
            $sql2 = "SELECT * FROM tb_temperature";

            connection.query($sql2, function (error, results, fields) {
             if (error) throw error;
                console.log( );
                let datahtml = '';
                const tableBod = document.getElementById('tableBody');
                for (let index = 0; index < results.length; index++) {
                    if (results[index].temp1 == 1) { results[index].temp1 = "Celcius" }
                    else if(results[index].temp1 == 2) { results[index].temp1 = "Reamur" }
                    else if(results[index].temp1 == 3) { results[index].temp1 = "Fahrenheit" }
                    if(results[index].temp2 == 1) { results[index].temp2 = "Celcius" }
                    else if(results[index].temp2 == 2) { results[index].temp2 = "Reamur" }
                    else if(results[index].temp2 == 3) { results[index].temp2 = "Fahrenheit" }
                    datahtml += `<tr><td>${index+1}</td>
                                <td>${results[index].temp1}</td>
                                <td>${results[index].value}</td>
                                <td>${results[index].temp2}</td>
                                <td>${results[index].result}</td></tr>`;
                }
                tableBod.innerHTML = datahtml;

                });
                
            
        }