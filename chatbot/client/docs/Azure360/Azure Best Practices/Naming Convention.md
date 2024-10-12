### General Guidelines

🏷️ A good name for a resource helps to quickly identify its type, its associated
workload, its environment and the Azure region where it runs. To achieve this,
names should follow a consistent **naming convention**.

1. **Use lowercase letters**: Keep all resource names in lowercase to avoid
   confusion.

2. **Use hyphens (-)**: Separating words with hyphens improves readability.

3. **Be concise**: Use short, meaningful names that convey the resource's
   purpose.

4. **Include resource type identifiers**: Include a short identifier for the
   resource type to avoid confusion.

### Recommended Convention

:::info 
Azure resources must follow the below recommended naming convention. Any
deviation from the best practice must be documented.

**[TYPE]-[ORGANIZATION]-[ENVIRONMENT]-[REGION]-[FUNCTION]-[INSTANCE-NUMBER]**
:::

### TYPE

1. Short abbreviation for the resource types.
2. Use the given reference to find the
   [abbreviation for all Azure resources](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations).

### ORGANIZATION

1. This is an **optional field** to include for Azure resources.
2. Use this naming convention for subscription scope, resource groups scope and
   global services like storage accounts & key vaults.

### ENVIRONMENT

1. Identifies the environment and should be at most 4 characters.
2. Recommended names are `dev`, `qa`, `stag`, `plat` and `prod`, which denote
   `development`, `testing`, `staging`, `platform` and
   `production environments`.

### REGION

1. Identifies the Azure region where the resource is deployed.
2. Should be at most 3 characters.
3. Examples: `wus` (West US), `eus` (East US), `cin` (Central India).
4. Reference list for the two-letter
   [country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

### FUNCTION

1. Identifies application name, function, or description.
2. Should be at most 10 characters.
3. Examples: `frontend`, `backend`, `vectordb`.

### INSTANCE-NUMBER

1. This is an **optional field** and should be added to the function name.
2. Consider using when a resource group consists of multiple resources for the
   same type of workload.
3. Example: A resource group using multiple VMs for the same workload for high
   availability reasons should use an instance number for naming such resources.

### Examples

**Example Resource Group Naming**: `rg-sol-dev-cin-stellar`

| Name    | Identifier      | Description               |
| ------- | --------------- | ------------------------- |
| rg      | TYPE            | Denotes Resource Group    |
| dev     | ENVIRONMENT     | Development Environment   |
| cin     | REGION          | Location Central India    |
| stellar | FUNCTION        | Project Name              |
| -       | INSTANCE NUMBER | Not applicable            |

**Example Resource Naming**: `ase-dev-cin-frontend-01`

| Name     | Identifier      | Description                                                                                   |
| -------- | --------------- | --------------------------------------------------------------------------------------------- |
| ase      | TYPE            | Denotes App Service resource                                                                  |
| -        | ORGANIZATION    | Not needed since resource group already covers the organization name                          |
| dev      | ENVIRONMENT     | Development Environment                                                                       |
| cin      | REGION          | Location Central India                                                                        |
| frontend | FUNCTION        | Functionality of the App Service                                                              |
| 01       | INSTANCE NUMBER | Instance number of the application. Only required for applications with similar functionality |

### Sub Resources Naming

1. Let's consider a storage account with containers. The container names don't
   need to include environment or region details, as these are covered by the
   parent context. The sub-resources of a parent resource do not adhere
   completely to the naming convention.

2. Consider the following sub-resources:

   1. Containers, Blobs, Tables in the Storage Account
   2. Subnets in an Azure Virtual Network
   3. Secrets or certificates in an Azure Key Vault
   4. Topics or queues in an Azure Service Bus

3. Consider a virtual network named `vnet-dev-eus-stellar` that has a subnet for
   placing Azure Virtual Machines. The subnet could be named `snet-vm` or
   `snet-virtual-machine`. 

:::tip

### Special Cases

1. Some resources have character set or length restrictions in their names.

2. Use a separate naming convention for resources with restrictions.

3. Don’t have hyphens in the name for character set restrictions.

**Example**: `stcdevcinstellar` (no delimiter allowed for storage account names)
:::
