import InputDemo from '$lib/components/demos/InputDemo.svelte';

export type TSchemaProperty = {
	type: 'string' | 'number' | 'boolean' | 'enum' | 'select' | 'color';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: any;
	values?: { label: string; value: string }[]; // For enum and select types
	description?: string;
	label?: string;
	min?: number;
	max?: number;
	step?: number;
};

// Export key type for better type safety
export type TSchemaKey<T extends TSchema> = keyof T;

export type TSchema = Record<string, TSchemaProperty>;

export type TComponentSchema = {
	name: string;
	component: typeof InputDemo;
	schema: TSchema;
};

// Create a specific schema type for input with visual styling
export type InputSchema = {
	// Content props
	type?: TSchemaProperty;
	value: TSchemaProperty;
	placeholder: TSchemaProperty;
	disabled: TSchemaProperty;
	readonly: TSchemaProperty;
	withLabel?: TSchemaProperty;
	label?: TSchemaProperty;
	isInvalid?: TSchemaProperty;

	// Visual styling props
	variant: TSchemaProperty;
	size: TSchemaProperty;
	fullWidth: TSchemaProperty;
	width: TSchemaProperty;
	borderColor: TSchemaProperty;
	textColor: TSchemaProperty;
	backgroundColor: TSchemaProperty;
	borderRadius: TSchemaProperty;
	focusColor: TSchemaProperty;
};

export const registries: TComponentSchema[] = [
	{
		name: 'Input',
		component: InputDemo,
		schema: {
			// Content Configuration
			type: {
				label: 'Input Type',
				type: 'select',
				default: 'text',
				values: [
					{ label: 'Text', value: 'text' },
					{ label: 'Email', value: 'email' },
					{ label: 'Password', value: 'password' },
					{ label: 'Number', value: 'number' },
					{ label: 'Tel', value: 'tel' },
					{ label: 'URL', value: 'url' }
				]
			},
			value: { label: 'Value', type: 'string', default: '' },
			placeholder: { label: 'Placeholder', type: 'string', default: 'Enter text...' },
			disabled: { label: 'Disabled', type: 'boolean', default: false },
			readonly: { label: 'Readonly', type: 'boolean', default: false },
			withLabel: { label: 'Show Label', type: 'boolean', default: false },
			label: { label: 'Label Text', type: 'string', default: 'Input Label' },
			isInvalid: { label: 'Invalid State', type: 'boolean', default: false },

			// Visual Styling Configuration
			variant: {
				label: 'Variant',
				type: 'select',
				default: 'outlined',
				values: [
					{ label: 'Outlined', value: 'outlined' },
					{ label: 'Filled', value: 'filled' },
					{ label: 'Ghost', value: 'ghost' }
				],
				description: 'Input visual style variant'
			},
			size: {
				label: 'Size',
				type: 'select',
				default: 'md',
				values: [
					{ label: 'Small', value: 'sm' },
					{ label: 'Medium', value: 'md' },
					{ label: 'Large', value: 'lg' },
					{ label: 'Extra Large', value: 'xl' }
				],
				description: 'Input size affects padding and font size'
			},
			fullWidth: {
				label: 'Full Width',
				type: 'boolean',
				default: true,
				description: 'Makes input take full width of container'
			},
			width: {
				label: 'Custom Width',
				type: 'string',
				default: '100%',
				description: 'Custom width (e.g., 200px, 50%, auto)'
			},
			borderRadius: {
				label: 'Border Radius',
				type: 'select',
				default: 'md',
				values: [
					{ label: 'None', value: 'none' },
					{ label: 'Small', value: 'sm' },
					{ label: 'Medium', value: 'md' },
					{ label: 'Large', value: 'lg' },
					{ label: 'Extra Large', value: 'xl' },
					{ label: 'Full', value: 'full' }
				]
			},

			// Color Configuration
			borderColor: {
				label: 'Border Color',
				type: 'color',
				default: '#d1d5db',
				description: 'Border color in hex format'
			},
			textColor: {
				label: 'Text Color',
				type: 'color',
				default: '#374151',
				description: 'Text color in hex format'
			},
			backgroundColor: {
				label: 'Background Color',
				type: 'color',
				default: '#ffffff',
				description: 'Background color in hex format'
			},
			focusColor: {
				label: 'Focus Color',
				type: 'color',
				default: '#3b82f6',
				description: 'Focus ring color in hex format'
			}
		} satisfies InputSchema
	}
];
