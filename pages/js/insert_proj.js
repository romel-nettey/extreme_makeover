$( document ).ready(function() {
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {get_design_id: true},
        success: function(response) {
            
           if(response.success) {
           
            response.data.forEach(design_data => {
                $(render_design_dropdown(design_data)).insertAfter($('#design-dropdown'));
            });

            
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });



}); 

function insert_project(){
    project_id = $('#insert-projID').val();
    proj_description = $('#insert-projDescr').val();
    Designs_id = $('#insert-projDesign-ID').val();
    start_date = $('#insert-projStart').val();
    end_date = $('#insert-projEnd').val();
    proj_location = $('#insert-projlocation').val();
    proj_cost = $('#insert-projCost').val();
    proj_status = $('#status').val();

    let regex_date = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    test_start_date = regex_date.test(start_date);
    test_end_date =  regex_date.test(end_date);

    if(!test_start_date){
        alert("date format must be: yy-mm-dd");
        return false;
    }

    if(!test_end_date){
        alert("date format must be: yy-mm-dd");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {insert_new_project: {
            project_id, 
            proj_description,
            Designs_id,
            start_date, 
            end_date, 
            proj_location, 
            proj_cost, 
            proj_status 
        }},
        success: function(response) {
            console.log(response)
           if(response.success) {
           
            alert("inserted new project");
            window.location.href="../index.html";
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest); 
          },
    });
}


function render_design_dropdown(design_data){
    const design_dropdown = `<option value="${design_data.designs_id}">${design_data.designs_id}</option>`
    return design_dropdown;
}