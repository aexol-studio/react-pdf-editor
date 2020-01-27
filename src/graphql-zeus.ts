/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["AddLanguageInput"]: {
	name:string,
	display:string
};
	["BuiltInStyles"]:BuiltInStyles;
	["Column"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	/** Put your description here */
	colspan?:true,
	content?:ValueTypes["Feature"],
	margin?:true,
	rowspan?:true,
	style?:true,
	styleJson?:true,
	width?:true
		__typename?: true
}>;
	["Columns"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	columns?:ValueTypes["Column"],
	margin?:true,
	style?:true,
	styleJson?:true
		__typename?: true
}>;
	["Components"]:Components;
	["createTranslation"]: {
	/** przetłumaczona fraza<br> */
	template:string,
	/** kod języka<br> */
	languageName:string,
	/** fraza<br> */
	phrase:string
};
	["Document"]: AliasType<{
	features?:ValueTypes["Features"]
		__typename?: true
}>;
	["DocumentInput"]: {
	features:ValueTypes["FeaturesInput"]
};
	["Feature"]: AliasType<{		["...on TextBlock"] : ValueTypes["TextBlock"],
		["...on Image"] : ValueTypes["Image"],
		["...on TableBlock"] : ValueTypes["TableBlock"],
		["...on Columns"] : ValueTypes["Columns"],
		["...on Stack"] : ValueTypes["Stack"],
		["...on ListBlock"] : ValueTypes["ListBlock"],
		["...on TimeStamp"] : ValueTypes["TimeStamp"]
		__typename?: true
}>;
	["FeatureInput"]: {
	styleJson?:string,
	colspan?:number,
	width?:number,
	fit?:number[],
	items?:ValueTypes["FeatureInput"][],
	widths?:ValueTypes["Width"][],
	tag?:string,
	type:ValueTypes["FeatureTypes"],
	content?:ValueTypes["FeatureInput"],
	margin?:(number | undefined)[],
	style?:string,
	columns?:ValueTypes["FeatureInput"][],
	base64?:string,
	rows?:ValueTypes["FeatureInput"][],
	url?:string,
	absolutePosition?:ValueTypes["Position2DInput"],
	rowspan?:number,
	text?:string,
	height?:number
};
	["Features"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	items?:true,
	margin?:true,
	style?:true,
	styleJson?:true
		__typename?: true
}>;
	/** Due to lots&nbsp; */
["FeatureScalar"]:unknown;
	["FeaturesInput"]: {
	items?:ValueTypes["FeatureInput"][]
};
	["FeatureTypes"]:FeatureTypes;
	["FindTemplatesInput"]: {
	machine?:string,
	version?:string
};
	["Image"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	base64?:true,
	fit?:true,
	height?:true,
	margin?:true,
	style?:true,
	styleJson?:true,
	url?:true,
	width?:true
		__typename?: true
}>;
	/** Język w bazie danych<br> */
["Language"]: AliasType<{
	/** wyświetlana nazwa języka po polsku: Polski, Angielski, Francuski<br> */
	display?:true,
	/** nazwa języka zgodna z ISO czyli np. pl,en,fr<br> */
	name?:true
		__typename?: true
}>;
	["ListBlock"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	items?:ValueTypes["Feature"],
	margin?:true,
	style?:true,
	styleJson?:true
		__typename?: true
}>;
	["MachineDocument"]: AliasType<{
	documents?:ValueTypes["Document"],
	footer?:true,
	header?:true,
	margin?:true,
	styleJson?:true,
	styles?:ValueTypes["NamedStyle"]
		__typename?: true
}>;
	["MachineDocumentInput"]: {
	documents?:ValueTypes["DocumentInput"][],
	margin?:number[],
	header?:ValueTypes["FeatureInput"],
	footer?:ValueTypes["FeatureInput"]
};
	["MachineTemplate"]: AliasType<{
	name?:true,
	template?:ValueTypes["MachineDocument"],
	version?:true
		__typename?: true
}>;
	["MachineTemplateInput"]: {
	template:ValueTypes["MachineDocumentInput"],
	version?:string,
	name:string
};
	["Margin"]:AliasType<{
		margin?:true;
		['...on Column']: ValueTypes["Column"];
		['...on Columns']: ValueTypes["Columns"];
		['...on Features']: ValueTypes["Features"];
		['...on Image']: ValueTypes["Image"];
		['...on ListBlock']: ValueTypes["ListBlock"];
		['...on MachineDocument']: ValueTypes["MachineDocument"];
		['...on Row']: ValueTypes["Row"];
		['...on Stack']: ValueTypes["Stack"];
		['...on TableBlock']: ValueTypes["TableBlock"];
		['...on TextBlock']: ValueTypes["TextBlock"];
		['...on TimeStamp']: ValueTypes["TimeStamp"];
		__typename?: true
}>;
	["Mutation"]: AliasType<{
addLanguage?: [{	language:ValueTypes["AddLanguageInput"]},ValueTypes["Language"]],
addPhrase?: [{	phrase:ValueTypes["PhraseInput"]},ValueTypes["Phrase"]],
addTemplate?: [{	template:ValueTypes["MachineTemplateInput"]},ValueTypes["MachineTemplate"]],
addTranslation?: [{	translation:ValueTypes["createTranslation"]},ValueTypes["Translation"]],
editTranslation?: [{	translation:ValueTypes["createTranslation"]},ValueTypes["Translation"]],
removeComponent?: [{	name:string},true],
removeMachine?: [{	name:string},true],
uploadPDF?: [{	template:ValueTypes["UploadPDFInput"]},true],
upsertTemplateComponent?: [{	component:ValueTypes["TemplateComponentInput"]},ValueTypes["TemplateComponent"]]
		__typename?: true
}>;
	["NamedStyle"]: AliasType<{
	name?:true,
	style?:ValueTypes["Style"]
		__typename?: true
}>;
	/** Fraza po polsku<br> */
