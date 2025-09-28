import { describe, expect, it } from 'vitest';
import { page } from '@vitest/browser/context';
import { render } from 'svelte/server';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render h1', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
	});
});
