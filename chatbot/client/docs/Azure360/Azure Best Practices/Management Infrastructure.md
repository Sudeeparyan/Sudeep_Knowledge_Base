Azure provides four levels of management infrastructure scopes:

1. **Management Groups**
2. **Subscriptions**
3. **Resource Groups**
4. **Resources**

![Management Groups](Images/Management%20Groups.png)

### Deciding factors for Management Groups Scope

| Deciding Factors                                                | Reason                                                                                                                            |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Azure policies, role-based access control (RBAC) and compliance | To apply and enforce Azure policies, role-based access control (RBAC) and compliance standards consistently across subscriptions. |
| Streamline subscriptions                                        | Group subscriptions to streamline billing, reporting and cost management, making it easier to track cloud spending.               |

### Deciding factors for Subscriptions Scope

| Deciding Factors           | Reason                                                                                                                                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Track and manage costs     | Track and manage costs for specific projects by grouping resources under a subscription for billing purposes.                                                                                                                                          |
| Different payment methods  | Use different payment methods for different subscriptions, which is useful for separating costs by client or project.                                                                                                                                  |
| Resource quotas and limits | Enforce [resource quotas and limits](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits) to control usage and costs within specific projects, ensuring resources are allocated appropriately. |
| Security boundaries        | Create distinct security boundaries for different projects or teams by isolating their resources in separate subscriptions.                                                                                                                            |
| Different environments     | Use separate subscriptions for different environments (Dev, QA, Staging, Prod) for clear separation needs and to manage subscription resource quota limits.                                                                                            |

### Deciding factors for Resource Groups Scope

| Deciding Factors                         | Reason                                                                                                                                                  |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group related resources                  | Group related resources (e.g., VMs, databases, storage accounts) that share the same lifecycle, such as a specific project or development environments. |
| Manage and deploy resources collectively | Manage and deploy resources collectively For example, apply tags, access controls, or policies to all resources in the group simultaneously.            |
| Assign role-based access control (RBAC)  | Assign role-based access control (RBAC) to a resource group to limit who can manage the resources within it.                                            |
| Different environments                   | Use separate resource groups for different environments (Dev, QA, Staging, Prod) for centralized billing under a single subscription.                   |

### Decision Map

![Decision Map](Images/Decision%20Map.png)
