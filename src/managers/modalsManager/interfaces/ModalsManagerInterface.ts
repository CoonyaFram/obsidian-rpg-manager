import {CampaignSetting} from "../../../components/campaign/enums/CampaignSetting";
import {ComponentType} from "../../../core/enums/ComponentType";
import {ModalPartInterface} from "../../../core/interfaces/ModalPartInterface";
import {ModalInterface} from "../../../core/interfaces/ModalInterface";
import {ClassInterface} from "../../../api/interfaces/ClassInterface";
import {ModalPartClassInterface} from "./ModalPartClassInterface";

export interface ModalsManagerInterface {
	get(
		campaignSettings: CampaignSetting,
		type: ComponentType,
	): ModalInterface;

	getPartial(
		campaignSettings: CampaignSetting,
		type: ComponentType,
		modal: ModalInterface,
	): ModalPartInterface;

	register<T extends ModalInterface> (
		modal: ClassInterface<T>,
		campaignSettings: CampaignSetting,
		type: ComponentType,
	): void;

	registerPartial<T extends ModalPartInterface>(
		modalPart: ModalPartClassInterface<T>,
		campaignSettings: CampaignSetting,
		type: ComponentType,
	): void;
}
