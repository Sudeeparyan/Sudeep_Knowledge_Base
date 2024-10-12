### What is VNet Peering

VNet Peering allows you to connect two or more Virtual Networks (VNets) so that
they appear as a single network.

1. Once peered, VNets can communicate with each other using private IP
   addresses, just as if they were part of the same network.

2. VNet Peering creates a low-latency, high-bandwidth connection between VNets,
   making it useful for scenarios where resources in different VNets need to
   communicate efficiently and securely.

### When to Use VNet Peering

| Deciding Factors                   | Reason                                                                                                                                                                                                    | Example                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Cross-Region Communication         | Use VNet Peering when you need to enable communication between VNets in different regions for global applications.                                                                                        | Connect VNets in the East US and West Europe regions to enable a globally distributed application. |
| Hub-and-Spoke Network Architecture | Use VNet Peering to implement a hub-and-spoke architecture, where a central VNet (hub) connects to multiple VNets (spokes), facilitating centralized management of resources like firewalls and gateways. | Set up a hub VNet to manage security policies and connect to multiple spoke VNets.                 |
| Improving Performance              | Use VNet Peering to reduce latency and improve performance for workloads that span multiple VNets within the same or different regions.                                                                   | Enhance the performance of a distributed application by peering VNets across regions.              |

### How to Use VNet Peering

:::info

1. Learn more about
   [Azure VNet Peering Documentation](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview)
   📚

2. Learn more about
   [Connect VNets in Azure Portal](https://learn.microsoft.com/en-us/azure/virtual-network/tutorial-connect-virtual-networks-portal)
   🛠️ 
:::
