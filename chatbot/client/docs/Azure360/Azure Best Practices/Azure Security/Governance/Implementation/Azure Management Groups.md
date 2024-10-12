Azure Management Groups are containers that help you manage access, policies and
compliance across multiple Azure subscriptions.

    1. **Management groups provide a governance scope** above subscriptions, organizing subscriptions into management groups. The governance conditions applied will cascade by inheritance to all associated subscriptions.

    2. **For example**, you can apply a policy to a management group that limits the regions available for virtual machine (VM) creation, allowing VM creation only in authorized regions under the management group.

### When to use Azure Management Groups

| Deciding Factors                 | Reason                                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Large Organizations              | When managing multiple subscriptions across different departments or teams.                                                                             |
| Policy Enforcement               | To apply governance policies consistently across all subscriptions in the hierarchy.                                                                    |
| Role-Based Access Control (RBAC) | When needed to assign roles at a broader level than individual subscriptions. For example: Applying the same RBAC rules for more than one subscription. |
| Compliance Requirements          | To ensure that all subscriptions adhere to regulatory and security requirements. For example: All subscriptions in Azure must be PCI compliant.         |

### How to use Azure Management Groups

:::info

1. **Azure Management Groups Documentation**:
   [Overview](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview)

2. **How to Use Management Groups via Portal**:
   [Create Management Group](https://learn.microsoft.com/en-us/azure/governance/management-groups/create-management-group-portal)
   :::
