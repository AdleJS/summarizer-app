# Summarizer App

This application retrieves web documents and summarizes their main themes using a language model.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/summarizer-app.git
    cd summarizer-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the application:
    ```sh
    npx ts-node main.ts
    ```

2. The application will load documents from the specified URL, summarize the main themes, and print the result to the console.

## Configuration

- **Document Loader**: The application uses `CheerioWebBaseLoader` to load documents from a specified URL. You can change the URL and the HTML selector for the content to be loaded.
- **Language Model**: The application uses `ChatOllama` with the `llama3.2:3b` model. You can configure the model and its parameters as needed.
- **Prompt Template**: The prompt template for summarization can be customized in the `PromptTemplate.fromTemplate` method.

## Example

The current configuration loads documents from [this blog post](https://lilianweng.github.io/posts/2023-06-23-agent/) and summarizes the main themes.

## Dependencies

- `cheerio`
- `@langchain/community`
- `@langchain/ollama`
- `langchain`
- `@langchain/core`

## License

This project is licensed under the MIT License.