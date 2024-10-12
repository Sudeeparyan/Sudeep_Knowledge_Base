import React from 'react'; import ReactPlayer from 'react-player';

1. **Azure Container Registry (ACR)** is a managed, private container registry
   service by Microsoft Azure that allows developers to store and manage
   container images and other artifacts used for container-based applications.

2. ACR integrates with `Azure Kubernetes Service (AKS)`,
   `Azure Red Hat OpenShift` and other orchestration platforms, providing
   seamless image management across the deployment lifecycle.

### When to Use Azure Container Registry

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factors</th>
            <th>Reason</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Storing and Managing Container Images</span></td>
            <td>Store container images for deployment to [Azure Kubernetes Service (AKS)](https://azure.microsoft.com/en-us/products/kubernetes-service) or other platforms.</td>
        </tr>
        <tr>
            <td><span class="custom-header">CI/CD Pipelines</span></td>
            <td>Integrate with Continuous Integration/Continuous Deployment (CI/CD) pipelines to streamline the container build, store and deployment process.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Multi-Region Deployments</span></td>
            <td>Ideal for teams that require global availability of container images and faster deployment in multiple Azure regions.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Hybrid Environments</span></td>
            <td>Use ACR for [container image storage](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-storage) in hybrid cloud scenarios where both on-premises and cloud solutions are involved.</td>
        </tr>
    </tbody>
</table>

### Commands

#### Docker Commands

    ```js

# Description: Docker commands

`docker --version`

# List all containers

`docker ps`

# List docker images

`docker images`

# Remove docker image

`docker rmi -f {image_id}`

# build docker image

`docker build -t {image-name} -f {docker-file-path} .`

# Run a image as container

`docker run --name {container-name} -d -p {external-port}:{docker-port} {image-name}`

````

#### Powershell commands
```js
# Description: Powershell commands

# Install Azure CLI
`winget install -e --id Microsoft.AzureCLI`

# Loin in to the Azure
`az login`

# List the active subscription
`az account show`

# Login to the Azure Container Registry
`az acr login --name {acr-name}`

# List the images in the Azure Container Registry
`az acr repository list --name {acr-name}`

# Tag docker images to ACR
`docker tag {image-name} {acr-name}.azurecr.io/{image-name}`

# Push docker image to ACR
`docker push {acr-name}.azurecr.io/{image-name}`

````

### Scripts

#### Install Docker Setup(Shell Script)

```js
# This script installs Docker on a Linux machine using the official Docker repository.
# It also adds the current user to the Docker group and enables Docker to start on boot.
# Reasons for adding the current user to the Docker group:
# - The Docker daemon binds to a Unix socket instead of a TCP port. By default, that Unix socket is owned by the user root and other users can only access it using sudo. The Docker daemon always runs as the root user.
# - If you don't want to use sudo when you use the docker command, create a Unix group called docker and add users to it. When the Docker daemon starts, it makes the ownership of the Unix socket read/writable by the docker group.

# Install Docker
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

# Create the docker group
sudo groupadd docker

# Add user to Docker group
sudo usermod -aG docker $USER

# Activate the changes to groups
newgrp docker

# Enable Docker to start on boot
echo "Enabling Docker to start on boot..."
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

#### Setup Azure Agent

```js
# This script will download the Azure DevOps agent, extract it, configure it, and install it as a service.

# Define variables
AGENT_URL="https://vstsagentpackage.azureedge.net/agent/3.243.1/vsts-agent-linux-x64-3.243.1.tar.gz"
AGENT_DIR="$HOME/myagent"
DOWNLOAD_DIR="$HOME/Downloads"
AGENT_TAR="$DOWNLOAD_DIR/vsts-agent-linux-x64-3.243.1.tar.gz"

# Create necessary directories
mkdir -p $AGENT_DIR
mkdir -p $DOWNLOAD_DIR

# Download the agent if it doesn't already exist
if [ ! -f "$AGENT_TAR" ]; then
  echo "Downloading the Azure DevOps agent..."
  wget -q --show-progress -O $AGENT_TAR $AGENT_URL
  echo "Download complete."
else
  echo "Agent tarball already exists. Skipping download."
fi

# Extract the agent
if [ -f "$AGENT_TAR" ]; then
  echo "Extracting the agent..."
  tar zxvf $AGENT_TAR -C $AGENT_DIR
else
  echo "Error: Download failed or the file does not exist."
  exit 1
fi

# Change to the agent directory
cd $AGENT_DIR

# Configure the agent
echo "Configuring the agent..."
./config.sh

# Change to the agent's service directory
cd $AGENT_DIR

# Install the agent as a service
sudo ./svc.sh install

# Start the agent
sudo ./svc.sh start
```

### Learn more about Azure Container Registry

:::info 
Learn more about [ACR Container Registry](https://learn.microsoft.com/en-us/azure/container-registry/)
:::
