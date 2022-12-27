'use strict';
document.querySelector('.ads').remove();
const itemTwoList = document.querySelector('.item_two .props__list');
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

itemsAll[3].after(itemFour);
propsItemsFour[2].after(propItemFour);

propsItemsThree.replaceWith(propsItemsFive);
itemFive.querySelector('.content').append(propsItemsThree);
itemTwoList.after(propsItemsTwo[0]);
itemTwoList.after(propsItemsTwo[1]);