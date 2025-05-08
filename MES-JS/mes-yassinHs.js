const users = [
    { name: "Lina", score: 30,},
    { name: "Yasmine", score: 102  },
    { name: "Khalid", score: 17 },
    { name: "mohsen", score: 17, },
  ];
  
  function tri(users){
    for(let i=0; i<users.length;i++){
      for(let j=i+1; j<users.length; j++){
        if(users[i].score<users[j].score){
          let help= users[i];
          users[i]=users[j];
          users[j]=help;
        }
      }
    }
    return users;
  }
  console.log(tri(users));
  
  function addRank(users){
    let array=[];
    let userstri=tri(users);
    for(let i=0;i<userstri.length; i++){
      var obj={};
      obj.name=userstri[i].name;
      obj.score=userstri[i].score;
      obj.rank=i;
        array.push(obj);
      }
  return array;
  }
  console.log(addRank(users));
  
