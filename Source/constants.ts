/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ext } from "./extensionVariables";

export const extensionPrefix: string = "azureCognitiveSearch";

export function getResourcesPath(): string {
	return ext.context.asAbsolutePath("resources");
}
