const clipboard = require('copy-paste')
const cla = require('command-line-args')

// Commandline stuff.
const optionDefinitions = [
  { name: 'sep', alias: 's', type: String, defaultValue: '_____' },
  { name: 'text', alias: 't', type: String },
]

const options = cla(optionDefinitions)

// Do the thing.
const annoyingSlackMessage = options.text
	.split('')
	.map((val) => (val === ' ' ? options.sep : `:${val}:`))
	.join('')

// Copy to clipboard and leave a message.
clipboard.copy(annoyingSlackMessage, () => {
	console.log('Your text is in your clipboard')
})
