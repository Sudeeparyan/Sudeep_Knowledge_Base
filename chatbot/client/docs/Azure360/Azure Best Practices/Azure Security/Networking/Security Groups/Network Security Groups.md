### What is Network Security Groups

1. A Network Security Group (NSG) is a allows to control inbound and outbound
   network traffic to and from resources by using
   [security rules](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview#security-rules)
   🔐

2. It acts as a virtual firewall, enabling you to define and enforce security
   rules at the network level, ensuring that only permitted traffic is allowed
   for resources 🚦

### How Network Security Group works

#### <span class="custom-header">Rules Configuration</span>

NSGs contain security rules that define which types of traffic are allowed or
denied based on various criteria, such as:

1. **Source and Destination:** Specifies the IP addresses, ranges, or subnets
   where the traffic is coming from and where it’s going.

2. **Port:** Specifies the port number or range that the traffic is targeting
   (e.g., HTTP on port 80, SSH on port 22).

3. **Protocol:** Specifies the network protocol (e.g., TCP, UDP, ICMP) that the
   rule applies.

Each rule has a priority, which determines the order in which the rules are
processed. Lower numbers indicate higher priority.

#### <span class="custom-header">Assignment to Subnets and NICs</span>

1. NSGs can be associated with either subnets or individual network interfaces
   (NICs).

2. When an NSG is applied to a subnet, the rules apply to all resources within
   that subnet.

3. When applied to a NIC, the rules only apply to the associated resource (like
   VM).

#### <span class="custom-header">Inbound and Outbound Traffic Filtering</span>

1. **Inbound Rules:** Control incoming traffic to the resources within a VNet or
   subnet.

2. **Outbound Rules:** Control outgoing traffic from the resources to other
   networks or the internet.

3. The rules are evaluated in order of priority and the first rule that matches
   the traffic criteria is applied.

#### <span class="custom-header">Default Rules</span>

1. NSGs come with a set of default rules that allow basic network functionality
   (e.g., allowing VNet-to-VNet communication and outbound internet traffic).

2. These default rules can be overridden by custom rules.

### When to use Network Security Group

#### <span class="custom-header">Securing Subnets</span>

1. Use NSGs to apply security controls at the subnet level, ensuring that all
   resources within the subnet are protected by the same set of rules. 🔒

2. **Example:** Apply an NSG to a subnet that hosts web servers in VM to allow
   HTTP/HTTPS traffic from the internet but block all other traffic. 🌐

#### <span class="custom-header">Isolating Network Tiers</span>

1. Use NSGs to enforce security boundaries between different tiers of an
   application (e.g., web, app, database) within a VNet. 🛡️

   **Example:** Apply an NSG to the application tier to allow traffic only from
   the web tier and block all direct access from the internet. 🌍

#### <span class="custom-header">Managing Traffic to/from the Internet</span>

1. Use NSGs to control which resources can communicate with the internet,
   thereby reducing the attack surface and protecting sensitive data.🛡️

   **Example:** Apply an NSG to restrict outbound traffic from a database server
   to the internet, ensuring that it can only communicate with specific trusted
   services. 🔐

### How to use Network Security Group

:::info 
For detailed information on Network Security Groups (NSGs), please refer
to the official documentation provided by Microsoft
[Network Security Groups Documentation](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview)
🌐 
:::
