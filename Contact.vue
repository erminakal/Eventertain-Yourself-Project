<template>
  <div class="contact">
    <div id="body">
      <br />
      <h5>
        Ways of Contact with the
        <b>"Eventertain Yourself"</b>project
      </h5>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <p id="text1">Do you have any observation?</p>
            <hr id="hr"/>
            <div>
              <b-form @reset="onReset" @submit="sendEmail" v-if="show">
                
                <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    required
                    placeholder="Enter your name"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Email:"
                  label-for="input-2"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter your email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Your Message:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.message"
                    required
                    placeholder="Write your message"
                    rows="8"
                  ></b-form-input>
                </b-form-group>
              </b-form>
              <br />

              <div class="btn-toolbar" id="buttons">
              <b-button id="submit" variant="info" class="md-6" onclick="sendEmail()">Submit</b-button>
             
              <b-button type="reset" id="reset" variant="danger" class="md-6">Reset</b-button>
              </div>
            </div>
          </b-col>

          <b-col>
            <p id="text3">You can follow us</p>
            <hr id="hr"/>
            <p>
              <img
                src="@/assets/facebook.png"
                width="50"
                height="40"
                alt
                class="d-inline-block align-top"
                top="20"
              />
              <b-link to="www.facebook.com" top="20">Facebook</b-link>
            </p>

            <p>
              <img
                src="@/assets/twitter.png"
                width="30"
                height="30"
                alt
                class="d-inline-block align-top"
                top="20"
              />
              <b-link to="www.twitter.com" top="20"> Twitter</b-link>
            </p>

            <hr id="hr" />

            <div class="span12">
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
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: ""
      },
      show: true
    };
  },
  methods: {
    /* onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));}, */
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    
},

sendEmail(evt) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<sender’s email address>",
	Password : "<email password>",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
  }
};
</script>
<style>
#text1 {
  padding-top: 20px;
}
#text2 {
  padding-top: 20px;
}
#text3 {
  padding-top: 20px;
}

#submit{
margin-left: 5px;

}

#reset{margin-left: 20px;}

#input-1 {
  margin-left: 120px;
  width: 300px;
}
#input-2 {
  margin-left: 120px;

  width: 300px;
}

#input-3 {
  text-align:start;

  margin-left: 120px;

  height: 60px;
  width: 300px;
}

#buttons{

  margin-left: 200px;
}

#hr{
  width: 100px;
}
</style>
