import {AbstractHeaderSubModel} from "../../../abstracts/AbstractHeaderSubModel";
import {ResponseDataElementInterface} from "../../../interfaces/response/ResponseDataElementInterface";
import {ResponseHeaderElement} from "../../../responses/ResponseHeaderElement";
import {HeaderResponseType} from "../../../enums/HeaderResponseType";
import {ResponseHeader} from "../../../responses/ResponseHeader";
import {HeaderResponseInterface} from "../../../interfaces/response/subModels/HeaderResponseInterface";
import {ComponentType} from "../../../enums/ComponentType";
import {ResponseType} from "../../../enums/ResponseType";
import {CharacterV2Interface} from "../../../_dbV2/components/interfaces/CharacterV2Interface";
import {RelationshipV2Interface} from "../../../_dbV2/relationships/interfaces/RelationshipV2Interface";

export class CharacterHeaderSubModel extends AbstractHeaderSubModel {
	protected data: CharacterV2Interface;

	public async generateData(
		relationship: RelationshipV2Interface,
		title:string|undefined,
		additionalInformation: any|undefined,
	): Promise<ResponseDataElementInterface|null> {
		if (!this.initialiseData(relationship)) return null;

		if (this.data.synopsis != null && this.data.synopsis !== '') {
			this.synopsis = '';
			this.synopsis += this.data.file.path.toString();
			const pronoun = this.data.pronoun;
			if (pronoun != null) {
				this.synopsis += this.factories.pronouns.readPronoun(pronoun);
			}
			this.synopsis += (this.data.isDead) ? ' was ' : ' is ';
			this.synopsis += this.data.synopsis;
		}

		let response = await super.generateData(relationship, title, additionalInformation) as HeaderResponseInterface;

		if (response === null) response = new ResponseHeader(this.app, this.currentElement);

		response.type = ComponentType.Character;
		response.responseType = ResponseType.CharacterHeader;

		if (this.data.goals != null) response.addElement(new ResponseHeaderElement(this.app, this.currentElement, 'Goals', this.data.goals.toString(), HeaderResponseType.Long));

		response.addElement(new ResponseHeaderElement(this.app, this.currentElement, 'Pronoun', this.data.pronoun, HeaderResponseType.Pronoun));
		if (this.data.age != null || this.data.death != null) {
			response.addElement(new ResponseHeaderElement(this.app, this.currentElement, 'Status', this.data.death ? 'Dead' : 'Alive', HeaderResponseType.Short));
		}
		if (this.data.death != null){
			let death = this.data.death.toDateString();
			if (this.data.age != null){
				death += ' at age ' + this.data.age;
			}
			response.addElement(new ResponseHeaderElement(this.app, this.currentElement, 'Death', death, HeaderResponseType.Short));
		} else if (this.data.age != null) {
			response.addElement(new ResponseHeaderElement(this.app, this.currentElement, 'Age', this.data.age.toString(), HeaderResponseType.Short));
		}

		return this.completeData(response);
	}
}
