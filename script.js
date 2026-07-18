/* ===========================================================
   OBINNA AIR CONDITIONING — Site Script
   =========================================================== */
(function(){
  "use strict";

  var WHATSAPP_NUMBER = "2348029831281"; // 0802 983 1281 in international format
  var PHONE_NUMBER = "+2348029831281";
  var DEFAULT_MSG = "Hello, I visited your website and I'm interested in your air conditioning services. I would like to make an enquiry.";

  document.addEventListener("DOMContentLoaded", function(){

    /* ---- Loader ---- */
    var loader = document.getElementById("loader");
    window.addEventListener("load", function(){
      setTimeout(function(){ if(loader) loader.classList.add("hide"); }, 350);
    });
    // Fallback in case load event is slow/blocked
    setTimeout(function(){ if(loader) loader.classList.add("hide"); }, 2200);

    /* ---- Sticky header shadow ---- */
    var header = document.querySelector(".site-header");
    function onScrollHeader(){
      if(!header) return;
      if(window.scrollY > 12) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    onScrollHeader();
    window.addEventListener("scroll", onScrollHeader, {passive:true});

    /* ---- Mobile nav toggle ---- */
    var toggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");
    if(toggle && navLinks){
      toggle.addEventListener("click", function(){
        toggle.classList.toggle("open");
        navLinks.classList.toggle("open");
      });
      navLinks.querySelectorAll("a").forEach(function(a){
        a.addEventListener("click", function(){
          toggle.classList.remove("open");
          navLinks.classList.remove("open");
        });
      });
    }

    /* ---- Active nav link highlighting ---- */
    var current = (window.location.pathname.split("/").pop() || "index.html");
    document.querySelectorAll(".nav-links a[href]").forEach(function(a){
      var href = a.getAttribute("href");
      if(href === current || (current === "" && href === "index.html")){
        a.classList.add("active");
      }
    });

    /* ---- Reveal on scroll ---- */
    var revealEls = document.querySelectorAll(".reveal");
    if("IntersectionObserver" in window && revealEls.length){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      }, {threshold:0.12, rootMargin:"0px 0px -40px 0px"});
      revealEls.forEach(function(el, i){
        el.style.setProperty("--i", el.dataset.i || (i % 6));
        io.observe(el);
      });
    } else {
      revealEls.forEach(function(el){ el.classList.add("in"); });
    }

    /* ---- FAQ accordion ---- */
    document.querySelectorAll(".faq-item").forEach(function(item){
      var q = item.querySelector(".faq-q");
      var a = item.querySelector(".faq-a");
      if(!q || !a) return;
      q.addEventListener("click", function(){
        var isOpen = item.classList.contains("open");
        item.closest(".faq-list").querySelectorAll(".faq-item.open").forEach(function(other){
          if(other !== item){
            other.classList.remove("open");
            other.querySelector(".faq-a").style.maxHeight = null;
          }
        });
        if(isOpen){
          item.classList.remove("open");
          a.style.maxHeight = null;
        } else {
          item.classList.add("open");
          a.style.maxHeight = a.scrollHeight + "px";
        }
      });
    });

    /* ---- FAQ category filter ---- */
    var faqCats = document.querySelectorAll(".faq-cats .filter-btn");
    if(faqCats.length){
      faqCats.forEach(function(btn){
        btn.addEventListener("click", function(){
          faqCats.forEach(function(b){ b.classList.remove("active"); });
          btn.classList.add("active");
          var cat = btn.dataset.cat;
          document.querySelectorAll(".faq-item").forEach(function(item){
            item.style.display = (cat === "all" || item.dataset.cat === cat) ? "" : "none";
          });
        });
      });
    }

    /* ---- Product filter ---- */
    var prodFilters = document.querySelectorAll(".filter-bar .filter-btn");
    if(prodFilters.length){
      prodFilters.forEach(function(btn){
        btn.addEventListener("click", function(){
          prodFilters.forEach(function(b){ b.classList.remove("active"); });
          btn.classList.add("active");
          var cat = btn.dataset.cat;
          document.querySelectorAll(".product-card, .gallery-item").forEach(function(card){
            card.style.display = (cat === "all" || card.dataset.cat === cat) ? "" : "none";
          });
        });
      });
    }

    /* ---- Lightbox ---- */
    var lightbox = document.getElementById("lightbox");
    if(lightbox){
      var lbImg = lightbox.querySelector("img");
      document.querySelectorAll("[data-lightbox]").forEach(function(trigger){
        trigger.addEventListener("click", function(e){
          e.preventDefault();
          var src = trigger.dataset.lightbox || trigger.querySelector("img").src;
          lbImg.src = src;
          lightbox.classList.add("open");
        });
      });
      lightbox.addEventListener("click", function(e){
        if(e.target === lightbox || e.target.closest(".lb-close")){
          lightbox.classList.remove("open");
          lbImg.src = "";
        }
      });
      document.addEventListener("keydown", function(e){
        if(e.key === "Escape") { lightbox.classList.remove("open"); lbImg.src=""; }
      });
    }

    /* ---- Scroll-to-top ---- */
    var fabTop = document.querySelector(".fab-top");
    if(fabTop){
      window.addEventListener("scroll", function(){
        if(window.scrollY > 500) fabTop.classList.add("show");
        else fabTop.classList.remove("show");
      }, {passive:true});
      fabTop.addEventListener("click", function(){
        window.scrollTo({top:0, behavior:"smooth"});
      });
    }

    /* ---- Wire up WhatsApp links dynamically (data-wa-msg overrides default) ---- */
    document.querySelectorAll("[data-wa]").forEach(function(el){
      var msg = el.getAttribute("data-wa-msg") || DEFAULT_MSG;
      el.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-call]").forEach(function(el){
      el.setAttribute("href", "tel:" + PHONE_NUMBER);
    });

    /* ---- Icons ---- */
    if(window.lucide){ window.lucide.createIcons(); }
  });
})();

