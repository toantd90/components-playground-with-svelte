<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import { Slider } from '$lib/components/ui/slider';
	import { Separator } from '$lib/components/ui/separator';

	// Configuration state
	let textValue = $state('Item 1');
	let isOpen = $state(true);
	let selectedType = $state('One');
	let sizeValue = $state(50);

	const typeOptions = [{ label: 'Single', value: 'single' }, { label: 'Multiple', value: 'multiple' }];
</script>

<div class="p-6 h-full">
	<h2 class="text-lg font-semibold mb-6">Configuration</h2>

	<div class="space-y-6">
		<!-- Text Configuration -->
		<div class="space-y-2">
			<Label for="text-input" class="text-sm font-medium">Text</Label>
			<Input 
				id="text-input" 
				bind:value={textValue} 
				placeholder="Enter text..." 
				class="w-full"
			/>
		</div>

		<Separator />

		<!-- Open Configuration -->
		<div class="space-y-3">
			<Label class="text-sm font-medium">Open</Label>
			<div class="flex items-center space-x-2">
				<Checkbox 
					bind:checked={isOpen} 
					id="open-checkbox" 
				/>
				<Label for="open-checkbox" class="text-sm">On</Label>
			</div>
		</div>

		<Separator />

		<!-- Type Configuration -->
		<div class="space-y-2">
			<Label class="text-sm font-medium">Type</Label>
			<Select items={typeOptions} type="single" bind:value={selectedType}>
				<SelectTrigger class="w-full">
					<span>{selectedType}</span>
				</SelectTrigger>
				<SelectContent>
					{#each typeOptions as option}
						<SelectItem value={option.value}>{option.label}</SelectItem>
					{/each}
				</SelectContent>
			</Select>
		</div>

		<Separator />

		<!-- Size Configuration -->
		<div class="space-y-3">
			<Label class="text-sm font-medium">Size</Label>
			<div class="px-1">
				<Slider 
					bind:value={sizeValue}
					max={100}
					min={0}
					step={1}
                    type="single"
					class="w-full"
				/>
			</div>
			<div class="text-xs text-muted-foreground text-center">
				{sizeValue}
			</div>
		</div>

		<!-- Preview Values (for development) -->
		<div class="mt-8 p-4 rounded-lg bg-muted/50 text-xs">
			<div class="font-medium mb-2">Current Values:</div>
			<div>Text: {textValue}</div>
			<div>Open: {isOpen}</div>
			<div>Type: {selectedType}</div>
			<div>Size: {sizeValue}</div>
		</div>
	</div>
</div>