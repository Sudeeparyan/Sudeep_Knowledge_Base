import Button from '@site/src/components/Button';

Gather the requirements for the project & choose considerations based on the
below-mentioned factors.

:::info[Purpose of the Checklist]
This checklist won't give concrete answers for your project, because it depends majorly on the project requirements. Instead this checklist creates an awareness of all the different aspects that need to be considered for Azure solutions.
:::

<Button
  class="export-button"
  label="Download!"
  link="#"
  variant="primary"
  size="lg"
/>

### Physical Infrastructure

Learn more about the
[Physical Infrastructure](/docs/Azure360/Azure%20Best%20Practices/Physical%20Infrastructure.md)

#### Azure Region

<table id="deciding-factors-for-azure-region-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered the Azure region to minimize latency and improve performance for your end users?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered ensuring that the Azure region you select complies with data residency and regulatory requirements specific to your industry or customer needs?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered verifying that the Azure services or VM types you plan to use are available in the region you selected?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered the cost differences across regions and selected the one that aligns with your budgetary constraints?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Availability Zones

<table id="deciding-factors-for-availability-zones-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered choosing Availability Zones to ensure your application is highly available and resilient to datacenter-level failures?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>For your mission-critical workloads, did you consider using Availability Zones to provide an added layer of redundancy and reliability?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Is data protection against hardware failures or natural disasters a priority, prompting you to deploy resources across multiple Availability Zones? </td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Did you consider selecting Availability Zones within the same region to minimize latency during failover and ensure fast recovery times?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Region Pairs

<table id="deciding-factors-for-region-pairs-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Did you consider choosing to use region pairs to ensure business continuity in the event of a major disaster, allowing services to failover to the other region if one is affected?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>For redundancy across a large geographical area, have you considered selecting region pairs to mitigate risks associated with regional outages, such as natural disasters or widespread network failures?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using region pairs to achieve high service availability with automatic failover, ensuring that your service remains accessible even if one region experiences an outage? </td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Management Infrastructure

Learn more about the
[Management Infrastructure](/docs/Azure360/Azure%20Best%20Practices/Management%20Infrastructure.md)

<table id="management-infrastructure-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>When organizing your resources, did you consider billing, quota limits and security boundary requirements to ensure effective management and protection of your project?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you decided, whether to manage project environments (Dev, QA, Staging, Prod) at the subscription or resource group level, considering factors such as quota limits and security boundaries? Read more about [subscription quota limits](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits)</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Did you consider evaluating the nature of each project to determine if compliance or policy standards were needed and use Management Groups accordingly?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered determining the billing requirements of your project to decide whether to use a single subscription or multiple subscriptions based on the project's needs?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you consider devising a plan for RBAC management and applying the principle of least privilege to ensure appropriate resource access? Learn more about [security best practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns)</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Management Groups Scope

<table id="deciding-factors-for-management-groups-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Did you consider configuring Azure policies and role-based access control (RBAC) to ensure consistent compliance and effective resource management across your subscriptions?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Did you consider grouping your Azure subscriptions to simplify billing, reporting and cost management?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Subscriptions Scope

<table id="deciding-factors-for-subscriptions-scope-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Did you consider grouping resources under specific subscriptions to track and manage costs for individual projects?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using different payment methods for separate subscriptions to manage costs by client or project?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you set up resource quotas and limits to control usage and manage costs within specific projects?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you consider creating separate subscriptions to establish distinct security boundaries for different projects or teams?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered to use separate subscriptions for different environments (Dev, QA, Staging, Prod) to manage resource quotas and ensure clear separation?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Resource Groups Scope

<table id="deciding-factors-for-resource-scope-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you grouped related resources (e.g., VMs, databases, storage accounts) together based on their lifecycle or project requirements?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you managed and deployed resources collectively within a resource group, applying tags, access controls, or policies to all resources simultaneously?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you assigned role-based access control (RBAC) to your resource groups to control who can manage the resources within them?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using separate resource groups for different environments (Dev, QA, Staging, Prod) to facilitate centralized billing and management under a single subscription?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Naming Convention

Learn more about the
[Naming Convention](/docs/Azure360/Azure%20Best%20Practices/Naming%20Convention.md)

<table id="naming-convention-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Does your naming convention for Azure resources include a short abbreviation for the resource type to avoid confusion?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you ensured that all resource names are in lowercase and use hyphens to separate words for better readability?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Does your naming convention include an identifier for the environment `(e.g., dev, qa, prod)` and a region code `(e.g., wus for West US)` as recommended?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Azure Sub-Resource Naming

