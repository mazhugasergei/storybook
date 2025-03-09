import { Input } from "@/components/input"
import type { Meta, StoryObj } from "@storybook/react"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
	title: "Storybook/Input",
	component: Input,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		ref: {
			table: { disable: true },
			control: false,
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const defaultArgs: Partial<Story["args"]> = {
	placeholder: "Placeholder",
}

export const Text: Story = {
	args: {
		...defaultArgs,
		type: "text",
	},
}

export const Number: Story = {
	args: {
		...defaultArgs,
		type: "number",
	},
}

export const Password: Story = {
	args: {
		...defaultArgs,
		type: "password",
	},
}

export const Date: Story = {
	args: {
		...defaultArgs,
		type: "date",
	},
}
