window.onload=function(){
    var l=document.getElementById("list");
    
    function setAttributes(element,attribute){
        for(var i in attribute){
            element.setAttribute(i,attribute[i]);
        }
    }
    
    l.onclick=function(){
      var request = new XMLHttpRequest();
      var body=document.getElementById("body");
      var tbl=document.createElement("table");
        setAttributes(tbl,{"class":"table"});

      var tblBody=document.createElement("tbody");
        
    request.open('GET', 'http://5c5a21f9af3ff700140de477.mockapi.io/api/email', true);
        
    request.onload=function(){
        var data = JSON.parse(this.response);
            
        for(var i=0; i<data.length;i++){
           
            var row=document.createElement("tr");
            setAttributes(row,{"class":"row"});
                
            for(var j=0; j<1;j++){
                var cell1 =document.createElement("a");                             //from link
                setAttributes(cell1,{"class":"emailfrom","id":"from"});             //attributes for links 
                //cell1.setAttribute('onclick','clickIt()');
                
                var cell2 = document.createElement("p");                            //display subject               
                setAttributes(cell2,{"class":"subject"});                           //attributes of subject

                cell1.textContent=data[i].from;
                cell2.textContent=data[i].subject;
                    
                var td = document.createElement("td");
                setAttributes(td,{"class":"tableData"});
                td.appendChild(cell1); 
                    
                row.appendChild(td);
                row.appendChild(cell2);
                }
            tblBody.appendChild(row);
        }

            tbl.appendChild(tblBody);
            
            body.appendChild(tbl);
            
           // tbl.setAttribute("border","1");
//document.getElementById("from").addEventListener("click",clickIt);
//        
//        function clickIt(event){
//            console.log(event.target);
//        }
        
    }
            request.send(); 
        }
    
}


//function clickIt(link){
//    for(var i=0; i<data.length;i++){
//        if(link==data[i].from){
//        var to = data[i].to;
//        var subject=data[i].subject;
//        var text=data[i].text;
//        console.log(to);
//        console.log(subject);
//        console.log(text);
//        }
//    }
//    return(to, subject,text);
//}