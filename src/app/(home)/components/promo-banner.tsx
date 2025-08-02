import Image, { ImageProps } from "next/image";

const PromoBanner = ({alt, ...props}:ImageProps) => {
    return ( 
        <Image height={0} width={0} alt={alt} className="w-full h-auto px-5 md:max-h-[70vh]" sizes="100vh" {...props} />
     );
}
 
export default PromoBanner;