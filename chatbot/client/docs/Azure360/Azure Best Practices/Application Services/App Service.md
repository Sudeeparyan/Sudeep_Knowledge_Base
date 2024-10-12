import React from 'react'; import ReactPlayer from 'react-player';

1. **Azure App Service** is a fully managed platform for building, deploying and
   scaling web apps, mobile app backends and RESTful APIs.

2. It supports multiple programming languages and frameworks, including .NET,
   Java, Node.js, Python, PHP and Ruby

3. Integrates with various development tools like Visual Studio, GitHub and
   Azure DevOps.

### Key Features

<table class="table-size-for-cloud-services">
        <thead>
            <tr>
                <th>Deciding Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">Multiple Language and Framework Support</span></td>
                <td>Supports popular languages like .NET, Java, Node.js, Python, PHP and more.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Managed Infrastructure</span></td>
                <td>Offers automatic scaling, load balancing and monitoring.</td>
            </tr>
            <tr>
                <td><span class="custom-header">High Availability and Scalability</span></td>
                <td>Built-in support for deployment across multiple regions and scaling up or out as needed.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Integrated Security</span></td>
                <td>Provides authentication and authorization options, including integration with Microsoft Entra ID (Azure AD), Microsoft account, Facebook, Google and other identity providers.</td>
            </tr>
            <tr>
                <td><span class="custom-header">DevOps Integration</span></td>
                <td>Seamlessly integrates with DevOps tools like Azure DevOps, GitHub Actions, Jenkins and Bitbucket for continuous integration and deployment (CI/CD).</td>
            </tr>
            <tr>
                <td><span class="custom-header">Built-in Monitoring and Diagnostics</span></td>
                <td>Includes logging, diagnostics and monitoring tools to analyze application performance.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Custom Domains and SSL</span></td>
                <td>Supports custom domain names and SSL certificates for secure communication.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Global Reach</span></td>
                <td>Deploy apps in multiple Azure regions for global reach and compliance requirements.</td>
            </tr>
        </tbody>
    </table>

### When to Use Azure App Service

<table class="table-size-for-cloud-services">
        <thead>
            <tr>
                <th>Deciding Factors</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="custom-header">Web Applications</span></td>
                <td>Ideal for hosting web applications with dynamic content or APIs that require high availability and scalability.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Microservices Architectures</span></td>
                <td>Supports containerized applications or microservices using Docker and Azure Kubernetes Service (AKS).</td>
            </tr>
            <tr>
                <td><span class="custom-header">Mobile Backend as a Service</span></td>
                <td>Use App Service to provide backend capabilities for mobile applications, including push notifications and authentication.</td>
            </tr>
            <tr>
                <td><span class="custom-header">RESTful APIs</span></td>
                <td>Host RESTful APIs with scalable and managed infrastructure.</td>
            </tr>
            <tr>
                <td><span class="custom-header">Dev/Test Environments</span></td>
                <td>Quickly spin up development or testing environments with minimal configuration.</td>
            </tr>
        </tbody>
    </table>

### Security Best Practices

When deploying an Azure App Service, following security best practices ensures
application is protected against potential threats and vulnerabilities. Here are
the key considerations

1. <span class="custom-header">**Security & Network Configuration**</span>🔒

   1. **Use HTTPS for All Communications**: Ensure all traffic to and from the
      app is encrypted using HTTPS. Enforce HTTPS by redirecting all HTTP
      requests to HTTPS in the Azure portal.

   2. **Restrict Access with IP Restrictions**: Configure IP restrictions to
      allow access only from trusted IP ranges or specific networks. This limits
      exposure to only the necessary endpoints.

   3. **Use Virtual Network (VNet) Integration**: Integrate App Service with an
      Azure Virtual Network to securely access resources such as databases,
      storage accounts and other services.

2. <span class="custom-header">**Use Private Endpoints for Secure
   Communication**</span>🔗

   1. **Deploy Private Endpoints**: Use Private Endpoints to connect App Service
      to Azure resources (e.g., Azure SQL Database, Azure Storage) over a
      private link, ensuring traffic stays within the Azure network and is not
      exposed to the public internet.

   2. **Disable Public Network Access**: Once private endpoints are configured,
      disable public network access to the connected Azure resources to prevent
      unauthorized access.

   3. **Implement Network Security Groups (NSGs)**: Apply Network Security
      Groups (NSGs) to the virtual network to control inbound and outbound
      traffic, allowing only required ports and protocols.

3. <span class="custom-header">**Managed Identity for Secure Resource
   Access**</span>🔑

   1. **Use Managed Identity**: Assign a managed identity (system-assigned or
      user-assigned) to App Service to securely access Azure resources (e.g.,
      Azure Key Vault, Azure Storage) without managing credentials.

      1. **System-Assigned Identity**: Automatically managed by Azure and tied
         to the app lifecycle.

      2. **User-Assigned Identity**: Can be shared across multiple Azure
         resources and is managed separately.

   2. **Grant Least Privilege Access**: Use Azure Role-Based Access Control
      (RBAC) to grant only the necessary permissions to the managed identity for
      accessing resources.

4. <span class="custom-header">**Single Sign-On (SSO) for Secure
   Sign-In**</span>🔑

   1. **Enable SSO with Azure Entra ID**: Use Azure Entra ID to implement Single
      Sign-On (SSO) for secure user authentication and access management.

### Learn more about App Service

1. Learn more about
   [Azure App Service Documentation](https://learn.microsoft.com/en-us/azure/app-service/)
2. Learn more about
   [Azure App Service Pricing](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/)
3. Learn more about
   [Deploying Applications with Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)
4. Learn more about
   [Application Insights Overview](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)

:::tip
 
`WEBSITES_CONTAINER_START_TIME_LIMIT` is an App Service setting in Azure that specifies the maximum time allowed for a container to start when running a web app in a Docker container. If the container takes longer than this limit to start, Azure App Service will assume the container failed to start and will stop the attempt.

**Key details:**
    1. **Default Value:** 230 seconds

    2. **Purpose:** To prevent indefinite waits for a container that might be stuck or failing to start properly.

    3. **Use Case:** You can adjust this setting if you know your container requires more time to start, particularly if it has heavy dependencies or initialization tasks.

This setting is particularly relevant when using App Service for Containers or Azure Web App for Containers.

:::
