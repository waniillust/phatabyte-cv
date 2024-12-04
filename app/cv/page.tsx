"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Terminal, Code2, Briefcase, Codepen, Globe, Mail, Palette, Boxes, Store, TrendingUp } from "lucide-react";
import Image from 'next/image';


export default function CV() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-6">
          <Avatar className="h-28 w-28">
            <AvatarImage
              src="./images/53092.png"
              alt="Profile photo"
            />
            <AvatarFallback>WT</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold tracking-tighter text-slate-700 dark:text-gray-300">Wanitch (Ton) Teeraphothipan</h1>
            <p className="text-sm text-muted-foreground">Senior Software Engineer / web front-end / back-end
            developer</p>
            <div className="flex flex-col justify-between mt-2">
              <div className="flex items-center space-x-2 text-xs font-medium mb-2">
              <Phone className="h-4 w-4 text-gray-300" />
                <span className="">(+66)62-414-1693</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium mb-2">
              <Globe className="h-4 w-4 text-gray-300" />
                <span className="">linkedin.com/in/wanitcht</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium mb-2">
              <Mail className="h-4 w-4 text-gray-300" />
                <span className="">wanitch.t@gmail.com</span>
              </div>
            </div>
            
          </div>
        </div>
        {/* <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </Button> */}
      </div>

      <Card className="shadow-md ng-gr">
        <CardHeader>
          <CardTitle className="bg-gradient-to-tl from-blue-600 via-green-500 to-teal-300 inline-block text-transparent bg-clip-text">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Passionate software engineer with 10+ years of experience in full-stack development.
            Specialized in Front-end web applications and back-end web app.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="flex items-center space-x-2 font-semibold mb-4">
              <Terminal className="h-6 w-6 text-orange-400" />
              <span className="">Programming Languages</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {["TypeScript", "JavaScript", "PHP", "Python", "Go", "Flutter", "Spring Boot"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="flex items-center space-x-2 font-semibold mb-4">
              <Boxes className="h-6 w-6 text-orange-400" />
              <span className="">Frameworks & Libraries</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TailwindCSS", "Node.js", "Express", "Docker"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="flex items-center space-x-2 font-semibold mb-4">
            <Palette className="h-6 w-6 text-orange-400" />
              <span className="">UI/UX & Digital arts</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Canva", "Clip Studio Paint", "Procreate"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <Separator />
          <div className="mb-8">
            <h3 className="flex items-center space-x-2 font-semibold mb-4">
            <TrendingUp className="h-6 w-6 text-orange-400" />
              <span className="">Data Visualization</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Power BI", "Tableau"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <Separator />
          <div className="mb-8">
            <h3 className="flex items-center space-x-2 font-semibold mb-4">
            <Store className="h-6 w-6 text-orange-400" />
              <span className="">CRM tools</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Zapier", "Hubspot"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
        <div>
            <div className="flex flex-col justify-between items-start mb-2">
              <div className="flex flex-row items-center justify-between w-full">
                <Image
                  src="./images/da.jpg"
                  alt="Profile photo"
                  width={100}
                  height={100}
                />
                

                <Badge className="text-[0.65rem]">DEC 2023 - FEB 2024</Badge>
              </div>
              <div className="flex flex-col items-start gap-3">
                
                <div>
                  <h3 className="font-semibold text-orange-600">Web Developer</h3>
                  <p className="text-muted-foreground italic text-sm"><strong className="text-gray-600 dark:text-gray-300">Digital Alchemy (iCumulus)</strong>, Bangkok</p>
                </div>
              </div>
              
            </div>
            <ul className="list-disc list-inside text-muted-foreground text-sm">
            <li>Provided front-end / back-end web app development using Laravel</li>
            <li>Provided automation CRM workflow with Zapier, HubSpot tools</li>
            </ul>
          </div>
          <Separator />
          <div>
            <div className="flex flex-col justify-between items-start mb-2">
              <div className="flex flex-row items-center justify-between w-full">
                <Image
                  src="./images/luma.png"
                  alt="Profile photo"
                  width={100}
                  height={100}
                />
                

                <Badge className="text-[0.65rem]">JAN 2023 - NOV 2023</Badge>
              </div>
              <div className="flex flex-col items-start gap-3">
                
                <div>
                  <h3 className="font-semibold text-orange-600">Web Developer</h3>
                  <p className="text-muted-foreground italic text-sm"><strong className="text-gray-600 dark:text-gray-300">Luma Care</strong>, Bangkok</p>
                </div>
              </div>
              
            </div>
            <ul className="list-disc list-inside text-muted-foreground text-sm">
            <li>Provided front-end / back-end web app development using Laravel, NextJS</li>
            <li>Followed the Agile environment to produce rapid iterations for clients.</li>
            <li>Tested web-based product functionality and delivered iterations to customers.</li>
            </ul>
          </div>
          <Separator />
          <div>
            <div className="flex flex-col justify-between items-start mb-2">
              <div className="flex flex-row items-center justify-between w-full">
              <Image
                  src="./images/baac.jpg"
                  alt="Profile photo"
                  width={60}
                  height={60}
                />

                <Badge className="text-[0.65rem]">OCT 2012 - APR 2022</Badge>
              </div>
              <div className="flex flex-col items-start gap-3">
                
                <div>
                  <h3 className="font-semibold text-orange-600">Front-End / Back-End Web Developer</h3>
                  <p className="text-muted-foreground italic text-sm"><strong className="text-gray-600 dark:text-gray-300">Bank for Agriculture and Agricultural Cooperatives</strong>, Bangkok</p>
                </div>
              </div>
              
            </div>
            <ul className="list-disc list-inside text-muted-foreground text-sm">
              <li>Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.
              </li>
              <li>Followed SDLC best practices within CMMI Guideline to produce rapid iterations for clients.</li>
              <li>Followed SDLC best practices within the Agile environment to produce rapid iterations for clients.</li>
              <li>Tested web-based product functionality and delivered iterations to customers.</li>
              <li>Researched emerging web technologies and trends for possible incorporation into sites.</li>
            </ul>
          </div>
          <Separator />
          <div>
            <div className="flex flex-col justify-between items-start mb-2">
              <div className="flex flex-row items-center justify-between w-full">
                <Image
                  src="./images/gvi.jpg"
                  alt="Profile photo"
                  width={60}
                  height={60}
                />

                <Badge className="text-[0.65rem]">JAN 2011 - SEP 2012</Badge>
              </div>
              <div className="flex flex-col items-start gap-3">
                
                <div>
                  <h3 className="font-semibold text-orange-600">Web Developer</h3>
                  <p className="text-muted-foreground italic text-sm"><strong className="text-gray-600 dark:text-gray-300">Global Vision Inter</strong>, Bangkok</p>
                </div>
              </div>
              
            </div>
            <ul className="list-disc list-inside text-muted-foreground text-sm">
            <li>Provided front-end website development using Joomla, PHP, HTML, CSS, jQuery, MySQL
            </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>


          <div>
            <div className="flex flex-col justify-between items-start mb-2">
              <div className="flex flex-row items-center justify-between w-full">
                <Image
                  src="./images/kmutt.png"
                  alt="Profile photo"
                  width={60}
                  height={60}
                />

                <Badge className="text-[0.65rem]">JUL 2014 - JUN 2015</Badge>
              </div>
              <div className="flex flex-col items-start gap-3">
                
                <div>
                  <h3 className="font-semibold text-orange-600">Master of Information Technology</h3>
                  <p className="text-muted-foreground italic text-sm"><strong className="text-gray-600 dark:text-gray-300">Information Technology </strong>(Cloud Computing)</p>
                  <p className="text-muted-foreground italic text-sm">KMUTT (School of Information Technology)</p>
                </div>
              </div>
              
            </div>
          </div>

          <Separator className="my-4"/>

          <div>
            <div className="flex flex-col justify-between items-start mb-2">
              <div className="flex flex-row items-center justify-between w-full">
                <Image
                  src="./images/CPRELogo.png"
                  alt="Profile photo"
                  width={80}
                  height={80}
                />

                <Badge className="text-[0.65rem]">JUL 2005 - JUL 2008</Badge>
              </div>
              <div className="flex flex-col items-start gap-3">
                
                <div>
                  <h3 className="font-semibold text-orange-600">Bachelor of Computer Engineering</h3>
                  <p className="text-muted-foreground italic text-sm"><strong className="text-gray-600 dark:text-gray-300">Computer Engineering </strong></p>
                  <p className="text-muted-foreground italic text-sm">KMUTNB</p>
                </div>
              </div>
              
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}