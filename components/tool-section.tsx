import { ToolsSlider } from './tools-slider'

export function ToolsSection() {
    const images = [
        "/tools/python.png",
        "/tools/django.png",
        "/tools/fastapi.png",
        "/tools/nextjs.png",
        "/tools/react.png",
        "/tools/nodejs.png",
        "/tools/postgresql.png",
        "/tools/redis.png",
        "/tools/docker.png",
        "/tools/langchain.png",
        "/tools/openai.png",
    ]

    return (
        <section className="bg-[#F8F8F8] py-4 md:py-4 border-b border-gray-200">
            <ToolsSlider images={[...images, ...images]} />
        </section>
    )
}