<table id="sub-resource-naming-convention-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Does the names of sub-resources, such as containers or subnets, appropriately follow a naming convention that omits environment or region details, as these are covered by the parent resource?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>For sub-resources like subnets or secrets, have you used short, meaningful names that fit within any character set or length restrictions specific to the resource?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you avoided using hyphens in names for resources that have character set restrictions, such as storage accounts?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Identity Management

Learn more about the
[Identity Management](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Identity%20Management.md)

It's important to verify and comply with the
[identity management best practices](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Identity%20Management.md)
to safeguard the organization's security.

<table id="identity-management-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Does your organization follow Microsoft Entra ID security best practices for managing identities and controlling access to Azure resources?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Is the responsibility for managing identities in Microsoft Entra ID primarily handled by your organization's IT team?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Microsoft Entra ID

<table id="microsoft-entra-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you synchronized your on-premises Active Directory with Microsoft Entra ID using Microsoft Entra ID Connect?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered having Entra Multi-Factor Authentication (MFA) enabled to require users to provide a second form of authentication for added security?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented Conditional Access policies to automate control decisions based on user conditions and access controls?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using Microsoft Entra ID Privileged Identity Management (PIM) to manage, control and monitor access to critical resources in your organization?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Governance

Learn more about the
[Azure Governance](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Governance/Overview.md)

<table id="governance-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you established rules and policies to protect sensitive data and ensure compliance with regulatory requirements in Azure?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you been actively enforcing security practices such as access controls, encryption and monitoring to maintain a secure Azure environment?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered implementing mechanisms to control and optimize Azure spending, such as setting budgets and tracking resource usage?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered managing resources efficiently by effectively provisioning, managing and decommissioning them to avoid wastage?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented disaster recovery plans and strategies to ensure business continuity and safeguard critical workloads in Azure?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Policy

Learn more about the
[Azure Policy](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Policy.md)

<table id="azure-policy-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Before implementing Azure Policy, have you considered evaluating whether the project requires specific policy standards based on its unique requirements?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  <tr>
      <td>Have you considered using built-in Azure Policy definitions to address common use cases and get started with governance?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered creating and assigning Azure Policies to enforce specific rules or effects over your resources, such as deploying resources only to allowed regions?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using Azure Policies to ensure consistent application of tags for cost management across your resources?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered configuring Azure Policies to require resources to send diagnostic logs to a Log Analytics workspace?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>When implementing Azure Policies, have you considered factors such as regulatory compliance, resource standardization, cost control and security?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Blueprint

Learn more about the
[Azure Blueprint](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Blueprint.md)

<table id="azure-blueprint-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you decided to use Azure Blueprint when you need consistent deployments that adhere to organizational or regulatory standards?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using Azure Blueprint to ensure compliance by integrating policies, roles and resource configurations into a single blueprint?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using Azure Blueprint to standardize environments across multiple teams or projects to ensure consistent configurations?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you leveraged Azure Blueprint to speed up the deployment process by automating the creation of resources and applying policies in a single step?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Tags

Learn more about the
[Azure Tags](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Tags.md)

<table id="azure-tags-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered using Azure Tags to categorize resources by criteria such as department, project, or environment (e.g., production, development, staging)?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented tags to track and allocate costs, enabling better budget management and cost reporting?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using tags to automate resource management tasks, such as identifying resources for backup or scheduling shutdowns during off-hours?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered applying Azure tags to help ensure compliance with organizational policies and enforce tagging standards across your resources?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you maintained consistency in tag values, especially for project environments like dev, staging and production, to ensure clarity and effective management?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Management Groups

Learn more about the
[Azure Management Groups](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Management%20Groups.md)

<table id="azure-management-groups-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Before implementing Azure Management Groups, have you considered evaluating whether the project requirements and organizational structure justify their use?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using Azure Management Groups to manage access, policies and compliance across multiple Azure subscriptions?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered applying governance policies consistently across all subscriptions within a management group to ensure uniform policy enforcement?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using Azure Management Groups to assign role-based access control (RBAC) at a broader level than individual subscriptions?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure RBAC

Learn more about the
[Azure RBAC](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20RBAC.md)

#### Azure RBAC Roles

Learn more about the
[Azure RBAC](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20RBAC.md)

