<script lang="ts">
	let calculated = false;
	let matchProcent = 0;
	let name1 = 'Tobias';
	let name2 = 'Karsten';

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
			return;
		}

		let processedName1 = name1.toLowerCase();
		let processedName2 = name2.toLowerCase();

		if (checkName(processedName1) && checkName(processedName2)) {
			matchProcent = 90 + Math.floor(Math.random() * 10);
		} else {
			matchProcent = Math.floor(Math.random() * 100);
		}

		calculated = true;
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
		<div class="flex flex-col justify-center items-center gap-4">
			<p class="font-bold text-7xl">{matchProcent}% match</p>
			<div class="text-xl flex gap-2 mb-20">
				<p>{name1}</p>
				<p>{name2}</p>
			</div>
			<button on:click={reset}>Recalculate</button>
		</div>
	{:else}
		<form on:submit|preventDefault={handleSubmit}>
			<div class="input-wrapper">
				<label for="name1">Person 1</label>
				<input id="name1" type="text" placeholder="Name" bind:value={name1} />
			</div>
			<div class="input-wrapper">
				<label for="name2">Person 2</label>
				<input id="name2" type="text" placeholder="Name" bind:value={name2} />
			</div>
			<button>Calculate</button>
		</form>
	{/if}
</section>

<style>
</style>
