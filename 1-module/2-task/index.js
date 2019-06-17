'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
  const trimmedName = name && name.trim();

  if (!trimmedName) {
    return false;
  }

  const hasSpaces = trimmedName.indexOf(' ') !== -1;
  if (hasSpaces) {
    return false;
  }

  const isTooShort = trimmedName.length < 4;
  if (isTooShort) {
    return false;
  }

  return true;
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}


