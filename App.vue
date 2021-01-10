<template>
  <div id="body">
    <div id="page-container">
      <div id="content-wrap">
        <div id="nav">
          <navbar></navbar>
          <router-view />
        </div>
     
        <div class="footer-dark" id="footer">
          <footer>
            <div class="row" id="row">
              <div class="col-md-3 item">
                <h3 padding-left="20px">Information retrieved from</h3>
                <ul>
                  <li>
                    <div id="eventful">
                      <p padding-left="10px">
                        <a href="https://eventful.com/" target="_blank">
                          <img
                            src="@/assets/eventful_logo.gif"
                            alt="Local Events, Concerts, Tickets"
                            id="eventful_logo"
                          />
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div id="foursquare">
                      <p>
                        <a
                          href="https://foursquare.com/city-guide"
                          target="_blank"
                        >
                          <img
                            src="@/assets/foursquare.gif"
                            alt="Foursquare_Venues"
                            id="foursquare_logo"
                          />
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
    
              <div class="col-md-3 item">
                <h3>Site Map</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/search_events_venues">Search Tool</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
         
              <div class="col-md-3 item">
                <div>
                
                  <a href="#"
                    ><b-img src="@/assets/facebook.png" id="facebook"></b-img
                  ></a>
                  <a href="#"
                    ><b-img src="@/assets/twitter.png" id="twitter"></b-img
                  ></a>
                  <a href="#"
                    ><b-img src="@/assets/instagram.jpg" id="instagram"></b-img
                  ></a>
                </div>
                <p class="copyright" id="copyright">
                  © 2020 Copyright.All Rights Reserved.
                </p>
              </div>
              <div class="col-md-3 item">
                <div class="span12" id="newsletter">
                  <!-- <div class="thumbnail center well well-small text-center"> -->
                  <p>Subscribe for weekly events and upcoming venues</p>

                  <br />
                  <form action="" method="post">
                    <div class="input-prepend">
                      <span class="add-on"><i class="icon-envelope"></i></span>
                      <input
                        type="text"
                        id=""
                        name=""
                        placeholder="Enter your email"
                      />
                    </div>
                    <br />
                    <input
                      id="subscribe_button" 
                      type="submit"
                      value="Stay in touch"
                      class="btn btn-large"
                    />
                  </form>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NavBar from "C:/Users/user/Desktop/EFProject/frontend/efproject/src/components/NavBar";

export default {
  components: { navbar: NavBar }
};
</script>
 

<style>
#subscribe_button {
  color: blanchedalmond;
  background-color: rgba(69, 170, 237, 0.789);
}

.footer-dark {
  /* padding: 50px 0; */
  color: #f0f9ff;
  background-color: #282d32;
  /* position: fixed;  */
  height: 400px;
  clear: both;
  padding-top: 2px;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 1;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
    margin-bottom: 0px;
  }
}

.footer-dark .item.text {
  margin-bottom: 0px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    /* margin-top: 20px; */
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}

#page-container {
  position: static;
  height: 100%;
  width: 100%;
  /*  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */

  text-align: center;
  font-family: "Palatino";
}

#content-wrap {
  height: 100%;
  width: 100%;
  background-color: rgb(221, 169, 92);
}

#eventful {
  padding-left: 25px;
}

/*#app {
  width: 1440px;
  height: 757px;
  background-color: rgb(221, 169, 92);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  font-family: "Calibri";
}*/

#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 190px;
  margin-bottom: 0px;
  color: blanchedalmond;
}

#footer-text {
  color: blanchedalmond;
}

#body {
  /* width: 1440px;
  height: 700px;*/
  padding-bottom: 50px;
  font-family: "Palatino";
  background-color: rgb(221, 169, 92);
  text-align: center;
}
#facebook {
  height: 60px;
  width: 60px;
}
#twitter {
  height: 40px;
  width: 40px;
}
#instagram {
  height: 40px;
  width: 50px;
  padding-left: 10px;
}
#eventful_logo {
  height: 60px;
  width: 100px;
  padding-top: 10px;
}
#foursquare_logo {
  height: 60px;
  width: 120px;
  padding-top: 10px;
  padding-left: 20px;
}
#row {
  margin-top: 20px;
  margin-bottom: 20px;
}
#copyright {
  position: relative;
  text-align: end;
}
#newsletter{

align-content: center;
}
</style>
