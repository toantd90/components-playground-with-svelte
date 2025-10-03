import InputDemo from '$lib/components/demos/InputDemo.svelte';

export type TSchemaProperty = {
	type: 'string' | 'number' | 'boolean' | 'enum' | 'select';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: any;
	values?: { label: string; value: string }[]; // For enum and select types
	description?: string;
	label?: string;
};

// Export key type for better type safety
export type TSchemaKey<T extends TSchema> = keyof T;

export type TSchema = Record<string, TSchemaProperty>;

export type TComponentSchema = {
	name: string;
	component: typeof InputDemo;
	schema: TSchema;
};

// Create a specific schema type for input
export type InputSchema = {
    placeholder: TSchemaProperty;
    disabled: TSchemaProperty;
    size: TSchemaProperty;
	value: TSchemaProperty;
	readonly: TSchemaProperty;
	withLabel?: TSchemaProperty;
	label?: TSchemaProperty;
};

export const registries: TComponentSchema[] = [
	{
		name: 'Input',
		component: InputDemo,
		schema: {
			value: { label: 'Value', type: 'string', default: '' },
			placeholder: { label: 'Placeholder', type: 'string', default: 'Hey there' },
			readonly: { label: 'Readonly', type: 'boolean', default: false },
			disabled: { label: 'Disabled', type: 'boolean', default: false },
			size: {
				label: 'Size',
				type: 'select',
				default: 'md',
				values: [
					{ label: 'Small', value: 'sm' },
					{ label: 'Medium', value: 'md' },
					{ label: 'Large', value: 'lg' }
				]
			},
			withLabel: { label: 'With Label', type: 'boolean', default: false },
			label: { label: 'Label', type: 'string', default: 'Input Label' }
		} satisfies InputSchema
	}
];
