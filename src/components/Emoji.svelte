<script lang="ts">
	export let emoji: string;
	let size = Math.random() * 2 + 1;
</script>

<span
	class="absolute top-[var(--top)] left-[var(--left)] w-[var(--size)] aspect-square"
	style="--size: {size};">{emoji}</span
>

<style>
</style>
