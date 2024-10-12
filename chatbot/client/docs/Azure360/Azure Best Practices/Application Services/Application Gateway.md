import React from 'react'; import ReactPlayer from 'react-player';

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

### Practical Guides [Video]

1.  [Azure Application Gateway - Deployment Overview](https://solitontech.sharepoint.com/:f:/r/sites/Ventures/Shared%20Documents/Azure/Azure%20360/Guides/Azure%20Application%20Gateway/Step01%20-%20Deployment-overview?csf=1&web=1&e=XtClHT)

2.  [App Service Configuration and Application Gateway Deployment](https://solitontech.sharepoint.com/:f:/r/sites/Ventures/Shared%20Documents/Azure/Azure%20360/Guides/Azure%20Application%20Gateway/Step02%20-%20App-service-configuration-and-application-gateway-deployment?csf=1&web=1&e=a7Fq2C)

3.  [Application Gateway Http Configuration to App Service](https://solitontech.sharepoint.com/:f:/r/sites/Ventures/Shared%20Documents/Azure/Azure%20360/Guides/Azure%20Application%20Gateway/Step03%20-%20Application-gateway-http-configuration-to-app-service?csf=1&web=1&e=9JDx2J)

4.  [Create Local SSL Certificate for App Service Custom Domain](https://solitontech.sharepoint.com/:f:/r/sites/Ventures/Shared%20Documents/Azure/Azure%20360/Guides/Azure%20Application%20Gateway/Step04%20-%20Create-local-ssl-cert-for-app-service-custom-domain?csf=1&web=1&e=R0NoYL)

5.  [Configure Https Routing for Application Gateway](https://solitontech.sharepoint.com/:f:/r/sites/Ventures/Shared%20Documents/Azure/Azure%20360/Guides/Azure%20Application%20Gateway/Step05%20-%20Application-gateway-configure-https-routing?csf=1&web=1&e=a2H9ls)

### Learn more about Azure Application Gateway

:::info

1. Learn more about
   [Azure Application Gateway](https://learn.microsoft.com/en-us/azure/application-gateway/overview)

2. Learn more about
   [Azure Application Gateway Autoscaling](https://learn.microsoft.com/en-us/azure/application-gateway/application-gateway-autoscaling-zone-redundants)

:::
