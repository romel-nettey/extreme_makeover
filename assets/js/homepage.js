$( document ).ready(function() {
   
    if(isSignedIn()){
        // if user is signed in display user related content
        $("#logout_btn_i").click(()=>{
            logout_from_index();
        })
        

        // get user data
        const currentUserData =  currentUser();
        $('#avatar').attr('src',`https://avatars.dicebear.com/api/initials/${currentUserData.email}.svg`);
    }

    else if(!isSignedIn()){ 

        location.href = `./pages/login.html`;

    }

});



