import { NextResponse } from "next/server";

export const GET = async () => {
    const endpoint = process.env.AZURE_OPENAI_API_ENDPOINT?.replace(/\/$/, "");
    const key = process.env.AZURE_OPENAI_API_KEY;

    if (!endpoint || !key) {
        return NextResponse.json({ error: "環境変数が未設定です" }, { status: 500 });
    }

    try {
        const url = `${endpoint}/openai/deployments?api-version=2024-10-21`;
        const res = await fetch(url, {
            headers: { "api-key": key },
        });
        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json({ error: data.error || data, status: res.status }, { status: 500 });
        }

        const names = (data.data || []).map((d: { id: string }) => d.id);
        return NextResponse.json({ endpoint: url, deployments: names, raw: data });
    } catch (err) {
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
};
