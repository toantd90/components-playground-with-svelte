<script lang="ts">
	import type { TSchema, TSchemaProperty } from '../../registry/components';

	// import { Label } from '$lib/components/ui/label';
	// import { Input } from '$lib/components/ui/input';
	// import { Checkbox } from '$lib/components/ui/checkbox';
	// import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	// import { Slider } from '$lib/components/ui/slider';
	import { Separator } from '$lib/components/ui/separator';

	// // Configuration state
	// let textValue = $state('Item 1');
	// let isOpen = $state(true);
	// let selectedType = $state('One');
	// let sizeValue = $state(50);

	// const typeOptions = [{ label: 'Single', value: 'single' }, { label: 'Multiple', value: 'multiple' }];

	const { schema, config = $bindable() }: { schema: TSchema; config: Record<string, any> } =
		$props();
</script>

<div class="h-full overflow-y-auto p-6">
	<h2 class="mb-6 text-lg font-semibold">Configuration</h2>

	<div class="space-y-8">
		<!-- Content Settings Group -->
		<div>
			<h3 class="mb-4 text-sm font-semibold tracking-wide text-gray-600 uppercase">Content</h3>
			<div class="space-y-4">
				{#each Object.entries(schema) as [key, prop]}
					{#if ['type', 'value', 'placeholder', 'disabled', 'readonly', 'withLabel', 'label', 'isInvalid'].includes(key)}
						{#if prop.type === 'string'}
							<div class="space-y-2">
								<label class="text-sm font-medium">{prop.label}</label>
								<input
									type="text"
									bind:value={config[key]}
									class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
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
						{/if}
					{/if}
				{/each}
			</div>
		</div>

		<Separator />

		<!-- Visual Style Settings Group -->
		<div>
			<h3 class="mb-4 text-sm font-semibold tracking-wide text-gray-600 uppercase">Visual Style</h3>
			<div class="space-y-4">
				{#each Object.entries(schema) as [key, prop]}
					{#if ['variant', 'size', 'fullWidth', 'width', 'borderRadius'].includes(key)}
						{#if prop.type === 'string'}
							<div class="space-y-2">
								<label class="text-sm font-medium">{prop.label}</label>
								<input
									type="text"
									bind:value={config[key]}
									class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
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
						{/if}
					{/if}
				{/each}
			</div>
		</div>

		<Separator />

		<!-- Colors Settings Group -->
		<div>
			<h3 class="mb-4 text-sm font-semibold tracking-wide text-gray-600 uppercase">Colors</h3>
			<div class="space-y-4">
				{#each Object.entries(schema) as [key, prop]}
					{#if ['borderColor', 'textColor', 'backgroundColor', 'focusColor'].includes(key)}
						{#if prop.type === 'color'}
							<div class="space-y-2">
								<label class="text-sm font-medium">{prop.label}</label>
								<div class="flex items-center space-x-2">
									<input
										type="color"
										bind:value={config[key]}
										class="h-10 w-16 cursor-pointer rounded border border-gray-300"
									/>
									<input
										type="text"
										bind:value={config[key]}
										placeholder="#000000"
										class="flex-1 rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
									/>
								</div>
								{#if prop.description}
									<p class="text-xs text-muted-foreground">{prop.description}</p>
								{/if}
							</div>
						{/if}
					{/if}
				{/each}
			</div>
		</div>

		<!-- Catch-all for any other properties -->
		{#each Object.entries(schema) as [key, prop]}
			{#if !['type', 'value', 'placeholder', 'disabled', 'readonly', 'withLabel', 'label', 'isInvalid', 'variant', 'size', 'fullWidth', 'width', 'borderRadius', 'borderColor', 'textColor', 'backgroundColor', 'focusColor'].includes(key)}
				{#if prop.type === 'number'}
					<div class="space-y-1">
						<label class="text-sm font-medium">{prop.label}: {config[key]}</label>
						<input
							type="range"
							bind:value={config[key]}
							min={prop.min || 0}
							max={prop.max || 100}
							step={prop.step || 1}
							class="w-full"
						/>
						{#if prop.description}
							<p class="text-xs text-muted-foreground">{prop.description}</p>
						{/if}
					</div>
				{/if}
			{/if}
		{/each}
	</div>
</div>
