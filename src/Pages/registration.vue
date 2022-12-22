<template>
  <header-menu></header-menu>
  <div class="register-container">
    <div class="register-form-container">
      <form id="registerForm">
        <h3>Регистрация нового пользователя</h3>
        <div class="form-group">
          <label for="uName">ФИО:
          </label>
          <input type="text" name="uName" id="uName" class="form-control"/>
        </div>

        <div class="form-group">
          <label for="">Пол:
          </label>
          <div class="form-gender">
            <select class="form-control">
              <option> Мужчина</option>
              <option> Женщина</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="uPhone">Телефон:
          </label>
          <input type="tel" name="uPhone" id="uPhone"
                 v-phone class="form-control"/>
        </div>

        <div class="form-group">
          <label for="uBirth">День рождения:
          </label>
          <input type="date" name="uBirth" id="uBirth" class="form-control"/>
        </div>

        <div class="form-group">
          <label for="address">Адрес:
          </label>
          <input type="text" name="address" id="address" class="form-control"/>
        </div>

        <div class="form-group">
          <label for="uEmail">Email:
          </label>
          <input type="email" name="uEmail" placeholder="example@gmail.com" id="uEmail" class="form-control"/>
        </div>

        <div class="form-group">
          <label for="uPass">Пароль:
          </label>
          <input type="password" name="uPass" id="uPass" class="form-control"/>
        </div>

        <div class="form-group">
          <input type="submit" value="Зарегестрироваться" class="btn"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "@/Components/header-menu.vue";


export default {
  name: "registration",
  components: {HeaderMenu}
}
</script>

<style scoped>
.register-container {
  padding: 0 9%;
}

.register-container .register-form-container {
  background: #fff;
}

.register-container .register-form-container form {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  max-width: 50rem;
  width: 100%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  animation: fadeUp 0.4s linear;
}

.register-container .register-form-container form h3 {
  padding-bottom: 1rem;
  font-size: 20px;
  text-transform: uppercase;
  color: #130f40;
  margin: 0;
}

.register-container .register-form-container form .form-control {
  margin: 0.7rem 0;
  border-radius: 0.5rem;
  background: #f7f7f7;
  padding: 5px;
  font-size: 1rem;
  color: #130f40;
  text-transform: none;
  width: 95%;
  border: none;
}

.register-container .register-form-container form label {
  font-size: 15px;
  margin: 0;
  padding: 0;
}

.register-container .register-form-container form span {
  font-size: 18px;
  padding-left: 5px;
  padding-right: 40px;
}

.register-container .register-form-container form .btn {
  margin: 1rem 0;
  padding: 10px;
  background: #0375a3;
  border-radius: 4px;

}

.register-container .register-form-container form p {
  padding-top: 1rem;
  font-size: 1.5rem;
  color: #666;
  margin: 0;
}

.register-container .register-form-container form p a {
  color: #27ae60;
}

.register-container .register-form-container form p a:hover {
  color: #130f40;
  text-decoration: underline;
}

.register-container .register-form-container form .form-group {
  margin: 0;
}

.register-container .register-form-container form .form-group .error-mess {
  font-size: 1.5rem;
  position: relative;
  color: rgb(243, 47, 47);
  margin: 0;
  padding: 0;
}
</style>