//tab slider
    $('.tab-slider').slick({
      
      slidesToShow: 9,
      slidesToScroll: 0,
      infinite: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]

    });


// $('a[data-toggle]').click(function(){


//       $('a[data-toggle]').removeClass('active');

//       if( $(this).parents() === $('.slick-slide.slick-current.slick-active') ) {

//         $(this).addClass('active');

//         console.log('it is working');

//       }

//     });

$(document).ready(function () {
  // Ensure the dropdown functionality runs when the document is fully loaded
  $('#services-dropdown').change(function () {
      // Get the selected tab ID
      var selectedTab = $(this).val();

      // Hide all tab panes
      $('.tab-pane').removeClass('active show').addClass('fade');

      // Show the selected tab pane
      $(selectedTab).addClass('active show').removeClass('fade');

      console.log(`Switched to: ${selectedTab}`);
  });
});