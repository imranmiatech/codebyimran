'use client'
import Image from "next/image";

const images = [
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1012/600/400",
    "https://picsum.photos/id/1013/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1021/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1025/600/400",
];
const Enjoy = () => {
    return (
        <div>
            <div className="w-full md:sticky pt-8 md:pt-0 top-0 z-0  relative items-center text-center flex flex-col justify-center gap-y-4 lg:gap-y-7 md:h-[100vh]">
                <p className="font-bold text-white text-3xl md:text-[48px] leading-8 md:leading-[54px] w-full max-w-[600px] items-center text-center">
                    Creating, Exploring & Enjoying Every Single Day
                </p>
                <p className="font-sans font-normal text-[12px] md:text-[14px] leading-normal md:leading-5 w-full max-w-[600px]">
                    Life for me is about balance — doing what I love, staying curious, and finding joy in both the small wins and big milestones.
                </p>
            </div>
            <section className="max-w-[1250px] flex flex-col relative z-40 gap-y-5  md:gap-y-35 lg:gap-y-50 mx-auto px-5 py-16">
                {/* Row 1: 2 Images */}
                <div className="flex flex-col gap-y-5  md:flex-row md:justify-between">
                    <Image src={images[0]} alt="Gallery Image 1" width={180} height={232} className="w-full md:w-[180px] md:h-[232px] h-auto rounded-lg object-cover" />
                    <Image src={images[1]} alt="Gallery Image 2" width={800} height={600} className="w-full md:w-[290px] md:h-[332px] h-auto rounded-lg object-cover" />
                </div>

                {/* Row 2: 1 Image centered */}
                <div className="flex justify-center mb-4">
                    <Image src={images[2]} alt="Gallery Image 3" width={800} height={600} className="w-full md:w-[272px] md:h-[292px] rounded-lg object-cover" />
                </div>

                {/* Row 3: 3 Images */}
                <div className="flex flex-col md:flex-row gap-y-5  md:justify-between">
                    <Image src={images[3]} alt="Gallery Image 4" width={800} height={600} className="w-full md:w-[260px] md:h-[290px] h-auto rounded-lg object-cover" />

                    <Image src={images[5]} alt="Gallery Image 6" width={800} height={600} className="w-full md:w-[225px] md:h-[290px] h-auto rounded-lg object-cover" />
                </div>

                {/* Row 4: 1 Image centered */}
                <div className="flex justify-center mb-4">
                    <Image src={images[6]} alt="Gallery Image 7" width={800} height={600} className="w-full md:w-[200px] md:h-[285px] max-w-md rounded-lg object-cover" />
                </div>

                {/* Row 5: 2 Images */}
                <div className="flex flex-col md:flex-row gap-y-5  md:justify-between">
                    <Image src={images[7]} alt="Gallery Image 8" width={800} height={600} className="w-full md:w-[305px] md:h-[305px] h-auto rounded-lg object-cover" />
                    <Image src={images[8]} alt="Gallery Image 9" width={800} height={600} className="w-full md:w-[305px] md:h-[305px] h-auto rounded-lg object-cover" />
                </div>

                {/* Row 6: 1 Image centered */}
                <div className="flex justify-center">
                    <Image src={images[9]} alt="Gallery Image 10" width={800} height={600} className="w-full md:w-[360px] md:h-[385px] max-w-md rounded-lg object-cover" />
                </div>
                <div className="h-0 lg:h-80" />
            </section>
        </div>
    )
}

export default Enjoy