["Phrase"]: AliasType<{
	/** treść frazy<br> */
	content?:true,
	tags?:true
		__typename?: true
}>;
	["PhraseInput"]: {
	content:string,
	tags?:string[]
};
	["Position"]:AliasType<{
		absolutePosition?:ValueTypes["Position2D"];
		['...on Column']: ValueTypes["Column"];
		['...on Columns']: ValueTypes["Columns"];
		['...on Features']: ValueTypes["Features"];
		['...on Image']: ValueTypes["Image"];
		['...on ListBlock']: ValueTypes["ListBlock"];
		['...on Row']: ValueTypes["Row"];
		['...on Stack']: ValueTypes["Stack"];
		['...on TableBlock']: ValueTypes["TableBlock"];
		['...on TextBlock']: ValueTypes["TextBlock"];
		['...on TimeStamp']: ValueTypes["TimeStamp"];
		__typename?: true
}>;
	["Position2D"]: AliasType<{
	x?:true,
	y?:true
		__typename?: true
}>;
	["Position2DInput"]: {
	x:number,
	y:number
};
	/** Put your description here */
["Query"]: AliasType<{
GenerateMachineDocument?: [{	language:string,	machine:string,	version?:string},ValueTypes["MachineDocument"]],
autocomplete?: [{	phrase:ValueTypes["PhraseInput"]},true],
findTemplates?: [{	filter?:ValueTypes["FindTemplatesInput"]},ValueTypes["MachineTemplate"]],
generatePDF?: [{	machine:string,	version?:string,	language:string},true],
	getBuiltInStyles?:true,
getComponents?: [{	name?:string},ValueTypes["TemplateComponent"]],
	/** Pobierz wszystkie dostępne języki<br> */
	languages?:ValueTypes["Language"],
translations?: [{	phrase?:string},ValueTypes["Translation"]],
untranslated?: [{	languageCode:string},true]
		__typename?: true
}>;
	/** Put your description here */
["Row"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	columns?:ValueTypes["Column"],
	margin?:true,
	style?:true,
	styleJson?:true
		__typename?: true
}>;
	["Stack"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	items?:ValueTypes["Feature"],
	margin?:true,
	style?:true,
	styleJson?:true
		__typename?: true
}>;
	["Style"]: AliasType<{
	alignment?:true,
	background?:true,
	bold?:true,
	borderStyle?:true,
	color?:true,
	fontSize?:true,
	listStyle?:true,
	listType?:true,
	margin?:true,
	separator?:true
		__typename?: true
}>;
	["Styled"]:AliasType<{
		style?:true,
	styleJson?:true;
		['...on Column']: ValueTypes["Column"];
		['...on Columns']: ValueTypes["Columns"];
		['...on Features']: ValueTypes["Features"];
		['...on Image']: ValueTypes["Image"];
		['...on ListBlock']: ValueTypes["ListBlock"];
		['...on Row']: ValueTypes["Row"];
		['...on Stack']: ValueTypes["Stack"];
		['...on TableBlock']: ValueTypes["TableBlock"];
		['...on TextBlock']: ValueTypes["TextBlock"];
		['...on TimeStamp']: ValueTypes["TimeStamp"];
		__typename?: true
}>;
	/** Put your description here */
["TableBlock"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	margin?:true,
	rows?:ValueTypes["Row"],
	style?:true,
	styleJson?:true,
	widths?:ValueTypes["WidthType"]
		__typename?: true
}>;
	/** Podstawowy komponent do stopek i elementów które będziemy uzywać gdzieś indziej */
