<script lang="ts">
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import { Switch } from '$lib/components/ui/switch';
	import { Card, CardContent } from '$lib/components/ui/card';
	import AccordionDemo from '$lib/components/demos/AccordionDemo.svelte';
	import ModalDemo from '$lib/components/demos/ModalDemo.svelte';
	import TabsDemo from '$lib/components/demos/TabsDemo.svelte';
	import ToastDemo from '$lib/components/demos/ToastDemo.svelte';
	import ConfigPanel from '$lib/components/ConfigPanel.svelte';

	let darkMode = $state(false);
	let selectedComponent = $state('accordion');

	// Apply dark mode changes when darkMode state changes
	$effect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<div class="min-h-screen bg-background text-foreground">
	<!-- Header -->
	<header class="border-b border-border p-6">
		<div class="flex items-center justify-between">
			<h1 class="text-2xl font-semibold text-foreground">Component Playground</h1>
			<div class="flex items-center space-x-2">
				<span class="text-sm">Light</span>
				<Switch bind:checked={darkMode} />
			</div>
		</div>
	</header>

	<div class="flex">
		<!-- Main Content -->
		<div class="flex-1 p-6">
			<Tabs value="accordion" class="w-full">
				<TabsList class="grid grid-cols-4 w-fit">
					<TabsTrigger value="accordion">Accordion</TabsTrigger>
					<TabsTrigger value="modal">Modal</TabsTrigger>
					<TabsTrigger value="tabs">Tabs</TabsTrigger>
					<TabsTrigger value="toast">Toast</TabsTrigger>
				</TabsList>

				<div class="mt-6">
					<TabsContent value="accordion" class="space-y-4 flex border rounded-sm p-4">
						<AccordionDemo />
                        <div class="w-80 border-l border-border bg-card">
                            <ConfigPanel/>
                        </div>
					</TabsContent>

					<TabsContent value="modal" class="space-y-4">
						<ModalDemo />
					</TabsContent>

					<TabsContent value="tabs" class="space-y-4">
						<TabsDemo />
					</TabsContent>

					<TabsContent value="toast" class="space-y-4">
						<ToastDemo />
					</TabsContent>
				</div>
			</Tabs>
		</div>
	</div>
</div>