<table id="azure-rbac-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you assigned <a href="https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles">built-in roles</a> (e.g., Owner, Contributor, Reader) based on team members' responsibilities and the actions they need to perform?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you used the Azure portal to assign roles at the appropriate scope (subscription, resource group, or individual resource)?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you ensured that each team member has the minimum level of access required to perform their tasks, adhering to the principle of least privilege?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you created custom roles when built-in roles do not meet specific project needs?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you determined the Azure resources needed for the project and identified who needs access to these resources and what actions they need to perform (e.g., read, write, delete)?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you used Azure RBAC to enforce security policies by limiting access to sensitive resources and ensuring compliance with security requirements?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Principle of Least Privilege

<table id="least-privilege-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you implemented the Principle of Least Privilege by ensuring that users are granted only the minimum level of access necessary for their job functions?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you regularly reviewed and adjusted user permissions to ensure they continue to adhere to the Principle of Least Privilege?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Monitoring

Learn more about the
[Azure Monitoring](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Monitoring.md)

<table id="azure-monitoring-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you identified the key metrics and performance indicators that are critical for your project's success?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you determined which specific resources (e.g., VMs, databases, applications) need to be monitored for your project?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you enabled and configured the appropriate Azure monitoring services based on your project requirements?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Azure Monitoring Usage

<table id="azure-monitoring-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you used Azure Monitoring to track the performance of your applications and resources to ensure they are operating efficiently?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you configured Azure Monitor to collect and aggregate telemetry data from both Azure and non-Azure subscriptions and tenants?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you utilized Azure Monitoring to identify and resolve issues affecting your applications or infrastructure through troubleshooting and diagnostics?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you used Azure Monitoring to detect and respond to security threats and anomalies to ensure the security of your environment?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Different Azure Monitoring Services

<table id="different-azure-monitoring-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Are you currently using Azure Service Health to get alerts about service issues and planned maintenance affecting your resources?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered utilizing Azure Application Insights to monitor and diagnose performance issues and errors in your web applications?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Is Azure Security Center part of your strategy for monitoring security configurations and detecting threats across your environment?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you set up Azure Network Watcher to troubleshoot network problems and analyze traffic patterns?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Types of Azure Monitoring

<table id="types-of-azure-monitoring-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered using Infrastructure Monitoring to assess resource utilization and detect performance bottlenecks in virtual machines, networks and storage?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Is Application Monitoring part of your strategy for tracking performance metrics like response times, error rates and user interactions for your applications?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented Network Monitoring to identify network latency, connectivity issues and analyze traffic patterns in your Virtual Networks and Load Balancers?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Are you utilizing Security Monitoring to detect potential security threats, identify vulnerabilities and enforce security best practices?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure VPN Gateway & Express Route

Learn more about the
[Azure VPN Gateway & Express Route](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/VPN%20Gateway%20&%20Express%20Route.md)

#### Azure VPN Gateway

<table id="azure-vpn-gateway-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>Is cost a significant factor in your decision to use Azure VPN Gateway for connecting your on-premises network to Azure?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you determined whether you need to provide secure remote access to individual users or remote offices using Azure VPN Gateway?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you evaluated whether the performance of Azure VPN Gateway, which depends on internet traffic, meets your requirements?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Are you considering using Azure VPN Gateway for smaller workloads or limited bandwidth requirements?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
     <tr>
      <td>Have you assessed the security of Azure VPN Gateway, which uses IPsec encryption over the public internet, to ensure it aligns with your security needs?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you assessed whether Azure VPN Gateway or Azure ExpressRoute is necessary for your project based on its specific requirements and connectivity needs?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Azure Express Route

<table id="azure-express-route-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Have you identified high bandwidth requirements that necessitate using Azure ExpressRoute for transferring large amounts of data?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
     <tr>
      <td>Is regulatory compliance a concern that requires your traffic to avoid traversing the public internet, making Azure ExpressRoute a suitable choice?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
     <tr>
      <td>Have you identified a need for global connectivity with high reliability and performance to connect multiple global offices, which Azure ExpressRoute can provide?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Is Azure ExpressRoute a viable option for your deployment if you require a high-performance, dedicated connection between your on-premises infrastructure and Azure?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
     <tr>
      <td>Have you considered the higher cost of Azure ExpressRoute and whether it fits your budget given the benefits of high performance, security and availability?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Secrets Management

Learn more about the
[Secrets Management](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Secrets%20Management.md)

