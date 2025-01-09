import { Button, defaultVariants, variants } from "@/components/Button"
import type { Meta, StoryObj } from "@storybook/react"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		children: {
			description: "Button content",
			table: {
				type: { summary: "React.ReactNode" },
			},
		},
		variant: {
			control: { type: "select" },
			options: Object.keys(variants.variant),
			description: "Variant of the button",
			table: {
				type: { summary: `"${Object.keys(variants.variant).join('" | "')}"` },
				defaultValue: { summary: `"${defaultVariants.size}"` },
			},
		},
		size: {
			control: { type: "select" },
			options: Object.keys(variants.size),
			description: "Size of the button",
			table: {
				type: { summary: `"${Object.keys(variants.size).join('" | "')}"` },
				defaultValue: { summary: `"${defaultVariants.size}"` },
			},
		},
		ref: {
			table: { disable: true },
			control: false,
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		// onClick: fn(),
	},
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const defaultArgs: Partial<Story["args"]> = {
	children: "Button",
	variant: "default",
	size: "default",
}

export const Default: Story = {
	args: {
		...defaultArgs,
		variant: "default",
	},
}

export const Destructive: Story = {
	args: {
		...defaultArgs,
		variant: "destructive",
	},
}

export const Outline: Story = {
	args: {
		...defaultArgs,
		variant: "outline",
	},
}

export const Secondary: Story = {
	args: {
		...defaultArgs,
		variant: "secondary",
	},
}

export const Ghost: Story = {
	args: {
		...defaultArgs,
		variant: "ghost",
	},
}

export const Link: Story = {
	args: {
		...defaultArgs,
		variant: "link",
	},
}

export const Small: Story = {
	args: {
		...defaultArgs,
		size: "sm",
	},
}

export const Large: Story = {
	args: {
		...defaultArgs,
		size: "lg",
	},
}
