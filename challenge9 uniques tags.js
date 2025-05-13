// Challenge 9: Extraire tous les tags

// Challenge 9: Extraire tous les tags

const articles = [
  { title: "JS", tags: ["programming", "js", "frontend", "js"] },
  { title: "PHP", tags: ["backend", "web", "frontend"] },
];

function extractTags(articles) {
  let array = [];
  let indice = 0;
  for (let i = 0; i < articles.length; i++) {
    for (let j = 0; j < articles[i].tags.length; j++) {
      let tag = articles[i].tags[j];
      let exists = false;

      for (let k = 0; k < indice; k++) {
        if (array[k] === tag) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        array.push(tag);
        indice++;
      }
    }
  }
  return array;
}
console.log(extractTags(articles));
