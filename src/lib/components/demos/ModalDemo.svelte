<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	
	let showModal = $state(false);

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}
</script>

<div class="space-y-4">
	<Button onclick={openModal}>Open Modal</Button>

	{#if showModal}
		<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<Card class="w-full max-w-md mx-4">
				<CardHeader>
					<CardTitle>Modal Title</CardTitle>
					<CardDescription>This is a modal dialog example.</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">
						This is the modal content. You can put any content here.
					</p>
				</CardContent>
				<CardFooter class="flex justify-end space-x-2">
					<Button variant="outline" onclick={closeModal}>Cancel</Button>
					<Button onclick={closeModal}>Confirm</Button>
				</CardFooter>
			</Card>
		</div>
	{/if}

	<Card class="max-w-2xl">
		<CardContent class="pt-6">
			<p class="text-muted-foreground">Click the button above to open a modal dialog.</p>
		</CardContent>
	</Card>
</div>