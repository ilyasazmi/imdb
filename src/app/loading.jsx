import Image from "next/image";

export default function loading() {
    return (
        <div className="flex justify-center">
            <Image width={96} height={30} src="spinner.svg" alt="loading..." />

        </div>
    )
}
