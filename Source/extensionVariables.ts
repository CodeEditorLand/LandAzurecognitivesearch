/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { ExtensionContext, TreeView } from "vscode";
import type {
	AzExtTreeDataProvider,
	AzExtTreeItem,
	IAzExtOutputChannel,
	IAzureUserInput,
} from "vscode-azureextensionui";
import type TelemetryReporter from "vscode-extension-telemetry";

export namespace ext {
	export let context: ExtensionContext;
	export let outputChannel: IAzExtOutputChannel;
	export let ui: IAzureUserInput;
	export let reporter: TelemetryReporter;

	export let tree: AzExtTreeDataProvider;
	export let treeView: TreeView<AzExtTreeItem>;
	export const prefix: string = "azureCognitiveSearch";
}
