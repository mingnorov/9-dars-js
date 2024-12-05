//const listItem = document.getElementsByTagName('li');
//console.log(listItem[1]); // tegi ozi bln ishlaydi

//const item = document.getElementById('title');
//console.log(item); // id bln ishlaydi

//const user = document.getElementsByClassName('list-item');
//user.forEach((element) => {
//console.log(element);
//})

   const name =prompt('ismingiz nima');
   const age =prompt('yoshingiz nechida');
   const score =prompt('balingizni kiriting');

   document.querySelector ('#name').textContent = name;
   document.querySelector ('#age').textContent = age;
   document.querySelector ('#score').textContent = score;

   const resultElemeent = document.querySelector('#result');

   if(parseInt(score) >= 70){
    resultElemeent.textContent = 'siz unversitetga kirdingiz';
   }else {
    resultElemeent.textContent = 'siz unversitetga kirmadingiz';
   }
   