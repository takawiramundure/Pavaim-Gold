<template>
  <nav class="navbar navbar-transparent navbar-inverse navbar-expand-lg fixed-top" role="banner">
    <div class="container">
      <div class="navbar-translate">
        <a
          href="/"
          class="navbar-brand active router-link-active el-popover__reference"
          aria-describedby="el-popover-1587"
          tabindex="0"
        >
          <img src="~/assets/images/logo/web_logo.png" alt class="logo" />
        </a>
        <span>
          <div
            role="tooltip"
            id="el-popover-1587"
            aria-hidden="true"
            class="el-popover el-popper popover"
            tabindex="0"
            style="width: 200px; display: none;"
          ></div>
        </span>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler collapsed"
        >
          <span class="navbar-toggler-bar top-bar"></span>
          <span class="navbar-toggler-bar middle-bar"></span>
          <span class="navbar-toggler-bar bottom-bar"></span>
        </button>
      </div>
      <div data-color="orange" id="navigation" class="navbar-collapse collapse">
        <ul class="navbar-nav ml-auto">
          <nuxt-link tag="li" to="/about" class="nav-link">
            <a>
              <i class="now-ui-icons arrows-1_cloud-download-93"></i>
              <p>About Us</p>
            </a>
          </nuxt-link>
          <nuxt-link tag="li" to="/services" class="nav-link">
            <a>
              <i class="now-ui-icons arrows-1_cloud-download-93"></i>
              <p>Services</p>
            </a>
          </nuxt-link>
          <nuxt-link tag="li" to="/blog" class="nav-link">
            <a>
              <i class="now-ui-icons arrows-1_cloud-download-93"></i>
              <p>News</p>
            </a>
          </nuxt-link>
          <nuxt-link tag="li" to="/portfolio" class="nav-link">
            <a>
              <i class="now-ui-icons arrows-1_cloud-download-93"></i>
              <p>About Us</p>
            </a>
          </nuxt-link>
          <nuxt-link tag="li" to="/contact" class="nav-link">
            <a>
              <i class="now-ui-icons arrows-1_cloud-download-93"></i>
              <p>Get In Touch</p>
            </a>
          </nuxt-link>

          <li class="nav-item">
            <a
              rel="tooltip"
              title="Follow us on Twitter"
              data-placement="bottom"
              href="#"
              target="_blank"
              class="nav-link"
            >
              <i class="fa fa-twitter"></i>
              <p class="d-lg-none d-xl-none">Twitter</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              rel="tooltip"
              title="Like us on Facebook"
              data-placement="bottom"
              href="#"
              target="_blank"
              class="nav-link"
            >
              <i class="fa fa-facebook-square"></i>
              <p class="d-lg-none d-xl-none">Facebook</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              rel="tooltip"
              title="Follow us on Instagram"
              data-placement="bottom"
              href="#"
              target="_blank"
              class="nav-link"
            >
              <i class="fa fa-instagram"></i>
              <p class="d-lg-none d-xl-none">Instagram</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="gap"></div> -->
  </nav>
  <!--/header-->
</template>