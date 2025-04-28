import ImageTrail from "@/fancy/components/image/image-trail";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <ImageTrail>
        <div className="w-24 h-24 overflow-hidden">
          <Image
            src="/home_images/image1.jpg"
            alt="image1"
            className="object-cover w-full h-full"
            width={96}
            height={96}
          />
        </div>
        <div className="w-24 h-24 overflow-hidden">
          <Image
            src="/home_images/image2.jpg"
            alt="image2"
            className="object-cover w-full h-full"
            width={96}
            height={96}
          />
        </div>
        <div className="w-24 h-24 overflow-hidden">
          <Image
            src="/home_images/image3.jpg"
            alt="image3"
            className="object-cover w-full h-full"
            width={96}
            height={96}
          />
        </div>
        <div className="w-24 h-24 overflow-hidden">
          <Image
            src="/home_images/image4.jpg"
            alt="image4"
            className="object-cover w-full h-full"
            width={96}
            height={96}
          />
        </div>
        <div className="w-24 h-24 overflow-hidden">
          <Image
            src="/home_images/image5.jpg"
            alt="image5"
            className="object-cover w-full h-full"
            width={96}
            height={96}
          />
        </div>
      </ImageTrail>
      <h1
        className="
  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  font-bold text-black dark:text-white z-10
  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
"
      >
        archive
      </h1>
    </div>
  );
}
