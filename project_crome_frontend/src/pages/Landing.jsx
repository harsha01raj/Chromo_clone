import React, { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Marquee from "react-fast-marquee";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heart, HeartOff } from "lucide-react"; 

const Landing = () => {
  const images = [
    {
      id: "1",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1739976850/Croma%20Assets/CMS/LP%20Page%20Banners/2025/campaigns/Summer%20Campaign/HP%20Rotating/19022025/HP_Rotating_SC_19Feb2025_uf8bkt.jpg",
    },
    {
      id: "2",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747129202/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/May/14052025/Desktop/HP_Rotating_iPhone16_14May2025_t1jlos.jpg",
    },
    {
      id: "3",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747129200/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/May/14052025/Desktop/HP_Rotating_AC_14May2025_mmmgkh.jpg",
    },
    {
      id: "4",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747129204/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/May/14052025/Desktop/HP_Rotating_KA_14May2025_zxvhx6.jpg",
    },
    {
      id: "5",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747129210/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/May/14052025/Desktop/HP_Rotating_Ref_14May2025_nqumds.jpg",
    },
    {
      id: "6",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747129206/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/May/14052025/Desktop/HP_Rotating_Laptops_14May2025_vik9rp.jpg",
    },
    {
      id: "7",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747129209/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/May/14052025/Desktop/HP_Rotating_Monitors_14May2025_xejsnl.jpg",
    },
    {
      id: "8",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744177100/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Zipcare/April/09042025/HP_Rotating_zipcare_8april2025_zcussq.jpg",
    },
  ];

  const sign = [
    {
      id: 1,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746332/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Mobile_sdtrdf.png?tr=w-1024",
    },
    {
      id: 2,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/TV_vdemgc.png?tr=w-1024",
    },
    {
      id: 3,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746308/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Air_Conditioner_a4hg1z.png?tr=w-1024",
    },
    {
      id: 4,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1739259222/Croma%20Assets/CMS/LP%20Page%20Banners/2025/LP_Cooler_ak2tjf.png?tr=w-1024",
    },
    {
      id: 5,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746331/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Laptops_pzewpv.png?tr=w-1024",
    },
    {
      id: 6,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746312/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Head_set_xjj934.png?tr=w-1024",
    },
    {
      id: 7,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1726131595/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Sept/Water_Purifiers_Desktop_phji31.png?tr=w-1024",
    },
    {
      id: 8,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746333/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Ref_biysg7.png?tr=w-1024",
    },
    {
      id: 9,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746308/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Accessories_kefony.png?tr=w-1024",
    },
    {
      id: 10,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Washing_machines_izyrnd.png?tr=w-1024",
    },
    {
      id: 11,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746345/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Tablets_yzod4f.png?tr=w-1024",
    },
    {
      id: 12,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718616448/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/June/17th/Desktop/Wearables_iunu7h.png?tr=w-1024",
    },
    {
      id: 13,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746312/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Kitchen_Appliances_yhzevo.png?tr=w-1024",
    },
    {
      id: 14,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746311/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Home_theatres_kpwvft.png?tr=w-1024",
    },
    {
      id: 15,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746310/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Grooming_vvxudd.png?tr=w-1024",
    },
    {
      id: 16,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718616447/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/June/17th/Desktop/Microwaves_otd6qq.png?tr=w-1024",
    },
    {
      id: 17,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718616447/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/June/17th/Desktop/Speaker_g2mbgn.png?tr=w-1024",
    },
    {
      id: 18,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718616445/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/June/17th/Desktop/Cameras_a6n2jy.png?tr=w-1024",
    },
    {
      id: 19,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746309/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Fans_ecnoxj.png?tr=w-1024",
    },
    {
      id: 20,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1726907827/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Sept/D_Geyser_i5frr1.png?tr=w-1024",
    },
  ];

  const marqueeImage = [
    {
      id: 1,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744713837/Croma%20Assets/CMS/LP%20Page%20Banners/2025/More%20For%20Money/April/Carousal/15042025/3_ICICI_Bank_Offers_xgob8r.png?tr=w-1024",
    },
    {
      id: 2,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744713838/Croma%20Assets/CMS/LP%20Page%20Banners/2025/More%20For%20Money/April/Carousal/15042025/4_HDFC_Bank_Offers_fibos9.png?tr=w-1024",
    },
    {
      id: 3,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744713837/Croma%20Assets/CMS/LP%20Page%20Banners/2025/More%20For%20Money/April/Carousal/15042025/2_Tata_Neu_zy3tgd.png?tr=w-1024",
    },
  ];

  const slide2 = [
    {
      id: 1,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1745826933/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Blogs/April/28042025/Blogs/Desktop/HP_Blog_1_28April2025_p8vfox.png",
      head: "Ten years on the wrist, and the Apple Watch has gone from a glorified accessory to a necessity",
      description: "10 years of the iconic Apple Watch",
    },
    {
      id: 2,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1745826934/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Blogs/April/28042025/Blogs/Desktop/HP_Blog_2_28April2025_ll7wzh.png",
      head: "OnePlus 13T vs OnePlus 13: What’s the difference",
      description: "Here's the exact difference between the two",
    },
    {
      id: 3,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1745826934/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Blogs/April/28042025/Blogs/Desktop/HP_Blog_3_28April2025_ptikiw.png",
      head: "5 best personal care gadgets to unwind and reset your headspace",
      description: "It's time to relax and rejuvenate",
    },
    {
      id: 4,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1745826934/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Blogs/April/28042025/Blogs/Desktop/HP_Blog_4_28April2025_pzbtrz.png",
      head: "Does your home need an AC or an air cooler? There’s an easy way to know",
      description: "Don't sweat it! We have all the answers",
    },
  ];

  const icon = [
    {
      id: 1,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713269877/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/Croma_Collections_aer8cq.png?tr=w-1024",
    },
    {
      id: 2,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713278435/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/03_30_fhwssf.png?tr=w-1024",
    },
    {
      id: 3,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713278460/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/01_50_sa0hk3.png?tr=w-1024",
    },
    {
      id: 4,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713278428/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/02_17_epxyzy.png?tr=w-1024",
    },
    {
      id: 5,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713273508/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/E-waste_disposal_-_Desktop_wewkot.png?tr=w-1024",
    },
    {
      id: 6,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713273472/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/Deals_of_the_week_-_Desktop_cdvjjx.png?tr=w-1024",
    },
  ];

  const companies = [
    {
      id: 1,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/13_fbzbpw.png?tr=w-1024",
    },
    {
      id: 2,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/12_hfsle3.png?tr=w-1024",
    },
    {
      id: 3,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682983/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/8_dvwyxd.png?tr=w-1024",
    },
    {
      id: 4,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/7_uvvozm.png?tr=w-1024",
    },
    {
      id: 5,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/6_cruwwo.png?tr=w-1024",
    },
    {
      id: 6,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/5_pjm9wd.png?tr=w-1024",
    },
    {
      id: 7,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/11_tc1idk.png?tr=w-1024",
    },
    {
      id: 8,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/4_wmg1qj.png?tr=w-1024",
    },
    {
      id: 9,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/3_voajbz.png?tr=w-1024",
    },
    {
      id: 10,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/1_maspxu.png?tr=w-1024",
    },
    {
      id: 11,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/2_bki1il.png?tr=w-1024",
    },
    {
      id: 12,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/14_xtc6jg.png?tr=w-1024",
    },
    {
      id: 13,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/10_iobxyi.png?tr=w-1024",
    },
    {
      id: 14,
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682983/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/9_rqohp4.png?tr=w-1024",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [signIndex, setSignIndex] = useState(1);
  const [s2index, setS2index] = useState(0);
  const [companyIndex, setCompanyIndex] = useState(0);
  const [product, setProduct] = useState([]);
  const [wishlist, setWishlist] = useState([]);

const toggleWishlist = (productId) => {
  setWishlist((prev) =>
    prev.includes(productId)
      ? prev.filter((id) => id !== productId)
      : [...prev, productId]
  );
};
  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setS2index((prev) => (prev + 1) % slide2.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [images.length, slide2.length]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const slide2Next = () => {
    setS2index((prev) => (prev + 1) % slide2.length);
  };
  const slide2Prev = () => {
    setS2index((prev) => (prev - 1 + slide2.length) % slide2.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handleNext = () => {
    if (startIndex + visibleCount < product.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProducts = product.slice(startIndex, startIndex + visibleCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3002/product/get");
        setProduct(res.data.Product);
        console.log(res.data.Product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="relative w-full pt-20">
        {/* Slide Image */}
        <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full overflow-hidden">
          <img
            src={images[currentIndex].image}
            alt="Slide"
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goPrev}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-md opacity-60 hover:opacity-100 transition"
        >
          ◀
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-md opacity-60 hover:opacity-100 transition"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-5 w-full flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              } transition duration-300`}
            ></button>
          ))}
        </div>
      </div>

      {/* part 2 of landing page */}
      <div className="h-auto w-full bg-stone-900 px-4 sm:px-[10%] pt-8">
        <div className="h-auto w-full text-white flex items-center gap-1 overflow-x-auto">
          {/* Left Arrow */}
          <SlArrowLeft
            onClick={() => setSignIndex((prev) => Math.max(prev - 10, 0))}
            className={`${
              signIndex === 0 ? "opacity-20 cursor-default" : "cursor-pointer"
            } flex-shrink-0`}
          />

          {/* Images */}
          <div className="flex gap-4 flex-wrap justify-center flex-1 min-w-[0]">
            {sign.slice(signIndex, signIndex + 10).map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={`category-${item.id}`}
                className="w-[70px] sm:w-[95px] aspect-[9/11] object-contain"
              />
            ))}
          </div>

          {/* Right Arrow */}
          <SlArrowRight
            onClick={() =>
              setSignIndex((prev) =>
                prev + 10 < sign.length ? prev + 10 : prev
              )
            }
            className={`${
              signIndex + 10 >= sign.length
                ? "opacity-20 cursor-default"
                : "cursor-pointer"
            } flex-shrink-0`}
          />
        </div>

        <div className="text-white">
          <h1 className="text-xl sm:text-2xl font-medium mt-8">
            Exciting Bank Offers For You
          </h1>
          <Marquee
            gradient={false}
            speed={50}
            className="h-32 sm:h-40 overflow-hidden"
          >
            {marqueeImage.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={`category-${item.id}`}
                className="w-[250px] sm:w-[400px] aspect-[9/11] object-contain mx-2 sm:mx-4"
              />
            ))}
          </Marquee>
        </div>

        <div className="text-white mb-10 sm:mb-20">
          <h1 className="text-xl sm:text-2xl font-medium mt-5">
            Hot Deals on Home Appliances
          </h1>
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747224544/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Our%20New%20Favourites/may/15052025/HP_SingleSplit_cooler_15May25_rqzia9.jpg?tr=w-1024"
            alt=""
            className="w-full mt-5 object-cover"
          />
        </div>

        <div className="text-white p-0 mb-10 sm:mb-15">
          <h1 className="text-xl sm:text-2xl font-medium mt-5 mb-5">
            What's Hot
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-between gap-4">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747231235/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Whats%20Hot/May/15052025/Desktop/HP_Whats_Hot_Pixel_15May2025_ntbdp4.jpg?tr=w-1024"
              alt=""
              className="w-[150px] sm:w-[250px] aspect-[9/11] object-contain"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747231240/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Whats%20Hot/May/15052025/Desktop/HP_Whats_Hot_AC_15May2025_djkamk.jpg?tr=w-1024"
              alt=""
              className="w-[150px] sm:w-[250px] aspect-[9/11] object-contain"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747231240/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Whats%20Hot/May/15052025/Desktop/HP_Whats_Hot_Ref_15May2025_rztwbg.jpg?tr=w-1024"
              alt=""
              className="w-[150px] sm:w-[250px] aspect-[9/11] object-contain"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747231238/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Whats%20Hot/May/15052025/Desktop/HP_Whats_Hot_WM_15May2025_vrcoy1.jpg?tr=w-1024"
              alt=""
              className="w-[150px] sm:w-[250px] aspect-[9/11] object-contain"
            />
          </div>
        </div>

        <div className="text-white p-0 mb-10 sm:mb-15">
          <h1 className="text-xl sm:text-2xl font-medium mt-5 mb-5">
            Summer Special Deals
          </h1>

          <div className="relative w-full">
            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black p-2 shadow rounded-full z-10"
              disabled={startIndex === 0}
            >
              <ChevronLeft />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black p-2 shadow rounded-full z-10"
              disabled={startIndex + visibleCount >= product.length}
            >
              <ChevronRight />
            </button>

            {/* Product Cards */}
            <div className="flex justify-around overflow-hidden">
              {visibleProducts.map((ele, index) => (
                <div
                  key={index}
                  className="relative w-[250px] p-4 shadow-md rounded-lg bg-black"
                >
                  {/* Heart Icon in top-right corner */}
                  <button
                    onClick={() => toggleWishlist(ele._id)} // or ele.id
                    className="absolute top-2 right-2 text-white"
                  >
                    {wishlist.includes(ele._id) ? (
                      <HeartOff className="text-red-500" />
                    ) : (
                      <Heart className="text-white" />
                    )}
                  </button>

                  <img
                    src={ele.image}
                    alt={ele.productName}
                    className="w-full h-40 object-contain mb-2"
                  />
                  <h5 className="font-semibold text-sm text-white">
                    {ele.productName}
                  </h5>
                  <h2 className="text-sm text-white font-bold">
                    ₹ {ele.discountPrice}{" "}
                    <span className="line-through text-gray-400">
                      ₹ {ele.actualPrice}
                    </span>
                  </h2>
                  <h4 className="text-sm text-white">
                    <span className="text-emerald-400">★</span> {ele.rating}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white p-0 mb-10 sm:mb-15">
          <h1 className="text-xl sm:text-2xl font-medium mt-5 mb-5">
            Deals on Croma Appliances
          </h1>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-center gap-4">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1746508326/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/HP/May/06052025/HP_CC_AC_6May2025_jamzsd.png?tr=w-1024"
              alt=""
              className="w-full sm:max-w-[48%] aspect-[6/3] object-cover rounded-md"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1745298308/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/HP/April/22042025/HP_CC_TV_22April2025_g8owz4.png?tr=w-1024"
              alt=""
              className="w-full sm:max-w-[48%] aspect-[6/3] object-cover rounded-md"
            />
          </div>
        </div>

        <div className="text-white p-0">
          <h1 className="text-xl sm:text-2xl font-medium mt-5 mb-5">
            Deals Of The Day
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-between gap-4 pb-10">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747231235/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Whats%20Hot/May/15052025/Desktop/HP_Whats_Hot_Pixel_15May2025_ntbdp4.jpg?tr=w-1024"
              alt=""
              className="w-[150px] sm:w-[250px] aspect-[9/11] object-contain"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747231240/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Whats%20Hot/May/15052025/Desktop/HP_Whats_Hot_AC_15May2025_djkamk.jpg?tr=w-1024"
              alt=""
              className="w-[150px] sm:w-[250px] aspect-[9/11] object-contain"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747231240/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Whats%20Hot/May/15052025/Desktop/HP_Whats_Hot_Ref_15May2025_rztwbg.jpg?tr=w-1024"
              alt=""
              className="w-[150px] sm:w-[250px] aspect-[9/11] object-contain"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747231238/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Whats%20Hot/May/15052025/Desktop/HP_Whats_Hot_WM_15May2025_vrcoy1.jpg?tr=w-1024"
              alt=""
              className="w-[150px] sm:w-[250px] aspect-[9/11] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full flex items-center bg-stone-900">
        <FaGreaterThan
          className="absolute top-3/7  transform  -translate-y-1/2 text-white  z-10 right-5 text-2xl"
          onClick={() => slide2Prev()}
        />
        <div>
          <img
            src={slide2[s2index].image}
            alt="Example"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3/7 left-[45vw] transform  -translate-y-1/2 text-white  z-10 right-13">
            <h1 className="text-[12px] sm:text-[20px] md:text-[38px] font-extrabold">
              {slide2[s2index].head}
            </h1>
            <h1 className="text-[14px] sm:text-[5px] md:text-[24px] font-bold text-shadow-indigo-50 mt-5">
              {slide2[s2index].description}
            </h1>
            <button className="w-15  sm:text-sm md:w-30 bg-emerald-500 p-3 text-black font-bold mt-10 md:mt-1 rounded-lg hover:bg-emerald-600">
              Read Now
            </button>
          </div>
        </div>
        <FaLessThan
          className="absolute top-3/7  transform  -translate-y-1/2 text-white  z-10 left-5 text-2xl"
          onClick={() => slide2Next()}
        />
      </div>

      <div className="h-auto w-full bg-stone-900 px-[10%] pt-8 pb-10">
        <div className="text-white mb-20">
          <h1 className="text-xl sm:text-2xl font-medium mt-5">
            Experience Croma On Tata Neu!
          </h1>
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713377573/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/HP_Neubanner_18April24.png_h4axzq.png?tr=w-1024"
            alt=""
            className="w-full mt-5 max-h-[300px] sm:max-h-[400px] object-contain"
          />
        </div>

        <div className="text-white mb-20">
          <h1 className="text-xl sm:text-2xl font-medium mt-5">
            Exclusively Curated For You
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-5">
            {icon.map((ele) => (
              <img
                key={ele.id}
                src={ele.image}
                alt=""
                className="w-20 sm:w-35 object-contain"
              />
            ))}
          </div>
        </div>

        <div className="text-white mb-15">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743257/Croma%20Assets/CMS/Testing/2024/March/18th/Exclusively%20Curated%20For%20You/Desktop/Jpg/1Gift_dflts4.png?tr=w-1024"
              alt=""
              className="w-full sm:w-[45%] aspect-[6/3] object-cover rounded-md"
            />
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743258/Croma%20Assets/CMS/Testing/2024/March/18th/Exclusively%20Curated%20For%20You/Desktop/Jpg/Indulge_rve6v9.png?tr=w-1024"
              alt=""
              className="w-full sm:w-[45%] aspect-[6/3] object-cover rounded-md"
            />
          </div>
        </div>

        <div className="text-white mb-20">
          <h1 className="text-xl sm:text-2xl font-medium mt-5">Why Croma?</h1>
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743309/Croma%20Assets/CMS/Testing/2024/March/18th/Why%20Croma/Desktop/JPG/Why-Croma_t2lgxr.png?tr=w-1024"
            alt=""
            className="w-full mt-5 max-h-[350px] object-contain"
          />
        </div>

        <div className="w-full text-white flex items-center gap-1 overflow-x-auto">
          {/* Left Arrow */}
          <SlArrowLeft
            onClick={() => setCompanyIndex((prev) => Math.max(prev - 5, 0))}
            className={`${
              companyIndex === 0
                ? "opacity-20 cursor-default"
                : "cursor-pointer"
            }`}
          />

          {/* Images */}
          <div className="flex gap-4 flex-nowrap justify-start overflow-x-auto px-2 w-full">
            {companies.slice(companyIndex, companyIndex + 5).map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={`category-${item.id}`}
                className="w-[140px] sm:w-[170px] md:w-[210px] object-contain h-auto rounded-xl flex-shrink-0"
              />
            ))}
          </div>

          {/* Right Arrow */}
          <SlArrowRight
            onClick={() =>
              setCompanyIndex((prev) =>
                prev + 5 < companies.length ? prev + 5 : prev
              )
            }
            className={`${
              companyIndex + 5 >= companies.length
                ? "opacity-20 cursor-default"
                : "cursor-pointer"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