<table id="secrets-management-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Have you considered identifying which resources and services require authentication to other Azure services or third-party systems and assessed the best methods for managing these authentications securely?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td> Have you implemented a secure process for storing, managing and accessing sensitive information such as API keys, passwords and certificates to ensure they are protected from unauthorized access while being available to authorized applications and services?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you transitioned from traditional methods of managing secrets, such as embedding tokens or passwords directly into application code or configuration files, to using Azure Key Vault for centralized and secure management of sensitive information?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you adopted Azure Managed Identity for managing authentication to Azure services, thereby eliminating the need to store credentials in your code and azure key vault enhancing security through automatic identity management?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td> Have you assessed whether Azure Managed Identity can meet all your authentication needs and decided between using System-assigned or User-assigned Managed Identity based on your specific requirements?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Virtual Network

Learn more about the
[Virtual Network](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Networking/Virtual%20Network.md)

<table id="virtual-network-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered planning your IP address spaces to avoid overlap with on-premises networks or other VNets?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you used CIDR notation to define your IP address ranges?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you ensured that your VNet is confined to a single region to avoid cross-region dependencies?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered choosing a specific Azure region for your VNet to minimize latency for your end users?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Subnet

<table id="subnet-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Have you defined a range of IP addresses using CIDR notation when creating your VNet?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you created multiple subnets within your VNet to organize and isolate resources?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you used subnets to logically group resources based on their function or access needs such as web servers, application servers and databases, within your VNet??</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you applied Network Security Groups (NSGs) to control inbound and outbound traffic for each subnet?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you used separate subnets for different environments (e.g., development, staging, production) and applied tailored Network Security Groups (NSGs) to enforce specific security policies and access controls?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Security Groups

#### Network Security Groups

Learn more about the
[Network Security Groups](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Networking/Security%20Groups/Network%20Security%20Groups.md)

<table id="network-security-groups-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Have you customized or overridden default NSG rules to better secure your network by specifying more granular security policies?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you configured Network Security Groups (NSGs) to define and enforce security rules based on criteria such as source, destination, port and protocol?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered assigning NSGs to subnets to apply security rules to all resources within the subnet?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you applied NSGs to individual network interfaces (NICs) to control traffic specifically for associated resources like virtual machines?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using NSGs to control both inbound and outbound traffic to manage communication between resources and the internet or other networks?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Application Security Groups

Learn more about the
[Application Security Groups](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Networking/Security%20Groups/Application%20Security%20Group.md)

<table id="application-security-groups-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you used Application Security Groups (ASGs) to simplify the management of network security rules by grouping virtual machines (VMs) with similar functions?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented ASGs in large-scale deployments to enforce consistent security policies across your infrastructure, avoiding the complexity of managing individual IP addresses?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### VNet DDos

Learn more about the
[VNet DDos](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Networking/VNet%20DDos.md)

<table id="vnet-ddos-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you consider using Azure DDoS Protection Standard to secure public-facing applications and services exposed to the internet, such as web applications or APIs?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented Azure DDoS Protection Standard for mission-critical services that require high availability and cannot afford downtime caused by DDoS attacks?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered utilizing DDoS Protection Standard to manage costs associated with unexpected traffic spikes and autoscaling during a DDoS attack?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Are you leveraging the basic DDoS Protection included with Azure services to protect against common network-layer attacks?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you enabled DDoS Protection for your Azure Virtual Network to enhance network security, while considering that it might not be necessary if you are already using Application Gateway or Azure Firewall?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### VNet Endpoints

Learn more about the
[VNet Endpoints](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Networking/Endpoints/Comparison.md)

#### Private Endpoints

Learn more about the
[Private Endpoints](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Networking/Endpoints/Private%20Endpoints.md)

<table id="private-endpoints-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered using Private Endpoints to secure access to Azure services, ensuring that sensitive data remains within your private network and does not traverse the public internet?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you utilized Private Endpoints to reduce latency by routing traffic through Azure’s private backbone network instead of the public internet?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you disabled public access for all Azure services (such as app services and storage accounts) and ensured that they are accessed only through Private Link for secure communication?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Service Endpoints

Learn more about the
[Service Endpoints](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Networking/Endpoints/Service%20Endpoints.md)

<table id="service-endpoints-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered using Service Endpoints to securely connect to Azure services, ensuring that traffic from your VNet to the service does not traverse the public internet? </td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented Service Endpoints to improve performance and reduce latency by keeping traffic within Azure’s backbone network?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Depending on your project requirements, Have you selected between Service Endpoints, Private Endpoints, or a combination of both to securely connect your resources?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### VNet Peering

Learn more about the
[VNet Peering](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Networking/VNet%20Peering.md)

