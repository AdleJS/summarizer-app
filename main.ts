import "cheerio";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { ChatOllama } from "@langchain/ollama";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";


// loading documents
const pTagSelector = "p";
const cheerioLoader = new CheerioWebBaseLoader("https://lilianweng.github.io/posts/2023-06-23-agent/", { selector: pTagSelector });
const docs = await cheerioLoader.load();


// initializing model
const llm = new ChatOllama({
    model: "llama3.2:3b",
    temperature: 0,
});


// summary chain
const prompt = PromptTemplate.fromTemplate("Summarize the main themes in these retrieved docs: {context}");

const chain = await createStuffDocumentsChain({
    llm: llm,
    outputParser: new StringOutputParser(),
    prompt: prompt,
});

const result = await chain.invoke({ context: docs });
console.log(result);