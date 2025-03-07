import BaseCommand from './base-command';
const { app } = require('./app.js');
import { _ } from '@joplin/lib/locale';

class Command extends BaseCommand {
	public override usage() {
		return 'exit';
	}

	public override description() {
		return _('Exits the application.');
	}

	public override compatibleUis() {
		return ['gui'];
	}

	public override async action() {
		await app().exit();
	}
}

module.exports = Command;
