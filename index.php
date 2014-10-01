<?php include_once("header.php"); ?>

<body>
  
  <?php include_once("nav.php"); ?>

  <div class="start">
    <div class="overlay"></div>

    <video preload="auto" autoplay loop muted id="bgvid" poster="images/code_top.jpg">
      <source src="videos/front.webm" type="video/webm">
      <source src="videos/front.ogg" type="video/ogg">
      <source src="videos/front-header.mp4" type="video/mp4">
    </video>

    <div id="header-text" class="container">
      <div class="row">
        <div class="blk-12 text-center">
          <h1 style="color:#f0f0f0">Software Engineer &amp; Web Developer</h1>
          <h3 style="color:#f0f0f0; font-weight:300;">
            I make <span>Functional</span> and Beautiful Websites
          </h3>
          <a onclick="$('#contact').animatescroll({scrollSpeed:2000, padding:60});" class="button">Let's Work Together!</a>
        </div>
      </div>
    </div>
  </div>

  <div id="about">
    <div class="container">
      <div class="row">
        <div class="blk-4">
          <div class="img-responsive img-center">
            <img src="images/me.png" alt="me">
          </div>
        </div>
        <div class="blk-8">
          <h2>Hello, I'm Ian Fajardo.</h2>
          <p>I am a passionate Software Engineer &amp; Web Developer based in the DC/Northern VA area.  </p>
          <p>
            My interests lie in front-end development such as creating websites, branding, and user interfaces.  I am well versed in many front-end and back-end web languages and experience in all things awesome on the web.
          </p>
          <a target="blank" href="resume 8-12-2014.pdf" class="button">Resume</a>
          <a onclick="$('#contact').animatescroll({scrollSpeed:2000, padding:60});" class="button">Let's Get in Touch!</a>
        </div>
      </div>
    </div>
  </div>

  <div style="background-color:#181818;">
    <div class="container text-center" style="padding:40px;">
      <h2 style="color: #f0f0f0; font-weight:300">Form Follows Function</h2>
      <p style="color: #f0f0f0; font-size:25px; line-height:30px; margin-top:20px;">I believe that the design of a piece of work should compliment <br /> its features and not hinder or complicate them.</p>
    </div>
  </div>

  <div id="work">
    <div class="container">
      <div class="row">
        <div class="blk-12">
          <h3 class="text-center" style="font-weight:300;">Work</h3>
          <hr />
        </div>
      </div>
      <div id="work-container">
        <div class="row">
          <div class="blk-12">
            <div class="work">
              <div class="mix"></div>
              <div class="mix"></div>
              <div class="mix"></div>
              <div class="mix"></div>
              <div class="mix"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!--
    <div class="container">
      <div class="row">
        <div class="blk-12">
          <h3 class="text-center" style="font-weight:300;">Work</h3>
          <hr />
        </div>
      </div>
      <div class="row">
          <div class="blk-6">
            <div class="img-responsive img-center">
              <img src="images/work/visualeuphoria_cover.png" alt="Visual Euphoria">
            </div>
          </div>
          <div class="blk-6">
            <div style="padding-left:10px;">
              <h4>Visual Euphoria</h4>
              <p>Personal photography services website featuring fixed attatchment sections on the frontpage that were stacked on top of each other making it seem as if they flowed into each other.  Each page was created with minialsim in mind.  The images gallery uses the Isotope javascript plugin for filtering.  Since most pages heavily rely on high quality images, I made use of the Pace javascript plugin showing a loading bar before the content was completely loaded. </p>
              <a target="blank" href="http://visualeuphoria.net" class="button">View Site</a>
            </div>
          </div>
        </div>
      <div class="row">
        <div class="blk-6">
          <div class="img-responsive img-center">
            <img src="images/work/mattlani_cover.jpg">
          </div>
        </div>
        <div class="blk-6">
          <div style="padding-left:10px;">
            <h4>Matt and Lani 2014</h4>
            <p>A simple one page website for Matthew and Lani.  I had a password protected splash page as a gateway to the main website.  
              It featured a fixed top nav bar and a paralax scrolling header image.  Included is also a javascript image gallery showing a timeline with polaroid images. I customized Twitter Bootstrap framework for this website.. </p>
              <a href="images/work/mattandlani2014.png" class="button">Show Full</a>
          </div>
        </div>
      </div>
    </div>-->
  </div>

  <div id="contact">
    <div class="container text-center">
      <h3 style="color:#f0f0f0; font-weight:300;">Contact Me</h3>
      <hr />
      <p>
        Let's Work Together!
      </p>
      <div class="contact-form">
        <form class="text-center" name="Contact" method="post" action="#contact">
            <div class="top-form">
            <div id="email-form" >
              <input name="Email" type="email" placeholder="E-Mail" required/>
            </div>
            <div  id="name-form">
              <input name="Name" type="text" placeholder="Name/Company"/>
            </div>
            </div>
            <textarea id="f_message" name="Message" rows="8" placeholder="Your Message" required></textarea>
            <input name="Submit" type="submit" value="Send"/>
          </form>
      </div>
    </div>
  </div>

    
  <?php include_once("footer.php"); ?>
  </body>
</html>