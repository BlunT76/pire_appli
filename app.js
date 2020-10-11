var i = 0;
const btn = document.getElementById( 'bouton' );
document.body.style.height = '100vh';

document.getElementById( 'bouton' ).addEventListener( 'click', function()
{
    setInterval(function() {
        window.navigator.vibrate( 300 );
        buttonMove();
    }, 50);
} );

function buttonMove ()
{
    
    var num = Math.floor(Math.random()*99) + 1;
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    i += num / 50 ;
    
    btn.style.position = "absolute";
    if( i > 0 )
    {
        btn.style.top = i + 'px';
    } else
    {
        i = 0;
    }
    
}
