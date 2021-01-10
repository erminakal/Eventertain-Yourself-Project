<template>
  <div class="about">
    <div id="body">
      <br />
      <h4 id="title">About Eventertain Yourself project</h4>
      <br />

         <div id="about_text">
            <p class="text-justify ml-4 mr-4" id="paragraph">
              This project started due to the bachelor project I had to create
              for the Department of Digital Systems, University of Piraeus.
            </p>         
            <p class="text-justify ml-4 mr-4" id="paragraph">
              The main idea is to be able to choose an event through the
              <a
                href="https://london.eventful.com/events"
              >Eventful</a> database.
              You can put some filters like the category, <br/>price of the event and when you choose then you have information about the specific event.
            </p>
            <p class="text-justify ml-4 mr-4" id="paragraph">
              Also, due to the fact that sometimes after an event either music concert or
              conference we have the need to continue our<br/> entertainment to another place like
              some bar or restaurant, I thought to be able also to drag such information
              according <br/>to the geographical area.
            </p>
            <p class="text-justify ml-4 mr-4" id="paragraph">
              So a supplamentary tool was created that allows the visitor to search for
              some other place of entertainment according to <br/>his/her preference
              (bar, restaurant, tavern etc.) and his geo-tags.
              The database of the website
              <a
                href="https://foursquare.com/"
              >Foursquare</a> was also
              used to <br/>create this tool.
            </p>
          </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "about" //this is the name of the component
};
</script>
<style>
#content-wrap {
  padding-bottom: 12rem;
}
#p {
  text-align: justify;
}
#paragraph{
padding-left: 250px;

}

#about_text{
padding-left: 170px;
}

#wrapper {
  font-size: 18px;
  font-family: "Lato";
  color: black;
  background-color: rgb(143, 119, 153);
  align-content: center;
  align-self: center;
  margin-left: 300px;
}

#border {
  widows: 100px;
  height: 300px;
}
#about_card {
  width: 550px;
  height: 300px;
  background-color: cadetblue;
  align-self: center;
}
#title {
  padding-left: 10px;
}
</style>