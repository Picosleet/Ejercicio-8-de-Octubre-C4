document.getElementById("saveDataBtn").addEventListener("click",function(e){
    e.preventDefault()

    var studentID = document.getElementById("studentId").value
    var studentName = document.getElementById("studentName").value
    var note1=document.getElementById("note1").value
    var note2=document.getElementById("note2").value
    var note3=document.getElementById("note3").value
    
    console.log(studentID,studentName,note1,note2,note3,myFunction())
    if(studentID=="" || studentName=="" || note1=="" ||note2=="" || note3=="")
        {alert("Debe llenar los campos!")}
    else{localStorage.setItem(studentID,[studentName,note1,note2,note3,myFunction()])
        alert("Todo quedó guardado!")}
        
})
function myFunction() {  
    var x,y,z,prom,text;  
    x = document.getElementById("note1").value;  
    y = document.getElementById("note2").value;  
    z = document.getElementById("note3").value;  
    
    if (isNaN(x) || isNaN(y) || isNaN(z)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      prom = (parseFloat(x)+parseFloat(y)+parseFloat(z))/3; 

      } 
      return prom  
}
