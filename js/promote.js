

  $(document).ready(function () {
    // Initialize the carousel
    $("#testimonialCarousel").carousel({
      interval: 3000, // Change slide every 3 seconds
    });
    
    // Enable dot indicators to control the carousel
    $(".carousel-indicators li").click(function() {
      var slideTo = $(this).attr("data-bs-slide-to");
      $("#testimonialCarousel").carousel(parseInt(slideTo));
    });
  });


 