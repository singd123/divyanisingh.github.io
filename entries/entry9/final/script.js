
$(document).ready(function () {
    
   
    var feelings = ["Excited", "Curious", "Nervous", "Reflective", "Empowered"];
    var generatorIndex = 0;

    $('#sentenceGenerator').click(function () {
        $('#sentenceGenerator').text(feelings[generatorIndex]);
        generatorIndex = (generatorIndex + 1) % feelings.length;
    });

 
    $('#colorPicker').change(function () {
        var selectedColor = $(this).val();
        $('body').css('background-color', selectedColor);
    });
});
