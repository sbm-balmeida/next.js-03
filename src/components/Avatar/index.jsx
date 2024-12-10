import Image from "next/image"

export const Avartar = ({ name, imageSrc }) => {
    return (
        <ul>
            <li>
                <Image 
                    src={imageSrc} 
                    width={32} 
                    height={32} 
                    alt={`Avatar do(a) ${name}`}
                />
            </li>
            <li>
                @{name}
            </li>
        </ul>
    )
}