<script lang="ts">
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
</script>

<div class="w-full max-w-2xl">
	<Tabs value="tab1" class="w-full">
		<TabsList class="grid w-full grid-cols-3">
			<TabsTrigger value="tab1">Tab 1</TabsTrigger>
			<TabsTrigger value="tab2">Tab 2</TabsTrigger>
			<TabsTrigger value="tab3">Tab 3</TabsTrigger>
		</TabsList>
		
		<TabsContent value="tab1" class="space-y-4 mt-4">
			<Card>
				<CardHeader>
					<CardTitle>Tab 1 Content</CardTitle>
					<CardDescription>This is the content for the first tab.</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</CardContent>
			</Card>
		</TabsContent>

		<TabsContent value="tab2" class="space-y-4 mt-4">
			<Card>
				<CardHeader>
					<CardTitle>Tab 2 Content</CardTitle>
					<CardDescription>This is the content for the second tab.</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</CardContent>
			</Card>
		</TabsContent>

		<TabsContent value="tab3" class="space-y-4 mt-4">
			<Card>
				<CardHeader>
					<CardTitle>Tab 3 Content</CardTitle>
					<CardDescription>This is the content for the third tab.</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</CardContent>
			</Card>
		</TabsContent>
	</Tabs>
</div>