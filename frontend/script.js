const btnEl = document.querySelector("#btn");

btnEl.addEventListener("click",function(){

    createPassword();

}
);


    function createPassword(){

        const chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
        const passwordLength = 14;
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomNum = Math.floor(Math.random()*chars.length) 
            password+=chars.substring(randomNum,randomNum+1);
        }

        document.getElementById("pswrd").value = password;
        
    }

    const copyIcon = document.getElementById("icon");




    copyIcon.addEventListener("click",function(){

        // Password 
            const  passwordInput= document.getElementById("pswrd");

            navigator.clipboard.writeText(passwordInput.value);
    
    });