import './lib/lib'
import $ from './lib/lib';

$('button').on('click', function(){
$(this).toggleClass('active')
});

console.log($('button').html('hello'))

