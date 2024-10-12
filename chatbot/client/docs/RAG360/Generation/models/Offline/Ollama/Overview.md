### Ollama Overview

1. Ollama is a component of the Offline model within the broader framework of
   Generation in RAG 360.

2. It is designed to manage and execute tasks without the need for real-time
   internet connectivity.

3. Typically, this system leverages stored or precomputed data to perform its
   functions, making it ideal for environments with limited or unreliable
   internet access.

### Why Ollama is Important

#### Problem Statement

1. In many scenarios, constant access to cloud services or real-time data
   processing is not feasible due to connectivity issues or the high cost of
   data transmission.

2. This limitation can severely hinder the performance and scalability of
   systems that rely solely on online resources.

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
            <td><span class="custom-header">Remote Areas</span></td>
            <td>In geographic regions lacking stable internet service, Ollama enables continued data handling and processing.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Cost-Sensitive Operations</span></td>
            <td>Reducing reliance on real-time cloud computing can significantly lower operational costs.</td>
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
            <td><span class="custom-header">Autonomy</span></td>
            <td>Systems remain operational regardless of internet availability.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Cost Efficiency</span></td>
            <td>Decreases the dependency on cloud services, reducing operational costs.</td>
        </tr>
    </tbody>
</table>

### Advantages and Disadvantages

#### Advantages

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factor</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Efficiency</span></td>
            <td>Performs data processing tasks without the need for constant internet connection, optimizing operational time.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Scalability</span></td>
            <td>Easily scalable as it does not require additional online resources; it can be expanded with more offline capabilities as needed.</td>
        </tr>
    </tbody>
</table>

#### Disadvantages

<table class="table-size-for-cloud-services">
    <thead>
        <tr>
            <th>Factor</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="custom-header">Complexity</span></td>
            <td>May require comprehensive pre-setup and periodic updates to handle new or evolving data scenarios without online support.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Resource Usage</span></td>
            <td>Initial set-up and updates might consume more resources upfront.</td>
        </tr>
        <tr>
            <td><span class="custom-header">Limitations</span></td>
            <td>May not be suitable for tasks requiring real-time data updating or immediate internet-based feedback.</td>
        </tr>
    </tbody>
</table>

### Installation and Setup Guide for Ollama

#### Installation

1. **Download Ollama for Windows** -
   [https://ollama.com/download/windows](https://ollama.com/download/windows)
2. **Find the model and tag to install.** E.g. For Llama 3 -
   [https://ollama.com/library/llama3/tags](https://ollama.com/library/llama3/tags)
3. Open `cmd` and run:
   ```bash
   ollama pull llama3
   ```

### Running Models

1. Open `cmd` and run:

   ```bash
   ollama run llama3
   ```

   If the model is not already available, it will be downloaded.

2. **Inference** can be done directly through the CLI. To exit, type `\bye`.

3. **To stop Ollama:**

4. **Ollama models** will be automatically served on port `11434` on localhost.
5. Ollama is Local Offline Model.localhost:11434 is used to check where ollama
   is running or not

### Inferencing

**Langchain, Llama-index, and LiteLLM** have support to access Ollama.


### Inferencing Speed

1. **System Setup for Ollama** - 32GB RAM (Intel CPU)
2. **Observation:** Ollama took 3x to 5x inferencing time compared to
   OpenAI/gpt-3.5-turbo.

```js
# Using GPT-3.5-turbo model
response_gpt_35 = completion(
    model="gpt-3.5-turbo",
    messages=messages
)

print(response_gpt_35["choices"][0].message.content)
```

```js
# Using LLaMA3 model with a local API
response_llama3 = completion(
    model="ollama/llama3",
    messages=messages,
    api_base="http://localhost:11434"
)

print(response_llama3["choices"][0].message.content)

```

### GPU Support

1. **Ollama supports NVIDIA GPU.**
2. **Ollama supports certain AMD GPU Cards** as mentioned here -
   [https://ollama.com/blog/amd-preview](https://ollama.com/blog/amd-preview)

   1. **Reference** -
      [https://github.com/ollama/ollama/blob/main/docs/gpu.md](https://github.com/ollama/ollama/blob/main/docs/gpu.md)

### Memory Requirement

#### **Memory Requirement for Model Loading (Based on Parameters Count & Bitness)**

1. [Medium Article on Memory Requirement](<https://medium.com/@baicenxiao/some-basic-knowledge-of-llm-parameters-and-memory-estimation-b25c713c3bd8#:~:text=Memory%20Required%20for%20Training%3A%20A,(28%20GB%20*%204)%20.>)
2. Memory requirement depends on both the number of parameters and bitness.

3. **Example 1** - Llama2-70B with 8-bit quantization version:

4. **Calculation:**

```js
(70 * 1000 * 1000 * 1000 / 1024 / 1024 / 1024) ~ 66GB
if we consider (1000/1024)^3 ~= 1.
```

5. **Example 2** - Llama3-8B with 4-bit quantized version (which is the default
   version in Ollama):

6. **Calculation:**
  ```
  8 * (1/2) GB = 4GB
  ```

#### **Memory Requirement for Storing Intermediate Results (During Inferencing)**

1. Only current layer results are needed during inferencing. There is no need to
   store all the intermediate results.

   1. **7b models** generally require at least **8GB of RAM**
   2. **13b models** generally require at least **16GB of RAM**
   3. **70b models** generally require at least **64GB of RAM**

2. If you run into issues with higher quantization levels, try using the q4
   model or shut down any other programs that are using a lot of memory.

3. **Huggingface Expert Suggestion** (in one of the deep learning training
   courses) - 1.2x of memory requirement for model loading for overall
   inferencing. (Reference -
   [Hugging Face Course](https://learn.deeplearning.ai/courses/open-source-models-hugging-face/lesson/2/selecting-models))

4. **Ollama Recommendation** - 2x of memory requirement for model loading.
