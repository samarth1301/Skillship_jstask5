function check(){
    let txt=document.getElementById('name').value;
    let mail=document.getElementById('Email').value;
    let pass=document.getElementById('pass').value;
    if(txt=='' || mail=='' || pass==''){
        alert("Any input-field empty!!");
    }
}