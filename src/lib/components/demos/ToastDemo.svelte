<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	
	let toasts = $state<Array<{id: number, message: string, type: 'success' | 'error' | 'info'}>>([]);
	let nextId = 1;

	function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
		const id = nextId++;
		toasts.push({ id, message, type });
		
		// Auto remove after 3 seconds
		setTimeout(() => {
			toasts = toasts.filter(t => t.id !== id);
		}, 3000);
	}

	function removeToast(id: number) {
		toasts = toasts.filter(t => t.id !== id);
	}
</script>

<div class="space-y-4">
	<div class="flex gap-2 flex-wrap">
		<Button onclick={() => showToast('Success message!', 'success')}>Success Toast</Button>
		<Button variant="destructive" onclick={() => showToast('Error message!', 'error')}>Error Toast</Button>
		<Button variant="secondary" onclick={() => showToast('Info message!', 'info')}>Info Toast</Button>
	</div>

	<Card class="max-w-2xl">
		<CardContent class="pt-6">
			<p class="text-muted-foreground">Click the buttons above to show toast notifications.</p>
		</CardContent>
	</Card>
</div>

<!-- Toast Container -->
<div class="fixed top-4 right-4 space-y-2 z-50">
	{#each toasts as toast (toast.id)}
		<div 
			class="flex items-center justify-between p-4 rounded-lg shadow-lg border min-w-[300px] {toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : toast.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' : 'bg-blue-50 border-blue-200 text-blue-800'}"
		>
			<span class="text-sm font-medium">{toast.message}</span>
			<Button 
				variant="ghost" 
				size="sm" 
				onclick={() => removeToast(toast.id)}
				class="h-6 w-6 p-0 {toast.type === 'success' ? 'hover:bg-green-100' : toast.type === 'error' ? 'hover:bg-red-100' : 'hover:bg-blue-100'}"
			>
				<span class="sr-only">Close</span>
				<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</Button>
		</div>
	{/each}
</div>