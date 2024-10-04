/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as path from "path";
import { SearchService } from "azure-arm-search/lib/models";
import { Uri } from "vscode";
import { AzureParentTreeItem, AzureTreeItem } from "vscode-azureextensionui";

import { getResourcesPath } from "./constants";
import { IDocumentRepository } from "./IDocumentRepository";

export class ServiceDetailsTreeItem
	extends AzureTreeItem
	implements IDocumentRepository
{
	public readonly commandId: string = "azureCognitiveSearch.openDocument";
	public readonly contextValue: string = "azureCognitiveSearchServiceDetails";
	public readonly label: string = "Service Details";
	public readonly namePrefix: string;
	readonly itemName: string;
	readonly itemKind: string = "service";
	readonly extension: string = "azssvc";

	public constructor(
		parent: AzureParentTreeItem,
		private readonly searchService: SearchService,
	) {
		super(parent);
		this.itemName = searchService.name || "";
		this.namePrefix = `service-${searchService.name}`;
	}

	public iconPath: { light: string | Uri; dark: string | Uri } = {
		light: path.join(getResourcesPath(), "light", "info.svg"),
		dark: path.join(getResourcesPath(), "dark", "info.svg"),
	};

	async readContent(): Promise<
		{ content: any; etag?: string | undefined } | undefined
	> {
		return { content: this.searchService };
	}

	async updateContent(
		content: any,
		etag?: string | undefined,
	): Promise<void> {
		throw new Error("Updating service details not supported.");
	}
}
