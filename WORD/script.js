const url = " https://owlbot.info/api/v4/dictionary/";

const options = {
    method:'GET',
  headers: {
    'Authorization': "Token 3bd0facd401dc019b7f44f587b735bf8dd7ec213"
  }
};
var searchcontent=document.getElementById('searchid');
let meaning=[];
var searchstring=" ";
searchcontent.addEventListener('keyup',(e)=>{
    searchstring=e.target.value.toLowerCase();
    console.log(searchstring);
   
})
var maindiv=document.getElementById('mainid1');
var searchicon=document.getElementById('search_i');
searchicon.addEventListener('click',async ()=>{
    const res=await fetch(url+searchstring,options);
    meaning=await res.json();
    console.log(meaning);
    maindiv.innerHTML=" ";
    var div=document.createElement('div');
    div.setAttribute('class','row');

    var col=document.createElement('col');
    col.setAttribute('class','col-sm-8 offset-sm-1 ui-box')
    col.innerHTML='<b><h2 class=word><i>'+meaning['word']+'</i></h2></b>'+'<b><i style=color:white><span class=pronounciation>/'+meaning['pronunciation']+'/</span></i></b>'
    div.append(col);
    var define=document.createElement('div');
    define.setAttribute('class','define-container');
    for(let i=0;i<meaning['definitions'].length;i++){
        var div1=document.createElement('div');
        div1.setAttribute('class','row');
        div1.setAttribute('id','row1')
        var col1=document.createElement('col');
        col1.setAttribute('class','col-sm-9 my-auto');
        var col2=document.createElement('col');
        col2.setAttribute('class','col-sm-3 text-right');
        col1.innerHTML='<i>'+meaning['definitions'][i]['type']+'</i><br>'+meaning['definitions'][i]['definition']+'<br><span style=color:grey;font-size:13px>'+meaning['definitions'][i]['example']+meaning['definitions'][i]['emoji']+'</span>'
        if(meaning['definitions'][i]['image_url']){
        var img=document.createElement('img');
        img.setAttribute('class','img1');
        img.src=meaning['definitions'][i]['image_url']
        col2.append(img);}
        div1.append(col1,col2);
        define.append(div1);
    }
    col.append(define);
    maindiv.append(div);
    

})

 