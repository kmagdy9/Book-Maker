var siteNameInput=document.getElementById("siteName");
var siteURLInput=document.getElementById("siteURL");

var siteContainer=[];

if(localStorage.getItem("sites")!=null){
    siteContainer=JSON.parse(localStorage.getItem("sites"));
    displaySite();
}

function addSite(){

    var site={

        name:siteNameInput.value,
        url:siteURLInput.value
    };

    siteContainer.push(site);

    //Local Storage
    localStorage.setItem("sites",JSON.stringify(siteContainer));

    displaySite();
    clearForm();

    

}

function displaySite(){

    var cartona="";

    for(var i=0;i<siteContainer.length;i++){

        cartona+=
        `<tr>

        <td>${i}</td>
        <td>${siteContainer[i].name}</td>
        <td><button class="btn btn-success"><i class="fa-solid fa-eye"></i> <a href="http://${siteContainer[i].url}" style="color: white;" target="_blank">Visit</a></button></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
      </tr>
    `

    }

    document.getElementById("tableData").innerHTML=cartona;
}

function clearForm(){
    siteNameInput.value="";
    siteURLInput.value="";
}

function deleteSite(index){

    siteContainer.splice(index,1);
    displaySite();
    localStorage.setItem("sites",JSON.stringify(siteContainer));
}