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
    "joint_pain",
    "vomiting",
    "yellowish_skin",
    "dark_urine",
    "nausea",
    "loss_of_appetite",
    "abdominal_pain",
    "diarrhoea",
    "mild_fever",
    "yellowing_of_eyes",
    "muscle_pain",
    "itching",
    "fatigue",
    "lethargy",
    "yellow_urine",
    "malaise",
    "receiving_blood_transfusion",
    "receiving_unsterile_injections",
    "family_history",
    "high_fever",
    "acute_liver_failure",
    "coma",
    "stomach_bleeding",
    "swelling_of_stomach",
    "distention_of_abdomen",
    "history_of_alcohol_consumption",
    "fluid_overload.1",
    "muscle_wasting",
    "patches_in_throat",
    "extra_marital_contacts",
    "weight_loss",
    "restlessness",
    "irregular_sugar_level",
    "blurred_and_distorted_vision",
    "obesity",
    "excessive_hunger",
    "increased_appetite",
    "polyuria",
    "weight_gain",
    "cold_hands_and_feets",
    "mood_swings",
    "dizziness",
    "puffy_face_and_eyes",
    "enlarged_thyroid",
    "brittle_nails",
    "swollen_extremeties",
    "depression",
    "irritability",
    "abnormal_menstruation",
    "sweating",
    "fast_heart_rate",
    "muscle_weakness",
    "abnormal_menstruation"
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