<template>
<div class="row">
  <div class="col">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/logo.png" alt="Vue Logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="mav-items">
              <router-link to="/" class="nav-link" exact>
                Home
              </router-link>
            </li>
            <li class="mav-items">
              <router-link to="add" class="nav-link" exact>
                Add Country
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: "MainNavigation"
}
</script>

<style scoped>

.navbar-brand img {
  width: 40px;
  height: 40px;
}

.navbar-brand {
  background-color: transparent !important;
}

.router-link-active {
  background-color: darkblue;
  color: white !important;
}

</style>