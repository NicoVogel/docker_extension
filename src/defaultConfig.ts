import { Config } from './@types/config';

export const defaultConfig: Config = {
	showCommand: true,
	default: 'c',
	commandMappings: {
		c: {
			command: 'container',
			default: 'ps',
			actionMappings: [
				['p', 'prune'],
				['e', 'exec'],
				['i', 'inspect']
			]
		},
		i: {
			command: 'image',
			default: 'ls',
			actionMappings: [
				['h', 'history'],
				['i', 'inspect'],
				['p', 'prune'],
				['b', 'build']
			]
		},
		n: {
			command: 'network',
			default: 'ls',
			actionMappings: [
				['p', 'prune'],
				['i', 'inspect']
			]
		},
		v: {
			command: 'volume',
			default: 'ls',
			actionMappings: [
				['p', 'prune'],
				['i', 'inspect']
			]
		}
	}
};
