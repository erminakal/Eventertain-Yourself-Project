<template>
  <div id="navbar">
    <b-navbar    
    fixed="top"
      toggleable="lg"
      type="dark"
      variant="dark"
      class="navbar navbar-expand-lg navbar-dark primary-color"
    >
      <!--To brand tou site sticky=true-->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <b-navbar-brand href="/">
        <img
          src="@/assets/logo1.png"
          width="200"
          height="50"
          align="center"
          alt
          class="d-inline-block align-top"
        />
      </b-navbar-brand>
      <!--Gia ola ta megethi othonwn-->
      <b-navbar-toggle target="navbar"></b-navbar-toggle>

      <b-collapse id="navbarNav" is-nav>
        <b-navbar-nav id="nav">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/search_events_venues">Search for Events and Venues</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
          <!-- <b-nav-item to="/search_venues">Search Venues</b-nav-item>-->
        </b-navbar-nav>
      </b-collapse>
     
    </b-navbar>
  </div>
</template>
 
<script>
export default {
  name: "navbar"  
};
</script>

<style>
#navbar {
  font-family: "Palatino";
  font-size: 16px;
  width: 100%;
  font-style: normal;
  overflow: hidden;
  position: relative;
  padding: 0px 0px 20px 0px;
}
#navbar a:hover {
  background-color: darkgoldenrod;
  border-radius: 12px;
}

#navbar a {
  float: left;
  display: block;
  color: blanchedalmond;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: darkgoldenrod;
}
</style>
