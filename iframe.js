// this script is embedded in iframe.
<script>
    // adding event listener on load to avoid getting undefined value for variable button.
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
