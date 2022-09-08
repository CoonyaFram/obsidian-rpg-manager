import {AbstractTemplate} from "../../../abstracts/AbstractTemplate";

export class SessionTemplate extends AbstractTemplate {
	protected generateFrontmatterTags(
	): string {
		return 'tags: [' + this.app.plugins.getPlugin('rpg-manager').settings.sessionTag + '/' + this.campaignId + '/' + this.adventureId + '/' + this.sessionId + ']\n';
	}

	protected generateFrontmatterSynopsis(
	): string {
		return 'synopsis: ""\n';
	}

	protected generateFrontmatterDates(
	): string|null {
		return ' session: \n' +
			' irl: \n';
	}

	protected generateInitialCodeBlock(
	): string {
		return this.getRpgManagerCodeblock('sessionNavigation');
	}

	protected generateLastCodeBlock(): string {
		return this.getRpgManagerCodeblock('session');
	}

	protected generateTemplate(
	): string {
		let response = this.getHeader('Introduction');
		response += '\n';
		response += this.getHeader('Plot');
		response += this.getHeader('ABT Plot', 3);
		response += this.getAbtPlot();
		response += this.getHeader('Story Circle Plot', 3);
		response += this.getStoryCirclePlot();

		return response;
	}
}
