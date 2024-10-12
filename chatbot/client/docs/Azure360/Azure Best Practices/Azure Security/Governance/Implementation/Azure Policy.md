1. Azure Policy is a service in Azure that allows you to create, assign and
   manage policies that enforce specific rules or effects over your resources.

2. It includes:

   1. **Implementing governance** for resource consistency, regulatory
      compliance, security, cost and management.

   2. **Policy definitions for common use cases** are already available in the
      [Azure environment as built-ins](https://learn.microsoft.com/en-us/azure/governance/policy/samples/built-in-policies)
      to help get started.

### Examples of Azure Policies

1. Ensuring your team deploys Azure resources only to allowed regions.
2. Enforcing the consistent application of tags for cost management.
3. Requiring resources to send diagnostic logs to a Log Analytics workspace.
4. Enforcing that all resources in the resource group must have tags.

### When to use Azure Policies

| Deciding Factors         | Reason                                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Regulatory Compliance    | When your project needs to ensure that your resources meet specific regulatory or compliance standards.     |
| Resource Standardization | To enforce consistency across deployments, ensuring that all resources adhere to defined configurations.    |
| Cost Control             | To prevent the creation of resources that do not meet cost-efficiency criteria.                             |
| Security                 | When you need to enforce security practices, such as ensuring all virtual machines have encryption enabled. |

### How to use Azure Policies

:::info 
Read more about Azure Policy [here](https://learn.microsoft.com/en-us/azure/governance/policy/). 
:::
