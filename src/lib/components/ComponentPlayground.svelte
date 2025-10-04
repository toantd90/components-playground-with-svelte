<script lang="ts">
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import { Switch } from '$lib/components/ui/switch';
	import { Card, CardContent } from '$lib/components/ui/card';
	import AccordionDemo from '$lib/components/demos/AccordionDemo.svelte';
	import ModalDemo from '$lib/components/demos/ModalDemo.svelte';
	import TabsDemo from '$lib/components/demos/TabsDemo.svelte';
	import ToastDemo from '$lib/components/demos/ToastDemo.svelte';
	import ConfigPanel from '$lib/components/ConfigPanel.svelte';
	import { registries } from '../../registry/components';

	let darkMode = $state(false);
	let selectedComponent = $state('input');

	// Apply dark mode changes when darkMode state changes
	$effect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	const registry = registries[0];
	const Component = registry.component;

	// Theme-aware color defaults
	const getThemeColors = (isDark: boolean) => ({
		borderColor: isDark ? '#4b5563' : '#d1d5db',
		textColor: isDark ? '#f9fafb' : '#374151',
		backgroundColor: isDark ? '#1f2937' : '#ffffff',
		focusColor: isDark ? '#60a5fa' : '#3b82f6'
	});

	let config = $state<Record<string, unknown>>({});
	const schema = registry.schema;

	// Initialize config with theme-aware defaults
	const initializeConfig = () => {
		const themeColors = getThemeColors(darkMode);
		for (const key in schema) {
			if (key in themeColors) {
				config[key] = themeColors[key as keyof typeof themeColors];
			} else {
				config[key] = schema[key].default;
			}
		}
	};

	// Initialize config on mount
	initializeConfig();

	// Update color values when theme changes
	$effect(() => {
		const themeColors = getThemeColors(darkMode);
		for (const colorKey of ['borderColor', 'textColor', 'backgroundColor', 'focusColor']) {
			if (colorKey in themeColors) {
				config[colorKey] = themeColors[colorKey as keyof typeof themeColors];
			}
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
			<Tabs value="input" class="w-full">
				<TabsList class="grid w-fit grid-cols-4">
					<TabsTrigger value="input">Input</TabsTrigger>
					<!-- <TabsTrigger value="accordion">Accordion</TabsTrigger>
					<TabsTrigger value="modal">Modal</TabsTrigger>
					<TabsTrigger value="tabs">Tabs</TabsTrigger>
					<TabsTrigger value="toast">Toast</TabsTrigger> -->
				</TabsList>

				<div class="mt-6">
					<TabsContent value="input" class="flex h-[calc(100vh-200px)] rounded-sm border">
						<div class="flex flex-1 items-start justify-center overflow-hidden p-4">
							<div class="sticky top-4">
								<Component {...config as any} {darkMode} />
							</div>
						</div>
						<div class="w-80 max-w-xs overflow-y-auto border-l border-border bg-card">
							<ConfigPanel schema={registry.schema || {}} bind:config />
						</div>
					</TabsContent>
					<!-- <TabsContent value="accordion" class="space-y-4 flex border rounded-sm p-4">
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
					</TabsContent> -->
				</div>
			</Tabs>
		</div>
	</div>
</div>
