<script>
    export let bookName = "";
    export let currentEntry = "1";
    export let codewords = "";
</script>

<fieldset>
    <legend>Current Book: {bookName}</legend>  
    Current Entry:<input type="text" name=entry value="{currentEntry}"
    Codewords: <textarea>{codewords}</textarea>
</fieldset>
