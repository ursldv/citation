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

    pcitation.append(p, button); 
}