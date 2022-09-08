import {AbstractModalComponent} from "../../../abstracts/AbstractModalComponent";

export class FactionModal extends AbstractModalComponent {
	public async addElement(
		contentEl: HTMLElement,
	): Promise<void> {
		const locationEl = contentEl.createDiv({cls: 'locationContainer'});

		this.modal.saver = this;
		this.modal.enableButton();
	}

	public async loadChild(
		containerEl: HTMLElement,
	): Promise<void> {

	}

	public validate(
	): boolean {
		return true;
	}
}
