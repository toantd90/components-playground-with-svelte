<script lang="ts">
	import type { TSchema, TSchemaProperty } from '../../registry/components';

	// import { Label } from '$lib/components/ui/label';
	// import { Input } from '$lib/components/ui/input';
	// import { Checkbox } from '$lib/components/ui/checkbox';
	// import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	// import { Slider } from '$lib/components/ui/slider';
	// import { Separator } from '$lib/components/ui/separator';

	// // Configuration state
	// let textValue = $state('Item 1');
	// let isOpen = $state(true);
	// let selectedType = $state('One');
	// let sizeValue = $state(50);

	// const typeOptions = [{ label: 'Single', value: 'single' }, { label: 'Multiple', value: 'multiple' }];

	const { schema, config = $bindable() }: { schema: TSchema; config: Record<string, any> } = $props();

</script>

<div class="h-full p-6">
	<h2 class="mb-6 text-lg font-semibold">Configuration</h2>

	<div class="space-y-6">
		{#each Object.entries(schema) as [key, prop]}
			{#if prop.type === 'string'}
				<div class="space-y-2">
					<label class="text-sm font-medium">{prop.label}</label>
					<input
						type="text"
						bind:value={config[key]}
						class="rounded-md border px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
					/>
					{#if prop.description}
						<p class="text-xs text-muted-foreground">{prop.description}</p>
					{/if}
				</div>
			{:else if prop.type === 'boolean'}
				<div class="flex items-center space-x-2">
					<input
						type="checkbox"
						bind:checked={config[key]}
						class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
					/>
					<label class="text-sm font-medium">{prop.label}</label>
				</div>
			{:else if prop.type === 'select'}
				<div class="space-y-1">
					<label class="text-sm font-medium">{prop.label}</label>
					{#if prop.values}
						<select
							bind:value={config[key]}
							class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
						>
							{#each prop.values as option}
								<option value={option.value}>{option.label}</option>
							{/each}
						</select>
					{/if}

					{#if prop.description}
						<p class="text-xs text-muted-foreground">{prop.description}</p>
					{/if}
				</div>
			{:else if prop.type === 'number'}
				<div class="space-y-1">
					<label class="text-sm font-medium">{prop.label}: {config[key]}</label>
					<input type="range" bind:value={config[key]} class="w-full" />
					{#if prop.description}
						<p class="text-xs text-muted-foreground">{prop.description}</p>
					{/if}
				</div>
			{/if}
		{/each}
	</div>
</div>
