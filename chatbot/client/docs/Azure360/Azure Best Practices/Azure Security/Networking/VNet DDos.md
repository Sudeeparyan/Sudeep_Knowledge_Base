### What is VNet DDoS Protection in Azure

1. VNet DDoS Protection in Azure is a service designed to protect your Azure
   Virtual Network (VNet) from Distributed Denial of Service (DDoS) attacks.

   1. <span class="custom-header">**DDoS attacks**</span> attempt to overwhelm
      and disrupt the availability of your network resources by flooding them
      with a massive volume of traffic.

2. Azure offers two types of DDoS protection:

   1. <span class="custom-header">**Basic DDoS Protection:**</span>
      Automatically included with Azure services at no additional cost. It
      provides protection against common network-layer attacks.

   2. <span class="custom-header">**DDoS Protection Standard:**</span> An
      advanced, customizable offering that provides additional protection for
      your Azure resources against more sophisticated DDoS attacks.

### When to use VNet DDos Protection

| Deciding Factors                             | Reason                                                                                                                                                                       | Example                                                                                                                         |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Protecting Public-Facing Applications        | Use DDoS Protection Standard to secure applications exposed to the internet, such as web applications, APIs, or public endpoints, which are more vulnerable to DDoS attacks. | Protect a public-facing e-commerce website that handles sensitive transactions and needs to be available 24/7.                  |
| Enhancing Security for Critical Services     | Use DDoS Protection Standard for mission-critical services that require high availability and cannot afford downtime caused by a DDoS attack.                                | Apply DDoS protection to a financial application that processes real-time transactions for thousands of users.                  |
| Cost Management for High-Volume Applications | Use DDoS Protection Standard to prevent unexpected costs due to autoscaling or resource usage spikes during an attack, as it includes cost protection features.              | Protect a scalable video streaming service that could experience increased costs due to traffic surges caused by a DDoS attack. |

### How to use VNet DDOS protection

:::info
Learn More about [Azure DDOS protection Documentation](https://learn.microsoft.com/en-us/azure/ddos-protection/)
🌐 
:::
