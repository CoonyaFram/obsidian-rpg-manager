import {AbstractTemplate} from "../../../abstracts/AbstractTemplate";

export class CampaignTemplate extends AbstractTemplate {
    protected generateFrontmatterTags(
	): string {
		return 'tags: [' + this.app.plugins.getPlugin('rpg-manager').settings.campaignTag +'/' + this.campaignId + ']\n';
	}

	protected generateFrontmatterAdditionalInformation(
	): string {
		return 'settings: Agnostic\n';
	}

	protected generateFrontmatterDates(
	): string|null {
		return ' current: \n';
	}

	protected generateInitialCodeBlock(
	): string {
		return this.getRpgManagerCodeblock('campaignNavigation');
	}

	protected generateLastCodeBlock(): string {
		return this.getRpgManagerCodeblock('campaign');
	}

	protected generateTemplate(
	): string {
		let response = this.getHeader('Plot');
		response += this.getAbtPlot();

		return response;
	}
}
