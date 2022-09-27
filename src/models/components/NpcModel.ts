import {AbstractModel} from "../../abstracts/AbstractModel";
import {ResponseDataInterface} from "../../interfaces/response/ResponseDataInterface";
import {ComponentType} from "../../enums/ComponentType";
import {CharacterInterface} from "../../interfaces/components/CharacterInterface";
import {HeaderSubModel} from "../subModels/HeaderSubModel";
import {RelationshipType} from "../../enums/RelationshipType";

export class NpcModel extends AbstractModel {
	protected currentElement: CharacterInterface;

	public async generateData(
	): Promise<ResponseDataInterface> {
		await this.response.addElement(this.factories.breadcrumb.create(this.currentElement));

		await this.response.addSubModel(HeaderSubModel,this.currentElement, this.currentElement);

		await this.addRelationships(ComponentType.Subplot, RelationshipType.Reverse|RelationshipType.ReverseInFrontmatter);
		await this.addRelationships(ComponentType.Faction);
		await this.addRelationships(ComponentType.Character);
		await this.addRelationships(ComponentType.NonPlayerCharacter);
		await this.addRelationships(ComponentType.Event, RelationshipType.Reverse);
		await this.addRelationships(ComponentType.Clue, RelationshipType.Reverse);
		await this.addRelationships(ComponentType.Location);

		return this.response;
	}
}
