**Organization Name:** XYZ Corporation

**Project Name:** ABC Project

**Date:** 23-Sep-2024 
 
### **Project Overview**

**Project Name:** [Project name]  

**Purpose:** Brief description of the project’s goals and business objectives. 

**Stakeholders:** List of key stakeholders (technical and non-technical). 

**Scope:** What is included and excluded from the project. 

### Environments 

#### Requirements 
Record the customer requirements for environments like `Dev`, `QA`, `Prod`. If there are no explicit requirements, mention no explicit requirements from customer in the section. 

#### Considerations 
Include additional environment considerations along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md). 

#### Design
Detail the final solution, including block diagrams for the environments utilized in the project. 

### [Physical Infrastructure](Physical%20Infrastructure.md) 

#### Requirements
Record the customer requirements for [physical infrastructure](Physical%20Infrastructure.md). If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
Include additional physical infrastructure considerations along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md#physical-infrastructure). 

#### Design
Detail the final solution, including block diagrams (if applicable) for the environments utilized in the project. 

### [Management Infrastructure](Management%20Infrastructure.md) 

#### Requirements
Record the customer requirements for [management infrastructure](Management%20Infrastructure.md). If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
Include additional management infrastructure considerations along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md#management-infrastructure). 

#### Design
Detail the final solution, including block diagrams (if applicable) for the management infrastructure utilized in the project. 

### [Naming Convention](Naming%20Convention.md)

#### Requirements
Record the customer requirements for [naming convention](Naming%20Convention.md). If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
Include additional naming convention considerations along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md#naming-convention). 

#### Design
Detail the final solution for the naming convention utilized in the project. 

### [Identity Management](./Azure%20Security/Identity%20Management.md)

#### Requirements
Record the customer requirements for Identity Management. If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
Include additional identity management considerations along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md#identity-management). 

#### Design
Detail the final solution, including block diagrams (if applicable) for the identity management utilized in the project. 

### [Governance](../Azure%20Best%20Practices/Azure%20Security/Governance/Overview.md) 

#### Requirements
Record the customer requirements for Governance. If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
Include additional Governance considerations along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md#azure-governance).  

Document explicitly the design decisions made for [Azure Policy](../Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Policy.md), [Blueprint](../Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Blueprint.md), [Tags](../Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Tags.md), [RBAC](../Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20RBAC.md), [Management Groups](../Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Management%20Groups.md) & [Monitoring](../Azure%20Best%20Practices/Azure%20Security/Governance/Implementation/Azure%20Monitoring.md).  

#### Design
Detail the final solution for the Governance, including block diagrams (if applicable) utilized in the project along with the design for the Azure Policy, Blueprint, Tags, RBAC, Management Groups & Monitoring. 

### [Networking](../Azure%20Best%20Practices/Azure%20Security/Secrets%20Management.md) 

#### Requirements
Record the customer requirements for Networking. If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
Include additional networking considerations along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md). 

#### Design
Detail the final solution for the networking including block diagrams (if applicable) utilized in the project 

Document explicitly the design decisions made for [virtual network](../Azure%20Best%20Practices/Azure%20Security/Networking/Virtual%20Network.md), [security groups](../Azure%20Best%20Practices/Azure%20Security/Networking/Security%20Groups/Application%20Security%20Group.md), [VNet DDOS](../Azure%20Best%20Practices/Azure%20Security/Networking/VNet%20DDos.md), [VNet Endpoints](../Azure%20Best%20Practices/Azure%20Security/Networking/Endpoints/Service%20Endpoints.md), [VNet peering](../Azure%20Best%20Practices/Azure%20Security/Networking/VNet%20Peering.md) 

### [Secrets Management](../Azure%20Best%20Practices/Azure%20Security/Secrets%20Management.md) 

#### Requirements
Record the customer requirements for secrets management. If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
 Include additional secrets management considerations along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md#secrets-management). 

#### Design
Detail the final solution for the secrets management including block diagrams (if applicable) utilized in the projects. 

### On-premises to Azure connection 

