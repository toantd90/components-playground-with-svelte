<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import Label from '../ui/label/label.svelte';

	const {
		type,
		value,
		placeholder,
		disabled,
		readonly,
		size,
		withLabel = false,
		label = 'Input Label'
	}: {
		type: HTMLInputTypeAttribute;
		value: string;
		placeholder: string;
		disabled: boolean;
		readonly: boolean;
		size: 'sm' | 'md' | 'lg';
		withLabel: boolean;
		label: string;
	} = $props();

	// Determine size class based on the size prop
	const sizeStyle = $derived(
		{
			sm: '--font-size: 0.75rem; --padding: 0.25rem;',
			md: '--font-size: 1rem; --padding: 0.5rem;',
			lg: '--font-size: 1.5rem; --padding: 0.75rem;'
		}[size]
	);
	const inputId = $props.id();
</script>

<div>
	{#if withLabel}
		<Label for={inputId} class="mb-2 block text-sm font-medium">{label}</Label>
	{/if}
	<Input
		id={inputId}
		{type}
		class="input-custom size-fit rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		style={sizeStyle}
		{value}
		{placeholder}
		aria-label={type ? `${type} input` : 'Input'}
		{disabled}
		{readonly}
	/>
</div>

<style>
	:global(.input-custom) {
		font-size: var(--font-size) !important;
		padding: var(--padding) !important;
	}
</style>
