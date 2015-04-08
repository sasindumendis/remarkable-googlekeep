(function() {

    setTimeout(render, 0);

    function render() {
        document.querySelector('.notes-container').removeEventListener('DOMSubtreeModified', render, false);

        var converter = window.markdownit();
        var contentEditables = document.querySelectorAll('div[contenteditable="false"]:not(.r4nke-YPqjbf)');

        for (var i = 0; i < contentEditables.length; i++) {        
            var output = converter.render(contentEditables[i].innerHTML.replace(/<br>/g, '\n'));
            
            if (contentEditables[i].nextSibling.classList.contains('remarkable')) {
                contentEditables[i].nextSibling.innerHTML = output;
            }else {
                contentEditables[i].insertAdjacentHTML('afterend', '<div tabindex="0" class="remarkable">' + output + '</div>');
            }
        }
        document.querySelector('.notes-container').addEventListener('DOMSubtreeModified', render, false);
    }
})();