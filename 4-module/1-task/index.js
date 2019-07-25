'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    const list = document.createElement('ul');

    for(let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `${friend.firstName} ${friend.lastName}`;

        list.appendChild(listItem);
    }

    return list;
}