["TemplateComponent"]: AliasType<{
	feature?:true,
	name?:true,
	/** Tag to pass children textblocks for autocomplete search */
	tag?:true,
	type?:true
		__typename?: true
}>;
	["TemplateComponentInput"]: {
	type:ValueTypes["Components"],
	name:string,
	tag?:string,
	feature?:ValueTypes["FeatureInput"]
};
	["TextBlock"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	margin?:true,
	style?:true,
	styleJson?:true,
	tag?:true,
	text?:true
		__typename?: true
}>;
	["TimeStamp"]: AliasType<{
	absolutePosition?:ValueTypes["Position2D"],
	margin?:true,
	style?:true,
	styleJson?:true
		__typename?: true
}>;
	["Translation"]: AliasType<{
	/** translation language<br> */
	language?:ValueTypes["Language"],
	/** base phrase<br> */
	phrase?:ValueTypes["Phrase"],
	tags?:true,
	/** content in foreign language<br> */
	template?:true
		__typename?: true
}>;
	["UploadPDFInput"]: {
	version:string,
	languageCode:string,
	base64PDF:string,
	machine:string
};
	["Width"]: {
	S?:string,
	N?:number
};
	["WidthType"]: AliasType<{
	N?:true,
	S?:true
		__typename?: true
}>
  }

