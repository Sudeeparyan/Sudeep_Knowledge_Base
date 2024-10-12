## Azure Firewall

1. **Azure Firewall** service is used to enforce network-level security in VNet,
   with a focus on centralized threat protection, traffic filtering and network
   logging. 🔥

2. It is a stateful firewall as it tracks and controls the flow of network
   traffic based on predefined security rules and policies. 🔍

### When to use Azure Firewall

| Deciding Factors               | Reason                                                                                                                                                                                         | Example                                                                                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Centralized Network Security   | Use Azure Firewall to centralize and standardize network security across your Azure environment. This is particularly useful for organizations with multiple VNets, regions, or subscriptions. | Deploy Azure Firewall in a hub VNet to enforce security policies for all traffic flowing between spoke VNets in a hub-and-spoke architecture.        |
| Advanced Threat Protection     | Use Azure Firewall to protect your network from advanced threats by enabling threat intelligence-based filtering, which blocks traffic from known malicious sources.                           | Enable threat intelligence to automatically block IP addresses associated with known botnets, malware, or phishing attacks.                          |
| Securing Outbound Traffic      | Use Azure Firewall to control outbound traffic to the internet or other external networks, ensuring that only authorized services and destinations are accessible.                             | Use application rules to allow VMs to access only specific external services, such as an update server, while blocking all other outbound traffic.   |
| Protecting Hybrid Environments | Use Azure Firewall to secure traffic between your on-premises network and Azure, especially in hybrid or multi-cloud environments.                                                             | Deploy Azure Firewall to inspect and secure traffic passing through a VPN or ExpressRoute connection between your on-premises data center and Azure. |

### How to use Azure Firewall

:::info 
For detailed information on Azure Firewall, please refer to the official
Microsoft documentation
[Azure Firewall Documentation](https://learn.microsoft.com/en-us/azure/firewall/)
📚 
:::

## Azure Application Gateway

1. **Azure Application Gateway** is designed for web application security and
   load balancing, providing features like SSL termination, URL-based routing
   and protection against web vulnerabilities. 🔐

2. It operates at the application layer and is tailored for web-facing
   applications that need to be secured and efficiently managed. 🛠️

### When to use Azure Application Gateway

| Deciding Factors                          | Reason                                                                                                                                                                                                                                                                                 |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Application Load Balancing            | When you need to distribute incoming HTTP/HTTPS traffic across multiple backend servers, Application Gateway provides load balancing based on URL, session affinity and other Layer 7 (application layer) attributes, ensuring even distribution of traffic and optimized performance. |
| SSL/TLS Termination                       | Application Gateway can handle SSL termination, reducing the processing load on backend servers and simplifying certificate management.                                                                                                                                                |
| Web Application Firewall (WAF) Protection | When you need to protect your web applications from common threats like SQL injection, cross-site scripting (XSS) and other OWASP Top 10 vulnerabilities.                                                                                                                              |
| URL-Based Routing                         | When you need to route traffic to different backend servers based on the URL path or domain name.                                                                                                                                                                                      |
| Microservices Architectures               | When you're deploying a microservices-based application that requires routing traffic to specific services based on the URL or other HTTP attributes.                                                                                                                                  |

### How to use Azure Application Gateway

:::info 
For detailed information on Azure Application Gateway, please refer to
the official Microsoft documentation:

1. [Azure Application Gateway Overview](https://learn.microsoft.com/en-us/azure/application-gateway/)
   🌐

2. [Create Application Gateway](https://learn.microsoft.com/en-us/azure/application-gateway/)
   📖

:::

## Comparison

| **Factors**                     | **Firewall**                                                                                                | **Application Gateway**                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Primary Purpose                 | Network security - Centralized, managed firewall service to control and log traffic.                        | Web application security and load balancing: Protects web applications from threats and distributes traffic.                |
| Layer of Operation              | Operates at `Layer 3` (Network Layer) and `Layer 4 `(Transport Layer).                                      | Operates at `Layer 7` (Application Layer).                                                                                  |
| Traffic Filtering               | Filters traffic based on IP addresses, ports and protocols.                                                 | Filters HTTP(S) traffic based on URL, headers and other attributes.                                                         |
| Threat Detection and Protection | Utilizes threat intelligence to detect and block known malicious IP addresses.                              | Uses WAF to detect and block web application attacks, supports OWASP core rule sets.                                        |
| Use Case                        | Best for securing non-web workloads, enforcing network-level security policies and logging network traffic. | Best for securing and load balancing web applications, handling SSL termination and protecting against web vulnerabilities. |
