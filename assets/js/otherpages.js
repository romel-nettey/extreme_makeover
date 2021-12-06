$( document ).ready(function() {
   
    if(isSignedIn()){
        // if user is signed in display user related content
        $('.signed_in').addClass('show');
        $('.signed_in').removeClass('hide');
        

        // // log user out 
        // $("#logout_btn").click(()=>{
        //     logout()
        // })

        $("#logout_btn_i").click(()=>{
            logout_from_index();
        })
        

        // get user data
        const currentUserData =  currentUser();
        // $('#username').html(currentUserData.name);
        $('#avatar').attr('src',`https://avatars.dicebear.com/api/initials/${currentUserData.name}.svg`);
    }

    else if(!isSignedIn()){ 

        location.href = `login.html`;
        
    }

    
  

   
});



