<script lang="ts">
	import seedrandom from 'seedrandom';

	let calculated = false;
	let matchProcent = 0;
	let name1 = '';
	let name2 = '';
	let errorMessage = '';

	let specialNames = [
		'tobias',
		'karsten',
		'marcus',
		'william',
		'lucas',
		'steven',
		'victor',
		'alex'
	];

	const handleSubmit = () => {
		if (name1 === '' || name2 === '') {
			if (name1 === '') {
				errorMessage = 'Person 1 does not have a name!';
			} else {
				errorMessage = 'Person 2 does not have a name!';
			}

			return;
		}

		let processedName1 = name1.toLowerCase();
		let processedName2 = name2.toLowerCase();

		let procssedNames = [processedName1, processedName2].sort();

		let rng = seedrandom(procssedNames.join());

		if (checkName(processedName1) && checkName(processedName2)) {
			matchProcent = 90 + Math.floor(rng() * 10);
		} else {
			matchProcent = Math.floor(rng() * 100);
		}

		calculated = true;
		errorMessage = '';
	};

	const reset = () => {
		calculated = false;
		name1 = '';
		name2 = '';
	};

	const checkName = (name: string) => {
		return specialNames.includes(name);
	};
</script>

<section class="flex justify-center items-center min-h-screen">
	{#if calculated}
		<div class="flex text-center flex-col justify-center items-center gap-8">
			<p class="font-bold text-8xl font-display">{matchProcent}% match</p>
			<div class="text-4xl font-display flex gap-4 mb-20 items-center">
				<p>{name1}</p>
				<span>💗</span>
				<p>{name2}</p>
			</div>
			<button on:click={reset}>Recalculate</button>
		</div>
	{:else}
		<form
			on:submit|preventDefault={handleSubmit}
			class="md:text-center flex flex-col gap-8 md:items-center md:gap-20"
		>
			<div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
				<div class="input-wrapper">
					<label for="name1">Person 1</label>
					<input id="name1" type="text" placeholder="Name" bind:value={name1} />
				</div>
				<span class="text-8xl md:block hidden">💗</span>
				<div class="input-wrapper">
					<label for="name2">Person 2</label>
					<input id="name2" type="text" placeholder="Name" bind:value={name2} />
				</div>
			</div>

			<div class="flex flex-col items-center gap-8">
				<button>Calculate</button>
				<p class="italic">{errorMessage}</p>
			</div>
		</form>
	{/if}
</section>

<style>
</style>
