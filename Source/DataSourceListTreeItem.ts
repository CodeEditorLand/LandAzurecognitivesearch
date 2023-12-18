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

export class DataSourceListTreeItem extends SearchResourceListTreeItem {
	public static readonly contextValue: string =
		"azureCognitiveSearchDataSourceList";
	public static readonly itemContextValue: string =
		"azureCognitiveSearchDataSource";

	public constructor(
		parent: SearchServiceTreeItem,
		searchClient: SimpleSearchClient,
	) {
		super(
			parent,
			DataSourceListTreeItem.contextValue,
			DataSourceListTreeItem.itemContextValue,
			"Data Sources",
			SimpleSearchClient.DataSources,
			"data source",
			"azsds",
			searchClient,
		);
	}

	public iconPath: { light: string | Uri; dark: string | Uri } = {
		light: path.join(getResourcesPath(), "light", "datasource.svg"),
		dark: path.join(getResourcesPath(), "dark", "datasource.svg"),
	};
}
