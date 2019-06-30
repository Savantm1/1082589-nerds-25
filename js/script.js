
      var link = document.querySelector(".modal-link");
      var modal = document.querySelector(".write-us");
      var close = document.querySelector(".btn-close");
      var login = document.querySelector("[name=person-name]");
      var form = document.querySelector("form");
      var mail = document.querySelector("[name=mail-adress]");
      var isStorageSupport = true;
      var storage = "";

        try {
          storage = localStorage.getItem("login");
        } catch (err) {
          isStorageSupport = false;
        };

        try {
          storage = localStorage.getItem("mail");
        } catch (err) {
          isStorageSupport = false;
        };

      link.addEventListener("click",function(evt){
        evt.preventDefault();
        modal.classList.add("modal-show");

        if (storage) {
        login.value = storage;
        mail.focus();
        } else {
        login.focus();
        };
      });

      close.addEventListener("click", function(evt){
        evt.preventDefault();
        modal.classList.remove("modal-show");
        modal.classList.remove("modal-error");
      });

      form.addEventListener("submit", function (evt) {
        if (!login.value || !mail.value) {
          evt.preventDefault();
          modal.classList.remove("modal-error");
          modal.offsetWidth = modal.offsetWidth;
          modal.classList.add("modal-error");
          console.log("Нужно ввести логин и пароль");
        } else {
            if(isStorageSupport){
              localStorage.setItem("login", login.value);
              localStorage.setItem("mail", mail.value);
            };
          };
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (modal.classList.contains("modal-show")) {
            modal.classList.remove("modal-show");
            modal.classList.remove("modal-error");
          }
        }
  });
