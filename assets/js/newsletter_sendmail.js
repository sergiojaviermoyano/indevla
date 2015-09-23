$(document).ready(function() {
  // Handler for .ready() called.

        //save newsletter
        $('#newsletter').click(function(){
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if(regex.test($("#newsL").val()))
                {
                        var data_ajax={
                                         type: 'POST',
                                         url: "newsletter.php",
                                         data: { mail : $("#newsL").val()},
                                         success: function( data ) {
                                                                     if(data == 1)
                                                                     {
                                                                        $("#newsL").val('');
                                                                     }
                                                                     
                                                                   },
                                         error: function(){
                                                             //$('#waiting').fadeOut('slow');
                                                             alert("Error");
                                                           },
                                         dataType: 'json'
                                         };
                }       $.ajax(data_ajax);
        });
        
        //Send mail
        $('#sendMail').click(function(){
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if(regex.test($("#yourMail").val()))
                {                        
                        var data_ajax={
                                         type: 'POST',
                                         url: "sendmail.php",
                                         data: {
                                                mail : $("#yourMail").val(),
                                                name : $('#yourName').val(),
                                                subj : $('#yourSubject').val(),
                                                mesj : $('#yourMsj').val()                  
                                                },
                                         success: function( data ) {
                                                                     if(data == 1)
                                                                     {
                                                                        $("#yourMail").val('');
                                                                        $('#yourName').val('');
                                                                        $('#yourSubject').val('');
                                                                        $('#yourMsj').val('');
                                                                     }
                                                                     
                                                                   },
                                         error: function(){
                                                             //$('#waiting').fadeOut('slow');
                                                             alert("Error");
                                                           },
                                         dataType: 'json'
                                         };
                                         
                        $.ajax(data_ajax);
                }       
                        
                    //yourName
                    //yourSubject
                    //yourMsj
                    //$name = $('#yourName').val();
        });
        
});