/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as path from "path";
import { Uri } from "vscode";

import { getResourcesPath } from "./constants";
import { SearchResourceListTreeItem } from "./SearchResourceListTreeItem";
import { SearchServiceTreeItem } from "./SearchServiceTreeItem";
import { SimpleSearchClient } from "./SimpleSearchClient";

export class SynonymMapListTreeItem extends SearchResourceListTreeItem {
	public static readonly contextValue: string =
		"azureCognitiveSearchSynonymMapList";

	public static readonly itemContextValue: string =
		"azureCognitiveSearchSynonymMap";

	public constructor(
		parent: SearchServiceTreeItem,
		searchClient: SimpleSearchClient,
	) {
		super(
			parent,
			SynonymMapListTreeItem.contextValue,
			SynonymMapListTreeItem.itemContextValue,
			"Synonym Maps",
			SimpleSearchClient.SynonymMaps,
			"synonym map",
			"azssymmap",
			searchClient,
		);
	}

	public iconPath: { light: string | Uri; dark: string | Uri } = {
		light: path.join(getResourcesPath(), "light", "synonyms.svg"),
		dark: path.join(getResourcesPath(), "dark", "synonyms.svg"),
	};
}
