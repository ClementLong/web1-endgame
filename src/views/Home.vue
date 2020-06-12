<template>
  <div class="connexion connexion--blend">
    <form>
      <input
        class="username"
        type="text"
        name="name"
        placeholder="Prénom"
        autocomplete="off"
        required
      />
      <input
        class="password"
        type="text"
        name="password"
        autocomplete="off"
        placeholder="Mot de passe"
        required
      />
      <button class="signup-button">S'identifier</button>
    </form>
    <div class="dark-filter"></div>
    <div class="footer">
      <p>
        "Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus
        Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet
        d'une demande de droit d'utilisation. Ce site ne sera en aucun cas
        exploité à des fins commerciales et ne sera pas publié”
      </p>
      <p>
        © 02.06.2020 - 19.06.2020 GROUPE 8
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.connexion {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-image: url("../assets/img/background-filtre.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background-position: top right;
}
.connexion--blend {
  background-blend-mode: screen;
}
.dark-filter {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  position: absolute;
}
form {
  position: relative;
  z-index: 2;
}
.username {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
}
.password {
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  margin-top: 40px;
  outline: none;
}
.username::placeholder,
.password::placeholder {
  color: white;
}
input[type="text"] {
  color: white;
}
.signup-button {
  background-color: #feedcc;
  border: none;
  margin-top: 80px;
  width: 150px;
  height: 36px;
}
.signup-button:hover {
  cursor: pointer;
}
.footer {
  position: absolute;
  z-index: 2;
  height: 60px;
  width: 100%;
  background-color: black;
  bottom: 0;
  color: white;
  font-size: 10px;
}
</style>
