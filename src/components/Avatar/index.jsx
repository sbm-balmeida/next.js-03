export const Avartar = ({ name, imageSrc }) => {
    return (
        <ul>
            <li>
                <Image src={imageSrc} width={32} height={32}/>
            </li>
            <li>
                @{name}
            </li>
        </ul>
    )
}