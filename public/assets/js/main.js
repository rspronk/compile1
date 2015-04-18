(function($){
    var $input = $('#input'), $output = $('#output'),
        $submit = $('#submit-button'), $lang = $('#language');
    $submit.on('click', function() {
        if ($input.val().length > 0 && $lang.val().length > 0) {
            var req = {content: $('#input').val()};
            
            $.post('/api/' + $lang.val(), req, function(res){
                if (res) {
                    if (res.success) $output.val(res.output);
                    else alert(res.message);
                } else {
                    alert('Unknown error');
                }
            });
        }
    });
    
    $lang.on('change', function() {
        var $example = $('#' + $lang.val() + '-example');
        if ($example.length > 0) {
            $output.val('');
            $input.val('');
            $input.val($example.html());
        }
    });
})(jQuery);