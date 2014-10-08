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
            My interests lie in front-end development such as creating websites, branding, and user interfaces.  I am well versed in many front-end and back-end web languages and all things awesome on the web.
          </p>
          <a target="_blank" href="resume 8-12-2014.pdf" class="button">Resume</a>
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
              <div class="mix">
                <div class="mix-element currently-app">
                  <div class="mix-bottom">
                    <div class="mix-title">Currently App</div>
                    <div class="mix-category">iOS/Mobile</div>
                    <div class="mix-text">Weather application for iOS that gets data from forecast.io.  The app shows a 7-day forecast including the current day.  This was built using Apple's new language Swift.</div>
                    <a class="mix-button" href="https://github.com/ianfajardo/swift_weather_app" target="_blank">Github</a>
                  </div>
                </div>
              </div>
              <div class="mix">
                <div class="mix-element frint-edu">
                  <div class="mix-bottom">
                    <div class="mix-title">FRINT EDU</div>
                    <div class="mix-category">Non-Profit Website</div>
                    <div class="mix-text">Friends of Integral Education is an apolitical not for profit Charity created to facilitate the improvement of educational careers in rural communities in Cameroon. I am still currently working with this organization to get their website created. I am using Wordpress with custom theme.</div>
                    <a class="mix-button" href="http://ianfajardo.com/FRINT_EDU" target="_blank">View Work</a>
                  </div>
                </div>
              </div>
              <div class="mix">
                <div class="mix-element velvet-kitchen">
                  <div class="mix-bottom">
                    <div class="mix-title">Velvet Kitchen</div>
                    <div class="mix-category">Website Template</div>
                    <div class="mix-text">A generic resutarant wordpress theme with a responsive side bar.</div>
                    <a class="mix-button" href="http://ianfajardo.com/velvet_kitchen" target="_blank">View Work</a>
                  </div>
                </div>
              </div>
              <div class="mix">
                <div class="mix-element visual-euphoria">
                  <div class="mix-bottom">
                    <div class="mix-title">Visual Euphoria</div>
                    <div class="mix-category">Photography Website</div>
                    <div class="mix-text">Features fixed attatchment sections on the frontpage stacked on each other. Each page was created with minimalism in mind. The images gallery uses the Isotope javascript plugin for filtering.I made use of the Pace javascript plugin showing a loading bar before the content was completely loaded.</div>
                    <a class="mix-button" href="http://visualeuphoria.net" target="_blank">View Work</a>
                  </div>
                </div>
              </div>
              <div class="mix">
                <div class="mix-element matt-lani">
                  <div class="mix-bottom">
                    <div class="mix-title">Matt &amp; Lani 2014</div>
                    <div class="mix-category">Wedding Website</div>
                    <div class="mix-text">
                      A simple one page password protected website for Matthew and Lani. It featured a fixed top nav bar and a paralax scrolling header image. Included is also a javascript image gallery showing a timeline with polaroid images. I customized Twitter Bootstrap framework for this website.
                    </div>
                    <a class="mix-button" href="http://mattandlani2014.com/home.php" target="_blank">View Work</a>
                  </div>
                </div>
              </div>
              <div class="mix">
                <div class="mix-element oyfa">
                  <div class="mix-bottom">
                    <div class="mix-title">Organization of Young Filipino Americans</div>
                    <div class="mix-category">Organization Website</div>
                    <div class="mix-text">
                      Created the original website design for the Organization of Young Filipino Americans (OYFA) using Twitter Bootstrap from the ground up. I implemented a store using Paypal, a blog, and an alumni database using SQL and updated the website.</div>
                    <a class="mix-button" href="http://oyfaatuva.com/" target="_blank">View Work</a>
                  </div>
                </div>
              </div>
              <div class="gap"></div>
              <div class="gap"></div>
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
              <a target="_blank" href="http://visualeuphoria.net" class="button">View Site</a>
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