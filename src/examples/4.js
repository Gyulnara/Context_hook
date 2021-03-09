import React, { useEffect, useState, useRef } from "react";

// Hooks are regular JavaScript functions, but there are two rules to follow.

// 1) Используйте хуки только на верхнем уровне

// Не используйте хуки внутри циклов, условных операторов или вложенных функций.

/* Вместо этого всегда используйте хуки только на верхнем уровне React-функций. 
Исполнение этого правила гарантирует, что хуки вызываются в одинаковой последовательности при каждом 
рендере компонента. Это позволит React правильно сохранять состояние хуков между множественными вызовами 
useState и useEffect.
 */

// 2) Вызывайте хуки только из React-функций

/* Не вызывайте хуки из обычных функций JavaScript.

  1) Вызывать хуки из функционального компонента React. 
  2) Вызывать хуки из пользовательского хука
  
  */

/* / export default function Form() {
  // 1. Используем переменную состояния name
  const [name, setName] = useState("Mary");
  // 2. Используем эффект для сохранения данных формы
  useEffect(() => console.log(name));

  // 3. Используем переменную состояния surname
  const [surname, setSurname] = useState("Poppins");

  // 4. Используем эффект для обновления заголовка страницы
  useEffect(function updateTitle() {
    document.title = name + " " + surname;
  });
  return <p>{`${name} ${surname}`}</p>;
} 

//useState('Мэри')           // 1. Инициализируем переменную name значением 'Мэри'
//useEffect(persistForm)     // 2. Добавляем эффект для сохранения данных формы
//useState('Поппинс')        // 3. Инициализируем переменную surname значением 'Поппинс'
//useEffect(updateTitle)     // 4. Добавляем эффект для обновления заголовка страницы


//useState('Мэри')           // 1. Читаем переменную состояния name (аргумент игнорируется)
//useEffect(persistForm)     // 2. Заменяем эффект сохранения данных формы
//useState('Поппинс')        // 3. Читаем переменную состояния surname (аргумент игнорируется)
//useEffect(updateTitle)     // 4. Заменяем эффект обновления заголовка страницы


 // 🔴 Нарушаем первое правило, помещая хук в условие
 /* if (name !== '') {
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });
} */

//useState('Мэри')           // 1. Читаем переменную состояния name (аргумент игнорируется)
// useEffect(persistForm)    // 🔴 Хук пропускается!
//useState('Поппинс')        // 🔴 2 (но ранее был 3). Ошибка при чтении переменной состояния surname
//useEffect(updateTitle)     // 🔴 3 (но ранее был 4). Ошибка при замене эффекта

/* export default function Form() {
  // const [name, setName] = useState("Mary");

  if (true) {
    useEffect(() => console.log());
  }

  return <p></p>;
} */

/* useEffect(function persistForm() {
  // 👍 Первое правило больше не нарушается
  if (name !== '') {
    localStorage.setItem('formData', name);
  }
}); */
