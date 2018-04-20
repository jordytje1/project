var second_card_lol = document.getElementById("secondCard");

second_card_lol.style.display = "none";

function logOut() {

    var second_card = document.getElementById("secondCard");

    var first_card = document.getElementById("firstCard");

    second_card.style.display = "none";

    first_card.style.display = "block";

    swal({
      title: "Logged out!",
      text: "I am the wettest don in the dunia! Carry on trolling! Lol i have such a dead trim!",
      icon: "success",
      button: "Resume",
    });
}

var second_card = document.getElementById("secondCard");

second_card.style.display = "none";

function spiralChange() {
    document.getElementById("webhook").value = "https://discordapp.com/api/webhooks/430810719462883346/pyRJtnp6xV4fbmJREyA_4HI-e232H5JR0EUCu2cEDKsOxtLGTOuinLZys-rrdex_P_TQ";
}

function calChange() {
    document.getElementById("webhook").value = "https://discordapp.com/api/webhooks/430843917844480021/5VZcneZBS9tag4uauENlJtZp3RhZSBzp8O-B777vFbkufUKtaOG-7bb5ZM8VJKJC6rsF";
}

function ladsChange() {
    document.getElementById("webhook").value = "https://discordapp.com/api/webhooks/236897891304734720/QTVybf-6ttXwuDm_hXnEPqapPSj1oSEBW03bWK59Zd6HmeCqmym8-kB1xShB8ZXX5uAn";
}


$(function() {
            $('#sender').click(function(e) {
            var url = $("#webhook").val();
            var content = $("#content").val();
            var username = $("#username").val();
            var avatar_url = $("#avatar_url").val();
            $.post(url,
        {"content": content, "username": username, "avatar_url": avatar_url},
            function(){
                Materialize.toast('Bot sent!', 4000)
            });
            });
        });
                            
                            function checker() {
                                var url = document.getElementById("webhook");
                                var message = document.getElementById("content");
                                var username = document.getElementById("username");
                                var avatar = document.getElementById("avatar_url");

                                if (url.value == "") {
                                    swal({
                                      title: "Enter something in!",
                                      text: "You didn't enter anything for Webhooks? Where is your bot supposed to go?",
                                      icon: "error",
                                      button: "Resume",
                                    });
                                    
                                    }

                                else if (message.value == "") {
                                    swal({
                                      title: "Enter something in!",
                                      text: "You didn't give the bot a message to give? What is your bot supposed to tell da people?",
                                      icon: "error",
                                      button: "Resume",
                                    });
                                    }

                                else if (username.value == "") {
                                    swal({
                                      title: "Enter something in!",
                                      text: "Your bot doesn't even have a name! What is he / she supposed to be referred by?",
                                      icon: "error",
                                      button: "Resume",
                                    });
                                    }
                                
                                else { 
                                    swal({
                                      title: "Eureka!",
                                      text: "Your bot has been sent to the Discord Server. Remember, it may not make it out alive...",
                                      icon: "success",
                                      button: "Resume",
                                    });
                                }
                            }
                            
function code() {
                
                var input_code = document.getElementById("code");
                
                var code = "operation_discord"
                
                var first = document.getElementById("firstCard");
                
                var second = document.getElementById("secondCard");
                
                if (input_code.value == code) {
                    
                    second.style.transition = "all 2s";
                    
                    second.style.display = "block";
                    
                    first.style.transition = "all 2s";       
                    
                    first.style.display = "none";
                    
                    swal({
                      title: "Whoo! You have successfully logged in!",
                      text: "You have gotten the code and logged in! I am so proud of you...",
                      icon: "success",
                      button: "Proceed",
                    });

                }
                
                else {
                    swal({
                      title: "Wait a minute, hold on there!",
                      text: "Sorry dude, you don't know the ultra secret code! If you really want to know the code, contact my discord: swadical#6636.",
                      icon: "error",
                      button: "Escape from embarassment.",
                    });
                }
            }