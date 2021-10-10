document.getElementById("saveDataBtn").addEventListener("click",function(e){
    e.preventDefault()

    var studentID = document.getElementById("studentId").value
    var studentName = document.getElementById("studentName").value
    var note1=document.getElementById("note1").value
    var note2=document.getElementById("note2").value
    var note3=document.getElementById("note3").value
    var promedio=document.getElementById("prom").value
    console.log(studentID,studentName,note1,note2,note3,promedio)
    if(studentID=="" || studentName=="" || note1=="" ||note2=="" || note3=="")
        {alert("Debe llenar los campos!")}
    else{localStorage.setItem(studentID,[studentName,note1,note2,note3,promedio])
        alert("Todo quedó guardado!")}
        
})
