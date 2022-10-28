import {ElementDataInterface} from "../../interfaces/ElementDataInterface";
import {SessionInterface} from "../../../../components/session/interfaces/SessionInterface";

export interface SessionElementDataInterface extends ElementDataInterface {
	values: {
		sessionId: number|undefined,
		sessions: SessionInterface[],
	};
}
