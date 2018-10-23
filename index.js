#! /usr/bin/env node
const clipboard = require('copy-paste')
const yargs = require('yargs')

const separator = yargs.argv.sep || '_____'
const text = yargs.argv._.join(' ')

// Do the thing.
const annoyingSlackMessage = text
	.replace(/[^a-zA-Z0-9' ]/g, '')
	.split('')
	.map((val) => (val === ' ' ? separator : `:${val}:`))
	.join('')

// Copy to clipboard and leave a message.
clipboard.copy(annoyingSlackMessage, () => {
	// console.log(annoyingSlackMessage)
	console.log('Your text is in your clipboard')
})
