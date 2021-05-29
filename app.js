const menu = [
  {
    id: 1,
    title: 'Tteokbokki',
    category: 'Korea',
    price: 10.99,
    img: 'https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg',
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: 'Chicken Ramen',
    category: 'Japan',
    price: 7.99,
    img: 'https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg',
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: 'Bibimbap',
    category: 'Korea',
    price: 8.99,
    img: 'https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg',
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: 'Dan Dan Mian',
    category: 'China',
    price: 5.99,
    img: 'https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg',
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: 'Yangzhou Fried Rice',
    category: 'China',
    price: 12.99,
    img: 'https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg',
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: 'Onigiri',
    category: 'Japan',
    price: 9.99,
    img: 'https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg',
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: 'Jajangmyeon',
    category: 'Korea',
    price: 15.99,
    img: 'https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg',
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: 'Ma Yi Shang Shu',
    category: 'China',
    price: 12.99,
    img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg',
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: 'Doroyaki',
    category: 'Japan',
    price: 3.99,
    img: 'https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg',
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: 'Kebab',
    category: 'Turkish',
    price: 10.99,
    img: 'https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    desc: `Made with minced meat, it is very similar to Urfa kebab. It is different from Urfa kebab just with its hot taste. Minced meat, prepared from the special areas of the meat, is wrapped around the skewer and cooked on wood fire for Adana kebab. It is served with bulghur pilaf and roasted vegetables.`,
  },
  {
    id: 11,
    title: 'Baklava',
    category: 'Turkish',
    price: 5.99,
    img: 'https://images.unsplash.com/photo-1617806501553-d3a6a3a7b227?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    desc: `Baklava is a rich, sweet pastry made of layers of filo pastry filled with chopped nuts and sweetened with syrup or honey.`,
  },
];

let section = document.querySelector('.section-center');
let container = document.querySelector('.btn-container');

let card = function (img, title, price, desc) {
  return `<div class="menu-items">
  <img src="${img}" alt="${title}" class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${title}</h4>
      </div>
      <div class="menu-text">${desc}</div>
      <h4 class="price">${price}</h4>
  </div>
</div>`;
};

function listAll() {
  let list = menu.map(({ img, title, price, desc }) =>
    card(img, title, price, desc)
  );
  section.innerHTML = list.join('');
}

listAll();

let allBtn = document.createElement('button');
allBtn.innerHTML = 'All';
allBtn.setAttribute('data-id', 'All');
allBtn.addEventListener('click', listAll);
allBtn.className = 'btn btn-outline-dark btn-item';
container.append(allBtn);

function createBtn(name) {
  btn = document.createElement('button');
  btn.innerHTML = name;
  btn.setAttribute('data-id', name);
  btn.addEventListener('click', function (event) {
    console.log(event.target.attributes[0].nodeValue.toString());
    let category = event.target.attributes[0].nodeValue.toString();
    let list = menu.filter((item) => item.category == category);
    console.log(list);
    let x = list.map((item) =>
      card(item.img, item.title, item.price, item.desc)
    );
    section.innerHTML = x.join('');
  });
  btn.className = 'btn btn-outline-dark btn-item';
  container.append(btn);
}

createBtn('Korea');
createBtn('Japan');
createBtn('China');
createBtn('Turkish');
