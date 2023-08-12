import product from "@/assets/product.png";
import star from "@/assets/star.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const Card: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await axios.get<Product[]>(
          "https://fakestoreapi.com/products?limit=5"
        );

        setProduct(productResponse.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    })();
  }, []);
  return (
    <>
      <div className="flex items-center gap-[30px]">
        {product.map(el => (
          <div className="flex flex-col gap-4 " key={el.id}>
            <div className=" p-[49px] bg-[#F5F5F5] rounded">
              <Image src={el.image} alt="" width={150} height={150} />
            </div>
            <h2>{el.title}</h2>
            <div className="flex items-center gap-3">
              <p className="font-sans font-medium text-base text-[#DB4444]">
                ${el.price}
              </p>
              <del className="font-sans font-medium text-base text-gray-500 ">
                $160
              </del>
            </div>
            <div className="flex items-center gap-2">
              <Image src={star} alt="" />
              <p className="font-sans font-semibold text-sm text-gray-500">
                (88)
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;
