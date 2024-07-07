<script>
	import Abilities from "./abilities.svelte";
    import Book from "./book.svelte";
    import {character} from "./character.js";

</script>

<h1>Character Sheet</h1>
<div>
    <fieldset>
        <legend>Name: {character.Name}</legend>
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