export type PartialObjects = {
    ["AddLanguageInput"]: {
	name:string,
	display:string
},
	["BuiltInStyles"]:BuiltInStyles,
	["Column"]: {
		__typename?: "Column";
			absolutePosition?:PartialObjects["Position2D"],
			/** Put your description here */
	colspan?:number,
			content?:PartialObjects["Feature"],
			margin?:number[],
			rowspan?:number,
			style?:string,
			styleJson?:string,
			width?:number
	},
	["Columns"]: {
		__typename?: "Columns";
			absolutePosition?:PartialObjects["Position2D"],
			columns?:PartialObjects["Column"][],
			margin?:number[],
			style?:string,
			styleJson?:string
	},
	["Components"]:Components,
	["createTranslation"]: {
	/** przetłumaczona fraza<br> */
	template:string,
	/** kod języka<br> */
	languageName:string,
	/** fraza<br> */
	phrase:string
},
	["Document"]: {
		__typename?: "Document";
			features?:PartialObjects["Features"]
	},
	["DocumentInput"]: {
	features:PartialObjects["FeaturesInput"]
},
	["Feature"]: PartialObjects["TextBlock"] | PartialObjects["Image"] | PartialObjects["TableBlock"] | PartialObjects["Columns"] | PartialObjects["Stack"] | PartialObjects["ListBlock"] | PartialObjects["TimeStamp"],
	["FeatureInput"]: {
	styleJson?:string,
	colspan?:number,
	width?:number,
	fit?:number[],
	items?:PartialObjects["FeatureInput"][],
	widths?:PartialObjects["Width"][],
	tag?:string,
	type:PartialObjects["FeatureTypes"],
	content?:PartialObjects["FeatureInput"],
	margin?:(number | undefined)[],
	style?:string,
	columns?:PartialObjects["FeatureInput"][],
	base64?:string,
	rows?:PartialObjects["FeatureInput"][],
	url?:string,
	absolutePosition?:PartialObjects["Position2DInput"],
	rowspan?:number,
	text?:string,
	height?:number
},
	["Features"]: {
		__typename?: "Features";
			absolutePosition?:PartialObjects["Position2D"],
			items?:PartialObjects["FeatureScalar"][],
			margin?:number[],
			style?:string,
			styleJson?:string
	},
	/** Due to lots&nbsp; */
["FeatureScalar"]:any,
	["FeaturesInput"]: {
	items?:PartialObjects["FeatureInput"][]
},
	["FeatureTypes"]:FeatureTypes,
	["FindTemplatesInput"]: {
	machine?:string,
	version?:string
},
	["Image"]: {
		__typename?: "Image";
			absolutePosition?:PartialObjects["Position2D"],
			base64?:string,
			fit?:number[],
			height?:number,
			margin?:number[],
			style?:string,
			styleJson?:string,
			url?:string,
			width?:number
	},
	/** Język w bazie danych<br> */
["Language"]: {
		__typename?: "Language";
			/** wyświetlana nazwa języka po polsku: Polski, Angielski, Francuski<br> */
	display?:string,
			/** nazwa języka zgodna z ISO czyli np. pl,en,fr<br> */
	name?:string
	},
	["ListBlock"]: {
		__typename?: "ListBlock";
			absolutePosition?:PartialObjects["Position2D"],
			items?:PartialObjects["Feature"][],
			margin?:number[],
			style?:string,
			styleJson?:string
	},
	["MachineDocument"]: {
		__typename?: "MachineDocument";
			documents?:PartialObjects["Document"][],
			footer?:PartialObjects["FeatureScalar"],
			header?:PartialObjects["FeatureScalar"],
			margin?:number[],
			styleJson?:string,
			styles?:PartialObjects["NamedStyle"][]
	},
	["MachineDocumentInput"]: {
	documents?:PartialObjects["DocumentInput"][],
	margin?:number[],
	header?:PartialObjects["FeatureInput"],
	footer?:PartialObjects["FeatureInput"]
},
	["MachineTemplate"]: {
		__typename?: "MachineTemplate";
			name?:string,
			template?:PartialObjects["MachineDocument"],
			version?:string
	},
	["MachineTemplateInput"]: {
	template:PartialObjects["MachineDocumentInput"],
	version?:string,
	name:string
},
	["Margin"]:{
		margin?:number[]
} & (PartialObjects["Column"] | PartialObjects["Columns"] | PartialObjects["Features"] | PartialObjects["Image"] | PartialObjects["ListBlock"] | PartialObjects["MachineDocument"] | PartialObjects["Row"] | PartialObjects["Stack"] | PartialObjects["TableBlock"] | PartialObjects["TextBlock"] | PartialObjects["TimeStamp"]),
	["Mutation"]: {
		__typename?: "Mutation";
			addLanguage?:PartialObjects["Language"],
			/** dodaj fraze do bazy fraz<br> */
	addPhrase?:PartialObjects["Phrase"],
			addTemplate?:PartialObjects["MachineTemplate"],
			/** dodaj tłumaczenie frazy<br> */
	addTranslation?:PartialObjects["Translation"],
			editTranslation?:PartialObjects["Translation"],
			removeComponent?:boolean,
			removeMachine?:boolean,
			uploadPDF?:boolean,
			upsertTemplateComponent?:PartialObjects["TemplateComponent"]
	},
	["NamedStyle"]: {
		__typename?: "NamedStyle";
			name?:string,
			style?:PartialObjects["Style"]
	},
	/** Fraza po polsku<br> */
["Phrase"]: {
		__typename?: "Phrase";
			/** treść frazy<br> */
	content?:string,
			tags?:string[]
	},
	["PhraseInput"]: {
	content:string,
	tags?:string[]
},
	["Position"]:{
		absolutePosition?:PartialObjects["Position2D"]
} & (PartialObjects["Column"] | PartialObjects["Columns"] | PartialObjects["Features"] | PartialObjects["Image"] | PartialObjects["ListBlock"] | PartialObjects["Row"] | PartialObjects["Stack"] | PartialObjects["TableBlock"] | PartialObjects["TextBlock"] | PartialObjects["TimeStamp"]),
	["Position2D"]: {
		__typename?: "Position2D";
			x?:number,
			y?:number
	},
	["Position2DInput"]: {
	x:number,
	y:number
},
	/** Put your description here */
["Query"]: {
		__typename?: "Query";
			/** <div>Generuje specyfikacje maszyny</div><div>w zadanym przez nas języku<br></div> */
	GenerateMachineDocument?:PartialObjects["MachineDocument"],
			/** Po podaniu frazy zwraca autocomplete pasujących do niej fraz<br> */
	autocomplete?:string[],
			findTemplates?:PartialObjects["MachineTemplate"][],
			generatePDF?:string,
			getBuiltInStyles?:PartialObjects["BuiltInStyles"][],
			getComponents?:PartialObjects["TemplateComponent"][],
			/** Pobierz wszystkie dostępne języki<br> */
	languages?:PartialObjects["Language"][],
			translations?:PartialObjects["Translation"][],
			untranslated?:string[]
	},
	/** Put your description here */
["Row"]: {
		__typename?: "Row";
			absolutePosition?:PartialObjects["Position2D"],
			columns?:PartialObjects["Column"][],
			margin?:number[],
			style?:string,
			styleJson?:string
	},
	["Stack"]: {
		__typename?: "Stack";
			absolutePosition?:PartialObjects["Position2D"],
			items?:PartialObjects["Feature"][],
			margin?:number[],
			style?:string,
			styleJson?:string
	},
	["Style"]: {
		__typename?: "Style";
			alignment?:string,
			background?:string,
			bold?:boolean,
			borderStyle?:string,
			color?:string,
			fontSize?:number,
			listStyle?:string,
			listType?:string,
			margin?:number[],
			separator?:string
	},
	["Styled"]:{
		style?:string;
	styleJson?:string
} & (PartialObjects["Column"] | PartialObjects["Columns"] | PartialObjects["Features"] | PartialObjects["Image"] | PartialObjects["ListBlock"] | PartialObjects["Row"] | PartialObjects["Stack"] | PartialObjects["TableBlock"] | PartialObjects["TextBlock"] | PartialObjects["TimeStamp"]),
	/** Put your description here */
["TableBlock"]: {
		__typename?: "TableBlock";
			absolutePosition?:PartialObjects["Position2D"],
			margin?:number[],
			rows?:PartialObjects["Row"][],
			style?:string,
			styleJson?:string,
			widths?:PartialObjects["WidthType"][]
	},
	/** Podstawowy komponent do stopek i elementów które będziemy uzywać gdzieś indziej */
["TemplateComponent"]: {
		__typename?: "TemplateComponent";
			feature?:PartialObjects["FeatureScalar"],
			name?:string,
			/** Tag to pass children textblocks for autocomplete search */
	tag?:string,
			type?:PartialObjects["Components"]
	},
	["TemplateComponentInput"]: {
	type:PartialObjects["Components"],
	name:string,
	tag?:string,
	feature?:PartialObjects["FeatureInput"]
},
	["TextBlock"]: {
		__typename?: "TextBlock";
			absolutePosition?:PartialObjects["Position2D"],
			margin?:number[],
			style?:string,
			styleJson?:string,
			tag?:string,
			text?:string
	},
	["TimeStamp"]: {
		__typename?: "TimeStamp";
			absolutePosition?:PartialObjects["Position2D"],
			margin?:number[],
			style?:string,
			styleJson?:string
	},
	["Translation"]: {
		__typename?: "Translation";
			/** translation language<br> */
	language?:PartialObjects["Language"],
			/** base phrase<br> */
	phrase?:PartialObjects["Phrase"],
			tags?:string[],
			/** content in foreign language<br> */
	template?:string
	},
	["UploadPDFInput"]: {
	version:string,
	languageCode:string,
	base64PDF:string,
	machine:string
},
	["Width"]: {
	S?:string,
	N?:number
},
	["WidthType"]: {
		__typename?: "WidthType";
			N?:number,
			S?:string
	}
  }

