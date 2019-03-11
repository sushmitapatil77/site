window.onload=function(){
    document.getElementById("list").addEventListener("click",listview);
    document.getElementById("create").addEventListener("click",createview);
    
    function setAttributes(element,attribute){
        for(var i in attribute){
            element.setAttribute(i,attribute[i]);
        }
    }

    function listview(){
        document.getElementById("listview").style.display='block';
        document.getElementById("displayDetails").style.display='none';
        document.getElementById("buttonDelete").style.display='block';
    }
    
    function createview(){
        document.getElementById("displayDetails").style.display='block';
        document.getElementById("listview").style.display='none';
        document.getElementById("sendButton").style.display='block';
        document.getElementById("prevButton").style.display='none';
        document.getElementById("buttonDelete").style.display='none';
        document.getElementById('email').value='';
        document.getElementById('subject').value='';
        document.getElementById('text').value='';
        }
    
    
listclick();

        function listclick(){
        var request = new XMLHttpRequest();
        var body=document.getElementById("listview");
        var tbl=document.getElementById("listdata");
        var tblBody=document.createElement("tbody");

        request.open('GET', 'http://5c5a21f9af3ff700140de477.mockapi.io/api/email', true);
        
        request.onload=function(){
                    
            var data = JSON.parse(this.response);
            for(var i=0; i<data.length;i++){
                
                var row=document.createElement("tr");

                var cell1 =document.createElement("a");

                cell1.setAttribute('href','#?id='+data.id)
                cell1.setAttribute('data-mailindex',i)
               
                
                var cell2 = document.createElement("p");
                cell2.setAttribute('class','email-link');
                 var td = document.createElement("td");
                                             
                cell2.textContent=data[i].subject;
                cell1.textContent=data[i].id + ". " +data[i].from;

                cell1.onclick=function(e){
                    
                    
                    var d=data[e.currentTarget.dataset.mailindex];
                   
                    document.getElementById("listview").style.display='none';
                    document.getElementById("displayDetails").style.display='block';
                    document.getElementById("sendButton").style.display='none';
                    document.getElementById("prevButton").style.display='block';
                    document.getElementById("buttonDelete").style.display='none';
                    document.getElementById("email").value=d.from;
                    document.getElementById("subject").value=d.subject;
                    document.getElementById("text").value=d.text;
                    
                    console.log(d.subject);
              
                }
                                                                     
            td.appendChild(cell1); 
            row.appendChild(td);
            row.appendChild(cell2);
            tblBody.appendChild(row);
            tbl.appendChild(tblBody); 
            body.appendChild(tbl); 
            }
        }
        request.send();
        }
}