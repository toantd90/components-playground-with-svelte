<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { cn } from '$lib/utils';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import Label from '../ui/label/label.svelte';

	const {
		type = 'text',
		value = '',
		placeholder = 'Enter text...',
		disabled = false,
		readonly = false,
		size = 'md',
		withLabel = false,
		label = 'Input Label',
		isInvalid = false,
		// Visual styling props
		variant = 'outlined',
		fullWidth = true,
		width = '100%',
		borderRadius = 'md',
		borderColor = '#d1d5db',
		textColor = '#374151',
		backgroundColor = '#ffffff',
		focusColor = '#3b82f6',
		// Theme prop
		darkMode = false
	}: {
		type?: HTMLInputTypeAttribute;
		value?: string;
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		withLabel?: boolean;
		label?: string;
		isInvalid?: boolean;
		// Visual styling props
		variant?: 'outlined' | 'filled' | 'ghost';
		fullWidth?: boolean;
		width?: string;
		borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
		borderColor?: string;
		textColor?: string;
		backgroundColor?: string;
		focusColor?: string;
		// Theme prop
		darkMode?: boolean;
	} = $props();

	// Generate CSS custom properties for dynamic styling
	const customStyles = $derived(`
		--input-border-color: ${borderColor};
		--input-text-color: ${textColor};
		--input-bg-color: ${backgroundColor};
		--input-focus-color: ${focusColor};
		--input-width: ${fullWidth ? '100%' : width};
	`);

	// Size configurations
	const sizeConfig = $derived(
		{
			sm: { fontSize: '0.875rem', padding: '0.5rem' },
			md: { fontSize: '1rem', padding: '0.75rem' },
			lg: { fontSize: '1.125rem', padding: '1rem' },
			xl: { fontSize: '1.25rem', padding: '1.25rem' }
		}[size]
	);

	// Variant styles - theme-aware
	const variantClasses = $derived(
		{
			outlined: 'border-2',
			filled: darkMode ? 'border-0 bg-gray-800' : 'border-0 bg-gray-100',
			ghost: 'border-0 bg-transparent'
		}[variant]
	);

	// Border radius classes
	const borderRadiusClass = $derived(
		{
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			xl: 'rounded-xl',
			full: 'rounded-full'
		}[borderRadius]
	);

	// Generate dynamic size styles
	const sizeStyles = $derived(`
		font-size: ${sizeConfig.fontSize};
		padding: ${sizeConfig.padding};
	`);

	// Combine all styles
	const allStyles = $derived(`${customStyles} ${sizeStyles}`);

	const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="input-demo-container">
	{#if withLabel}
		<Label for={inputId} class="mb-2 block text-sm font-medium">{label}</Label>
	{/if}
	<Input
		id={inputId}
		{type}
		class={cn(
			'input-custom transition-all duration-200 focus:ring-2 focus:outline-none',
			variantClasses,
			borderRadiusClass,
			{
				'border-red-500 ring-red-500': isInvalid,
				'cursor-not-allowed opacity-50': disabled
			}
		)}
		style={allStyles}
		{value}
		{placeholder}
		aria-label={type ? `${type} input` : 'Input'}
		{disabled}
		{readonly}
		aria-invalid={isInvalid}
	/>
</div>

<style>
	.input-demo-container {
		width: 100%;
	}

	:global(.input-custom) {
		width: var(--input-width) !important;
		color: var(--input-text-color) !important;
		background-color: var(--input-bg-color) !important;
		border-color: var(--input-border-color) !important;
	}

	:global(.input-custom:focus) {
		--tw-ring-color: var(--input-focus-color) !important;
		border-color: var(--input-focus-color) !important;
	}

	:global(.input-custom:hover:not(:disabled)) {
		border-color: var(--input-focus-color) !important;
		opacity: 0.8;
	}
</style>