export type AddLanguageInput = {
		name:string,
	display:string
}

export enum BuiltInStyles {
	LIGHT_BORDER_TABLE = "LIGHT_BORDER_TABLE",
	SMALL_TEXT = "SMALL_TEXT",
	BLACK_COLUMN = "BLACK_COLUMN",
	BIG_HEADER = "BIG_HEADER",
	MEDIUM_HEADER = "MEDIUM_HEADER",
	SMALL_HEADER = "SMALL_HEADER",
	NORMAL_COLUMN = "NORMAL_COLUMN",
	NO_BORDERS_TABLE = "NO_BORDERS_TABLE",
	NORMAL_TEXT = "NORMAL_TEXT",
	BLACK_BOX = "BLACK_BOX"
}

export type Column = {
	__typename?: "Column",
	absolutePosition?:Position2D,
	/** Put your description here */
	colspan?:number,
	content:Feature,
	margin?:number[],
	rowspan?:number,
	style?:string,
	styleJson?:string,
	width?:number
}

export type Columns = {
	__typename?: "Columns",
	absolutePosition?:Position2D,
	columns?:Column[],
	margin?:number[],
	style?:string,
	styleJson?:string
}

export enum Components {
	FOOTER = "FOOTER",
	HEADER = "HEADER",
	DOCUMENT = "DOCUMENT"
}

export type createTranslation = {
		/** przetłumaczona fraza<br> */
	template:string,
	/** kod języka<br> */
	languageName:string,
	/** fraza<br> */
	phrase:string
}

export type Document = {
	__typename?: "Document",
	features?:Features
}

export type DocumentInput = {
		features:FeaturesInput
}

export type Feature = {
	__union:TextBlock | Image | TableBlock | Columns | Stack | ListBlock | TimeStamp;
	__resolve:{
		['...on TextBlock']: TextBlock;
		['...on Image']: Image;
		['...on TableBlock']: TableBlock;
		['...on Columns']: Columns;
		['...on Stack']: Stack;
		['...on ListBlock']: ListBlock;
		['...on TimeStamp']: TimeStamp;
	}
}

export type FeatureInput = {
		styleJson?:string,
	colspan?:number,
	width?:number,
	fit?:number[],
	items?:FeatureInput[],
	widths?:Width[],
	tag?:string,
	type:FeatureTypes,
	content?:FeatureInput,
	margin?:(number | undefined)[],
	style?:string,
	columns?:FeatureInput[],
	base64?:string,
	rows?:FeatureInput[],
	url?:string,
	absolutePosition?:Position2DInput,
	rowspan?:number,
	text?:string,
	height?:number
}

export type Features = {
	__typename?: "Features",
	absolutePosition?:Position2D,
	items?:FeatureScalar[],
	margin?:number[],
	style?:string,
	styleJson?:string
}

/** Due to lots&nbsp; */
export type FeatureScalar = any

export type FeaturesInput = {
		items?:FeatureInput[]
}

export enum FeatureTypes {
	TABLE_BLOCK = "TABLE_BLOCK",
	TIMESTAMP = "TIMESTAMP",
	COLUMNS = "COLUMNS",
	IMAGE = "IMAGE",
	STACK = "STACK",
	ROW = "ROW",
	COLUMN = "COLUMN",
	TEXT_BLOCK = "TEXT_BLOCK",
	LIST_BLOCK = "LIST_BLOCK"
}

export type FindTemplatesInput = {
		machine?:string,
	version?:string
}

