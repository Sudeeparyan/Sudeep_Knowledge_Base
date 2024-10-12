import React from 'react'; import ReactPlayer from 'react-player';

1. **Azure Virtual Machines (VMs)** provide on-demand, scalable computing
   resources in the cloud.

2. With Azure VMs, you can run a wide variety of operating systems and
   applications, offering the flexibility to deploy and scale applications while
   only paying for what you use.

### When to Use Azure Virtual Machine

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Lift and Shift</span></td>
            <td>Migrate your on-premises workloads to Azure without changing your applications.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Custom Applications</span></td>
            <td>Run custom applications or software that require specific configurations or control over the operating system.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Development and Testing</span></td>
            <td>Set up isolated VMs for developing and testing applications with various configurations.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Disaster Recovery</span></td>
            <td>Use Azure VMs as part of your disaster recovery plan to ensure business continuity.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Big Data and High-Performance Computing</span></td>
            <td>Run large-scale computations, data analysis, or batch processing using Azure VMs.</td>
        </tr>
    </tbody>
</table>

### Scripts

#### Qdrant Vector Database Setup

```js
# Step 1: Install Docker
echo "Updating APT..."
sudo apt-get update

echo "Installing required packages..."
sudo apt-get install -y ca-certificates curl gnupg lsb-release

echo "Adding Docker's official GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "Setting up the stable Docker repository..."
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

echo "Updating APT with the new Docker repository..."
sudo apt-get update

echo "Installing Docker CE, CLI, and containerd.io..."
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Step 2: Auto start Docker
echo "Enabling Docker to start on boot..."
sudo systemctl enable docker

# Step 3: Setup Qdrant using Docker Compose
echo "Creating a directory for Qdrant and navigating into it..."
sudo mkdir -p ~/qdrant_setup && cd ~/qdrant_setup

echo "Creating docker-compose.yaml..."
sudo tee docker-compose.yaml > /dev/null <<EOF
version: '3.4'
services:
  qdrant:
    image: qdrant/qdrant:latest
    restart: always
    container_name: qdrant
    ports:
      - 6333:6333
      - 6334:6334
    expose:
      - 6333
      - 6334
      - 6335
    configs:
      - source: qdrant_config
        target: /qdrant/config/production.yaml
    volumes:
      - ./qdrant_data:/qdrant/storage

configs:
  qdrant_config:
    content: |
      log_level: INFO
volumes:
  qdrant_data:
    external: true
EOF

echo "Creating the 'qdrant_data' directory..."
sudo mkdir -p qdrant_data

# Step 4: Enable inbound port
echo "Checking UFW status..."
sudo ufw status

echo "Enabling UFW..."
sudo ufw enable

echo "Allowing port 6333 through the firewall..."
sudo ufw allow 6333

echo "Reloading UFW to apply changes..."
sudo ufw reload

echo "Verifying UFW status..."
sudo ufw status

# Step 5: Run the container
echo "Run the container"
sudo docker compose up -d

echo "Setup completed successfully!"
```

#### Weaviate Vector Database Setup

```js
# Step 1: Install Docker
echo "Updating APT..."
sudo apt-get update

echo "Installing required packages..."
sudo apt-get install -y ca-certificates curl gnupg lsb-release

echo "Adding Docker's official GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "Setting up the stable Docker repository..."
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

echo "Updating APT with the new Docker repository..."
sudo apt-get update

echo "Installing Docker CE, CLI, and containerd.io..."
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Step 2: Auto start Docker
echo "Enabling Docker to start on boot..."
sudo systemctl enable docker

# Step 3: Setup Weaviate using Docker Compose
echo "Creating a directory for Weaviate and navigating into it..."
sudo mkdir -p ~/weaviate_setup && cd ~/weaviate_setup

echo "Creating docker-compose.yaml..."
sudo tee docker-compose.yaml > /dev/null <<EOF
version: '3.4'
services:
  weaviate:
    command:
    - --host
    - 0.0.0.0
    - --port
    - '8080'
    - --scheme
    - http
    image: semitechnologies/weaviate:1.23.0
    ports:
    - 8080:8080
    - 50051:50051
    volumes:
    - ./weaviate_data:/var/lib/weaviate
    restart: always
    environment:
      QUERY_DEFAULTS_LIMIT: 25
      AUTHENTICATION_APIKEY_ENABLED: 'true'
      AUTHENTICATION_APIKEY_ALLOWED_KEYS: 'sonic_secretkey'
      AUTHENTICATION_APIKEY_USERS: 'sonic'
      PERSISTENCE_DATA_PATH: '/var/lib/weaviate'
      DEFAULT_VECTORIZER_MODULE: 'none'
      ENABLE_MODULES: 'text2vec-cohere,text2vec-huggingface,text2vec-palm,text2vec-openai,generative-openai,generative-cohere,generative-palm,ref2vec-centroid,reranker-cohere,qna-openai'
      CLUSTER_HOSTNAME: 'node1'
volumes:
  weaviate_data:
    external: true
EOF

echo "Creating the 'weaviate_data' directory..."
sudo mkdir -p weaviate_data

# Step 4: Enable inbound port
echo "Checking UFW status..."
sudo ufw status

echo "Enabling UFW..."
sudo ufw enable

echo "Allowing port 8080 through the firewall..."
sudo ufw allow 8080

echo "Reloading UFW to apply changes..."
sudo ufw reload

echo "Verifying UFW status..."
sudo ufw status

# Step 5: Run the container
echo "Run the container"
sudo docker compose up -d

echo "Setup completed successfully!"
```

### Learn more about Azure Virtual Network

:::info

1. Learn more about
   [VM Best Practices](https://learn.microsoft.com/en-us/azure/virtual-machines/)

2. Learn more about
   [Scaling](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview)

3. Learn more about
   [Availability Sets](https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview)

4. Learn more about
   [Custom VM Images](https://learn.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-custom-images)

5. Learn more about
   [Azure Spot VMs](https://learn.microsoft.com/en-us/azure/virtual-machines/spot-vms)

6. Learn more about
   [Azure Virtual Machines Security](https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption)
   :::