<table id="vnet-peering-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you used VNet Peering to enable communication between VNets in different regions to support global applications?</td>
      <td>
        <div class="dropdown-container-project-checklist">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented a hub-and-spoke network architecture using VNet Peering to centralize management of resources such as firewalls and gateways?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you used VNet Peering to reduce latency and improve performance for workloads that span multiple VNets within the same or different regions?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Firewall & Application Gateway

Learn more about the
[Azure Firewall & Application Gateway](/docs/Azure360/Azure%20Best%20Practices/Azure%20Security/Azure%20Firewall%20&%20Application%20Gateway.md)

#### Azure Firewall

<table id="azure-firewall-table">
  <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you deployed Azure Firewall to centralize and standardize network security across multiple VNets, regions, or subscriptions in your Azure environment?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using Azure Firewall’s threat intelligence-based filtering to protect your network from advanced threats by blocking traffic from known malicious sources?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you configured Azure Firewall to control and secure outbound traffic to the internet or other external networks, ensuring only authorized services and destinations are accessible?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered utilizing Azure Firewall to secure traffic between your on-premises network and Azure in hybrid or multi-cloud environments?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Based on your project requirements, have you chosen either Azure Application Gateway or Azure Firewall to safeguard your cloud resources from attacks?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Azure Gateway

<table id="azure-application-gateway-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered using Azure Application Gateway to distribute incoming HTTP/HTTPS traffic across multiple backend servers to ensure even distribution and optimized performance?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you configured Azure Application Gateway for SSL/TLS termination to reduce processing load on backend servers and simplify certificate management?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered utilizing the Web Application Firewall (WAF) feature in Azure Application Gateway to protect your web applications from common threats like SQL injection and cross-site scripting (XSS)?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you set up URL-based routing with Azure Application Gateway to direct traffic to different backend servers based on the URL path or domain name?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Deployment Automation

Learn more about the
[Azure Deployment Automation](/docs/Azure360/Azure%20Best%20Practices/Azure%20Deployment%20Automation.md)

<table id="azure-deployment-automation-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered using deployment automation to ensure consistent deployment processes and minimize human errors?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented automation to speed up deployment timelines by eliminating repetitive manual tasks?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered utilizing deployment automation tools to scale deployments efficiently across multiple environments, such as development, testing and production?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you adopted Azure Resource Manager (ARM) Templates for automating the provisioning and configuration of Azure resources and do you use Infrastructure as Code (IaC) principles for versioning and reuse?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered using Azure Blueprints to define and deploy a standardized set of Azure resources and policies, ensuring compliance and consistency across different environments?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Cost Management

Learn more about the
[Azure Cost Management](/docs/Azure360/Azure%20Best%20Practices/Azure%20Cost%20Management.md)

<table id="azure-cost-management-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered using Azure Cost Management to set and enforce spending limits to ensure that you do not exceed your financial plans?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you created budgets and set up alerts in Azure Cost Management to notify you when costs approach or exceed your predefined limits?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you leveraged Azure Cost Management to identify areas where you can save money, such as by finding underutilized resources or opportunities for discounts?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you used Azure Cost Management to track and analyze resource consumption by teams or departments, thereby improving chargeback and accountability?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you utilized Azure Cost Management to forecast future spending based on current usage trends, assisting with budget planning and management?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Monitoring

Learn more about the
[Azure Monitoring](/docs/Azure360/Azure%20Best%20Practices/Azure%20Monitoring.md)

<table id="azure-monitoring-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you used Azure Monitoring to ensure that your resources are available and performing as expected, helping to maintain high availability?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you leveraged Azure Monitoring to identify and resolve performance bottlenecks in your applications and infrastructure, improving overall performance?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you utilized Azure Monitoring to quickly detect and diagnose issues, thereby reducing downtime and improving response times, while also maintaining compliance with standards and optimizing costs?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Disaster Recovery

Learn more about the
[Azure Disaster Recovery](/docs/Azure360/Azure%20Best%20Practices/Azure%20Disaster%20Recovery.md)

<table id="azure-disaster-recovery-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you implemented a disaster recovery strategy to ensure that your critical applications and data remain available during disruptions and unexpected events?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered implementing measures to minimize downtime and reduce the amount of time your services are unavailable, thereby maintaining customer trust and satisfaction?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Are you using Azure services to safeguard your data against corruption or loss, ensuring data protection in case of a disaster?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you ensured that your disaster recovery plans meet regulatory compliance requirements by providing reliable recovery options?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Application Services