#### Requirements
Record the customer requirements for on premise to azure connectivity. If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
 Include additional like [VPN Gateway & Express Route](../Azure%20Best%20Practices/Azure%20Security/VPN%20Gateway%20&%20Express%20Route.md) considerations along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md). 

#### Design
Detail the final solution for the including block diagrams (if applicable) utilized in the projects. 

### [Application Access Security](../Azure%20Best%20Practices/Azure%20Security/Azure%20Firewall%20&%20Application%20Gateway.md) 

#### Requirements
Record the customer requirements for application security like [Firewall or Application gateway](../Azure%20Best%20Practices/Azure%20Security/Azure%20Firewall%20&%20Application%20Gateway.md). If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
 Include additional considerations like firewall or gateway along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md). 

#### Design
Detail the final solution for the Application Access Security including block diagrams (if applicable) utilized in the projects. 

### Azure Architecture 

#### Considerations
Include Visual representation of the solution, including components like web apps, databases, [virtual network](../Azure%20Best%20Practices/Azure%20Security/Networking/Virtual%20Network.md), etc.  

Include additional architecture considerations, based on the recommendations from [Azure 360](../Introduction.md).

#### Design
Detail the final solution, including block diagrams for the architecture utilized in the project. 

Document the list of services used in the architecture in the following format 

<table>
    <thead>
        <tr>
            <th>Resource Type</th>
            <th>Feature</th>
            <th>Pricing Tier / Plan</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Azure App Service</td>
            <td>Frontend</td>
            <td>Premium (P1)</td>
        </tr>
        <tr>
            <td>Azure Application Gateway</td>
            <td>Web Application Firewall & Traffic Load Balancer</td>
            <td>Web Application Firewall V2</td>
        </tr>
    </tbody>
</table>


### Deployment Automation 

#### Requirements
Record the customer requirements for deployment automation. If there are no explicit requirements, mention no explicit requirements from customer in the section 

#### Considerations
 Include additional considerations like ARM templates or Blueprints along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md). 

#### Design
Detail the final solution for the Deployment Automation including block diagrams (if applicable) utilized in the projects. 

### [Cost Management](../Azure%20Best%20Practices/Azure%20Cost%20Management.md) 

#### Requirements
Record the customer requirements for [Azure Cost Management](../Azure%20Best%20Practices/Azure%20Cost%20Management.md). If there are no explicit requirements, document no explicit requirements from customer in the section 

#### Considerations
 Include additional considerations like `cost alerts`, `budgets`, `reports` needed along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md#azure-cost-management). 

#### Design
Detail the final solution for the cost management including block diagrams (if applicable) utilized in the projects. 

### [Azure Monitoring](../Azure%20Best%20Practices/Azure%20Monitoring.md) 

#### Requirements
Record the customer requirements for [Azure Monitoring](../Azure%20Best%20Practices/Azure%20Monitoring.md). If there are no explicit requirements, document no explicit requirements from customer in the section 

#### Considerations
 Include additional considerations for using monitoring solutions needed along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md#azure-monitoring-1). 

#### Design
Detail the final solution for the monitoring solutions including block diagrams (if applicable) utilized in the projects. 

### [Azure Disaster recovery](../Azure%20Best%20Practices/Azure%20Disaster%20Recovery.md)

#### Requirements
Record the customer requirements for [Azure Disaster recovery](../Azure%20Best%20Practices/Azure%20Disaster%20Recovery.md). If there are no explicit requirements, document no explicit requirements from customer in the section 

#### Considerations
 Include additional considerations for disaster recovery needs along with customer requirements, based on the recommendations from [Azure 360](../Introduction.md) & [Checklist](Azure%20Project%20Checklist.md#azure-disaster-recovery). 

#### Design
Detail the final solution for the disaster recovery plan including block diagrams (if applicable) utilized in the projects.  

### Azure Operational Cost Estimation 

Based on the project architecture & requirements use the [azure pricing calculator](https://azure.microsoft.com/en-in/pricing/calculator/) for an approximate operational cost estimation and attach here. 

### **Appendix**

**Glossary:** Define any technical terms. 

**References:** Links to relevant Azure documentation or internal resources. 
 