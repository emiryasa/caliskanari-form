import Input from '@/components/dashboard/Input'
import useStore from '@/zustand/index'
const data = [
    {
        id: 1,
        name: "name",
        type: "text",
        text: "Name"
    },
    {
        id: 2,
        name: "color",
        type: "color",
        text: "Color"
    },
    {
        id: 3,
        name: "image",
        type: "file",
        text: "Image"
    }
]
export const Page = () => {
    
    return <div className="flex items-center justify-center h-full w-full">
        <span className="text-4xl font-bold">
        {data.map((input) => (
        <Input
            key={input.id}
            name={input.name}
            type={input.type}
            text={input.text}
        />))}
        </span>
    </div>
}

export default Page