export type Image = {
	__typename?: "Image",
	absolutePosition?:Position2D,
	base64?:string,
	fit?:number[],
	height?:number,
	margin?:number[],
	style?:string,
	styleJson?:string,
	url?:string,
	width?:number
}

/** Język w bazie danych<br> */
export type Language = {
	__typename?: "Language",
	/** wyświetlana nazwa języka po polsku: Polski, Angielski, Francuski<br> */
	display:string,
	/** nazwa języka zgodna z ISO czyli np. pl,en,fr<br> */
	name:string
}

export type ListBlock = {
	__typename?: "ListBlock",
	absolutePosition?:Position2D,
	items?:Feature[],
	margin?:number[],
	style?:string,
	styleJson?:string
}

export type MachineDocument = {
	__typename?: "MachineDocument",
	documents:Document[],
	footer?:FeatureScalar,
	header?:FeatureScalar,
	margin?:number[],
	styleJson?:string,
	styles?:NamedStyle[]
}

export type MachineDocumentInput = {
		documents?:DocumentInput[],
	margin?:number[],
	header?:FeatureInput,
	footer?:FeatureInput
}

export type MachineTemplate = {
	__typename?: "MachineTemplate",
	name:string,
	template:MachineDocument,
	version?:string
}

export type MachineTemplateInput = {
		template:MachineDocumentInput,
	version?:string,
	name:string
}

export type Margin = {
	__interface:{
			margin?:number[]
	};
	__resolve:{
		['...on Column']: Column;
		['...on Columns']: Columns;
		['...on Features']: Features;
		['...on Image']: Image;
		['...on ListBlock']: ListBlock;
		['...on MachineDocument']: MachineDocument;
		['...on Row']: Row;
		['...on Stack']: Stack;
		['...on TableBlock']: TableBlock;
		['...on TextBlock']: TextBlock;
		['...on TimeStamp']: TimeStamp;
	}
}

export type Mutation = {
	__typename?: "Mutation",
	addLanguage:Language,
	/** dodaj fraze do bazy fraz<br> */
	addPhrase:Phrase,
	addTemplate:MachineTemplate,
	/** dodaj tłumaczenie frazy<br> */
	addTranslation:Translation,
	editTranslation:Translation,
	removeComponent?:boolean,
	removeMachine?:boolean,
	uploadPDF?:boolean,
	upsertTemplateComponent?:TemplateComponent
}

export type NamedStyle = {
	__typename?: "NamedStyle",
	name:string,
	style:Style
}

/** Fraza po polsku<br> */
export type Phrase = {
	__typename?: "Phrase",
	/** treść frazy<br> */
	content:string,
	tags?:string[]
}

export type PhraseInput = {
		content:string,
	tags?:string[]
}

export type Position = {
	__interface:{
			absolutePosition?:Position2D
	};
	__resolve:{
		['...on Column']: Column;
		['...on Columns']: Columns;
		['...on Features']: Features;
		['...on Image']: Image;
		['...on ListBlock']: ListBlock;
		['...on Row']: Row;
		['...on Stack']: Stack;
		['...on TableBlock']: TableBlock;
		['...on TextBlock']: TextBlock;
		['...on TimeStamp']: TimeStamp;
	}
}

export type Position2D = {
	__typename?: "Position2D",
	x:number,
	y:number
}

export type Position2DInput = {
		x:number,
	y:number
}

/** Put your description here */
export type Query = {
	__typename?: "Query",
	/** <div>Generuje specyfikacje maszyny</div><div>w zadanym przez nas języku<br></div> */
	GenerateMachineDocument?:MachineDocument,
	/** Po podaniu frazy zwraca autocomplete pasujących do niej fraz<br> */
	autocomplete:string[],
	findTemplates?:MachineTemplate[],
	generatePDF?:string,
	getBuiltInStyles?:BuiltInStyles[],
	getComponents:TemplateComponent[],
	/** Pobierz wszystkie dostępne języki<br> */
	languages:Language[],
	translations:Translation[],
	untranslated:string[]
}

/** Put your description here */
export type Row = {
	__typename?: "Row",
	absolutePosition?:Position2D,
	columns?:Column[],
	margin?:number[],
	style?:string,
	styleJson?:string
}

export type Stack = {
	__typename?: "Stack",
	absolutePosition?:Position2D,
	items?:Feature[],
	margin?:number[],
	style?:string,
	styleJson?:string
}

export type Style = {
	__typename?: "Style",
	alignment?:string,
	background?:string,
	bold?:boolean,
	borderStyle?:string,
	color?:string,
	fontSize?:number,
	listStyle?:string,
	listType?:string,
	margin?:number[],
	separator?:string
}

export type Styled = {
	__interface:{
			style?:string,
	styleJson?:string
	};
	__resolve:{
		['...on Column']: Column;
		['...on Columns']: Columns;
		['...on Features']: Features;
		['...on Image']: Image;
		['...on ListBlock']: ListBlock;
		['...on Row']: Row;
		['...on Stack']: Stack;
		['...on TableBlock']: TableBlock;
		['...on TextBlock']: TextBlock;
		['...on TimeStamp']: TimeStamp;
	}
}

