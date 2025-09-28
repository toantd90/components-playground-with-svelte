<script lang="ts">
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib/components/ui/accordion';

    const items = [
        {
            value: 'item-1',
            title: 'Item 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            value: 'item-2',
            title: 'Item 2',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            value: 'item-3',
            title: 'Item 3',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        }
    ];
</script>

<div class="w-full">
	<Accordion class="w-full max-w-2xl" type="single">
        {#each items as item}
		<AccordionItem value={item.value}>
			<AccordionTrigger class="text-left">
				<h3 class="text-xl font-semibold">{item.title}</h3>
			</AccordionTrigger>
			<AccordionContent>
				<div class="pt-2 pb-4">
					<p class="text-muted-foreground">
						{item.content}  
					</p>
				</div>
			</AccordionContent>
		</AccordionItem>
        {/each}
	</Accordion>
</div>