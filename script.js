const table=[
    "Le bonheur est juste à côté de nous",
    "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur",
    "Fais de ta vie un rêve, et d’un rêve, une réalité",
    "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours"
]
const nouv=document.getElementById("nouvel");
function nouvelle(){
    const taill=table.length;
    let variable=Math.floor(Math.random()*taill);
    const citation=table[variable];

   
    let pcitation=document.getElementById("pcitation");
    const p=document.createElement('p');
    const button=document.createElement('button');
    button.type='button';
    button.textContent="Ajouté d'auteur";
    button.setAttribute("id","auteur");
    p.innerText= citation;
    p.name= citation;
    button.setAttribute('onclick','butaut()');
    pcitation.append(p, button); 
}
function butaut(){
    const inputtext=document.createElement("input");
    inputtext.type='text';
    inputtext.name='inputauteur';
    inputtext.style.width=`${30}%`;
    inputtext.style.height=`${30}px`;
    inputtext.placeholder="Le nom de l'auteur";
    pcitation.append(inputtext);

    const inputenvoyer=document.createElement("button");
    inputenvoyer.type="button";
    inputenvoyer.name="buttonenvo";
    inputenvoyer.textContent="Ajouter";
    inputenvoyer.setAttribute('onclick','ajou()');
    pcitation.append(inputenvoyer);
}
function ajou(){
    const  inputenvoyer=document.getElementsByName('buttonenvo');
    const  citation=document.getElementsByName('citation');
if(inputenvoyer.value !==""){
    console.log(inputenvoyer.value)
    // citation.innerText="Le nom de  l'auteur est"+;
    
}
}