/*
 * date       : 2018/02/22
 * auther     : x-color
 * function   : Auto input address
 * called by  : user.html
*/
// $(function() {
//   $('[name="zipCode"]').on('keydown keyup keypress change', function() {
//     var count = $(this).val().length;
//     if (count == 8) {
//       $.ajax({
//           url: 'http://zipcloud.ibsnet.co.jp/api/search' + '?zipcode=' + $('[name="zipCode"]').val(),
//           dataType: 'jsonp',
//           type: 'get'
//         })
//         .done((res) => {
//           if (res["status"] == "200") {
//             var results = res["results"][0];
//             var addr = results["address1"] + results["address2"] + results["address3"];
//             if ($('[name="address"]').val().indexOf(addr) == -1) {
//               $('[name="address"]').val(addr);
//             }
//           }
//         });
//     }
//   });
// });

$(function() {
  function getAddress(args) {
    var count = $(this).val().length;
    var addrForm = $(args.data.addr);
    if (count == 8) {
      $.ajax({
          url: 'http://zipcloud.ibsnet.co.jp/api/search' + '?zipcode=' + $(args.data.zipcode).val(),
          dataType: 'jsonp',
          type: 'get'
        })
        .done((res) => {
          if (res["status"] == "200") {
            var results = res["results"][0];
            var addr = results["address1"] + results["address2"] + results["address3"];
            if (addrForm.val().indexOf(addr) == -1) {
              addrForm.val(addr);
            }
          }
        });
    }
  }
  $('[name="zipCode"]').on('keydown keyup keypress change', {addr:'[name="address"]', zipcode:'[name="zipCode"]'}, getAddress);
  $('[name="employerZipCode"]').on('keydown keyup keypress change', {addr:'[name="employerAddress"]', zipcode:'[name="employerZipCode"]'}, getAddress);
});
