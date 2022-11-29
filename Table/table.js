
let data = [{ pair1: "ICICI", pair2: "HDFC", correlation: "0.7", rank:"5" },
{ pair1: "SBI", pair2: "Punjab National", correlation: "0.8", rank:"9" },
{ pair1: "ICICI", pair2: "HDFC", correlation: "0.7", rank:"9" },
{ pair1: "SBI", pair2: "Punjab National", correlation: "0.8", rank:"9" },
{ pair1: "ICICI", pair2: "HDFC", correlation: "0.7", rank:"9" },
{ pair1: "SBI", pair2: "Punjab National", correlation: "0.8", rank:"9" },
{ pair1: "ICICI", pair2: "HDFC", correlation: "0.7", rank:"9" },
{ pair1: "SBI", pair2: "Punjab National", correlation: "0.8", rank:"9" }];

function createTable(tableData) {
    var table = document.getElementById('table');
    var tableBody = document.getElementById('tbody');
    let table_data = document.getElementById("table_data");
    

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');
        var Pair1 = document.createElement('td');
        Pair1.appendChild(document.createTextNode(rowData.pair1));
        row.appendChild(Pair1);
        var Pair2 = document.createElement('td');
        Pair2.appendChild(document.createTextNode(rowData.pair2));
        row.appendChild(Pair2);

        var correlation = document.createElement('td');
        correlation.appendChild(document.createTextNode(rowData.correlation));
        row.appendChild(correlation);

        var rank = document.createElement('td');
        rank.appendChild(document.createTextNode(rowData.rank));
        row.appendChild(rank);


        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.table_data.appendChild(table);
}

createTable(data);

// var a = [{
//     Symbol1: Reliance,
//     Symbol2: TransformStream,
//     Corelation: 0.8,
//     cp1:[90,80,],
//     cp2:;

// }]