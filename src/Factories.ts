import {App} from "obsidian";
import {SubModelFactory} from "./factories/SubModelFactory";
import {ContentFactory} from "./factories/ContentFactory";
import {FileFactory} from "./factories/FileFactory";
import {ModalFactory} from "./factories/ModalFactory";
import {ModelFactory} from "./factories/ModelFactory";
import {PronounFactory} from "./factories/PronounFactory";
import {TemplateFactory} from "./factories/TemplateFactory";
import {ViewFactory} from "./factories/ViewFactory";
import {FetcherFactory} from "./factories/FetcherFactory";
import {SubModelFactoryInterface} from "./interfaces/factories/SubModelFactoryInterface";
import {ContentFactoryInterface} from "./interfaces/factories/ContentFactoryInterface";
import {FileFactoryInterface} from "./interfaces/factories/FileFactoryInterface";
import {ModalFactoryInterface} from "./interfaces/factories/ModalFactoryInterface";
import {ModelFactoryInterface} from "./interfaces/factories/ModelFactoryInterface";
import {PronounFactoryInterface} from "./interfaces/factories/PronounFactoryInterface";
import {TemplateFactoryInterface} from "./interfaces/factories/TemplateFactoryInterface";
import {ViewFactoryInterface} from "./interfaces/factories/ViewFactoryInterface";
import {FetcherFactoryInterface} from "./interfaces/factories/FetcherFactoryInterface";
import {FactoriesInterface} from "./interfaces/FactoriesInterface";
import {IdFactoryInterface} from "./interfaces/factories/IdFactoryInterface";
import {IdFactory} from "./factories/IdFactory";
import {BreadcrumbFactoryInterface} from "./interfaces/factories/BreadcrumbFactoryInterface";
import {BreadcrumbFactory} from "./factories/BreadcrumbFactory";
import {FrontmatterFactoryInterface} from "./interfaces/factories/FrontmatterFactoryInterface";
import {FrontmatterFactory} from "./factories/FrontmatterFactory";
import {SorterFactoryInterface} from "./interfaces/factories/SorterFactoryInterface";
import {SorterFactory} from "./factories/SorterFactory";
import {CodeBlockEditorFactoryInterface} from "./interfaces/factories/CodeBlockEditorFactoryInterface";
import {CodeBlockEditorFactory} from "./factories/CodeBlockEditorFactory";
import {RunningTimeManagerInterface} from "./interfaces/dataManipulation/RunningTimeManagerInterface";
import {RunningTimeManager} from "./dataManipulation/RunningTimeManager";
import {DatabaseV2FactoryInterface} from "./_dbV2/factories/interfaces/DatabaseV2FactoryInterface";
import {DatabaseV2Factory} from "./_dbV2/factories/DatabaseV2Factory";
import {MetadataReaderInterface} from "./interfaces/dataManipulation/MetadataReaderInterface";
import {MetadataReader} from "./dataManipulation/MetadataReader";
import {ComponentV2FactoryInterface} from "./_dbV2/factories/interfaces/ComponentV2FactoryInterface";
import {ComponentV2Factory} from "./_dbV2/factories/ComponentV2Factory";

export class Factories implements FactoriesInterface{
	public subModels: SubModelFactoryInterface;
	public contents: ContentFactoryInterface;
	public component: ComponentV2FactoryInterface;
	public files: FileFactoryInterface;
	public modals: ModalFactoryInterface;
	public models: ModelFactoryInterface;
	public pronouns: PronounFactoryInterface;
	public templates: TemplateFactoryInterface;
	public views: ViewFactoryInterface;
	public fetchers: FetcherFactoryInterface;
	public database: DatabaseV2FactoryInterface;
	public id: IdFactoryInterface;
	public breadcrumb: BreadcrumbFactoryInterface;
	public frontmatter: FrontmatterFactoryInterface;
	public sorter: SorterFactoryInterface;
	public codeblock: CodeBlockEditorFactoryInterface;
	public runningTimeManager: RunningTimeManagerInterface;
	public metadataReader: MetadataReaderInterface;

	constructor(
		private app: App,
	) {
		this.subModels = new SubModelFactory(this.app);
		this.contents = new ContentFactory(this.app);
		this.component = new ComponentV2Factory(this.app);
		this.files = new FileFactory(this.app);
		this.modals = new ModalFactory(this.app);
		this.models = new ModelFactory(this.app);
		this.pronouns = new PronounFactory(this.app);
		this.templates = new TemplateFactory(this.app);
		this.views = new ViewFactory(this.app);
		this.fetchers = new FetcherFactory(this.app);
		this.database = new DatabaseV2Factory(this.app);
		this.id = new IdFactory(this.app);
		this.breadcrumb = new BreadcrumbFactory(this.app);
		this.frontmatter = new FrontmatterFactory(this.app);
		this.sorter = new SorterFactory(this.app);
		this.codeblock = new CodeBlockEditorFactory(this.app);
		this.runningTimeManager = new RunningTimeManager(this.app);
		this.metadataReader = new MetadataReader(this.app);
	}
}
