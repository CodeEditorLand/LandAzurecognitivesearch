/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as path from "path";
import { Uri } from "vscode";
import { SearchResourceListTreeItem } from "./SearchResourceListTreeItem";
import { SearchServiceTreeItem } from "./SearchServiceTreeItem";
import { SimpleSearchClient } from "./SimpleSearchClient";
import { getResourcesPath } from "./constants";

export class IndexerListTreeItem extends SearchResourceListTreeItem {
	public static readonly contextValue: string =
		"azureCognitiveSearchIndexerList";
	public static readonly itemContextValue: string =
		"azureCognitiveSearchIndexer";

	public constructor(
		parent: SearchServiceTreeItem,
		searchClient: SimpleSearchClient,
	) {
		super(
			parent,
			IndexerListTreeItem.contextValue,
			IndexerListTreeItem.itemContextValue,
			"Indexers",
			SimpleSearchClient.Indexers,
			"indexer",
			"azsindexer",
			searchClient,
		);
	}

	public iconPath: { light: string | Uri; dark: string | Uri } = {
		light: path.join(getResourcesPath(), "light", "indexer.svg"),
		dark: path.join(getResourcesPath(), "dark", "indexer.svg"),
	};
}