#### Azure App Service

Learn more about the
[Azure App Service](/docs/Azure360/Azure%20Best%20Practices/Azure%20Application%20Services/Azure%20App%20Service.md)

<table id="azure-service-app-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you ensured that your application is compatible with the programming languages and frameworks supported by Azure App Service?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you configured Azure App Service for automatic scaling, load balancing and monitoring to enhance your application's performance and reliability?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you set up integration with DevOps tools and configured custom domains and SSL certificates to streamline deployment and ensure secure communication for your application?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Security Best Practices for App Service

<table id="azure-security-best-practices-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you enforced HTTPS for all communications by redirecting HTTP requests to HTTPS in the Azure portal to ensure encrypted traffic?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you configured IP restrictions, Virtual Network (VNet) integration and Private Endpoints to control and secure access to your Azure App Service and connected resources?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented managed identities, granted least privilege access using Azure RBAC and enabled Single Sign-On (SSO) with Azure Entra ID for secure authentication and resource access?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you disabled public network access for Azure resources once Private Endpoints are configured to prevent unauthorized exposure to the public internet?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you applied Network Security Groups (NSGs) to your virtual network to control and restrict inbound and outbound traffic according to your security requirements?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Azure Storage Accounts

Learn more about the
[Azure Storage Accounts](/docs/Azure360/Azure%20Best%20Practices/Azure%20Application%20Services/Azure%20Storage%20Account.md)

<table id="azure-storage-account-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you chosen the appropriate storage tier (Hot, Cool, Archive) based on the frequency of data access to optimize cost efficiency and performance?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you evaluated and selected the correct redundancy option (LRS, ZRS, GRS, GZRS) to ensure your data's availability and disaster recovery needs?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you implemented proper network security measures such as private endpoints or VNets, along with identity-based access controls, to secure your Azure Storage Account?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you set up monitoring through Azure Monitor and activity logs to track the performance and health of your storage account, as well as configured alerts for critical issues?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Azure Container Registry

Learn more about the
[Azure Container Registry](/docs/Azure360/Azure%20Best%20Practices/Azure%20Application%20Services/Azure%20Container%20Registry.md)

<table id="azure-container-registry-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered using Azure Container Registry to centrally store and manage your container images for seamless integration with AKS or other deployment platforms?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered integrating Azure Container Registry into your CI/CD pipeline to automate container image building, storing, and deployment processes?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered setting up Azure Container Registry to support global availability and ensure faster deployments in multiple Azure regions for your distributed applications?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered evaluating using Azure Container Registry for hybrid cloud deployments, ensuring smooth container image management across both on-premises and cloud environments?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

#### Azure Virtual Machines

Learn more about the
[Azure Virtual Machines](/docs/Azure360/Azure%20Best%20Practices/Azure%20Application%20Services/Azure%20Virtual%20Machine.md)

<table id="azure-virtual-machine-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Have you considered using Azure Virtual Machines to lift and shift your on-premises workloads to the cloud without needing to modify your applications?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Are you leveraging Azure Virtual Machines for custom applications that require specific configurations, control over the operating system, or specialized software setups?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you set up isolated Azure Virtual Machines to create development and testing environments with different configurations for your applications?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you integrated Azure Virtual Machines into your disaster recovery strategy to ensure high availability and business continuity during unexpected downtime?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

### Azure Open AI Services

Learn more about the
[Azure Open AI Services](/docs/Azure360/Azure%20Best%20Practices/Azure%20Open%20AI%20Services.md)

<table id="azure-openai-services-table">
   <thead>
    <tr>
      <th>Considerations</th>
      <th>Applicable (Yes/No)</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Are you planning to use Azure OpenAI Services to automate the generation of text content such as articles, blogs, or product descriptions for your application?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you evaluated which Azure OpenAI model (e.g., GPT-4, Codex) best aligns with your application’s needs for text generation, code automation, or data analysis?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
    <tr>
      <td>Have you considered checking the availability of Azure OpenAI Services in the region closest to your user base, considering performance and latency, or identified an alternative region such as the East US or West Europe if your region is not supported?</td>
      <td>
        <div class="dropdown-container">
          <select class="dropdown-menu">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </td>
      <td>
        <textarea class="description-textarea" placeholder="Type any deviation or description here..." rows="8"></textarea>
      </td>
    </tr>
  </tbody>
</table>

<Button
  class="export-button"
  label="Export!"
  link="#"
  variant="primary"
  size="lg"
/>