/** Put your description here */
export type TableBlock = {
	__typename?: "TableBlock",
	absolutePosition?:Position2D,
	margin?:number[],
	rows?:Row[],
	style?:string,
	styleJson?:string,
	widths?:WidthType[]
}

/** Podstawowy komponent do stopek i elementów które będziemy uzywać gdzieś indziej */
export type TemplateComponent = {
	__typename?: "TemplateComponent",
	feature?:FeatureScalar,
	name:string,
	/** Tag to pass children textblocks for autocomplete search */
	tag?:string,
	type:Components
}

export type TemplateComponentInput = {
		type:Components,
	name:string,
	tag?:string,
	feature?:FeatureInput
}

export type TextBlock = {
	__typename?: "TextBlock",
	absolutePosition?:Position2D,
	margin?:number[],
	style?:string,
	styleJson?:string,
	tag?:string,
	text?:string
}

export type TimeStamp = {
	__typename?: "TimeStamp",
	absolutePosition?:Position2D,
	margin?:number[],
	style?:string,
	styleJson?:string
}

export type Translation = {
	__typename?: "Translation",
	/** translation language<br> */
	language:Language,
	/** base phrase<br> */
	phrase:Phrase,
	tags?:string[],
	/** content in foreign language<br> */
	template:string
}

export type UploadPDFInput = {
		version:string,
	languageCode:string,
	base64PDF:string,
	machine:string
}

export type Width = {
		S?:string,
	N?:number
}

export type WidthType = {
	__typename?: "WidthType",
	N?:number,
	S?:string
}

