import { AzureKeyCredential, OpenAIClient } from "@azure/openai";
import axios from "axios";

export const getOnYourData = async (message: string): Promise<any[]> => {
    const endpoint = process.env.AZURE_OPENAI_API_ENDPOINT;
    const azureAPIKey = process.env.AZURE_OPENAI_API_KEY;
    const deploymentName = process.env.AZURE_OPENAI_API_DEPLOYMENT_ID;

    if (!endpoint || !azureAPIKey || !deploymentName) {
        throw new Error("Azure OpenAI の環境変数が設定されていません。AZURE_OPENAI_API_ENDPOINT, AZURE_OPENAI_API_KEY, AZURE_OPENAI_API_DEPLOYMENT_ID を .env.local に設定し、開発サーバーを再起動してください。");
    }

    const normalizedEndpoint = endpoint.replace(/\/$/, "");
    const isInferenceEndpoint = normalizedEndpoint.includes(".services.ai.azure.com");

    let content = message;
    const apiUrl = "https://soumatou-api-webapp-udemy-rag2.azurewebsites.net/conversation";

    try {
        const res = await axios.post(apiUrl, {
            messages: [{ role: "user", content: message }],
        });
        content = `#質問\n${message}\n#回答\n${res.data}`;
    } catch {
        content = message;
    }

    const messages: { role: string; content: string }[] = [
        { role: "system", content: "You are a helpful assistant" },
        { role: "user", content },
    ];

    if (isInferenceEndpoint) {
        const inferenceUrl = `${normalizedEndpoint}/models/chat/completions?api-version=2024-05-01-preview`;
        const res = await axios.post(
            inferenceUrl,
            { model: deploymentName, messages },
            { headers: { "api-key": azureAPIKey, "Content-Type": "application/json" } }
        );
        return res.data.choices;
    }

    const client = new OpenAIClient(normalizedEndpoint, new AzureKeyCredential(azureAPIKey), {
        apiVersion: "2024-10-21",
    });
    const result = await client.getChatCompletions(deploymentName, messages);
    return result.choices;
};
