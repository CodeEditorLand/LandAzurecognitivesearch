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

export class SkillsetListTreeItem extends SearchResourceListTreeItem {
	public static readonly contextValue: string =
		"azureCognitiveSearchSkillsetList";

	public static readonly itemContextValue: string =
		"azureCognitiveSearchSkillset";

	public constructor(
		parent: SearchServiceTreeItem,
		searchClient: SimpleSearchClient,
	) {
		super(
			parent,
			SkillsetListTreeItem.contextValue,
			SkillsetListTreeItem.itemContextValue,
			"Skillsets",
			SimpleSearchClient.Skillsets,
			"skillset",
			"azsskset",
			searchClient,
		);
	}

	public iconPath: { light: string | Uri; dark: string | Uri } = {
		light: path.join(getResourcesPath(), "light", "skillset.svg"),
		dark: path.join(getResourcesPath(), "dark", "skillset.svg"),
	};
}
