$( document ).ready(function() {
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {is_all_payments: true},
        success: function(response) {

            response.data.forEach(payment_data => {
                // displays payment data on the page
                $('#payT_render').append(render_payment_table(payment_data));
            });

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });

      //conatains logged in users sign in info (email)
      const currentUserData =  currentUser();

      // displays avatar icon with users initials
      $('#avatar_p').attr('src',`https://avatars.dicebear.com/api/initials/${currentUserData.email}.svg`);

    $("#search_field_P").keyup(function(event) {
        $("#payT_render").html("");
        text = $(this).val();
        searched_payment(text);
      });
});

function render_payment_table(payment_data){
    const payment_table = `<tr class="text-gray-700 dark:text-gray-400">
                            <td class="px-4 py-3">
                            <div>
                                <p class="font-semibold">${payment_data.fname} ${payment_data.lname}</p>
                            </div>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${payment_data.order_id} 
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${payment_data.order_date}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${payment_data.price} 
                            </td>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${payment_data.payment_descrip}
                            </td>
                            <td class="px-4 py-3 text-sm">
                               $ ${payment_data.amount}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                $ ${payment_data.amount_paid}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${payment_data.MoP}
                            </td>
                        </tr>`
                        
        return payment_table;
}

function searched_payment(search = ""){
    // displays payment info on page based on search results
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {is_search_payments: {search}},
        success: function(response) {

            response.data.forEach(payment_data => {
                $('#payT_render').append(render_payment_table(payment_data));
            });

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}