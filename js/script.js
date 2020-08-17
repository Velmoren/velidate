document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  //   получаем элементы со страницы
  const form = document.querySelector("form");
  const pass = document.querySelector(".formPass");
  const passConf = document.querySelector(".formPassConf");
  const check = document.querySelector(".form-check-input");
  let isSubmit = false;

  const regExpName = /^[a-z0-9_-]{3,16}$/;
  const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const regExpPass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

  const submit = () => {
    alert("Данные отправлены");

    for (let elem of form.elements) {
      if (
        !elem.classList.contains("btn") &&
        !elem.classList.contains("form-check-input")
      ) {
        elem.value = "";
      }

      if (elem.classList.contains("form-check-input")) {
        elem.checked = false;
      }
    }
  };

  const validate = (elem) => {
    if (elem.name === "username") {
      if (!regExpName.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.textContent =
          "Введите корректное имя пользователя";
      } else {
        elem.nextElementSibling.textContent = "";
      }
    }

    if (elem.name === "email") {
      if (!regExpEmail.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.textContent = "Введите корректный email";
      } else {
        elem.nextElementSibling.textContent = "";
      }
    }

    if (elem.name === "password") {
      if (passConf.value !== pass.value && passConf.value !== "") {
        passConf.nextElementSibling.textContent = "Пароли не совпадают";
      } else {
        passConf.nextElementSibling.textContent = "";
      }

      if (!regExpPass.test(elem.value) && elem.value !== "") {
        elem.nextElementSibling.textContent = "Введите корректный пароль";
      } else {
        elem.nextElementSibling.textContent = "";
      }
    }

    if (elem.name === "passwordConfirmation") {
      if (passConf.value !== pass.value && passConf.value !== "") {
        passConf.nextElementSibling.textContent = "Пароли не совпадают";
      } else {
        passConf.nextElementSibling.textContent = "";
      }
    }
  };

  //   слушатели
  for (let elem of form.elements) {
    if (
      !elem.classList.contains("btn") &&
      !elem.classList.contains("form-check-input")
    ) {
      elem.addEventListener("blur", () => {
        validate(elem);
      });
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // проверка на заполнение полей
    for (let elem of form.elements) {
      if (
        !elem.classList.contains("btn") &&
        !elem.classList.contains("form-check-input")
      ) {
        if (elem.value === "") {
          elem.nextElementSibling.textContent = "Данные не введены";
          isSubmit = false;
        } else {
          isSubmit = true;
        }
      }
    }

    if (isSubmit) {
      if (check.checked) {
        submit();
      } else {
        alert("Подтвердите согласие с условиями");
      }
    }
  });
});
