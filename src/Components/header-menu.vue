<template>
  <header class="header">

    <div class="Logo">
      <h3>Delivery Кушац</h3>
    </div>
    <div class="menu">
      <ul class="itemMenu">
        <li><a href="#">Меню</a></li>
        <li><a href="#">Заказы</a></li>
        <li><a href="#">Корзина</a></li>
        <!-- После появления глобальных переменных, необходимо добавить v-if для авторизированных\не.. -->
      </ul>
      <ul class="authorizationMenu">

        <li><a href="#">Авторизация</a></li>
        <li><a href="#">Регистрация</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-menu"
}
</script>

<style scoped>
.header{
  width: 100%;
  position: relative;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
}
.Logo{
  margin-left: 10px;
}
.Logo, .menu{
  font-size: 17px;
  font-family: Arial;
  margin-top: 5px;
  display: inline-block;
  white-space: nowrap;
}

.menu li{
  margin-left: 25px;
  display: inline-block;

}
.authorizationMenu{
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 15px;
}
.menu a{
  text-decoration: none;
  color: black;
}
.menu a:hover{
  color: seagreen;
}

</style>