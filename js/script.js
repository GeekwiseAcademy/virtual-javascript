var sticky = {
    fixedAfter: 85,
    init: function() {
      this.header = document.getElementsByTagName("header")[0];
      this.scroll();
      this.events();
    },

    scroll: function() {
      if(window.scrollY > this.fixedAfter) {
        this.header.classList.add("header-fixed");
        this.header.classList.remove("header-relative");
      }
      else {
        this.header.classList.add("header-relative");
        this.header.classList.remove("header-fixed");
      }
    },

    events: function() {
      window.addEventListener("scroll", this.scroll.bind(this));
    }
  };

  var bodyTag = document.querySelector('body');
  if(bodyTag.className == 'show-reminder') {
    setTimeout(function(){ alert('Did you add, commit, and push your code from last class?'); }, 2000);
  }
  if (bodyTag.className == 'welcome-msg') {
    setTimeout(function(){ alert("Welcome to Geekwise Academy's Websites for Beginners course. Here are some things you should know: Door code: 25829# WiFi: 'Bitwise' password: BUTTONBOX (all caps) Slack Channel: #websitesforbeginners"); }, 2000);
  }

  var checkAuth = function() {
    var auth = prompt("What is today's code?");
    var home = "http://geekwiseacademy.github.io/mobile-friendly-websites";
    console.log(auth, bodyTag);
    if(auth === null) window.location.href = home;
    switch(bodyTag.id) {
      case 'day_two':
        if(auth.toLowerCase() === 'water') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_three':
        if(auth.toLowerCase() === 'bastille day') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_four':
        if(auth.toLowerCase() === 'act of contrition') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_five':
        if(auth.toLowerCase() === "you can't go home again") {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_six':
        if(auth.toLowerCase() === 'litmus') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_seven':
        if(auth.toLowerCase() === 'six degrees of separation') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_eight':
        if(auth.toLowerCase() === 'flesh and bone') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_nine':
        if(auth.toLowerCase() === 'tigh me up, tigh me down') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_ten':
        if(auth.toLowerCase() === 'the hand of god') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      case 'day_eleven':
        if(auth.toLowerCase() === 'colonial day') {
          return true;
        } else {
          window.location.href = home;
        }
        break;
      default:
        window.location.href = home;
    }
  };

  if(bodyTag.id) {
    checkAuth();
  }
  document.addEventListener("DOMContentLoaded", sticky.init.bind(sticky));
