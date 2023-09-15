import * as React from "react";
import { useTranslation } from "react-i18next";
import TextAreaComponent from "src/components/attributes/primitives/TextAreaComponent";
import ChatGptSuggestionComponent from "src/components/chatgpt/ChatGptSuggestionComponent";
import MarkdownComponent from "src/components/markdowns/MarkdownComponent";
import { useWizard } from "src/hooks/useWizard";
import { ChatGptNonPlayerCharacterModel } from "src/services/ChatGptService/models/ChatGptNonPlayerCharacterModel";

export default function NonPlayerCharacterWizardLieStepComponent({
	name,
	campaignPath,
	chatGpt,
	setOverlay,
}: {
	name: string;
	campaignPath?: string;
	chatGpt?: ChatGptNonPlayerCharacterModel;
	setOverlay: (show: boolean) => void;
}): React.ReactElement {
	const { t } = useTranslation();
	const wizardData = useWizard();

	const [key, setKey] = React.useState<number>(Date.now());
	const [lie, setLie] = React.useState<string | undefined>(wizardData.lie);

	const updateLie = (value: string) => {
		wizardData.lie = value;
		setLie(value);
	};

	const applySuggestion = (suggestion: string) => {
		const updatedLie = lie ? `${lie}\n${suggestion}` : suggestion;

		updateLie(updatedLie);
		setKey(Date.now());
	};

	async function generateSuggestions(): Promise<string[]> {
		try {
			setOverlay(true);
			return chatGpt.getLie().then((value: string[]) => {
				setOverlay(false);
				return value;
			});
		} catch (error) {
			console.error("Failed to fetch behaviour:", error);
		}
	}

	return (
		<>
			<h3 className="!text-xl !font-extralight">{t("attributes.lie")}</h3>
			<div className="!mt-3 !mb-3">
				<MarkdownComponent value={t("wizards.npc.description", { context: "lie", name: name })} />
			</div>
			<div className="">
				<TextAreaComponent
					key={key}
					initialValue={lie}
					campaignPath={campaignPath}
					onChange={updateLie}
					className="w-full resize-none overflow-y-hidden border border-[--background-modifier-border] rounded-md"
				/>
			</div>
			{chatGpt && (
				<ChatGptSuggestionComponent generateSuggestions={generateSuggestions} applySuggestions={applySuggestion} />
			)}
		</>
	);
}
