'use strict';

const itemTwo = document.querySelector('.item_two .props__list');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');
const itemsAll = document.querySelectorAll('.item');

const propItemFour = document.querySelector('.item_two .props__item_four');

const propsItemsFour = itemFour.querySelectorAll('.props__item_four');
const propsItemsThree = itemThree.querySelector('.props__list');
const propsItemsFive = itemFive.querySelector('.props__list');
const propsItemsTwo = itemSix.querySelectorAll('.props__item_two');

const h2ItemTwo = document.querySelector('.item_two .item__title');
const h2ItemFive = document.querySelector('.item_five .item__title');
const h2ItemSix = document.querySelector('.item_six .item__title');

itemsAll[3].after(itemFour);
propsItemsFour[2].after(propItemFour);

propsItemsThree.replaceWith(propsItemsFive);
itemFive.querySelector('.content').append(propsItemsThree);
itemTwo.after(propsItemsTwo[0]);
itemTwo.after(propsItemsTwo[1]);

h2ItemTwo.replaceWith(h2ItemFive);
h2ItemSix.replaceWith(h2ItemTwo);
propsItemsThree.before(h2ItemSix);
document.querySelector('.ads').remove();