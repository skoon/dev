<script>
	import Abilities from "./abilities.svelte";
    import Book from "./book.svelte";

    let Name = "Joe Schmoe";
    let Profession = "";
    let God = "";
    let Rank = "";
    let Defense = "";
</script>

<h1>Character Sheet</h1>
<div>
    <fieldset>
        <legend>Name: {Name}</legend>
        <label for="profession">Profession:</label><input type="text" name="profession" value={Profession}>
        <label for="god">God:</label><input type="text" name="god" value={God}>
        <label for="rank">Rank:</label><input type="text" name="rank" value={Rank}>
        <label for="defense">Defense:</label><input type="text" name="defense" value={Defense}>
    </fieldset>

</div>
<div id='abilities'>
    <Abilities/>
</div>
<div id="items">

</div>
Stamina: When Unwounded: Current:
Possesions
Money
Blessings
Resurrection arraingments
Titles and Honours
<div id="book">
    <Book/>
</div>