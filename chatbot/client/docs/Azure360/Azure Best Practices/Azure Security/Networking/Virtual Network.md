Azure Virtual Network (VNet) is the fundamental block for private networking in
Azure. It enables you to create a logically isolated network in the Azure cloud
to securely connect and manage Azure resources.

### IP Addressing 📡

1. Plan IP address spaces carefully, avoiding overlap with on-premises networks
   or other VNets.

2. Use
   [CIDR notation](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking)
   and ensure adequate IP ranges for future growth.

### Region Selection 🌐

Ensure VNets are region-specific, avoiding cross-region dependencies to reduce
latency and increase reliability.

## Subnet

### What is a Subnet?

1. A subnet (short for "subnetwork") is a smaller, segmented portion of a larger
   network, such as a
   [Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)
   in Azure.

2. Subnets help to organize and isolate resources within a network, allowing for
   more granular control over network traffic, security and management.

### How Subnet Works

1. When you create a VNet, you define a range of IP addresses using
   [CIDR (Classless Inter-Domain Routing)](https://devblogs.microsoft.com/premier-developer/understanding-cidr-notation-when-designing-azure-virtual-networks-and-subnets/)
   notation.

2. You can then create multiple subnets within that VNet, each with its own
   subset of the VNet's IP address range.

3. Resources, such as virtual machines, can be placed in different subnets,
   allowing you to manage and secure them independently.

### When to Use a Subnet

1. Subnets are used to divide a VNet into multiple, smaller networks, each with
   its own IP address range.

2. Resources within different subnets can be isolated from each other, depending
   on security and access requirements.

3. Use subnets to logically group resources based on their function, role, or
   access needs (e.g., web servers, application servers, database servers).

   1. <span class="custom-header">**Example:**</span> You might place web
      servers in one subnet, application servers in another and databases in a
      third, each with different security and routing rules.

4. Use subnets to apply different security controls to different parts of your
   network.

   1. <span class="custom-header">**Example:**</span> Place sensitive or
      critical resources in a subnet with stricter security controls.

5. Use Network Security Groups (NSGs) to control inbound and outbound traffic
   for each subnet.
   1. <span class="custom-header">**Example:**</span> Restrict internet access
      to only a web-facing subnet while keeping backend databases in a more
      secure, isolated subnet.

### How to Use Subnets

:::info

1.  Azure subnet configuration documentation:
    [Learn More](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal)

2.  Virtual Network:
    [Learn More](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)
:::

## Address space & Subnet sizing
Below are the best practices when it comes to subnet sizing and address space allocation for Azure Virtual Networks. 

1. <span class="custom-header">Assess Requirements </span>

   1. **Determine Resource Needs:** Evaluate the number of resources planned to deploy and their networking requirements. 

   2. **Consider Future Growth:** Factor in potential future expansion to avoid frequent reconfiguration. 

2. <span class="custom-header">Subnet Sizing </span>

   1. **Avoid Over-provisioning:** Allocate only as many IP addresses as needed. Using large subnets (e.g., /24) for a few resources can lead to wasted IP space. 

   2. **Typical Subnet Sizes**

         1. **/25: 128 IP addresses** (5 reserved by Azure, 123 usable). Suitable for larger subnets where you need more IP addresses space 

         2. **/26: 64 IP addresses** (5 reserved by Azure, 59 usable). Suitable for smaller subnets where you need a limited number of IP addresses 

         3. **/27: 32 IP addresses** (5 reserved by Azure, 27 usable). Suitable for small deployments. 

         4. **/28: 16 IP addresses** (5 reserved by Azure, 11 usable). Ideal for very small deployments or dedicated services. 

   3. **Subnet Scope:** 
      Use smaller subnets for isolated or specialized environments and larger subnets where you expect higher density. 

### Address Space Management 

1. **CIDR Block Allocation:** Choose an address space large enough to accommodate current and future subnets but avoid excessive reservation. For instance, a `/16` block provides `65,536` addresses, which might be excessive for a small number of subnets. 

2. **Avoid Fragmentation:** Plan address spaces to minimize fragmentation and maintain efficient IP management. 

### Recommendation 

1. **Small Project:** For a project with fewer than `10 resources`, consider using `/26` or `/27` subnet address space. 

2. **Medium Project:** For `20-50 resources`, using multiple `/26` or `/25` subnet address space might be appropriate. 

3. **Large Project:** For larger deployments, plan subnet & address space sizes based on specific needs and future scalability. 

## Azure Resources and Private IP Requirements

<table class="combine-table">
  <tr>
    <th><span class="custom-header">Azure Resource</span></th>
    <th>IP Count</th>
  </tr>
  <tr>
    <td><span class="custom-header">App service </span></td>
    <td>
      1 for private endpoint 
    </td>
  </tr>
  <tr>
    <td><span class="custom-header">Storage Account </span></td>
    <td>
       1 for Blob private endpoint 

       1 for Queue private endpoint 

       1 for Table private endpoint 

       1 for File private endpoint 


      **Total** – 4 Private IP’s required 
    </td>
  </tr>
  <tr>
    <td><span class="custom-header">Virtual Machine </span></td>
    <td>
      1 for private endpoint or 1 for public IP (optional) 
    </td>
  </tr>
  <tr>
    <td><span class="custom-header">Open AI Services</span></td>
    <td>
     1 for private endpoint   
    </td>
  </tr>
  <tr>
    <td><span class="custom-header">Application gateway</span> </td>
    <td>
     1 for public IP or 1 for private IP (In both cases the application gateway requires dedicated subnet)    
    </td>
  </tr>
   <tr>
    <td><span class="custom-header">Virtual network Subnet</span></td>
    <td>
     Azure reserves the first four and last IP addresses in each subnet for internal use. 

     **Total Usable IP** = Subnet Range - 5   
    </td>
  </tr>
</table>

### Example Scenerio

Let's assume in a project you are using `4 app services`, `1 storage account`, `1 virtual machine` & all resources are connected to a Virtual Network over a private endpoint. The number of IP addresses required will be 

<table class="table-size-for-cloud-services">
  <thead>
    <tr>
      <th>Azure Resource</th>
      <th>IP Count Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="custom-header">App Service</span></td>
      <td>1 private IP * 4 = 4 IP's</td>
    </tr>
    <tr>
      <td><span class="custom-header">Storage Account</span></td>
      <td>
         **4 private IPs**

          1. Blob private endpoint: 1
          2. Queue private endpoint: 1
          3. Table private endpoint: 1
          4. File private endpoint: 1
      </td>
    </tr>
    <tr>
      <td><span class="custom-header">Virtual Machine</span></td>
      <td>1 private IP</td>
    </tr>
  </tbody>
</table>

**Total Private IPs Needed:** 9 private IP addresses. 

#### Subnet Sizing 

1. Azure reserves the first four and last IP addresses in each subnet for internal use.

2. Therefore, the number of usable IP addresses in a subnet is the `total IP addresses minus 5`. 

#### Example Subnet Sizes

1. <span class="custom-header">/28 (16 total IPs, 11 usable)</span>

      1. Total IP addresses: `16` 

      2. Usable IP addresses: `11` 

      3. Summary: Sufficient for this scenario (8 IPs needed). 

2. <span class="custom-header">/27 (32 total IPs, 27 usable)</span>

      1. Total IP addresses: `32` 

      2. Usable IP addresses: `27` 

      3. Summary: Provides additional IPs for future growth. 

You may want to leave some room for future expansion or additional resources, so a `/27 subnet` might be a safer choice for flexibility. 