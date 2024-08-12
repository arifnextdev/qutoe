"use client";
import html2canvas from "html2canvas";
import { image } from "html2canvas/dist/types/css/types/image";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const Post: React.FC = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1526315439957-87bcad3dbb4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [fileImage, setFileImage] = useState<string>(imageUrl);
  const [tittle, setTittle] = useState<string>("Md Ariful Islam");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(fileImage);

  const handleDownload = useCallback(async () => {
    // Select the banner section
    const bannerElement = document.querySelector(
      ".banner"
    ) as HTMLElement | null;

    if (!bannerElement) {
      console.error("Banner element not found");
      return;
    }

    try {
      // Render the banner section to a canvas
      const canvas = await html2canvas(bannerElement);
      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "banner.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error capturing the banner:", error);
    }
  }, []);

  return (
    <main className="container ">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <section className="banner overflow-hidden">
          <div className="w-[500px]  overflow-hidden">
            <div className="relative ">
              <Image
                src={fileImage}
                alt="image"
                width={500}
                height={500}
                priority
                className="object-cover overflow-hidden"
              />
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50">
                <div className="w-full h-full flex justify-center items-center  z-10 flex-col gap-3 px-10 py-5">
                  <h1 className="text-2xl font-bold text-white/60 tracking-widest border-b  border-white/20">
                    {tittle}
                  </h1>
                  <p className="text-center text-xl text-white/60 tracking-wide">
                    ২০১৯ সালে ২৮ বছর পর ডাকসু নির্বাচন হয়েছিল ৷ এরপর আর হয়নি ৷
                    আমি ব্যক্তিগতভাবে বিশ্বাস করি বিশ্ববিদ্যালয় সহ শিক্ষা
                    প্রতিষ্ঠানগুলোতে লেজুড়বৃত্তিক ছাত্র ও শিক্ষক রাজনীতি নিষিদ্ধ
                    করা উচিৎ ৷ সেখানে নিয়মিত নির্বাচনের মাধ্যমে ছাত্র সংসদ
                    পরিচালিত হওয়া উচিৎ ৷ ফলে তোষামদির রাজনীতি বন্ধ হবে,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3>Edit</h3>
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-col ">
              <label
                htmlFor="tittle"
                className="text-lg font-semibold tracking-wide text-secondary-foreground"
              >
                Tittle
              </label>
              <input
                id="tittle"
                type="text"
                placeholder="Enter your Tittle"
                className="w-full border py-1.5 px-3 rounded-lg outline-none focus:border-primary hover:border-primary duration-300"
                onChange={(e) => setTittle(e.target.value)}
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="drescription"
                className="text-lg font-semibold tracking-wide text-secondary-foreground"
              >
                Drescription
              </label>
              <input
                type="text"
                id="drescription"
                placeholder="Enter your Tittle"
                className="w-full border py-1.5 px-3 rounded-lg outline-none focus:border-primary hover:border-primary duration-300"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="image"
                className="text-lg font-semibold tracking-wide text-secondary-foreground"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                placeholder="Enter your Tittle"
                className="w-full border py-1.5 px-3 rounded-lg outline-none focus:border-primary hover:border-primary duration-300"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </section>
      </section>

      <button
        onClick={handleDownload}
        className="bg-secondary px-3 py-1.5 mt-3 rounded-lg hover:bg-primary hover:text-primary-foreground"
      >
        Download
      </button>
    </main>
  );
};

export default Post;
