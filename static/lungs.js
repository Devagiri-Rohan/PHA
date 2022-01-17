function addRow() {
          
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= age.value;
 
}
var ob= [
    "fatigue",
        "cough",
        "high_fever",
        "breathlessness",
        "family_history",
        "mucoid_sputum",
        "chills",
        "vomiting",
        "weight_loss",
        "sweating",
        "loss_of_appetite",
        "mild_fever",
        "yellowing_of_eyes",
        "swelled_lymph_nodes",
        "malaise",
        "phlegm",
        "chest_pain",
        "blood_in_sputum",
        "fast_heart_rate",
        "rusty_sputum"
]
 var ze= 0
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<ob.length; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<2; j++){
           var td = document.createElement('TD');
           td.width='75';
           if(j==1){
            var x=document.createElement("INPUT");
            x.setAttribute("type","checkbox");
            x.setAttribute("name","link");
            x.setAttribute("value",ob[i]);
            td.appendChild(x);
            tr.appendChild(td);
           }
           else{
           td.appendChild(document.createTextNode(ob[i]));
           tr.appendChild(td);
           }
           
       }
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}