window.addEventListener("load", addnoopener);

function addnoopener() {
    $('a[target="_blank"]').attr('rel', 'noopener noreferrer');
}