export const AllTypesProps: Record<string,any> = {
	AddLanguageInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		display:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	BuiltInStyles: "enum",
	Components: "enum",
	createTranslation:{
		template:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		languageName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		phrase:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	DocumentInput:{
		features:{
			type:"FeaturesInput",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	FeatureInput:{
		styleJson:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		colspan:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		width:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		fit:{
			type:"Float",
			array:true,
			arrayRequired:false,
			required:true
		},
		items:{
			type:"FeatureInput",
			array:true,
			arrayRequired:false,
			required:true
		},
		widths:{
			type:"Width",
			array:true,
			arrayRequired:false,
			required:true
		},
		tag:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		type:{
			type:"FeatureTypes",
			array:false,
			arrayRequired:false,
			required:true
		},
		content:{
			type:"FeatureInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		margin:{
			type:"Float",
			array:true,
			arrayRequired:false,
			required:false
		},
		style:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		columns:{
			type:"FeatureInput",
			array:true,
			arrayRequired:false,
			required:true
		},
		base64:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		rows:{
			type:"FeatureInput",
			array:true,
			arrayRequired:false,
			required:true
		},
		url:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		absolutePosition:{
			type:"Position2DInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		rowspan:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		text:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		height:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	FeatureScalar: "String",
	FeaturesInput:{
		items:{
			type:"FeatureInput",
			array:true,
			arrayRequired:false,
			required:true
		}
	},
	FeatureTypes: "enum",
	FindTemplatesInput:{
		machine:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		version:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MachineDocumentInput:{
		documents:{
			type:"DocumentInput",
			array:true,
			arrayRequired:false,
			required:true
		},
		margin:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:true
		},
		header:{
			type:"FeatureInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		footer:{
			type:"FeatureInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MachineTemplateInput:{
		template:{
			type:"MachineDocumentInput",
			array:false,
			arrayRequired:false,
			required:true
		},
		version:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	Mutation:{
		addLanguage:{
			language:{
				type:"AddLanguageInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addPhrase:{
			phrase:{
				type:"PhraseInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addTemplate:{
			template:{
				type:"MachineTemplateInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addTranslation:{
			translation:{
				type:"createTranslation",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		editTranslation:{
			translation:{
				type:"createTranslation",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeComponent:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeMachine:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		uploadPDF:{
			template:{
				type:"UploadPDFInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		upsertTemplateComponent:{
			component:{
				type:"TemplateComponentInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	PhraseInput:{
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		tags:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		}
	},
	Position2DInput:{
		x:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:true
		},
		y:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	Query:{
		GenerateMachineDocument:{
			language:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			machine:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			version:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		autocomplete:{
			phrase:{
				type:"PhraseInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		findTemplates:{
			filter:{
				type:"FindTemplatesInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		generatePDF:{
			machine:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			version:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			language:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		getComponents:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		translations:{
			phrase:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		untranslated:{
			languageCode:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	TemplateComponentInput:{
		type:{
			type:"Components",
			array:false,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		tag:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		feature:{
			type:"FeatureInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UploadPDFInput:{
		version:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		languageCode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		base64PDF:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		machine:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	Width:{
		S:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		N:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Column:{
		absolutePosition:"Position2D",
		colspan:"Int",
		content:"Feature",
		margin:"Float",
		rowspan:"Int",
		style:"String",
		styleJson:"String",
		width:"Float"
	},
	Columns:{
		absolutePosition:"Position2D",
		columns:"Column",
		margin:"Float",
		style:"String",
		styleJson:"String"
	},
	Document:{
		features:"Features"
	},
	Features:{
		absolutePosition:"Position2D",
		items:"FeatureScalar",
		margin:"Float",
		style:"String",
		styleJson:"String"
	},
	Image:{
		absolutePosition:"Position2D",
		base64:"String",
		fit:"Float",
		height:"Float",
		margin:"Float",
		style:"String",
		styleJson:"String",
		url:"String",
		width:"Float"
	},
	Language:{
		display:"String",
		name:"String"
	},
	ListBlock:{
		absolutePosition:"Position2D",
		items:"Feature",
		margin:"Float",
		style:"String",
		styleJson:"String"
	},
	MachineDocument:{
		documents:"Document",
		footer:"FeatureScalar",
		header:"FeatureScalar",
		margin:"Float",
		styleJson:"String",
		styles:"NamedStyle"
	},
	MachineTemplate:{
		name:"String",
		template:"MachineDocument",
		version:"String"
	},
	Margin:{
		margin:"Float"
	},
	Mutation:{
		addLanguage:"Language",
		addPhrase:"Phrase",
		addTemplate:"MachineTemplate",
		addTranslation:"Translation",
		editTranslation:"Translation",
		removeComponent:"Boolean",
		removeMachine:"Boolean",
		uploadPDF:"Boolean",
		upsertTemplateComponent:"TemplateComponent"
	},
	NamedStyle:{
		name:"String",
		style:"Style"
	},
	Phrase:{
		content:"String",
		tags:"String"
	},
	Position:{
		absolutePosition:"Position2D"
	},
	Position2D:{
		x:"Float",
		y:"Float"
	},
	Query:{
		GenerateMachineDocument:"MachineDocument",
		autocomplete:"String",
		findTemplates:"MachineTemplate",
		generatePDF:"String",
		getBuiltInStyles:"BuiltInStyles",
		getComponents:"TemplateComponent",
		languages:"Language",
		translations:"Translation",
		untranslated:"String"
	},
	Row:{
		absolutePosition:"Position2D",
		columns:"Column",
		margin:"Float",
		style:"String",
		styleJson:"String"
	},
	Stack:{
		absolutePosition:"Position2D",
		items:"Feature",
		margin:"Float",
		style:"String",
		styleJson:"String"
	},
	Style:{
		alignment:"String",
		background:"String",
		bold:"Boolean",
		borderStyle:"String",
		color:"String",
		fontSize:"Float",
		listStyle:"String",
		listType:"String",
		margin:"Int",
		separator:"String"
	},
	Styled:{
		style:"String",
		styleJson:"String"
	},
	TableBlock:{
		absolutePosition:"Position2D",
		margin:"Float",
		rows:"Row",
		style:"String",
		styleJson:"String",
		widths:"WidthType"
	},
	TemplateComponent:{
		feature:"FeatureScalar",
		name:"String",
		tag:"String",
		type:"Components"
	},
	TextBlock:{
		absolutePosition:"Position2D",
		margin:"Float",
		style:"String",
		styleJson:"String",
		tag:"String",
		text:"String"
	},
	TimeStamp:{
		absolutePosition:"Position2D",
		margin:"Float",
		style:"String",
		styleJson:"String"
	},
	Translation:{
		language:"Language",
		phrase:"Phrase",
		tags:"String",
		template:"String"
	},
	WidthType:{
		N:"Float",
		S:"String"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z>(o: Z | V) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) =>
  traverseToSeekArrays([type], a)

const queryConstruct = (t: 'Query' | 'Mutation' | 'Subscription') => (o: Record<any, any>) => `${t.toLowerCase()}${buildQuery(t, o)}`;

const fullChainConstruct = (options: fetchOptions) => (t: 'Query' | 'Mutation' | 'Subscription') => (o: Record<any, any>) =>
  apiFetch(options, queryConstruct(t)(o));

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions, query: string) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Chain = (...options: fetchOptions) => ({
  Query: ((o: any) =>
    fullChainConstruct(options)('Query')(o).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
Mutation: ((o: any) =>
    fullChainConstruct(options)('Mutation')(o).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});
export const Zeus = {
  Query: (o:ValueTypes["Query"]) => queryConstruct('Query')(o),
Mutation: (o:ValueTypes["Mutation"]) => queryConstruct('Mutation')(o)
};
export const Cast = {
  Query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,
Mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
};
export const Selectors = {
  Query: ZeusSelect<ValueTypes["Query"]>(),
Mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  

export const Gql = Chain('https://faker.graphqleditor.com/a-team/gizo/graphql')