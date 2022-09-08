import {AbstractModalComponent} from "../../../abstracts/AbstractModalComponent";

export class EventModal extends AbstractModalComponent {
	public async addElement(
		contentEl: HTMLElement,
	): Promise<void> {
		const eventEl = contentEl.createDiv({cls: 'eventContainer'});

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
