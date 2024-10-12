### Llama3 Overview

1. `Llama3` is an advanced model in the Llama series, designed for comprehensive
   offline computations within the Ollama framework by meta.

2. Equipped with extensive pre-trained capabilities, Llama3 facilitates robust
   data processing and inference functionalities, specifically catering to
   scenarios with no internet dependency.

### Importance of Llama3

#### Problem Statement

1. Continuous internet access for real-time data processing can be impractical
   in various situations due to connectivity limitations or excessive data
   transmission costs.

2. Llama3 addresses this by enabling powerful computing abilities offline,
   ensuring system efficiency and scalability in isolated or cost-prohibitive
   environments.

#### Use Cases

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Aspect</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Remote Operations</span></td>
            <td>For areas with sporadic internet service, Llama3 provides reliable data processing utilities.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Cost Efficiency</span></td>
            <td>It offers a financially viable alternative to continuous cloud reliance for data handling.</td>
        </tr>
    </tbody>
</table>

#### Benefits

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Aspect</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Operational Independence</span></td>
            <td>Functions seamlessly without internet connectivity.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Reduced Operational Costs</span></td>
            <td>Minimizes expenses by cutting down on the dependency on cloud computations.</td>
        </tr>
    </tbody>
</table>

### Advantages and Disadvantages of Llama3

#### Advantages

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Aspect</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Operational Independence</span></td>
            <td>Functions seamlessly without internet connectivity.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Reduced Operational Costs</span></td>
            <td>Minimizes expenses by cutting down on the dependency on cloud computations.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Offline Efficiency</span></td>
            <td>Capable of handling complex processes independently of an internet connection.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability</span></td>
            <td>Can be enhanced with more comprehensive offline data management tools as required without additional online dependencies.</td>
        </tr>
    </tbody>
</table>

#### Disadvantages

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Aspect</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Setup Complexity</span></td>
            <td>Requires an elaborate initial setup and occasional updates to manage new data effectively offline.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Higher Resource Consumption</span></td>
            <td>May need significant resources during setup and for periodic updates.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Real-time Data Limitations</span></td>
            <td>Not suitable for scenarios reliant on real-time data updates.</td>
        </tr>
    </tbody>
</table>

### Installation and Setup Guide for Llama3

#### Installation

1. **Download Llama3 Specific Components** - Access the download at
   [https://ollama.com/library/llama3](https://ollama.com/library/llama3).

2. Navigate to the model section for specific tags or versions at
   [https://ollama.com/library/llama3/tags](https://ollama.com/library/llama3/tags).

3. Open your command line and execute:
   ```bash
   ollama pull llama3
   ```

#### Running the Llama3 Models

1. Launch the Model via Command Line:

   ```bash
   ollama run llama3
   ```

   The model will automatically download if not present locally.

2. **For direct inference through CLI**, type the query and for halting the
   process, input `/bye`.

3. The models are served on port `11434` on localhost by default. Use
   `localhost:11434` in your browser to check the operational status.

### Inferencing with Llama3

Platforms like **Langchain, Llama-index, and LiteLLM** are compatible with
Llama3.

#### **Example Usage**

Access through -
[https://dev.azure.com/example/example_git/\_git/Example?version=GBmain&path=/examples/llama3_usage/llama_access.ipynb](https://dev.azure.com/example/example_git/_git/Example?version=GBmain&path=/examples/llama3_usage/llama_access.ipynb)

### Inferencing Speed

1. With a standard system setup (e.g., 32GB RAM on an Intel CPU):
   1. Llama3 presents 3x to 5x slower inferencing times when compared to
      cloud-based models like OpenAI/gpt-3.5-turbo.

### GPU and Memory Requirements

1. **GPU Compatibility**

   1. NVIDIA GPUs are supported.
   2. Select AMD GPU cards are also supported as listed on

2. Memory requirements are influenced by model parameters and quantization
   details

   1. at least 16GB of VRAM and 16GB of system RAM to run Llama 3-8B.

3. Memory needs during inferencing primarily involve the current layer's data,
   without necessitating storage of all intermediate results.

### Documentation and Support

:::info 
For additional details and user manuals: 
1. Learn more about [Llama 3](https://llama.meta.com/docs/get-started/) 
2. [Github](https://github.com/meta-llama/llama3) 
:::
