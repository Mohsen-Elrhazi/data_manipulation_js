let produits = [
    {"quantite" : 4, "prix": 100},
    {"quantite" : 6, "prix": 300},
    {"quantite" : 10, "prix": 400},
    {"quantite" : 20, "prix": 50},
  ];
  
    //   ajouter un key de prix total =quantite*prix dans chaque objet 

    function addPrixTotal(produits){
        for(let i=0;i<produits.length;i++){
         let prixTotal=produits[i].quantite*produits[i].prix;
          if(prixTotal>100){
            prixTotal=prixTotal-10;
          }
          produits[i].prixTotal=prixTotal;   
        }
          return produits
        }
        
        console.log(addPrixTotal(produits));