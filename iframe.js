<script>
    window.addEventListener('load', function () {
        var button = document.getElementsByClassName('go-button');
        console.log(button[0]);
        button[0].addEventListener('click', handleButtonClick);
        function handleButtonClick(e) {
            if(e.view.origin.startsWith('https://app.eightfold.ai')){
                console.log(e.view.origin);window.parent.dispatchEvent(myEvent)
            }
            else{
                return;
            }
        }
    })
</script>
