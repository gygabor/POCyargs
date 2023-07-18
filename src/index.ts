import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import getSite from './getSite'
import { config } from 'dotenv'

config()

const argv = yargs(hideBin(process.argv)).options({
  a: { type: 'boolean', default: false },
  b: { type: 'string' },
  c: { type: 'number', alias: 'chill' },
  d: { type: 'array' },
  e: { type: 'count' },
  f: { choices: ['1', '2', '3'] }
})
  .command('get', 'make a get HTTP request',
    (yargs) => {
      return yargs.option('id', {
        alias: 'i',
        type: 'string',
        description: 'id to pass to the get request',
        requiresArg: true,
        demandOption: true
      }).demandOption('id', 'Please provide an id to work with')
    },
    async (argv) => {
      await getSite(argv.id)
    }
  ).parse()
