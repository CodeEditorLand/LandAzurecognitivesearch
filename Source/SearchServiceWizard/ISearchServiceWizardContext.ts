import type { SearchService } from "azure-arm-search/lib/models";
import type { IResourceGroupWizardContext } from "vscode-azureextensionui";

export interface ISearchServiceWizardContext
	extends IResourceGroupWizardContext {
	newServiceName?: string;
	sku?: string;
	partitionCount?: number;
	replicaCount?: number;
	searchService?: SearchService;
}
