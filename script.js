window.onload=function(){
 
    document.getElementById("list").addEventListener("click",listview);
    
    document.getElementById("create").addEventListener("click",createview);
    
    function setAttributes(element,attribute){
        for(var i in attribute){
            element.setAttribute(i,attribute[i]);
        }
    }

    function listview(){
    document.getElementById("listview").innerHTML="";  

    var list=document.getElementById("list");
   
    var body=document.getElementById("listview");
        
    list.onclick=function(){

    var request = new XMLHttpRequest();
      
    var tbl=document.createElement("table");
    setAttributes(tbl,{"class":"table"});

    var tblBody=document.createElement("tbody");
        
    request.open('GET', 'http://5c5a21f9af3ff700140de477.mockapi.io/api/email', true);
        
    request.onload=function(){
        
        var data = JSON.parse(this.response);
        for(var i=0; i<data.length;i++){
            var row=document.createElement("tr");
            setAttributes(row,{"class":"row"});
            
            var cell1 =document.createElement("a");
            cell1.textContent=data[i].from;//from link
            
            setAttributes(cell1,{"class":"emailfrom", "id":"email"});
            cell1.setAttribute('href','#?id='+data.id)
            cell1.setAttribute('data-mailindex',i)

            var cell2 = document.createElement("p");                            //display subject               
            cell2.textContent=data[i].subject;
            
            setAttributes(cell2,{"class":"subject"});                           //attributes of subject

            var td = document.createElement("td");
            setAttributes(td,{"class":"tableData"});
            td.appendChild(cell1); 
                    
            row.appendChild(td);
            row.appendChild(cell2);
            tblBody.appendChild(row);

            cell1.onclick=function(e){
            document.getElementById("listview").innerHTML="";
                                            
            var d=data[e.currentTarget.dataset.mailindex];

           document.getElementById("from").innerHTML=d.from;
           document.getElementById("subject").innerHTML=d.subject;
           document.getElementById("message").innerHTML=d.text;
              // '</p><br><p>Subject: '+d.subject+'</p><br><p>'+d.text+'</p></div>';
            
            console.log(d.subject);
    
            }
        }

         tbl.appendChild(tblBody);
            
         body.appendChild(tbl); 
    }
    
    request.send();
        
    }
}

    function createview(){
        var create=document.getElementById("create");
        var body=document.getElementById("listview");
        create.onclick=function(){
            
        document.getElementById("listview").innerHTML='<div id="container"><p>To: <input type="email" id="in1"></p><br><p>Subject: <input type="text" id="in1"></p><br><p>Message<textarea rows="4" cols="50" name="message" id="textbox">Enter your message here </textarea></p><button type="submit">Send</button></div>';
        }
    } 
   
}

    
       
    
