import { Separator } from "@/components/ui/separator";
import { Files, Hammer, Scroll } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const gradientColors = [
  "rgba(255, 100, 100, 0.8)", // Light Red
  "rgba(100, 255, 100, 0.6)", // Light Green
  "rgba(100, 100, 255, 0.5)", // Light Blue
];

export default function InformationSection() {
  return (
    <div className="w-full h-fit bg-white py-20">
      <div className="w-[1080px] m-auto">
        <h4 className="text-5xl font-bold text-center">Informasi</h4>
        <p className="text-lg text-center text-[#17a34a]">
          Informasi surat penting dalam proses pengurusan perceraian
        </p>
        <Separator className="mt-6" />
        <Accordion type="multiple">
          {[
            {
              value: "item-1",
              title: "Akte Cerai",
              icon: Scroll,
              color: "#64ff64",
            },
            {
              value: "item-2",
              title: "Salinan Putusan",
              icon: Files,
              color: "#64ff644d",
            },
            {
              value: "item-3",
              title: "Salinan Penetapan",
              icon: Hammer,
              color: "#6464ff",
            },
          ].map((item, index) => (
            <AccordionItem key={item.value} value={item.value}>
              <div className="flex justify-between gap-24 items-center relative overflow-hidden p-6">
                <div
                  className="gradient-circle"
                  style={{
                    background: `radial-gradient(circle, ${gradientColors[index]}, transparent 70%)`,
                  }}
                ></div>

                <div className="relative">
                  <item.icon
                    className={`w-20 h-20 relative z-10 text-[${item.color}]`}
                  />
                </div>
                <div className="items-start gap-5 text-lg relative z-10">
                  <h5 className="text-2xl font-bold">{item.title}</h5>
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitationt
                    enim ad minima veniam, ...
                  </p>
                  <AccordionTrigger>Selengkapnya → </AccordionTrigger>
                </div>
              </div>
              <AccordionContent>
                {item.value === "item-1" ? (
                  <div className="w-full h-[580px] gap-4 flex">
                    <div className="w-[420px] relative overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={"/images/aktecerai.png"}
                        alt=""
                        height={1620}
                        width={800}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex-1 h-full">
                      <Card className="w-full h-full">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold">
                            Akte Cerai
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>
                            "At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas
                            molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum
                            fuga. Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est
                            eligendi optio cumque nihil impedit quo minus id
                            quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus
                            autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates
                            repudiandae sint et molestiae non recusandae. Itaque
                            earum rerum hic tenetur a sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis doloribus asperiores repellat."
                          </p>
                          <div className="mt-4">
                            <p className="font-semibold">Syarat</p>
                            <ul>
                              <li>1. ut perferendis doloribus asperiores</li>
                              <li>2. Itaque earum rerum hic tenetur</li>
                              <li>3. placeat facere possimus,</li>
                              <li>4. Et harum quidem rerum facilis est e</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ) : (
                  <div className="w-full bg bg-gray-50 min-h-[520px] mb-4 rounded-lg"></div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <style jsx>{`
        .gradient-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(50px);
          z-index: 0;
          bottom: -150px;
          left: 50px;
        }
      `}</style>
    </div>
  );
}
