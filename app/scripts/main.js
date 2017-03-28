console.log('\'Allo \'Allo!');
//jQuery: runs when the document is ready
$(document).ready(function() {
  //settings for fullpage.js: anchors are for the sections on the menu, responsiveWidth is breakpoint
    var sections = ['sa','sb','sc','sd','se'];
    $('.tlthead').textillate({
      minDisplayTime: 1000,
      in: { effect: 'flipInX'},
      out :{ delay: 3, effect: 'lightSpeedOut'},
      loop: true
    });
    $('.tlt').textillate({ in: { effect: 'rollIn' } });
    $('#fullpage').fullpage({
        menu: '#nav',
       	anchors: ['a', 'b', 'c', 'd', 'e'],
       	normalScrollElements: '#nav',
        paddingTop: 0,
        paddingBottom: 0,
        responsiveWidth: 640,
        css3: true,
        onLeave: function(index, nextIndex, direction){
          if (nextIndex == 3) {

          }
          if (nextIndex == 2) {
            
          }
          if (nextIndex == 4) {
            $('.tlt').textillate('in');
          }
        }
      });

});
