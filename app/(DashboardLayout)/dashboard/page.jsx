'use client'
import Input from '@/components/dashboard/Input'
import {useStore} from '@/zustand/index'

export const Page = () => {
    const data = useStore((state) => state.sections)
    const updateSectionText = useStore((state) => state.updateSectionText)
    const updateSectionColor = useStore((state) => state.updateSectionColor)
    console.log(data)
    return <div className="flex items-center justify-center h-full w-full">
        <span className="text-4xl font-bold">
            {data.map((item, index) => (
                <div key={index}>
                    <Input
                        name={"name"}
                        type="text"
                        value={item.text}
                        onChange={(e) => updateSectionText(item.id, e.target.value)}
                    />
                    <Input
                        name={"color"}
                        type="color"
                        value={item.color}
                        onChange={(e) => updateSectionColor(item.id, e.target.value)}
                    />
                </div>
            ))}
        </span>
    </div>
}

export default Page
