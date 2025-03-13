import Image from "next/image";

// change stock text and images - submitting for initital test/ initial commit
export function Card() {
    return (
        <div className="flex border rounded-lg">

            <div className="flex-col w-full items-center p-3">
                <h2 className="font-semibold text-xlfont-[family-name:var(--font-geist-mono)]">Card Header</h2>
                <code className="break-normal text-sm/6 font-[family-name:var(--font-geist-mono)]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quidem, corporis blanditiis praesentium recusandae repudiandae, accusantium veritatis quae reprehenderit harum delectus aspernatur itaque obcaecati, saepe neque natus. Eius, cupiditate. Natus.
                    {
                        // change to alt text here
                    }</code>
            </div>

            <div className="flex-col w-full items-center p-3">
                <p className="break-normal text-sm/6 font-[family-name:var(--font-geist-mono)]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
{/* Use of stock images and text for initial commit */}
                <Image
                    className="dark:invert py-4 justify-self-center"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                />
            </div>


        </div>


    )
}