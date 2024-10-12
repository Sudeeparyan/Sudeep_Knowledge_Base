Azure Role-Based Access Control (Azure RBAC) helps you manage who has access to
Azure resources, what they can do with those resources and what areas they have
access to use.

    1. **Azure RBAC** is a system that provides fine-grained access management of Azure resources.

    2. **RBAC roles** define what actions (like read, write, or delete) users or groups can perform on specific resources.

### How Azure RBAC works

1. The way to control access to resources using Azure RBAC is to assign an Azure
   role.

2. An **Azure role** assignment consists of three elements:
   `security principal`, `role definition` and `scope`.

### Security Principal

1. An object that represents a `user`, `group`, `service principal`, or
   `managed identity` that is requesting access to Azure resources.

2. You can assign a role to any of these security principals.

### Role Definition

1. A role definition is a collection of permissions that can be performed, such
   as `read`, `write` and `delete`.

2. Azure includes several
   [built-in](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles)
   roles that you can use. For example, the
   [Virtual Machine Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#virtual-machine-contributor)
   role allows a user to create and manage virtual machines.

3. If the built-in roles don't meet the specific needs of your organization, you
   can create your own
   [Azure custom roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles).

### Scope

1. Azure RBAC roles can be assigned at four levels:
2. [Management group](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview),
   [Subscription](https://azure.microsoft.com/en-in/pricing/purchase-options/azure-account?icid=azurefreeaccount),
   [Resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups),
   or [Resource](https://azure.microsoft.com/en-us/resources).

### Examples of Azure RBAC Roles

1. Allow one user to manage virtual machines in a subscription and another user
   to manage virtual networks.

2. Allow a user to manage all resources in a resource group, such as virtual
   machines, websites and subnets.

3. Allow an application to access all resources in a resource group.

Read more about
[how RBAC works here](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview#how-azure-rbac-works).

### When to use Azure RBAC

| Deciding Factors        | Reason                                                                           |
| ----------------------- | -------------------------------------------------------------------------------- |
| Controlled Access       | When you need to control who can access and manage Azure resources.              |
| Team Collaboration      | To assign appropriate permissions based on team members' roles within a project. |
| Compliance and Security | To enforce security policies by limiting access to sensitive resources.          |

### Principle of Least Privilege

1. This principle states that users should be granted the minimum level of
   access necessary to perform their job functions.

2. Providing a minimal level of access minimizes the risk of accidental or
   malicious changes and limits potential damage in case of a security breach.

### Commonly used Azure Built-in Roles

| Built-in-role                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Contributor**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general#contributor)                                                         | Grants full access to manage all resources, but does not allow you to assign roles in Azure RBAC, manage assignments in Azure Blueprints, or share image galleries.                                                                                                                                                                      |
| [**Owner**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general#owner)                                                                     | Grants full access to manage all resources, including the ability to assign roles in Azure RBAC.                                                                                                                                                                                                                                         |
| [**Reader**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general#reader)                                                                   | View all resources, but does not allow you to make any changes.                                                                                                                                                                                                                                                                          |
| [**Role Based Access Control Administrator**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general#role-based-access-control-administrator) | Manage access to Azure resources by assigning roles using Azure RBAC. This role does not allow you to manage access using other ways, such as Azure Policy.                                                                                                                                                                              |
| [**User Access Administrator**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general#user-access-administrator)                             | Lets you manage user access to Azure resources.                                                                                                                                                                                                                                                                                          |
| [**Storage Account Contributor**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-account-contributor)                         | Permits management of storage accounts. Provides access to the account key, which can be used to access data via Shared Key authorization.                                                                                                                                                                                               |
| [**Storage Blob Data Contributor**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-contributor)                     | Read, write and delete Azure Storage containers and blobs. To learn which actions are required for a given data operation, see [Permissions for calling data operations](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-azure-active-directory#permissions-for-calling-data-operations).                      |
| [**Storage Blob Data Owner**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-owner)                                 | Provides full access to Azure Storage blobs containers and data, including assigning POSIX access control. To learn which actions are required, see [Permissions for calling data operations](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-azure-active-directory#permissions-for-calling-data-operations). |
| [**Storage Blob Data Reader**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-reader)                               | Read and list Azure Storage containers and blobs. To learn which actions are required for a given data operation, see [Permissions for calling data operations](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-azure-active-directory#permissions-for-calling-data-operations).                               |
| [**Storage Queue Data Contributor**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-queue-data-contributor)                   | Read, write and delete Azure Storage queues and queue messages. To learn which actions are required for a given data operation, see [Permissions for calling data operations](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-azure-active-directory#permissions-for-calling-data-operations).                 |
| [**Storage Queue Data Message Sender**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-queue-data-message-sender)             | Add messages to an Azure Storage queue. To learn which actions are required for a given data operation, see [Permissions for calling data operations](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-azure-active-directory#permissions-for-calling-data-operations).                                         |
| [**Storage Queue Data Reader**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-queue-data-reader)                             | Read and list Azure Storage queues and queue messages. To learn which actions are required for a given data operation, see [Permissions for calling data operations](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-azure-active-directory#permissions-for-calling-data-operations).                          |
| [**Storage Table Data Contributor**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-table-data-contributor)                   | Allows for read, write and delete access to Azure Storage tables and entities.                                                                                                                                                                                                                                                           |
| [**Storage Table Data Reader**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-table-data-reader)                             | Allows for read access to Azure Storage tables and entities.                                                                                                                                                                                                                                                                             |
| [**Cognitive Services OpenAI User**](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/ai-machine-learning#cognitive-services-openai-user)       | Read access to view files, models, deployments. The ability to create completion and embedding calls.                                                                                                                                                                                                                                    |

### How to use Azure RBAC Roles

:::info

1. **Azure RBAC Documentation**:
   [Learn more about Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/)

2. **Azure Built-in Roles Complete Guide**:
   [View built-in roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles)

3. **Assign Azure Roles Using Portal**:
   [How to assign roles via the portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)
   :::
